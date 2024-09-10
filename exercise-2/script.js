function revealText() {
  // hide card
  const card = document.getElementById('card');
  card.classList.remove('hidden');

  // reveal card, hide button when clicked 
  const button = document.querySelector('.reveal-button');
  button.classList.add('hidden');

}