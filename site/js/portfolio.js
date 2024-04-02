const avatar = document.querySelector('.avatar');

avatar.addEventListener('click', function() {
  const newImage = prompt('URL image que tu veux utiliser');
if (newImage) {
    avatar.src = newImage;
  }
});
const nameParagraph = document.getElementById('firstname');

// Ajout d'un gestionnaire d'événements de clic au paragraphe
nameParagraph.addEventListener('click', function() {
  const newName = prompt('Mettre prenom de votre choix en blanc');
  if (newName) {
    nameParagraph.textContent = newName;
    nameParagraph.style.color = 'white';
  }
});
const changeBackground = document.querySelector('.pink-bg');
changeBackground.addEventListener('click', function() {
    const newColor = prompt('Veuillez entrer une nouvelle couleur (#XXXXXX) :');
    if (newColor) {changeBackground.style.backgroundColor = newColor;
    }
  });
  