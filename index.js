let number = 0;

document.getElementById("number").textContent = number;

document.getElementById("add").onclick = function () {
  number++;
  document.getElementById("number").textContent = number;
};

document.getElementById("remove").onclick = function () {
  number--;
  document.getElementById("number").textContent = number;
};

document.getElementById("reset").onclick = function () {
  number = 0;
  document.getElementById("number").textContent = number;
};
