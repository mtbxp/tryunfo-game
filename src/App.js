import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

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
      rare: '',
      trunfo: false,
      button: true,
      arrayInforCard: [],
    };
  }

  habilitButton = () => {
    const { name, description, image, rare, attr1, attr2, attr3 } = this.state;

    const inputsText = [name, description, image, rare];
    const textArea = inputsText.every((area) => area.length > 0);

    const minPoint = 0;
    const maxPointAttr = 90;
    const maxPointAllsAttr = 210;
    const attrText = [Number(attr1), Number(attr2), Number(attr3)];
    const attrArea = Number(attr1) + Number(attr2) + Number(attr3);
    const attrSum = attrText.every((attr) => attr >= minPoint
    && attr <= maxPointAttr && attrArea <= maxPointAllsAttr);

    this.setState({
      button: !(textArea && attrSum),
    });
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(({
      [name]: value,
    }),

    () => this.habilitButton());
  }

  saveInforms = () => {
    const { name, description, image, rare, trunfo, attr1, attr2,
      attr3 } = this.state;
    const objInf = {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo,
    };

    this.setState((prevState) => ({
      arrayInforCard: [...prevState.arrayInforCard, objInf],
    }),

    () => {
      this.setState({
        name: '',
        description: '',
        attr1: 0,
        attr2: 0,
        attr3: 0,
        image: '',
        rare: 'normal',
      });
    });
  }

  render() {
    const { name, description, attr1, attr2,
      attr3, image, rare, trunfo, button } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          isSaveButtonDisabled={ button }
          onSaveButtonClick={ this.saveInforms }
          onInputChange={ this.onInputChange }
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
          onInputChange={ this.onInputChange }
        />
      </div>
    );
  }
}

export default App;
