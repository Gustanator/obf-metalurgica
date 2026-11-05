const burguerButtonDOM = document.querySelector("#burguer")
const mobileBar = document.querySelector("#extra-nav-bar")

let wasClicked = false

function burguerButton() {
    if (!wasClicked) {
        mobileBar.style.display = "flex"
        burguerButtonDOM.style.color = "red"
        wasClicked = true
    } else {
        mobileBar.style.display = "none"
        burguerButtonDOM.style.color = "black"
        wasClicked = false
    }
}