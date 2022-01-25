function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "cnav") {
    x.className += " responsive";
  } else {
    x.className = "cnav";
  }
}