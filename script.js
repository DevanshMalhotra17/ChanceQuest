document.addEventListener("DOMContentLoaded", () => {
  const flipCard = document.getElementById("flipCard");

  // When the card is clicked, it flips to the back
  flipCard.addEventListener("click", () => {
    flipCard.classList.toggle("flipped");
  });
});
