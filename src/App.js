import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartName: '',
      description: '',
      historia: '0',
      inteligencia: '0',
      carisma: '0',
      URL: '',
      raridade: '',
      superTrunfo: false,
      buttonSave: true,
    };
  }

  validateButton = () => {
    const { cartName,
      description,
      historia,
      inteligencia,
      carisma,
      URL,
    } = this.state;

    const sum = Number(historia) + Number(inteligencia) + Number(carisma);
    const maxSum = 210;
    const pointMax = 90;
    const pointMin = 0;

    this.setState({
      buttonSave: !(cartName !== ''
      && description !== ''
      && URL !== ''
      && historia >= pointMin
      && inteligencia >= pointMin
      && carisma >= pointMin
      && historia <= pointMax
      && inteligencia <= pointMax
      && carisma <= pointMax
      && sum <= maxSum),
    });
  }

  heandleState = ({ target }) => {
    const { name, value, type, checked } = target;
    const valueCard = type === 'checkbox' ? checked : value;
    this.setState({ [name]: valueCard }, () => this.validateButton());
  }

  render() {
    const { cartName,
      description,
      historia,
      inteligencia,
      carisma,
      URL,
      raridade,
      superTrunfo,
      buttonSave,
    } = this.state;

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
          isSaveButtonDisabled={ buttonSave }
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
