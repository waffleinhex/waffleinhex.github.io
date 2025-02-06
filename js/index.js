//This could have been made better

var projects = ["chckSum", "textReveal"];
var projectsUrl = ["https://github.com/waffleinhex/chckSum/", "https://waffleinhex.github.io/textreveal/"];

setInterval(function() {
    var rand = Math.floor(Math.random()*projects.length)
    document.getElementById("rand").innerText = projects[rand];
    document.getElementById("rand").href = projectsUrl[rand];
}, 1000);
