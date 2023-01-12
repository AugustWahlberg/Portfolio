const arrowDown = document.getElementById("go-down")
const workSite = document.getElementById("websites")

arrowDown.addEventListener("click", goDown)

function goDown () {
  workSite.scrollIntoView({behavior: "smooth"});
}

document.getElementById("ff-web").onclick = function () {
  window.open ("https://frontend-freakz.netlify.app/", "_blank");
};

document.getElementById("ff-git").onclick = function () {
  window.open ("https://github.com/Noroff-FEU-Assignments/project-exam-1-AugustWahlberg", "_blank");
};


document.getElementById("rd-web").onclick = function () {
  window.open ("https://rainy-days-august-wahlberg.netlify.app/", "_blank");
};


document.getElementById("rd-git").onclick = function () {
  window.open ("https://github.com/Noroff-FEU-Assignments/cross-course-project-AugustWahlberg", "_blank");
};


document.getElementById("csm-web").onclick = function () {
  window.open("https://csm-august-wahlberg.netlify.app/", "_blank");
};

document.getElementById("csm-git").onclick = function () {
  window.open("https://github.com/AugustWahlberg/Community-Science-Museum", "_blank");
};

document.getElementById("portfolio-git").onclick = function () {
  window.open("https://github.com/AugustWahlberg/Portfolio", "_blank");
};


document.getElementById("magazine-pdf").onclick = function () {
  window.open("https://drive.google.com/file/d/128s88tWIddgY9EIR7-g9HUiE4xmE_4wI/view?usp=sharing", "_blank");
};


document.getElementById("poster-pdf").onclick = function () {
  window.open("https://drive.google.com/file/d/1q4COKiNFA2xITJXteyfDtKE75wJhByvv/view?usp=sharing", "_blank");
};