function solveEquation() {
  const equationInput = document.getElementById("equation");
  const resultElement = document.getElementById("result");

  const equation = equationInput.value;
  const parts = equation.split("x^2");
  const a = parseFloat(parts[0].trim());

  const remainingParts = parts[1].split("x");
  const b = parseFloat(
    remainingParts[0].replace("+", "").replace("-", "-").trim()
  );
  const c = parseFloat(
    remainingParts[1].replace("+", "").replace("-", "-").trim()
  );

  const discriminant = b * b - 4 * a * c;

  if (discriminant < 0) {
    resultElement.textContent = "The equation has no real roots.";
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    resultElement.textContent = "The equation has one real root: " + root;
  } else {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    resultElement.textContent =
      "The equation has two real roots: " + root1 + " and " + root2;
  }
}
