//show slider value
let slider = document.getElementById("pixel");
let output = document.getElementById("gridVal");
output.innerText = slider.value + "x" + slider.value; // Display the default slider value

//create grid
const container = document.getElementById("container");

function makeGrids(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (g = 0; g < (rows*cols); g ++) {
        let cell = document.createElement("div");
        cell.innerText = (g + 1);
        container.appendChild(cell).className = "grid-item";
    }
}

makeGrids(slider.value, slider.value);

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerText = this.value + "x" + this.value;
    if (container.hasChildNodes()) {
        while (container.firstChild) {container.removeChild(container.firstChild);}
    };
    makeGrids(this.value, this.value);
  }