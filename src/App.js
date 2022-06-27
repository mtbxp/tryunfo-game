import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      atribute1: '',
      atribute2: '',
      atribute3: '',
      image: '',
      rare: '',
      trunfo: '',
      button: true,
      cards: [],
    };
  }

validation = () => {
  const { name,
    description,
    atribute1,
    atribute2,
    atribute3,
    image } = this.state;

  const maxValue = 210;
  const maxPoints = 90;
  const sumPoints = Number(atribute1) + Number(atribute2) + Number(atribute3);

  this.setState({
    button: !(name !== ''
    && description !== ''
    && image !== ''
    && atribute1 >= 0
    && atribute2 >= 0
    && atribute3 >= 0
    && atribute1 <= maxPoints
    && atribute2 <= maxPoints
    && atribute3 <= maxPoints
    && sumPoints <= maxValue),
  });
}

onInputChange = ({ target }) => {
  const { name, value } = target;
  this.setState(({ [name]: value }), () => this.validation());
}

onSaveButtonClick = () => {
  const { name,
    description,
    atribute1,
    atribute2,
    atribute3,
    image,
    rare,
    trunfo,
    cards } = this.state;

  const toMakeCard = {
    name,
    description,
    atribute1,
    atribute2,
    atribute3,
    image,
    rare,
    trunfo,
  };

  this.setState((element) => ({ cards: [...element.cards, toMakeCard] }));

  this.setState({
    name: '',
    description: '',
    atribute1: 0,
    atribute2: 0,
    atribute3: 0,
    image: '',
    rare: 'normal',
    trunfo: false,
  });
}

render() {
  const {
    name,
    description,
    atribute1,
    atribute2,
    atribute3,
    image,
    rare,
    trunfo,
    button } = this.state;

  return (
    <div>
      <h1>Tryunfo</h1>
      <Form
        cardName={ name }
        cardDescription={ description }
        cardAttr1={ atribute1 }
        cardAttr2={ atribute2 }
        cardAttr3={ atribute3 }
        cardImage={ image }
        cardRare={ rare }
        cardTrunfo={ trunfo }
        onInputChange={ this.onInputChange }
        onSaveButtonClick={ this.onSaveButtonClick }
        isSaveButtonDisabled={ button }
      />
      <Card
        cardName={ name }
        cardDescription={ description }
        cardAttr1={ atribute1 }
        cardAttr2={ atribute2 }
        cardAttr3={ atribute3 }
        cardImage={ image }
        cardRare={ rare }
        cardTrunfo={ trunfo }
      />
    </div>
  );
}
}

export default App;
