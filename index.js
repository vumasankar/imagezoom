let overlay = document.getElementById("overlay")
let cross = document.getElementById("Cross")
let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let zoom1 = document.getElementById("zoom1")
let zoom2 = document.getElementById("zoom2")
let zoom3 = document.getElementById("zoom3")
addclass(one,zoom1)
addclass(two,zoom2)
addclass(three,zoom3)

cross.addEventListener("click", function () {
    overlay.style.display = "none"

}) 

function callwhenclicked(zoom){
    overlay.style.display = "block"
    zoom.style.display = "block"
}

function addclass(num,zoom){
    num.addEventListener("click", function () {
        return callwhenclicked(zoom)     
    })
    
}