const button = document.getElementById("btn");
const gif = document.getElementById("myGif");

button.addEventListener("click", () => {
  alert("GIF is fun!");
  gif.style.border = "2px solid red"; // just a fun effect
});
