window.addEventListener("DOMContentLoaded", function() {
  // all code goes here

  var projectBtn = document.getElementById("projectsBtn");
  var aboutBtn = document.getElementById("aboutBtn");
  var contactBtn = document.getElementById("contactBtn");

  projectBtn.addEventListener("click", function(event){
    console.log("you clicked projects page");
    // document.getElementById("contProjects").style.display = "block";
    // document.getElementById("contAboutMe").style.display = "none";
    // document.getElementById("contBackground").style.display = "none";

    document.getElementById("contProjects").classList.remove("hiddenDiv");
    document.getElementById("contAboutMe").classList.add("hiddenDiv");
    document.getElementById("contContact").classList.add("hiddenDiv");
    });

  aboutBtn.addEventListener("click", function(event){
    console.log("you clicked about page");
    //event.preventDefault(); 
    //document.getElementById("contAboutMe").style.display = "block";
    document.getElementById("contProjects").classList.add("hiddenDiv");
    document.getElementById("contAboutMe").classList.remove("hiddenDiv");
    document.getElementById("contContact").classList.add("hiddenDiv");
    });

  contactBtn.addEventListener("click", function(event){
    // console.log("you clicked contact page");
    // document.getElementById("contProjects").style.display = "none";
    // document.getElementById("contAboutMe").style.display = "none";
    // document.getElementById("contContact").style.display = "block";

    document.getElementById("contProjects").classList.add("hiddenDiv");
    document.getElementById("contAboutMe").classList.add("hiddenDiv");
    document.getElementById("contContact").classList.remove("hiddenDiv");
    });
});


//cmd + l  = select whole line
//cmd + shift+ paste = past in place