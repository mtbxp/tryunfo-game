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
      // hasTrunfo: false,
      // isSaveButtonDisabled: true,
    };
  }

  validateForm = () => {
    const { name, description, image, rare, attr1, attr2, attr3 } = this.state;

    const sum = Number(attr1) + Number(attr2) + Number(attr3); // -> Number para transformar string em num parseInt tava dando erro no lint.

    const attrTotal = 210;
    const attrMax = 90;
    const attrMin = 0;

    const anyInfo = (name !== ''
      && description !== ''
      && image !== ''
      && rare !== ''
    );

    const attr = (sum <= attrTotal
      && attr1 <= attrMax
      && attr2 <= attrMax
      && attr3 <= attrMax
      && attr1 >= attrMin
      && attr2 >= attrMin
      && attr3 >= attrMin
    );

    if (anyInfo && attr) {
      return false;
    }
    return true;
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onSaveButtonClick = (e) => {
    e.preventDefault();
  }

  render() {
    const { name, description, attr1, attr2, attr3, image, rare, trunfo } = this.state;

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
          isSaveButtonDisabled={ this.validateForm() }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          add={ this.addNewCard }
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
      </div>
    );
  }
}

export default App;
