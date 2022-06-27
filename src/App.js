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
    };
  }

validation = () => {
  const { name,
    description,
    atribute1,
    atribute2,
    atribute3,
    image } = this.state;
  this.setState({
    button: !(name !== ''
    && description !== ''
    && image !== ''
    && atribute1 >= 0
    && atribute2 >= 0
    && atribute3 >= 0),
  });
}

onInputChange = ({ target }) => {
  const { name, value } = target;
  this.setState(({ [name]: value }), () => this.validation());
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
