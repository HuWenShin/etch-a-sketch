//show slider value
const slider = document.getElementById("pixel");
const output = document.getElementById("gridVal");
output.innerText = slider.value + "x" + slider.value; // Display the default slider value

//create grid
const container = document.getElementById("container");

function makeGrids(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (i = 0; i < (rows*cols); i ++) {
        let cell = document.createElement("div");
        cell.addEventListener("mouseover", color);
        cell.addEventListener("mousedown", color);
        container.appendChild(cell).className = "grid-item";
    }
}

makeGrids(slider.value, slider.value);

// Update the current slider value and grid size (each time you drag the slider handle)
slider.oninput = function() {
    output.innerText = this.value + "x" + this.value;
    if (container.hasChildNodes()) {
        while (container.firstChild) {container.removeChild(container.firstChild);};
    };
    makeGrids(this.value, this.value);
  }

//color
var mouseDown = false;
document.body.onmousedown = function() {mouseDown = true;};
document.body.onmouseup = function() {mouseDown = false;};

const colorPicker = document.getElementById("clrpckr");

function color(event) {
    if (mouseDown) {
        event.target.style.backgroundColor = colorPicker.value;
    }
}

//clear button
const clearBtn = document.getElementById("clrbtn");
clearBtn.addEventListener("click", () => {
    while (container.firstChild) {container.removeChild(container.firstChild);};
    makeGrids(slider.value, slider.value);
  });
