'user strict';

// document.querySelector("button").addEventListener("click", eventOnClick);

let n = document.querySelectorAll(".drum").length;

for(let i = 0; i < n; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", eventOnClick);
}

function eventOnClick() {
    alert("button clicked!");
}