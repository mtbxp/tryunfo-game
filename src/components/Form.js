import React from 'react';
import '../styles/form.css';
import ProoTypes from 'prop-types';

class Form extends React.Component {
  checkMaxPoints = (remainingPoints) => {
    if (remainingPoints < 0) return 'red';
    return '';
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      remainingPoints,
    } = this.props;

    const checkboxElement = (
      <label htmlFor="cardTrunfo" className="line-checkbox">
        <input
          type="checkbox"
          data-testid="trunfo-input"
          name="cardTrunfo"
          id="cardTrunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
        <div className="checkbox-label">Super Trunfo</div>
      </label>
    );

    return (
      <form>
        <h2>Adicionar Nova Carta</h2>
        <label htmlFor="cardName">
          Nome:
          <input
            type="text"
            data-testid="name-input"
            name="cardName"
            id="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardDescription">
          Descrição:
          <textarea
            data-testid="description-input"
            name="cardDescription"
            id="cardDescription"
            maxLength={ 210 }
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardImage">
          Link Imagem:
          <input
            type="text"
            data-testid="image-input"
            name="cardImage"
            id="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <fieldset>
          <legend>Atributos</legend>
          <label htmlFor="cardAttr1" className="line-adjust">
            🏆 Vitórias:
            <input
              type="number"
              data-testid="attr1-input"
              name="cardAttr1"
              id="cardAttr1"
              min={ 0 }
              max={ 90 }
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardAttr2" className="line-adjust">
            🥇 Pole Positions:
            <input
              type="number"
              data-testid="attr2-input"
              name="cardAttr2"
              id="cardAttr2"
              min={ 0 }
              max={ 90 }
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardAttr3" className="line-adjust">
            🏁 Melhores Voltas:
            <input
              type="number"
              data-testid="attr3-input"
              name="cardAttr3"
              id="cardAttr3"
              min={ 0 }
              max={ 90 }
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <p className={ `points-line ${this.checkMaxPoints(remainingPoints)}` }>
            {`Pontos restantes = ${remainingPoints}`}
          </p>
          <p>Obs. A soma dos três atributos não deve ultrapassar 210 pontos.</p>
        </fieldset>
        <div className="last-line">
          <label htmlFor="cardRare" className="line-adjust line-rare">
            Raridade:
            <select
              data-testid="rare-input"
              name="cardRare"
              id="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          {
            hasTrunfo
              ? <p className="no-trunfo">Você já tem um Super Trunfo em seu baralho</p>
              : checkboxElement
          }
        </div>
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          className="submit-btn"
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: ProoTypes.string.isRequired,
  cardDescription: ProoTypes.string.isRequired,
  cardAttr1: ProoTypes.string.isRequired,
  cardAttr2: ProoTypes.string.isRequired,
  cardAttr3: ProoTypes.string.isRequired,
  cardImage: ProoTypes.string.isRequired,
  cardRare: ProoTypes.string.isRequired,
  cardTrunfo: ProoTypes.bool.isRequired,
  hasTrunfo: ProoTypes.bool.isRequired,
  isSaveButtonDisabled: ProoTypes.bool.isRequired,
  onInputChange: ProoTypes.func.isRequired,
  onSaveButtonClick: ProoTypes.func.isRequired,
  remainingPoints: ProoTypes.number.isRequired,
};

export default Form;
