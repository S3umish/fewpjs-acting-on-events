// Your code here

let dodger = document.getElementById("dodger")



document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "")
    let left = parseInt(leftNumbers, 10)
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`
    }
}

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "")
    let left = parseInt(leftNumbers, 10)
  
    if (left > 0) {
      dodger.style.left = `${left + 1}px`
    }
}

function moveDodgerUp() {
    let UpNumbers = dodger.style.up.replace("px", "")
    let up = parseInt(upNumbers, 10)
  
    if (up > 0) {
      dodger.style.up = `${up + 1}px`
    }
}

function moveDodgerDown() {
    let UpNumbers = dodger.style.up.replace("px", "")
    let up = parseInt(upNumbers, 10)
  
    if (up > 0) {
      dodger.style.up = `${up - 1}px`
    }
}