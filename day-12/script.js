const sliderOutput = document.querySelector("#slider-output");
const slider = document.querySelector("#slider");
slider.addEventListener("input",() => {
    sliderOutput.value = slider.value;
});