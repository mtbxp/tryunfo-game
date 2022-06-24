import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './styles/global.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      descricao: '',
      atributo1: '',
      atributo2: '',
      atributo3: '',
      imagem: '',
      selecionar: '',
      checkbox: '',

    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  };

  render() {
    const { nome, descricao, atributo1, atributo2,
      atributo3, imagem, selecionar, checkbox } = this.state;
    return (
      <div>
        <h1> Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ nome }
          cardDescription={ descricao }
          cardAttr1={ atributo1 }
          cardAttr2={ atributo2 }
          cardAttr3={ atributo3 }
          cardImage={ imagem }
          cardRare={ selecionar }
          cardTrunfo={ checkbox }
        />
        <Card
          cardName={ nome }
          cardDescription={ descricao }
          cardAttr1={ atributo1 }
          cardAttr2={ atributo2 }
          cardAttr3={ atributo3 }
          cardImage={ imagem }
          cardRare={ selecionar }
          cardTrunfo={ checkbox }
        />
      </div>
    );
  }
}

export default App;
