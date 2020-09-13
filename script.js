let clickMeBtn = document.querySelector("#clickMeBtn");
let darkMode = document.querySelector("#changeBackground");

clickMeBtn.addEventListener("click", () => {
  clickMeBtn.remove();
  createHeart();

  setInterval(createHeart, 300);
});

darkMode.addEventListener("click", () => {
  let backgroundColor = document.querySelector("body").style.backgroundColor;
  let buttonText = "";

  if (backgroundColor == "white") {
    backgroundColor = "black";
    buttonText = "Light Mode!";
  } else {
    backgroundColor = "white";
    buttonText = "Dark Mode!";
  }

  document.body.style.backgroundColor = backgroundColor;
  darkMode.innerText = buttonText;
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
