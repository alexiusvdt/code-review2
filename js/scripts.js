window.addEventListener("load", function() {
  //reapplies "hidden" class to result divs upon resubmit and/or hard reset
  function resetClass() {;
    document.getElementById("ruby").setAttribute("class", "hidden");
    document.getElementById("csharp").setAttribute("class", "hidden");
    document.getElementById("python").setAttribute("class", "hidden");
    document.getElementById("cobol").setAttribute("class", "hidden");  
    };

  // runs our form and evaluates a decision tree. Unhide comments below when debugging.
  function languageTester() {;
    let a = document.querySelector("input#a").value;
    let b = parseInt(document.querySelector('input[type=checkbox][name=question2]:checked').value);
    // console.log(b)
    let c = parseInt(document.querySelector('input[type=radio][name=question3]:checked').value);
    // console.log(c)
    let d = parseInt(document.querySelector("input[type=radio][name=question4]:checked").value);
    // console.log(d)
    let e = parseInt(document.querySelector("input#slider").value);
    // console.log(e)
    let f = parseInt(document.querySelector("input[type=radio][name=question6]:checked").value);
    // console.log(f)
    let g = (b + c + d + e + f)
    // console.log("all vars", a, b, c, d, e, f, "and their sum", g)
    document.getElementById("name").innerHTML = "Thanks " + a + "! You should learn:";
    if (g) {
      if(g < -8) {
        document.getElementById("cobol").removeAttribute("class");
      } else if (g >= -8 && g < -5) {
        document.getElementById("ruby").removeAttribute("class");
      } else if (g >= -5 && g < 0) {
        document.getElementById("csharp").removeAttribute("class");
      } else if (g >= 0) {
        document.getElementById("python").removeAttribute("class");
      } else {
        document.getElementById("invalid").removeAttribute("class");
      };
    };
  };
  // resets fields function
  // function hardReset() {
  //   document.getElementById("form").reset();
  // };

  // variable declaration
  let form = document.querySelector("form");
  //creating the submit listener and specifying its function
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    resetClass();
    languageTester();   
    // maybe have it print out the results for the user to verify?
  });
  // form.addEventListener("reset", function(event) {
  //   event.preventDefault();
  //   resetClass();
  //   hardReset();
  // });
});