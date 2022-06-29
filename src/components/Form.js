import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     cardname: '',
  //     carddescription: '',
  //     cardat1: '',
  //     cardat2: '',
  //     cardat3: '',
  //     cardart: '',
  //     cardrare: '',
  //     cardtrunfo: '',
  //   };
  // }
  submitFunc = () => {
    this.props.cardName = 'ehaue';
    console.log('aiai');
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled, onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <form>
        {/* htmlfor feito so pra tirar erro do lint */}
        <label htmlFor="campos" className="form">
          Nome da carta
          <input
            type="text"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
            name="cardname"
          />
          Descrição da carta
          <textarea
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            name="carddescription"
          />
          Atributo 1
          <input
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            name="cardat1"
          />
          Atributo 2
          <input
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            name="cardat2"
          />
          Atributo 3
          <input
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            name="cardat3"
          />
          Arte da carta
          <input
            type="text"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
            name="cardart"
          />
          <select
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
            name="cardrare"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
          { hasTrunfo ? 'Você já tem um Super Trunfo em seu baralho' : <input
            type="checkbox"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            name="cardtrunfo"
          />}
          {hasTrunfo ? '' : 'Carta Super Trunfo'}
          {/* // <input
          //   type="checkbox"
          //   data-testid="trunfo-input"
          //   checked={ cardTrunfo }
          //   onChange={ onInputChange }
          //   name="cardtrunfo"
          // /> */}
          <button
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            type="submit"
          >
            Salvar
          </button>
        </label>
      </form>
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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
