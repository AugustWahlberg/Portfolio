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


document.getElementById("rd-web").onclick = function () {
  location.href = "https://rainy-days-august-wahlberg.netlify.app/";
};


document.getElementById("rd-git").onclick = function () {
  location.href = "https://github.com/Noroff-FEU-Assignments/cross-course-project-AugustWahlberg";
};


document.getElementById("csm-web").onclick = function () {
  location.href = "https://csm-august-wahlberg.netlify.app/";
};

document.getElementById("csm-git").onclick = function () {
  location.href = "https://github.com/AugustWahlberg/Community-Science-Museum";
};

document.getElementById("portfolio-git").onclick = function () {
  location.href = "https://github.com/AugustWahlberg/Portfolio";
};