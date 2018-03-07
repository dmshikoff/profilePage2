let contCol = document.querySelectorAll(".my-project")
let imageCont = document.querySelector(".imgBox")
let textCont = document.querySelector(".project-tile-header")

for(let i of contCol){
  i.addEventListener("mouseover", function (event) {
    this.children[2].classList.add("imgBoxIn")
    this.children[0].classList.add("project-tile-header-in")
    this.children[3].classList.add("octoCatIn")
    this.children[1].classList.add("deployedLinkIn")
  })
  i.addEventListener("mouseout", function (event) {
    this.children[2].classList.remove("imgBoxIn")
    this.children[0].classList.remove("project-tile-header-in")
    this.children[3].classList.remove("octoCatIn")
    this.children[1].classList.remove("deployedLinkIn")
  })
}
