function change(event, color) {
  const body = document.getElementById("b");

  body.style.backgroundColor = color;
}

const myDiv = document.getElementById("myDiv");
console.log(myDiv);

var degree = 0;
//Setup a rotating box in the center
var rotatebox = function () {
  //Adds rotation, but makes it go (357, 358, 359, 0, 1, 2)
  degree = (degree + 1) % 360;

  //adds the current rotation to the rbox
  myDiv.style.transform = "rotate(" + degree + "deg)";

  //Pushes the box from left & top by half of window width & height
  myDiv.style.left = window.innerWidth / 2 + "px";
  myDiv.style.top = window.innerHeight / 2 + "px";
};

setInterval(rotatebox, 10);
