document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner l'image de l'avatar
    var avatarImage = document.querySelector('.first_banner img');
  
    // Ajouter un gestionnaire d'événements sur l'image
    avatarImage.addEventListener('click', function() {
      // Changer l'attribut src de l'image lorsqu'elle est cliquée
      avatarImage.src = './image/avatar.svg';
    });
  });
  