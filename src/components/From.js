import React from 'react';
import '../index.css';

class From extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick,
    } = this.props;
    return (
      <form className="contanerNewLetter">
        <h1>Adicionar Nova Carta</h1>
        <label htmlFor="nameinput">
          Nome
          <input
            type="text"
            data-testid="name-input"
            name="nameinput"
            className="inputLetter"
            value={ cardName }
            onChange={ onInputChange }
            placeholder="Digite aqui"
          />
        </label>

        <label htmlFor="descriptioninput">
          Descrição
          <input
            type="textarea"
            name="descriptioninput"
            className="areaLetter"
            value={ cardDescription }
            data-testid="description-input"
            maxLength="200"
            placeholder="200"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr1input">
          Attr01
          <input
            type="number"
            name="attr1input"
            className="attLetter"
            value={ cardAttr1 }
            data-testid="attr1-input"
            placeholder="0"
            onChange={ onInputChange }
          />

        </label>

        <label htmlFor="attr2input">
          Atte03
          <input
            type="number"
            name="attr2input"
            placeholder="0"
            className="attLetter"
            value={ cardAttr2 }
            data-testid="attr2-input"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr3input">
          Attr03
          <input
            type="number"
            name="attr3input"
            placeholder="0"
            className="attLetter"
            value={ cardAttr3 }
            data-testid="attr3-input"
            maxLength="90"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="imageinput">
          Imagem
          <input
            type="text"
            name="imageinput"
            placeholder="Link da imagem"
            className="attLetter"
            value={ cardImage }
            data-testid="image-input"
            onChange={ onInputChange }
          />
        </label>

        <div>
          Raridade
          <select
            data-testid="rare-input"
            name="rareinput"
            className="inputLetter"
            onChange={ onInputChange }
            value={ cardRare }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </div>

        {(hasTrunfo === true) ? (
          <p>
            Você já tem um Super Trunfo em seu baralho
          </p>
        ) : (
          <label
            htmlFor="trunfoinput"
            className="checkLetter"
          >
            <input
              type="checkbox"
              name="trunfoinput"
              className="checkLetter"
              checked={ cardTrunfo }
              data-testid="trunfo-input"
              onChange={ onInputChange }
            />
            Super Trunfo
          </label>
        )}

        <button
          type="button"
          name="savebutton"
          data-testid="save-button"
          className="btnLetter"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

      </form>
    );
  }
}

export default From;
