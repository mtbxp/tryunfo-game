import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      image: '',
      rare: '',
      trunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
      hasTrunfo: false,
    };
  }

  validateButton = () => {
    const { name, description, attr1, attr2, attr3, image } = this.state;
    const valueMax = 90;
    const sum = Number(attr1) + Number(attr2) + Number(attr3);
    const sumMax = 210;

    if (!name || !description || !image
      || attr1 > valueMax || attr2 > valueMax || attr3 > valueMax
      || attr1 < 0 || attr2 < 0 || attr3 < 0 || sum > sumMax
    ) {
      return true;
    }
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => this.setState({
      isSaveButtonDisabled: this.validateButton(),
    }));
  }

  SaveButton = () => {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo,
    } = this.state;
    const card = {
      nome: name,
      descricao: description,
      imagem: image,
      raridade: rare,
      atri1: attr1,
      atri2: attr2,
      atri3: attr3,
      Super: trunfo,
    };

    this.setState((prevState) => ({
      cards: [...prevState.cards, card],
      name: '',
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      image: '',
      rare: 'normal',
    }), () => {
      const { cards } = this.state;
      const validate = cards.some((element) => element.Super === true);
      this.setState(({
        hasTrunfo: validate,
      }));
    });
  };

  render() {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo,
      isSaveButtonDisabled,
      hasTrunfo,
    } = this.state;

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
          hasTrunfo={ hasTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.SaveButton }
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
