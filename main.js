const colorCode = document.getElementById("color-code");
const btn = document.getElementById("btn");
let randomColor;

function changeColor(color) {
  document.body.style.background = color;
  btn.style.background = color;
  btn.style.borderColor = color;
}

btn.addEventListener("click", () => {
  randomColor = "#000000".replace(/0/g, function () {
    return (~~(Math.random() * 16)).toString(16);
  });
  changeColor(randomColor);
  colorCode.style.textTransform = "uppercase";
  colorCode.innerHTML = randomColor;
});
