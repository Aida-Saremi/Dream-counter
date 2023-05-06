const counterBtn = document.getElementById("counter-btn");
const counterContainer = document.getElementById("counter-container");
const dreamContainer = document.getElementById("dream-container");

let counter = 0;

counterBtn.addEventListener("click", function() {
  counter++;
  counterContainer.innerHTML = counter;
  
  let dream = prompt("What is your dream?");
  let dreamBubble = document.createElement("div");
  let dreamText = document.createElement("p");
  
  dreamBubble.classList.add("bubble");
  dreamText.innerHTML = dream;
  dreamBubble.appendChild(dreamText);
  
  let dreamColor = "hsl(" + Math.random() * 360 + ", 80%, 90%)";
  dreamBubble.style.backgroundColor = dreamColor;
  
  dreamContainer.appendChild(dreamBubble);
});
