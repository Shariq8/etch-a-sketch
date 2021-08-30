// const container = document.getElementById("container");
const container = document.querySelector("#container");
const colorBlock = document.querySelector('#color');
const colorSubmit = document.querySelector('#colorBtn');
const eraser = document.querySelector('#eraserBtn');


function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    // cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};
makeRows(16,16);
color(`#333`);


colorBlock.addEventListener('input', () => {
  document.querySelector('label').style.background = colorBlock.value;
});

colorSubmit.addEventListener('click', () =>{
  color(`${colorBlock.value}`);
});

eraser.addEventListener('click', () =>{
  color('none');
});

function color(colorChoice){
  var blocks = document.querySelectorAll('.grid-item');
  blocks.forEach(block => block.addEventListener('mouseover', event =>{
    block.setAttribute('style', `background-color:${colorChoice}`);
  }))
}



