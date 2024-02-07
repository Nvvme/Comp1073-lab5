//declaring Constents
const redSlider = document.querySelector("#red");
const greenSlider = document.querySelector("#green");
const blueSlider = document.querySelector("#blue");
const body = document.querySelector("body");

//creating the function
//even listeners
//remembered to use CamelCase
function colorUpdate() {
    const redValue = redSlider.getAttribute("value");
    const greenValue = greenSlider.getAttribute("value");
    const blueValue = blueSlider.getAttribute("value");
    const rgbValue = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
// used `` 
    body.style.backgroundColor = rgbValue;
}

redSlider.addEventListener("input", colorUpdate);
greenSlider.addEventListener("input", colorUpdate);
blueSlider.addEventListener("input", colorUpdate);

colorUpdate();