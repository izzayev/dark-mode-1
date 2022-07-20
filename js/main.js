//  var roomTemp = 155;

// // var result 

// // if (roomTemp >= 30) {
// //     result = "HOT"
// // }else {
// //     result ="COOL"
// // } 

// var result = (roomTemp <= 30)?"HOT":"COOL";

// console.log(result);
// alert(result)

var elBody = document.querySelector("#main__body");
var elForm = document.querySelector(".hero__form");
var elInput = document.querySelector(".hero__input");
var elText = document.querySelector("#hero__p");
var elBtn = document.querySelector(".btn");

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault()
})

elBtn.addEventListener("click", function() {
    elBody.classList.toggle("dark__mode")
})
