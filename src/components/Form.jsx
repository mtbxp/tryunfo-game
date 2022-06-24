import React from 'react';

class Form extends React.Component {
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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div>
        <div>
          <label htmlFor="name-input">
            <input
              type="text"
              data-testid="name-input"
              value={ cardName }
              placeholder="Card Name"
              name="cardName"
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="description-input">
            <input
              type="textarea"
              data-testid="description-input"
              value={ cardDescription }
              placeholder="card Description"
              name="cardDescription"
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr1-input">
            <input
              type="number"
              data-testid="attr1-input"
              value={ cardAttr1 }
              placeholder="Força"
              name="cardAttr1"
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="attr2-input">
            <input
              type="number"
              data-testid="attr2-input"
              value={ cardAttr2 }
              placeholder="Experiência"
              name="cardAttr2"
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="attr3-input">
            <input
              type="number"
              data-testid="attr3-input"
              value={ cardAttr3 }
              placeholder="Agilidade"
              name="cardAttr3"
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="image-input">
            <input
              type="text"
              data-testid="image-input"
              value={ cardImage }
              placeholder="Imagem"
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="rare-input">
            <select
              data-testid="rare-input"
              value={ cardRare }
              name="cardRare"
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>

            </select>
          </label>
        </div>

        <div>
          <label htmlFor="trunfo-input">
            <input
              type="checkbox"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              name="cardTrunfo"
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </div>

      </div>
    );
  }
}
Form.propTypes = {

  cardName: Proptypes.string.isRequired,
  cardDescription: Proptypes.string.isRequired,
  cardAttr1: Proptypes.string.isRequired,
  cardAttr2: Proptypes.string.isRequired,
  cardAttr3: Proptypes.string.isRequired,
  cardImage: Proptypes.string.isRequired,
  cardRare: Proptypes.string.isRequired,
  cardTrunfo: Proptypes.bool.isRequired,
  // hasTrunfo: Proptypes.bool.isRequired,
  isSaveButtonDisabled: Proptypes.bool.isRequired,
  onInputChange: Proptypes.func.isRequired,
  onSaveButtonClick: Proptypes.func.isRequired,

};

export default Form;
