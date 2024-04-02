/*
Écris une fonction qui, étant donné deux angles d'un triangle, renverra la valeur du troisième.
(Rappel : la somme des valeurs des trois angles dans un triangle est **toujours** 180°)
Ex: 
thirdAngle(90, 30) doit retourner 60
thirdAngle(20, 80) doit retourner 80
*/
const triangle = 180;
function thirdAngle(angle1, angle2) {
  thirdAngle = 180 - (angle1 + angle2);
  return 180 - (angle1 + angle2);
}

// Exemples d'utilisation
console.log(triangle(90, 30)); // Output: 60
console.log(triangle(20, 80)); // Output: 80

/*thirdAngle = 180 - (angle1 + angle2);
function thirdAngle(a, b) {
  // Your code here !
  thirdAngle = 180 - (angle1 + angle2);
  return 180 - (angle1 + angle2);
}
console.log(thirdAngle(90, 30));
console.log(thirdAngle(20, 80));
module.exports = thirdAngle;*/
