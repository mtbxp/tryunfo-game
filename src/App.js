import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true, // iniciar a página com o botão desabilitado.
      // cards: [],
    };
  }

validateForm = () => {
  const { cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage } = this.state;

  if (cardName
  && cardDescription
  && cardImage
  && cardAttr1
  && cardAttr2
  && cardAttr3
  ) {
    this.setState({ isSaveButtonDisabled: false });
  } else {
    this.setState({ isSaveButtonDisabled: true });
  }
};

validateInputsAttr = (name, value) => {
  const maxValue = 90;
  if (value >= 0 && value <= maxValue) {
    this.setState({ [name]: value });
  } else {
    this.setState({ [name]: '' });
  }
};

// função para pegar o valor de cada input/prop e passar em seu estado.
onInputChange = ({ target }) => {
  const { name, type, value, checked } = target;
  if (type === 'number') {
    this.validateInputsAttr(name, value);
  } else {
    // type === 'checkbox' ? checked : value;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    }, () => this.validateForm());
  }
};

handleSubmit = (event) => {
  event.preventDefault();
};

/* onSaveButtonClick = (event) => {
  event.preventDefault();
}; */

render() {
  const { cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
    cardRare,
    cardTrunfo,
    isSaveButtonDisabled,
  } = this.state;
  return (
    <div>
      <h1>Tryunfo</h1>
      <Form
        onInputChange={ this.onInputChange }
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
