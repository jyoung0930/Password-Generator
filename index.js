const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "`",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "+",
  "=",
];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = [
  "`",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "+",
  "=",
];
const sliderValueText = document.querySelector(".slider-value");
const sliderInput = document.querySelector(".slider");
const checkbox = document.querySelectorAll("input[type=checkbox]");
let passsWord = "";

function getPassword() {
  for (let i = 0; i < sliderInput.value; i++) {
    const randomCharacter =
      characters[Math.floor(Math.random() * characters.length)];
    if (checkbox[0].checked === true) {
      randomCharacter;
    }
  }
}
getPassword();

// Dispaly slider value
sliderInput.addEventListener("change", () => {
  sliderValueText.textContent = sliderInput.value;
});
// Slider Logic

const slider = document.getElementById("myinput");
const min = slider.min;
const max = slider.max;
const value = slider.value;

slider.style.background = `linear-gradient(to right, #a4ffaf 0%, #a4ffaf ${
  ((value - min) / (max - min)) * 100
}%,#18171f ${((value - min) / (max - min)) * 100}%, #18171f 100%)`;

slider.oninput = function () {
  this.style.background = `linear-gradient(to right, #a4ffaf 0%, #a4ffaf ${
    ((this.value - this.min) / (this.max - this.min)) * 100
  }%,#18171f ${
    ((this.value - this.min) / (this.max - this.min)) * 100
  }%, #18171f 100%)`;
};
