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
