/*
Écris une fonction qui, étant donné deux angles d'un triangle, renverra la valeur du troisième.
(Rappel : la somme des valeurs des trois angles dans un triangle est **toujours** 180°)
Ex: 
thirdAngle(90, 30) doit retourner 60
thirdAngle(20, 80) doit retourner 80
*/

function thirdAngle(a, b) {
  const sommeDesAngles = 180;
  const thirdAngle = sommeDesAngles - a - b;
  return thirdAngle
  const a = 90
  const b = 30
  const third = thirdAngle (a, b)
  console.log ("le troisième angle est :"third)
}

module.exports = thirdAngle;
