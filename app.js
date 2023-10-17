let colors =["white","black","blue","aqua",'aliceblue',"grey","purple","indigo"];
let colorName = document.querySelector("span");
function colorHandler(){
  const randomColor = Math.floor(Math.random()*colors.length);
  document.body.style.backgroundColor = colors[randomColor];
  colorName.textContent = colors[randomColor];
}