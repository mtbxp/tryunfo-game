import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      description: '',
      attr1: '',
      attr2: '',
      attr3: '',
      image: '',
      rare: 'normal',
      trunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
    };
  }

  validationButton = () => {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
    } = this.state;

    const sumAll = 210;
    const maxPointsAtt = 90;
    const zeroPoints = 0;

    if (name === ''
    || description === ''
    || image === ''
    || rare === '') {
      return true;
    }

    if (Number(attr1)
    + Number(attr2)
    + Number(attr3)
    > sumAll) {
      return true;
    }

    if (Number(attr1) > maxPointsAtt
    || Number(attr2) > maxPointsAtt
    || Number(attr3) > maxPointsAtt) {
      return true;
    }

    if (Number(attr1) < zeroPoints
    || Number(attr2) < zeroPoints
    || Number(attr3) < zeroPoints) {
      return true;
    }

    return false;
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.setState({
      isSaveButtonDisabled: this.validationButton(),
    }));
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
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

    if (trunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }

    const objects = { name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo };

    this.setState((prevState) => ({ cards: [...prevState.cards, objects] }), () => {
      this.setState({
        name: '',
        description: '',
        attr1: '0',
        attr2: '0',
        attr3: '0',
        image: '',
        rare: 'normal',
      });
    });
  }

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
      hasTrunfo,
      isSaveButtonDisabled,
      cards,
    } = this.state;

    return (
      <div>
        <h1 className="header">Tryunfo</h1>
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
          onSaveButtonClick={ this.onSaveButtonClick }
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

        { cards.map((card) => (
          <Card
            cardName={ card.name }
            cardDescription={ card.description }
            cardAttr1={ card.attr1 }
            cardAttr2={ card.attr2 }
            cardAttr3={ card.attr3 }
            cardImage={ card.image }
            cardRare={ card.rare }
            cardTrunfo={ card.trunfo }
            key={ card.name }
          />
        ))}
      </div>
    );
  }
}

export default App;
