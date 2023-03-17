function myFunctionNEW() {
  var x = document.getElementById("myTopnavNEW");
  if (x.className === "navbarDD cnavNEW") {
    x.className += " responsiveNEW";
  } else {
    x.className = "navbarDD cnavNEW";
  }
}

// NOTE the += class element define!!!!!