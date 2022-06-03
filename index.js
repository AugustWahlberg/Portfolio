const arrowDown = document.getElementById("go-down")
const workSite = document.getElementById("work")

arrowDown.addEventListener("click", goDown)

function goDown () {
  workSite.scrollIntoView({behavior: "smooth"});
}
