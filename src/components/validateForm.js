function validateForm(params) {
  const { cardName, cardDescription, cardAttr1,
    cardAttr2, cardAttr3, cardImage, cardRare } = params;

  const maxAttr = 90;
  const minAttr = 1;

  let errors = false;

  if (cardName.length === 0) {
    errors = true;
  }

  if (cardDescription.length === 0) {
    errors = true;
  }

  if (cardImage.length === 0) {
    errors = true;
  }

  if (cardRare.length === 0) {
    errors = true;
  }

  if (cardAttr1 < minAttr || cardAttr1 > maxAttr) {
    errors = true;
  }

  if (cardAttr2 < minAttr || cardAttr2 > maxAttr) {
    errors = true;
  }

  if (cardAttr3 < minAttr || cardAttr3 > maxAttr) {
    errors = true;
  }

  return errors;
}

export default validateForm;
