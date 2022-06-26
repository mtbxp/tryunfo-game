import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

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
      raridade: '',
      trunfo: false,
      btnDisabled: true,
      card: [],
      hasTrunfo: true,
    };
  }

  validateBtn = () => {
    const { name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      raridade,
    } = this.state;

    const addInfo = name !== '' && image !== '' && description !== '' && raridade !== '';

    const attrMaxSum = 210;
    const maxAttr = 90;
    const minAttr = 0;
    const maxSum = Number(attr1) + Number(attr2) + Number(attr3) <= attrMaxSum;

    this.setState({
      btnDisabled: !(addInfo
        && maxSum
        && attr1 >= minAttr
        && attr2 >= minAttr
        && attr3 >= minAttr
        && attr1 <= maxAttr
        && attr2 <= maxAttr
        && attr3 <= maxAttr),
    });
  }

  funcOnInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState(({ [name]: value }), () => this.validateBtn());
  }

  funcHasTrunfo = () => {
    const { card } = this.state;
    return card.some((element) => element.trunfo);
  }

  funcOnSaveButtonClick = () => {
    const { name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      raridade,
      trunfo,
    } = this.state;

    this.setState((prev) => ({
      card: [...prev.card, { name,
        description,
        attr1,
        attr2,
        attr3,
        image,
        raridade,
        trunfo }],
    }));
    this.setState({
      name: '',
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      image: '',
      raridade: 'normal',
      hasTrunfo: this.funcHasTrunfo(),
    });
  };

  render() {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      raridade,
      trunfo,
      btnDisabled,
      hasTrunfo,
    } = this.state;
    return (
      <div>
        <h1> TRYUNFO </h1>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ raridade }
          cardTrunfo={ trunfo }
          onInputChange={ this.funcOnInputChange }
          isSaveButtonDisabled={ btnDisabled }
          onSaveButtonClick={ this.funcOnSaveButtonClick }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ raridade }
          cardTrunfo={ trunfo }
        />
      </div>
    );
  }
}

export default App;
