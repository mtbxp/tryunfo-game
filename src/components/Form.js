import React from 'react';
import PropTypes from 'prop-types';
import Name from './inputs_components/Name';
import Attributes from './inputs_components/Attributes';
import Image from './inputs_components/Image';
import Rare from './inputs_components/Rare';
import Trunfo from './inputs_components/Trunfo';
import Submit from './inputs_components/Submit';
import Description from './inputs_components/Description';
import NameFilter from './inputs_components/NameFilter';
import RareFilter from './inputs_components/RareFilter';

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
      hasTrunfo,
      nameFilter,
      rareFilter,
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
          hasTrunfo={ hasTrunfo }
          onInputChange={ onInputChange }
        />
        <NameFilter
          onInputChange={ onInputChange }
          nameFilter={ nameFilter }
        />
        <RareFilter
          onInputChange={ onInputChange }
          rareFilter={ rareFilter }
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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.string.isRequired,
  onSaveButtonClick: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  nameFilter: PropTypes.func.isRequired,
  rareFilter: PropTypes.func.isRequired,
};

export default Form;
