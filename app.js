const palette = ['red', 'blue', 'green', 'tomato', 'white', 'black'];

const tomoP = document.querySelector('#tomo');

function changeColor() {
  const randomColor = palette[Math.floor(Math.random() * palette.length)];
  tomoP.style.color = randomColor;
}

tomoP.addEventListener('click', changeColor);
console.log(tomoP);

