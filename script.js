// DOM connectors
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

// Creating Background Gradient
function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

// Generating a Random Background Gradient
const getRandomColor = () => Math.floor(Math.random() * 0xffffff).toString(16);
const generateColor = () => {
	let color1 = getRandomColor();
	let color2 = getRandomColor();
	body.style.background = `linear-gradient(to right, #${color1}, #${color2})`;
	css.textContent = body.style.background + ";";
}

// Event Listeners
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


button.addEventListener("click", generateColor);