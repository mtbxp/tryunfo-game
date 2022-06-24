import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  verifyValue(list) {
    const { type, Tag, checked, disabled, value } = list;
    let element = '';
    if (type === 'checkbox' && Tag === 'input') {
      element = { checked };
    } else if (type === 'button') {
      element = { disabled };
    } else {
      element = { value };
    }
    return element;
  }

  verifyHandler(type, onChange, onClick) {
    return (
      type === 'button' ? { onClick } : { onChange }
    );
  }

  // verifyValue(Tag, type, value, checked, disabled) {
  //   // console.log('value: ', value, 'checked: ', checked, 'disabled: ', disabled, 'type: ', type)
  //   return (
  //     type === 'checkbox' && Tag === 'input' ? {checked: checked} : type === 'button' ? {disabled: disabled} : {value: value}
  //   )
  // }

  renderElements(name, text, type, options) {
    let element = '';
    if (name === 'alreadyHave' || type === 'button') {
      element = text;
    } else if (type === 'select') {
      element = options.map((option, index) => (
        <option key={ index }>
          { option }
        </option>
      ));
    } else {
      element = null;
    }
    return element;
  }

  render() {
    const { cardName, onInputChange, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, onSaveButtonClick, cardImage, cardTrunfo, cardRare,
      hasTrunfo, isSaveButtonDisabled } = this.props;

    const HTMLElements = [
      {
        Tag: 'input',
        name: 'cardName',
        type: 'text',
        dataTestid: 'name-input',
        value: cardName,
        onChange: onInputChange,
      },
      {
        Tag: 'input',
        name: 'cardDescription',
        type: 'textarea',
        dataTestid: 'description-input',
        value: cardDescription,
        onChange: onInputChange,
      },
      {
        Tag: 'input',
        name: 'cardAttr1',
        type: 'number',
        dataTestid: 'attr1-input',
        value: cardAttr1,
        onChange: onInputChange,
      },
      {
        Tag: 'input',
        name: 'cardAttr2',
        type: 'number',
        dataTestid: 'attr2-input',
        value: cardAttr2,
        onChange: onInputChange,
      },
      {
        Tag: 'input',
        name: 'cardAttr3',
        type: 'number',
        dataTestid: 'attr3-input',
        value: cardAttr3,
        onChange: onInputChange,
      },
      {
        Tag: 'input',
        name: 'cardImage',
        type: 'text',
        dataTestid: 'image-input',
        value: cardImage,
        onChange: onInputChange,
      },
      {
        Tag: 'select',
        name: 'cardRare',
        type: 'select',
        dataTestid: 'rare-input',
        options: ['normal', 'raro', 'muito raro'],
        value: cardRare,
        onChange: onInputChange,
      },
      {
        Tag: hasTrunfo ? 'p' : 'input',
        name: hasTrunfo ? 'alreadyHave' : 'cardTrunfo',
        type: 'checkbox',
        dataTestid: 'trunfo-input',
        checked: cardTrunfo,
        text: 'Você já tem um Super Trunfo em seu baralho',
        onChange: onInputChange,
      },
      {
        Tag: 'button',
        name: 'isSaveButtonDisabled',
        type: 'button',
        dataTestid: 'save-button',
        text: 'Salvar',
        disabled: isSaveButtonDisabled,
        onClick: onSaveButtonClick,
      },
    ];

    return (
      <div>
        { HTMLElements.map((E, index) => (
          <label key={ index } htmlFor={ E.dataTestid }>
            <E.Tag
              type={ E.type }
              data-testid={ E.dataTestid }
              name={ E.name }
              { ...this.verifyValue([E.Tag, E.type, E.value, E.checked, E.disabled]) }
              { ...this.verifyHandler(E.type, E.onChange, E.onClick) }
            >
              { this.renderElements(E.name, E.text, E.type, E.options) }
            </E.Tag>
          </label>
        )) }
      </div>
    );
  }
}

Form.defaultProps = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardImage: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  cardRare: PropTypes.string,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
};

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardImage: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  cardRare: PropTypes.string,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
};

export default Form;
