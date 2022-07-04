function validateForm(params) {
  const { cardName, cardDescription, cardAttr1,
    cardAttr2, cardAttr3, cardImage, cardRare } = params;

  const maxAttr = 90;
  const minAttr = 1;
  const errAttr = `*Apenas números de 1 a ${maxAttr} suportados`;

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
    erros.rare = '*Preencha a popularidade da carta';
  }

  if (cardAttr1 < minAttr || cardAttr1 > maxAttr) {
    erros.attr = errAttr;
  }

  if (cardAttr2 < minAttr || cardAttr2 > maxAttr) {
    erros.attr = errAttr;
  }

  if (cardAttr3 < minAttr || cardAttr3 > maxAttr) {
    erros.attr = errAttr;
  }

  return erros;
}

export default validateForm;
