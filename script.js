// The prompt returns text, so I compare it with "1"
let answer = prompt("Type 1 to open the website");

if(answer === "1"){
  document.getElementById("website").style.display = "block";
}
// if the answer is not 1, the page stays white
