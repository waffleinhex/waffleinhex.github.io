//This could have been made better

var projects = ["chckSum", "textReveal", "chrombeookgames"];
var projectsUrl = ["https://github.com/waffleinhex/chckSum/", "https://waffleinhex.github.io/textreveal/", "https://waffleinhex.github.io/chromebookgames"];

setInterval(function() {
    var rand = Math.floor(Math.random()*projects.length)
    document.getElementById("rand").innerText = projects[rand];
    document.getElementById("rand").href = projectsUrl[rand];
}, 1000);
