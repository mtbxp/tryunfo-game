import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      descricao: '',
      imagem: '',
      atr1: '',
      atr2: '',
      atr3: '',
      raro: '',
      supertrunfo: false,
    };
  }

  onInputChange = ({ target }) => {
    const { name, type, checked, value } = target;
    const valor = type === 'checkbox' ? checked : value;
    this.setState({ [name]: valor });
  }

  onSavebuttonClick = () => {

  }

  render() {
    const {
      nome,
      descricao,
      atr1,
      atr2,
      atr3,
      imagem,
      raro,
      supertrunfo,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo!!</h1>
        <Form
          onInputChange={ this.onInputChange }
        />

        <Card
          cardName={ nome }
          cardDescription={ descricao }
          cardAttr1={ atr1 }
          cardAttr2={ atr2 }
          cardAttr3={ atr3 }
          cardImage={ imagem }
          cardRare={ raro }
          cardTrunfo={ supertrunfo }

        />
      </div>
    );
  }
}

export default App;
