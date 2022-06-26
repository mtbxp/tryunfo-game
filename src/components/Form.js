import React from 'react';
import PropTypes from 'prop-types';
import Name from './inputsComponents/Name';
import Attributes from './inputsComponents/Attributes';
import Image from './inputsComponents/Image';
import Rare from './inputsComponents/Rare';
import Trunfo from './inputsComponents/Trunfo';
import Submit from './inputsComponents/Submit';
import Description from './inputsComponents/Description';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardDescription,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onSaveButtonClick,
      onInputChange,
    } = this.props;

    return (
      <section>
        <Name
          cardName={ cardName }
          onInputChange={ onInputChange }
        />
        <Attributes
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          onInputChange={ onInputChange }
        />
        <Description
          cardDescription={ cardDescription }
          onInputChange={ onInputChange }
        />
        <Image
          cardImage={ cardImage }
          onInputChange={ onInputChange }
        />
        <Rare
          cardRare={ cardRare }
          onInputChange={ onInputChange }
        />
        <Trunfo
          cardTrunfo={ cardTrunfo }
          onInputChange={ onInputChange }
        />
        <Submit
          onSaveButtonClick={ onSaveButtonClick }
          disabled={ isSaveButtonDisabled }
        />
      </section>
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
  cardTrunfo: PropTypes.string.isRequired,
  isSaveButtonDisabled: PropTypes.string.isRequired,
  onSaveButtonClick: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Form;
