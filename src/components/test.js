cardAttr1 = '10';
cardAttr2 = '0';
cardAttr3 = '10';
const minRoll = 0;
const maxRoll = 90;
// const maxPoints = 210;
let condNum = false;

if ((Number(cardAttr1) >= minRoll && Number(cardAttr1) <= maxRoll)
 && (Number(cardAttr2) >= minRoll && Number(cardAttr2) <= maxRoll)
 && (Number(cardAttr3) >= minRoll && Number(cardAttr3) <= maxRoll)) {
  condNum = true;
}

// if ((Number(cardAttr1) < minRoll && Number(cardAttr1) > maxRoll)
// && (Number(cardAttr2) < minRoll && Number(cardAttr2) > maxRoll)
// && (Number(cardAttr3) < minRoll && Number(cardAttr3) > maxRoll)) {
// condNum = false;
// }

console.log(condNum);
