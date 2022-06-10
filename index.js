const arrowDown = document.getElementById("go-down")
const workSite = document.getElementById("work")

arrowDown.addEventListener("click", goDown)

function goDown () {
  workSite.scrollIntoView({behavior: "smooth"});
}

document.getElementById("ff-web").onclick = function () {
  location.href = "https://frontend-freakz.netlify.app/";
};

document.getElementById("ff-git").onclick = function () {
  location.href = "https://github.com/Noroff-FEU-Assignments/project-exam-1-AugustWahlberg";
};
