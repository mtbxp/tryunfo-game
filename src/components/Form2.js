import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  renderContent(name, text) {
    name === 'alreadyHave' ? text : type === 'button' ? text : type === 'select' ? options.map((option, index) => (
      <option key={ index }>{ option }</option>
    )) : null
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
        { HTMLElements.map(({ Tag, name, type, dataTestid, text, options, value, checked,
          disabled, onChange, onClick }, index) => (
          <label key={ index }>
            <Tag
              type={ type }
              data-testid={ dataTestid }
              name={ name }
              { ...this.verifyValue(Tag, type, value, checked, disabled) }
              { ...this.verifyHandler(type, onChange, onClick) }
            >
              
              { name === 'alreadyHave' ? text : type === 'button' ? text : type === 'select' ? options.map((option, index) => (
                  <option key={ index }>{ option }</option>
                )) : null}
            </Tag>
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
  cardTrunfo: PropTypes.string,
  cardRare: PropTypes.string,
  hasTrunfo: PropTypes.string,
  isSaveButtonDisabled: PropTypes.string,
  onInputChange: PropTypes.string,
  onSaveButtonClick: PropTypes.string,
};

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardImage: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardTrunfo: PropTypes.string,
  cardRare: PropTypes.string,
  hasTrunfo: PropTypes.string,
  isSaveButtonDisabled: PropTypes.string,
  onInputChange: PropTypes.string,
  onSaveButtonClick: PropTypes.string,
};

export default Form;
