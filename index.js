let colorBox = document.querySelector(".colorBox");
let container = document.querySelector(".container");
let colors = [];
let count = 0;
// let currentColor

const changeColor = () => {
  let r = Math.floor(Math.random() * 255).toString(16);
  let g = Math.floor(Math.random() * 255).toString(16);
  let b = Math.floor(Math.random() * 255).toString(16);
  console.log(`#${r}${g}${b}`);

  colorBox.style.backgroundColor = `#${r}${g}${b}`;
};

const addColor = () => {
  let color = colorBox.style.backgroundColor;
  color = color != "" ? color : "crimson";
  let existedColor = colors.includes(color);
  if (!existedColor && colors.length < 5) {
    colors.push(color);
    count++;
    container.innerHTML += `<div id="i${count}" class="cell" style="background-color: ${color}">
    <i id="copyIcon${count}" onclick="copyColor(${count})" class="fa-solid fa-copy"></i><i  onclick="removeCell(${count})" class="fa-solid fa-trash"></i></div>`;
  }
};

const changeMode = () => {
  let theme = document.querySelector("#theme");

  theme.classList.toggle("fa-sun");
  theme.classList.toggle("fa-moon");

  let body = document.querySelector("body");
  body.classList.toggle("light-mode");
  body.classList.toggle("dark-mode");
};

const removeCell = (id) => {
  let cell = document.querySelector(`#i${id}`);
  cell.remove();
  let bg = cell.style.backgroundColor;
  let index = colors.indexOf(bg);
  colors.splice(index, 1);
};

const copyColor = (id) => {
  let color = document.querySelector(`#i${id}`).style.backgroundColor;
  let copyIcon = document.querySelector(`#copyIcon${id}`);
  copyIcon.classList.remove("fa-copy");
  copyIcon.classList.add("fa-check");
  navigator.clipboard.writeText(color);

  setTimeout(() => {
    copyIcon.classList.remove("fa-check");
    copyIcon.classList.add("fa-copy");
  }, 2000);
};
