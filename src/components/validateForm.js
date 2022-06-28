function validateForm(params) {
  const { cardName, cardDescription, cardAttr1,
    cardAttr2, cardAttr3, cardImage, cardRare } = params;

  const maxAttr = 10;
  const errAttr = '*Apenas números de 1 a 10 suportados';

  const erros = {};

  if (!cardName.length) {
    erros.name = '*Preencha o nome da carta';
  }

  if (!cardDescription.length) {
    erros.description = '*Preencha a descrição da carta';
  }

  if (!cardImage.length) {
    erros.image = '*Preencha a imagem da carta';
  }

  if (!cardRare.length) {
    erros.rare = '*Preencha a raridade da carta';
  }

  if (cardAttr1 < 0 || cardAttr1 > maxAttr) {
    erros.attr1 = errAttr;
  }

  if (cardAttr2 < 0 || cardAttr2 > maxAttr) {
    erros.attr2 = errAttr;
  }

  if (!cardAttr1 < 0 || cardAttr3 > maxAttr) {
    erros.attr3 = errAttr;
  }

  return erros;
}

export default validateForm;
