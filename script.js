// const container = document.getElementById("container");
const container = document.querySelector("#container");
const colorBlock = document.querySelector('#color');
const colorSubmit = document.querySelector('#colorBtn');
const rainbow = document.querySelector('#rainbowBtn');
const eraser = document.querySelector('#eraserBtn');
const clear = document.querySelector('#clearBtn');
const slider = document.querySelector('#range');


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

slider.addEventListener('input', () =>{
  const val = document.querySelectorAll('span');
  val.forEach(values => values.textContent = slider.value);
});

slider.addEventListener('change', () =>{
  const blocks = document.querySelectorAll('.grid-item');
  blocks.forEach(block => block.remove('.grid-item'));
  makeRows(slider.value,slider.value);
});

colorBlock.addEventListener('input', () => {
  document.querySelector('label').style.background = colorBlock.value;
});

colorSubmit.addEventListener('click', () =>{
  color(`${colorBlock.value}`);
});

eraser.addEventListener('click', () =>{
  color('none');
});

function clearBlock(){
  clear.addEventListener('click', () =>{
    var blocks = document.querySelectorAll('.grid-item');
    blocks.forEach(block => block.setAttribute('style', `background-color:none`));
  });
}
clearBlock(); 
rainbow.addEventListener('click', () =>{
  var blocks = document.querySelectorAll('.grid-item');
  blocks.forEach(block => block.addEventListener('mouseover', event =>{
    block.setAttribute('style', `background-color:${'#'+Math.floor(Math.random()*16777215).toString(16)}`);
  }))
});

function color(colorChoice){
  var blocks = document.querySelectorAll('.grid-item');
  blocks.forEach(block => block.addEventListener('mouseover', event =>{
    block.setAttribute('style', `background-color:${colorChoice}`);
  }))
}



