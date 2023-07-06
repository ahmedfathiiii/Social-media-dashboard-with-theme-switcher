let darkbtn = document.querySelector("#switch")
let bodyEl = document.querySelector("body")
let darkmode = false
darkbtn.addEventListener("change", (event) => {
    darkmode = event.target.checked
    if (darkmode) {
        bodyEl.classList.add("dark")
    } else {
        bodyEl.classList.remove("dark")
    }
})

let updown = document.querySelectorAll("footer img")
let updownnum = document.querySelectorAll("footer p")


console.log(updown)


function updowncolor() {
    for (one of updown) {
        if (one.getAttribute("src") === "./images/icon-up.svg") {
            one.nextElementSibling.style.cssText = "color: var(--LimeGreen)"
        } else {
            one.nextElementSibling.style.cssText = "color: var(--BrightRed)"

        }
    }
}
updowncolor()