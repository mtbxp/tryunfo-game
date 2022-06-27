import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

const INITIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: true,
  onInputChange: '',
  onSaveButtonClick: '',
  cardList: '',
};

class App extends React.Component {
  constructor() {
    super();
    this.state = { ...INITIAL_STATE };
  }

  saveCardList = (event) => {
    event.preventDefault();
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo, cardList } = this.state;
    const card = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.setState({
      cardList: [card, ...cardList],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: '',
    });
  }

  handleValue = ({ target }) => {
    const { type, name } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.validateForm());
  };

  validateForm = () => {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage } = this.state;
    const maxAtt = 90;
    const maxSumAtt = 210;
    if (
      cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && parseInt(cardAttr1, 10) >= 0
      && parseInt(cardAttr1, 10) <= maxAtt
      && parseInt(cardAttr2, 10) >= 0
      && parseInt(cardAttr2, 10) <= maxAtt
      && parseInt(cardAttr3, 10) >= 0
      && parseInt(cardAttr3, 10) <= maxAtt
      && (parseInt(cardAttr1, 10) + parseInt(cardAttr2, 10) + parseInt(cardAttr3, 10)
         <= maxSumAtt)
    ) this.setState({ isSaveButtonDisabled: false });
    else this.setState({ isSaveButtonDisabled: true });
  }

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
      hasTrunfo,
      isSaveButtonDisabled,
      // onInputChange, lembrar dessas linhas ---------------------------------
      // onSaveButtonClick,
    } = this.state;
    return (
      <div>
        <h1> Tryunfo </h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleValue } // declarei a function aqui
          onSaveButtonClick={ this.saveCardList }
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
