let clickMeBtn = document.querySelector("#clickMeBtn");

clickMeBtn.addEventListener("click", () => {
  clickMeBtn.remove();
  createHeart();

  setInterval(createHeart, 300);
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "💜";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  setTimeout(() => {
    heart.remove;
  }, 5000);

  document.body.appendChild(heart);
}
