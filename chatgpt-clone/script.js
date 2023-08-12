const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", sendMessage);

function sendMessage() {
  const userMessage = userInput.value;
  if (userMessage.trim() === "") return;

  appendMessage("user", userMessage);
  userInput.value = "";

  // Simulate receiving a response from the chatbot (for demo purposes)
  setTimeout(() => {
    const botMessage = "This is a sample response from the chatbot.";
    appendMessage("bot", botMessage);
  }, 500);
}

function appendMessage(role, message) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add(role);
  messageDiv.textContent = message;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}
