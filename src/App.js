import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      image: '',
      attr1: '',
      attr2: '',
      attr3: '',
      rare: '',
      trunfo: '',
      button: true,
      allCards: [],
      hasTrunfo: false,
    };
  }

  checkForm = () => {
    const { name, description, image, attr1, attr2, attr3 } = this.state;
    const maxSumValue = 210;
    const maxValue = 90;
    const sum = Number(attr1) + Number(attr2) + Number(attr3);
    this.setState({
      button: !(name !== ''
      && description !== ''
      && image !== ''
      // && rare !== ''
      && sum <= maxSumValue
      && attr1 <= maxValue
      && attr2 <= maxValue
      && attr3 <= maxValue
      && attr1 >= 0
      && attr2 >= 0
      && attr3 >= 0),
    });
  }

  // mentoria do Luanderson
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState(({
      [name]: value,
    }), () => this.checkForm());
  };

  addNewCard = () => {
    const { name, description, image, attr1, attr2, attr3, rare, trunfo } = this.state;
    const card = { name,
      description,
      image,
      attr1,
      attr2,
      attr3,
      rare,
      trunfo };
    this.setState((prevState) => ({
      allCards: [...prevState.allCards, card],
    }));
    this.setState({
      name: '',
      description: '',
      image: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      rare: '',
      trunfo: '',
      hasTrunfo: !this.hasTrunfo(),
    });
  }

  hasTrunfo = () => {
    const { allCards } = this.state;
    return allCards.some((card) => card.trunfo);
  };

  render() {
    const { name,
      description,
      image,
      attr1,
      attr2,
      attr3,
      rare,
      trunfo,
      button,
      hasTrunfo } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          onInputChange={ this.handleChange }
          isSaveButtonDisabled={ button }
          onSaveButtonClick={ this.addNewCard }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
        />
      </div>
    );
  }
}

export default App;
