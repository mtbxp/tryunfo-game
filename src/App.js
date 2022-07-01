import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    nameInput: '',
    descriptionInput: '',
    attr1Input: '0',
    attr2Input: '0',
    attr3Input: '0',
    imageInput: '',
    rareInput: 'normal',
    trunfoInput: false,
    buttonDisabled: true,
    savedCards: [],
  }

  toggleButton = () => {
    const {
      nameInput, descriptionInput, imageInput, attr1Input, attr2Input, attr3Input,
    } = this.state;
    const attr1Number = parseInt(attr1Input, 10);
    const attr2Number = parseInt(attr2Input, 10);
    const attr3Number = parseInt(attr3Input, 10);
    const maxTotal = 210;
    const maxAtt = 90;
    const minAtt = 0;
    if (nameInput !== ''
    && descriptionInput !== ''
    && imageInput !== ''
    && attr1Number >= minAtt
    && attr2Number >= minAtt
    && attr3Number >= minAtt
    && attr1Number <= maxAtt
    && attr2Number <= maxAtt
    && attr3Number <= maxAtt
    && (attr1Number + attr2Number + attr3Number) <= maxTotal) {
      this.setState({
        buttonDisabled: false,
      });
    } else {
      this.setState({
        buttonDisabled: true,
      });
    }
  }

  handleChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.toggleButton);
    this.trunfoValidation();
  }

  saveCard = () => {
    const carta = this.state;
    this.setState((prevstate) => ({
      nameInput: '',
      descriptionInput: '',
      attr1Input: '0',
      attr2Input: '0',
      attr3Input: '0',
      imageInput: '',
      rareInput: 'normal',
      trunfoInput: false,
      buttonDisabled: true,
      savedCards: [...prevstate.savedCards, carta],
    }), document.querySelector('form').reset());
  }

  trunfoValidation = () => {
    const { savedCards } = this.state;
    return savedCards.some((card) => card.trunfoInput === true);
  }

  render() {
    const {
      nameInput,
      descriptionInput,
      attr1Input,
      attr2Input,
      attr3Input,
      imageInput,
      rareInput,
      trunfoInput,
      buttonDisabled,
      savedCards,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <main>
          <h2>Crie sua carta</h2>
          <Form
            cardName={ nameInput }
            cardDescription={ descriptionInput }
            cardAttr1={ attr1Input }
            cardAttr2={ attr2Input }
            cardAttr3={ attr3Input }
            cardImage={ imageInput }
            cardRare={ rareInput }
            cardTrunfo={ trunfoInput }
            onInputChange={ this.handleChange }
            isSaveButtonDisabled={ buttonDisabled }
            onSaveButtonClick={ this.saveCard }
            hasTrunfo={ this.trunfoValidation() }
          />
          <Card
            cardName={ nameInput }
            cardDescription={ descriptionInput }
            cardAttr1={ attr1Input }
            cardAttr2={ attr2Input }
            cardAttr3={ attr3Input }
            cardImage={ imageInput }
            cardRare={ rareInput }
            cardTrunfo={ trunfoInput }
          />
          <ul>
            {
              savedCards.map((card) => (
                <li key={ card.nameInput }>
                  <Card
                    cardName={ card.nameInput }
                    cardDescription={ card.descriptionInput }
                    cardAttr1={ card.attr1Input }
                    cardAttr2={ card.attr2Input }
                    cardAttr3={ card.attr3Input }
                    cardImage={ card.imageInput }
                    cardRare={ card.rareInput }
                    cardTrunfo={ card.trunfoInput }
                  />
                </li>
              ))
            }
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
