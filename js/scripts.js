window.addEventListener("load", function() {
  //re-adds hidden attribute, called on submit and reset
  function resetClass() {;
    document.getElementById("ruby").setAttribute("class", "hidden");
    document.getElementById("csharp").setAttribute("class", "hidden");
    document.getElementById("python").setAttribute("class", "hidden");
    document.getElementById("cobol").setAttribute("class", "hidden");  
    };