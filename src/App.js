import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartName: '',
      description: '',
      historia: 0,
      inteligencia: 0,
      carisma: 0,
      URL: '',
      raridade: '',
      superTrunfo: false,
    };
  }

  heandleState = ({ target }) => {
    console.log(target);
    const { name, value } = target;
    const valueCard = target.type === 'checkbox' ? target.checked : value;
    this.setState({ [name]: valueCard });
  }

  render() {
    const { cartName,
      description,
      historia,
      inteligencia,
      carisma,
      URL,
      raridade,
      superTrunfo } = this.state;

    return (
      <div>
        <h1>Pixar Cart</h1>
        <Form
          cardName={ cartName }
          cardDescription={ description }
          cardAttr1={ historia }
          cardAttr2={ inteligencia }
          cardAttr3={ carisma }
          cardImage={ URL }
          cardRare={ raridade }
          cardTrunfo={ superTrunfo }
          onInputChange={ this.heandleState }
        />
        <h2>Nova Carta</h2>
        <Card
          cardName={ cartName }
          cardDescription={ description }
          cardAttr1={ historia }
          cardAttr2={ inteligencia }
          cardAttr3={ carisma }
          cardImage={ URL }
          cardRare={ raridade }
          cardTrunfo={ superTrunfo }
        />
      </div>
    );
  }
}

export default App;
