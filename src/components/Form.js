import React from 'react';
import PropTypes from 'prop-types';

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
        <form>
          <label>
            <input
              type="text"
              data-testid="name-input"
              name="cardName"
              value={cardName}
              onChange={onInputChange}
              required
            />
          </label>
          <label htmlFor="descricao">
            <textarea
              id="descricao"
              data-testid="description-input"
              value={cardDescription}
              name='cardDescription'
              onChange={onInputChange}
              required
            />
          </label>
          <label htmlFor="primeiroAtributo">
            <input
              id="primeiroAtributo"
              type="number"
              data-testid="attr1-input"
              value={cardAttr1}
              name='cardAttr1'
              onChange={onInputChange}
              required
            />
          </label>
          <label htmlFor="segundoAtributo">
            <input
              id="segundoAtributo"
              type="number"
              data-testid="attr2-input"
              value={cardAttr2}
              name='cardAttr2'
              onChange={onInputChange}
              required
            />
          </label>
          <label htmlFor="terceiroAtributo">
            <input
              id="terceiroAtributo"
              type="number"
              data-testid="attr3-input"
              value={cardAttr3}
              name='cardAttr3'
              onChange={onInputChange}
              required
            />
          </label>
          <label htmlFor="urlImg">
            <input
              id="urlImg"
              type="text"
              data-testid="image-input"
              value={cardImage}
              name='cardImage'
              onChange={onInputChange}
              required
            />
          </label>
          <label htmlFor="raridadeCard">
            <select
              id="raridadeCard"
              data-testid="rare-input"
              value={cardRare}
              name="cardRare"
              onChange={onInputChange}
              required
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="sp">
            <input
              id="sp"
              type="checkbox"
              data-testid="trunfo-input"
              checked={cardTrunfo}
              name={"cardTrunfo"}
              onChange={onInputChange}
              required
            />
          </label>
          <button
            disabled={isSaveButtonDisabled}
            type="submit"
            data-testid="save-button"
            onClick={onSaveButtonClick}
            required
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
};

export default Form;
