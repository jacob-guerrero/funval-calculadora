let currentValue = 0; // Valor de operacion
let digit = "";
const panel = document.querySelectorAll("#panel");
const display = document.querySelector("#display p");
display.textContent = "0";

panel.forEach((option) => {
  option.addEventListener("click", (e) => {
    if (e.target.classList.contains("number")) getNumber(e);
    if (e.target.classList.contains("operator")) getOperator(e);
    if (e.target.classList.contains("equal")) getResult(e);
    if (e.target.classList.contains("clear")) clear();
    if (e.target.classList.contains("erase")) erase();
  });
});

function getNumber(e) {
  if (display.textContent === "0" && e.target.textContent === "0") return;

  digit += e.target.textContent;
  display.textContent = digit;
}

function getOperator(e) {
  if (digit === "") return; // Validamos si hay un número para operar

  // Simplemente guardamos lo mostrado en pantalla
  digit += e.target.textContent;
  display.textContent = digit;
}

function getResult(e) {
  if (digit === "") return; // Validamos si hay algo que calcular
  const lastChar = display.textContent.slice(-1);
  if (
    lastChar === "*" ||
    lastChar === "/" ||
    lastChar === "+" ||
    lastChar === "-"
  )
    return; // Validamos si hay algo que calcular

  // Usamos eval para evaluar la operación
  currentValue = eval(`${digit}`);
  display.textContent = `${+currentValue.toFixed(6)}`;
  digit = currentValue;
}

function clear() {
  currentValue = 0;
  digit = "";
  display.textContent = "0";
}

function erase() {
  if (currentValue !== 0 && currentValue === digit) {
    // Si hay valor calculado, limpiar todo
    currentValue = 0;
    digit = "";
    display.textContent = "0";
    return;
  }
  if (digit) {
    digit = digit.slice(0, -1);
    display.textContent = digit || "0";
  }
}
