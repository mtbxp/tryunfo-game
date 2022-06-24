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
      atributo1: '0',
      atributo2: '0',
      atributo3: '0',
      imagem: '',
      selecionar: '',
      checkbox: '',
      isSaveButtonDisabled: true,
    };
  }

  onInputChange = ({ target }) => {
    const maxValue = 210;
    const maxValue2 = 90;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      const { nome, descricao, imagem, selecionar, atributo1,
        atributo2, atributo3 } = this.state;
      const total = parseInt(atributo1, 10) + parseInt(atributo2, 10)
      + parseInt(atributo3, 10);
      if (nome !== '' && descricao !== '' && imagem !== '' && selecionar !== ''
       && total <= maxValue && parseInt(atributo1, 10)
       >= 0 && parseInt(atributo1, 10) <= maxValue2
       && parseInt(atributo2, 10) >= 0 && parseInt(atributo2, 10) <= maxValue2
       && parseInt(atributo3, 10) >= 0 && parseInt(atributo3, 10) <= maxValue2) {
        this.setState({ isSaveButtonDisabled: false });
      } else {
        this.setState({ isSaveButtonDisabled: true });
      }
      console.log(total);
    });
  };

  render() {
    const { nome, descricao, atributo1, atributo2,
      atributo3, imagem, selecionar, checkbox, isSaveButtonDisabled } = this.state;
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
          isSaveButtonDisabled={ isSaveButtonDisabled }
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
