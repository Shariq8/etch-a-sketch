// const container = document.getElementById("container");
const container = document.querySelector("#container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    // cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};
// makeRows(2,2);
// makeRows(16,16);
makeRows(64,64);

var blocks = document.querySelectorAll('.grid-item');
blocks.forEach(block => block.addEventListener('mouseover', event =>{
    block.setAttribute('style', 'background-color:black');
}))



