isInputFilled = () => {
  const { cardName, cardDescription, cardImage, cardRare } = this.state;
  if (
    cardName.length !== 0
      && cardDescription.length !== 0
      && cardImage.length !== 0
      && cardRare.length !== 0
  ) {
    return false;
  }
  return true;
};

sumOfAttr = () => {
  const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
  const magic = 210;
  if (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > magic) {
    return true;
  }
  return false;
};

verifyAttr = () => {
  const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
  const magic = 90;
  if (Number(cardAttr1) > magic
    || Number(cardAttr2) > magic || Number(cardAttr3) > magic) {
    return true;
  }
  return false;
};

verifyAttr2 = () => {
  const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
  const magic = 0;
  if (Number(cardAttr1) < magic || Number(cardAttr2) < magic
    || Number(cardAttr3) < magic) {
    return true;
  }
  return false;
};
