


let slider = document.getElementById("pixel");
let output = document.getElementById("gridVal");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerText = this.value + "x" + this.value;
}