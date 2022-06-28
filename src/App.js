import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

// feito com consulta à:
// https://pt-br.reactjs.org/docs/forms.html
// e gabarito questões do course do dia 11.2
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      cardDeck: [],
    };
  }

  // onInputChange = (event) => {
  //   const target = event.target;
  //   const name = target.name;
  //   const type = target.type;
  //   const checked = target.checked;
  //   const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
  //   this.setState({ [event.target.name]: value });
  // }

  onInputChange = ({ target }) => {
    const { name, type, checked } = target;
    const value = type === 'checkbox' ? checked : target.value;
    this.setState({ [name]: value });
  }

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardDeck,
    } = this.state;

    this.setState({
      cardDeck: [
        ...cardDeck,
        { cardName,
          cardDescription,
          cardImage,
          cardRare,
          cardAttr1,
          cardAttr2,
          cardAttr3,
        },
      ],
    });

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
    });
  }

  isSaveButtonDisabled = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const cardAttr1Number = Number(cardAttr1);
    const cardAttr2Number = Number(cardAttr2);
    const cardAttr3Number = Number(cardAttr3);

    const maxPointsTotal = 210;
    const maxPointsAtt = 90;

    if (cardName === ''
    || cardDescription === ''
    || cardImage === ''
    || cardRare === '') {
      return true;
    }

    if ((cardAttr1Number + cardAttr2Number + cardAttr3Number) > maxPointsTotal) {
      return true;
    }

    if (cardAttr1Number < 0
      || cardAttr2Number < 0
      || cardAttr3Number < 0) {
      return true;
    }

    if (cardAttr1Number > maxPointsAtt
      || cardAttr2Number > maxPointsAtt
      || cardAttr3Number > maxPointsAtt) {
      return true;
    }

    return false;
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
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
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
          isSaveButtonDisabled={ this.isSaveButtonDisabled() }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
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
