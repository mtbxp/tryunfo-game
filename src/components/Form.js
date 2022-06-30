import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName, onInputChange, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, isSaveButtonDisabled,
      onSaveButtonClick,
    } = this.props;
    return (
      <div>
        <label htmlFor="iptName">
          Nome
          <input
            data-testid="name-input"
            type="text"
            name="iptName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="txaDescript">
          Descrição
          <textarea
            data-testid="description-input"
            name="txaDescript"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="iptAtt1">
          Attr01
          <input
            data-testid="attr1-input"
            type="number"
            name="iptAtt1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="iptAtt2">
          Attr02
          <input
            data-testid="attr2-input"
            type="number"
            name="iptAtt2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="iptAtt3">
          Attr03
          <input
            data-testid="attr3-input"
            type="number"
            name="iptAtt3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="iptImg">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            name="iptImg"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="iptRar">
          Raridade
          <select
            data-testid="rare-input"
            name="iptRar"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="iptCheck">
          Super Trybe Trunfo
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="iptCheck"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
        <button
          data-testid="save-button"
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
