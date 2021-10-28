let num1: string = document.getElementById("num1");
let num2: string = document.getElementById("num2");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let numTabla: number = Number(num1.value);
  let numFinal: number = Number(num2.value);
  let resultado: number = 0;
  for (let contador: number = 1; contador <= numFinal; contador++) {
    resultado = numTabla * contador;
    console.log(numTabla, "x", contador, "=", resultado);
  }
});
