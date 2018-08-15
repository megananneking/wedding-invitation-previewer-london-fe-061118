// var output = document.getElementById("designer-output");
// var classic = document.getElementById("classic");
// var gaudy = document.getElementById("gaudy");
// var gothic = document.getElementById("gothic");

// gaudy.style.cursor = 'pointer';
// gaudy.onclick = function() {
//     // do something...
// };

// document.addEventListener('click', function(e) {
//   if (e.which === 39){
//     changeToGaudy();
//   }
// }
// );

// function changeToGaudy() {
//   var rightNumbers = output.style.right.replace('px', '');
//   if (right > 0) {
//     output.style.right = `${right - 1}px`
//   }
// }

document.addEventListener("DOMContentLoaded", function(event) {

  document.getElementById("input-name-one").addEventListener("keypress", function(e) {
    var outputnameone = document.getElementById("output-name-one");
    outputnameone.innerHTML += e.key;
  });
  
  document.getElementById("input-name-two").addEventListener("keypress", function(e) {
    var outputnametwo = document.getElementById("output-name-two");
    outputnametwo.innerHTML += e.key;
  });

});