const text = document.getElementById("text_input");
const btn = document.getElementById("btn_txt");


// x^2+x+6 - Sample input

// logic for evaluating the expression
// 1.  Storing the input at proper places
const input = text.value.toLowerCase();
let degree = 0;
for (let i = 0; i < input.length(); i++) {
  let c = input.charAt(i);
  if (c == "x") degree++; //Find the degree of the eqn
}
let numbers = new Array[degree]();
for (let i = 0; i < input.length(); i++) {
  let c = input.charAt(i);
  let k = 0;
  if (c == "x") {
    k = i;
    while (input.charAt(k) != "+" && input.charAt(k) != "-" && k != -1) {
      let num = parseInt(input.charAt(k) + num);
      numbers[i] = num;
      k--;
    }
  }
}

btn.addEventListener("click", () => {
  console.log(numbers);
});