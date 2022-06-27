import React from 'react';
import Card from './components/Card';
import DeckCard from './components/DeckCard';
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
      checkbox: false,
      isSaveButtonDisabled: true,
      cards: [],
      hasTrunf: false,
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
    });
  };

  onSaveButtonClick = () => {
    const { nome, descricao, imagem, selecionar, atributo1,
      atributo2, atributo3, checkbox } = this.state;
    const card = {
      name: nome,
      descricaoCarta: descricao,
      img: imagem,
      raridade: selecionar,
      att1: atributo1,
      att2: atributo2,
      att3: atributo3,
      isSuper: checkbox,
    };

    this.setState((prevState) => ({
      cards: [...prevState.cards, card],
      nome: '',
      descricao: '',
      atributo1: '0',
      atributo2: '0',
      atributo3: '0',
      imagem: '',
    }), () => {
      const { cards } = this.state;
      const result = cards.some((cardd) => cardd.isSuper === true);
      this.setState(({
        hasTrunf: result,
        checkbox: false,
      }));
    });
  };

  deleteCard = (event) => {
    const { cards } = this.state;
    const innerName = event.target.parentNode.children[0].innerText;
    const arrayName = innerName.split('Name:');
    const name = arrayName[arrayName.length - 1];
    const innerDes = event.target.parentNode.children[2].innerText;
    if (arrayName[arrayName.length - 1] === '') {
      const arrayDes = innerDes.split('Descrição do Card:');
      const descricao = arrayDes[arrayDes.length - 1];
      const newArray = cards.filter((card) => card.descricaoCarta !== descricao);
      this.setState(({
        cards: newArray,
      }), () => {
        const result = newArray.some((card1) => card1.isSuper === true);
        this.setState(({
          hasTrunf: result,
        }));
      });
      console.log(newArray);
    } else {
      const newArray = cards.filter((card) => card.name !== name);
      this.setState(({
        cards: newArray,
      }), () => {
        const result = newArray.some((carddd) => carddd.isSuper === true);
        this.setState(({
          hasTrunf: result,
        }));
      });
    }
  }

  render() {
    const { nome, descricao, atributo1, atributo2,
      atributo3, imagem, selecionar, checkbox, isSaveButtonDisabled,
      hasTrunf, cards } = this.state;
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
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasTrunf }
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
        { cards.map((card) => (
          <DeckCard
            key={ card.name }
            cardName={ card.name }
            cardDescription={ card.descricaoCarta }
            cardAttr1={ card.att1 }
            cardAttr2={ card.att2 }
            cardAttr3={ card.att3 }
            cardImage={ card.img }
            cardRare={ card.raridade }
            cardTrunfo={ card.isSuper }
            deleteCard={ this.deleteCard }
          />)) }
      </div>
    );
  }
}

export default App;
