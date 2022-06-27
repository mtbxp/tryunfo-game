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
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
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
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ atribute1 }
          cardAttr2={ atribute2 }
          cardAttr3={ atribute3 }
          cardImage={ imagePath }
          cardRare={ rarity }
          cardTrunfo={ superTrunfo }
          // hasTrunfo,
          isSaveButtonDisabled={ false }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ atribute1 }
          cardAttr2={ atribute2 }
          cardAttr3={ atribute3 }
          cardImage={ imagePath }
          cardRare={ rarity }
          cardTrunfo={ superTrunfo }
        />
      </div>
    );
  }
}

export default App;
