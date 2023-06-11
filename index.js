const arrowDown = document.getElementById("go-down")
const workSite = document.getElementById("websites")

arrowDown.addEventListener("click", goDown)

function goDown () {
  workSite.scrollIntoView({behavior: "smooth"});
}

document.getElementById("ecom-web").onclick = function () {
  window.open ("https://react-ca-august-wahlberg.netlify.app/", "_blank");
};

document.getElementById("ecom-git").onclick = function () {
  window.open ("https://github.com/AugustWahlberg/JS-frameworks-react-ca", "_blank");
};


document.getElementById("ai-web").onclick = function () {
  window.open ("https://auction-it-2-by-wahlberg.netlify.app", "_blank");
};


document.getElementById("ai-git").onclick = function () {
  window.open ("https://github.com/AugustWahlberg/auction-it-semester-project-2/tree/to-portfolio", "_blank");
};


document.getElementById("holi-web").onclick = function () {
  window.open("https://project-exam-2-august-wahlberg.netlify.app/", "_blank");
};

document.getElementById("holi-git").onclick = function () {
  window.open("https://github.com/AugustWahlberg/holi", "_blank");
};
