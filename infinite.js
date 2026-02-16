const trigger = document.getElementById("infiniteWord");
const container = document.getElementById("explosion-container");

trigger.addEventListener("click", () => {

  for (let i = 0; i < 80; i++) {
    const span = document.createElement("span");
    span.classList.add("explode-word");
    span.textContent = "infinite";

    span.style.left = Math.random() * window.innerWidth + "px";
    span.style.top = Math.random() * window.innerHeight + "px";

    container.appendChild(span);

    // Remove after animation ends
    setTimeout(() => {
      span.remove();
    }, 2000);
  }

});