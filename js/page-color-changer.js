//declaring Constents
const redSlider = document.querySelector("#red");
const greenSlider = document.querySelector("#green");
const blueSlider = document.querySelector("#blue");
const html = document.querySelector("html");

//creating the function
//even listeners
//remembered to use CamelCase
function colorUpdate() {
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;
    const rgbValue = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
// used `` 
    html.style.backgroundColor = rgbValue;
}

redSlider.addEventListener("input", colorUpdate);
greenSlider.addEventListener("input", colorUpdate);
blueSlider.addEventListener("input", colorUpdate);

colorUpdate();