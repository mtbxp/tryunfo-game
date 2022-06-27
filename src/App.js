import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      atribute1: 0,
      atribute2: 0,
      atribute3: 0,
      imagePath: '',
      // hasTrunfo: false,
      rarity: '',
      superTrunfo: false,
      isSaveButtonDisabled: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    let value;
    if (target.type === 'checkbox') {
      value = target.checked;
    } else {
      value = target.type === 'number' ? parseInt(target.value, 10) : target.value;
    }

    this.setState({
      [name]: value,
    }, () => this.checkAllInputs());
  }

  checkAllInputs = () => {
    if (this.anyEmptyInput() || this.anyAbove90OrUnder0() || this.sumAbove210OrUnder0()) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: false,
      });
    }
  }

  anyEmptyInput = () => {
    const { name, description, imagePath, rarity } = this.state;

    if (name === '' || description === '' || imagePath === '' || rarity === '') {
      return true;
    }
    return false;
  }

  anyAbove90OrUnder0 = () => {
    const { atribute1, atribute2, atribute3 } = this.state;
    let invalido = false;
    const limit = 90;
    if (atribute1 > limit || atribute2 > limit || atribute3 > limit) {
      invalido = true;
    }
    if (atribute1 < 0 || atribute2 < 0 || atribute3 < 0) {
      invalido = true;
    }
    return invalido;
  }

  sumAbove210OrUnder0 = () => {
    const { atribute1, atribute2, atribute3 } = this.state;
    const soma = atribute1 + atribute2 + atribute3;
    const limit = 210;
    if (soma > limit || soma < 0) {
      return true;
    }

    return false;
  }

  onSaveButtonClick = () => {

  }

  render() {
    const {
      name,
      description,
      atribute1,
      atribute2,
      atribute3,
      imagePath,
      rarity,
      superTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ parseInt(atribute1, 10) }
          cardAttr2={ parseInt(atribute2, 10) }
          cardAttr3={ parseInt(atribute3, 10) }
          cardImage={ imagePath }
          cardRare={ rarity }
          cardTrunfo={ superTrunfo }
          // hasTrunfo,
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ parseInt(atribute1, 10) }
          cardAttr2={ parseInt(atribute2, 10) }
          cardAttr3={ parseInt(atribute3, 10) }
          cardImage={ imagePath }
          cardRare={ rarity }
          cardTrunfo={ superTrunfo }
        />
      </div>
    );
  }
}

export default App;
