import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    // this.handleChange = this.handleChange.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  handleChange = ({ target }) => {
    const { name, type } = target;
    const MAX_ATT = 90;
    const MAX_POINTS = 210;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
        cardImage } = this.state;
      console.log('cardAtt1', parseInt(cardAttr1, 10));
      console.log('cardAtt2', parseInt(cardAttr2, 10));
      console.log('cardAtt3', parseInt(cardAttr3, 10));
      console.log('cardName', cardName.length);
      console.log('cardDescription', cardDescription.length);
      console.log('cardImage', cardImage.length);

      if (cardName.length > 0 && cardDescription.length > 0 && cardImage.length > 0
        && parseInt(cardAttr1, 10) <= MAX_ATT && parseInt(cardAttr2, 10) <= MAX_ATT
        && parseInt(cardAttr3, 10) <= MAX_ATT && parseInt(cardAttr1, 10) > 0
        && parseInt(cardAttr2, 10) > 0 && parseInt(cardAttr3, 10) > 0
        && parseInt(cardAttr1, 10) + parseInt(cardAttr2, 10) + parseInt(cardAttr3, 10)
        <= MAX_POINTS) {
        this.setState({ isSaveButtonDisabled: false });
      } else {
        this.setState({ isSaveButtonDisabled: true });
      }
    });
    // const LIST = ['cardName', 'cardDescription', 'cardAttr1', 'cardAttr2', 'cardAttr3',
    //  'cardImage', 'cardRare'];
  };

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.handleSubmit }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
