window.addEventListener("load", function() {
  //building reset class
  function resetClass() {;
    document.getElementById("ruby").setAttribute("class", "hidden");
    document.getElementById("csharp").setAttribute("class", "hidden");
    document.getElementById("python").setAttribute("class", "hidden");
    document.getElementById("cobol").setAttribute("class", "hidden");  
    };

  // runs our form and evaluates a decision tree  
  function languageTester() {;
    let a = document.querySelector("input#a").value;
    let b = parseInt(document.getElementById('input:checkbox[name="question2"]:checked').value);
    let c = parseInt(document.getElementById("input:radio[name=question3]:checked").value);
    let d = parseInt(document.querySelector("input#food").value);
    let e = parseInt(document.querySelector("input#slider").value);
    let f = parseInt(document.querySelector("input#drink").value);
    console.log('all assigned values in order', b, c, d, e, f)
    let g = (b + c + d + e + f)
    console.log("value of g", g)

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
  function backToOne() {
    document.getElementById("form").reset();
  };

  // variable declaration
  let form = document.querySelector("form");
  //creating the submit listener and specifying its function
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    resetClass();
    languageTester();   
    // maybe have it print out the results for the user to verify?
  });
  form.addEventListener("reset", function(event) {
    event.preventDefault();
    resetClass();
    backToOne();
  });
});