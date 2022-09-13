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
