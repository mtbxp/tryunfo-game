import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

const initialState = {
  nameCard: '',
  description: '',
  attack: '0',
  defence: '0',
  speed: '0',
  image: '',
  rare: '',
  trunfo: false,
  buttonDisabled: true,
};

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      name,
      description,
      attack,
      defence,
      speed,
      image,
      rare,
      trunfo,
      // buttonDisabled,
    } = this.state;

    return (
      <main>
        <div>
          <h1>Tryunfo</h1>
          <Form
            cardName={ name }
            cardDescription={ description }
            cardAttr1={ attack }
            cardAttr2={ defence }
            cardAttr3={ speed }
            cardImage={ image }
            cardRare={ rare }
            cardTrunfo={ trunfo }
            onInputChange={ this.onInputChange }
          />
          <Card
            cardName={ name }
            cardDescription={ description }
            cardAttr1={ attack }
            cardAttr2={ defence }
            cardAttr3={ speed }
            cardImage={ image }
            cardRare={ rare }
            cardTrunfo={ trunfo }
          />
        </div>
      </main>
    );
  }
}

export default App;
