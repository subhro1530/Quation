const API_ENDPOINT = "https://api.openai.com/v1/chat/completions";
const API_KEY = "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"; // Replace with your actual API key

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${API_KEY}`,
};

const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", sendMessage);

function sendMessage() {
  const userMessage = userInput.value.trim();
  if (userMessage === "") return;

  appendMessage("user", userMessage);
  userInput.value = "";

  const data = {
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: userMessage },
    ],
  };

  fetch(API_ENDPOINT, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((responseData) => {
      const assistantReply = responseData.choices[0].message.content;
      appendMessage("bot", assistantReply);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function appendMessage(role, message) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add(role);
  messageDiv.textContent = message;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}
