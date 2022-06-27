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
      superTrunfo: false,
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, console.log(value));
  }

  isSaveButtonDisabled = () => {
    const inputsValue = Object.values(this.state);
    const bool1 = inputsValue.filter((value) => typeof value === 'string')
      .every((value) => value.length > 0);
    const { attr1, attr2, attr3 } = this.state;
    const limitAttr = 90;
    const bool2 = [attr1, attr2, attr3]
      .every((value) => parseInt(value, 10) >= 0 && parseInt(value, 10) <= limitAttr);
    const limitAttrTotal = 210;
    const bool3 = [attr1, attr2, attr3]
      .reduce((acc, value) => acc + parseInt(value, 10), 0) <= limitAttrTotal;
    const boolMaster = [bool1, bool2, bool3].every((bool) => bool === true);
    return boolMaster === false;
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
      superTrunfo,
    } = this.state;
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
          cardTrunfo={ superTrunfo }
          hasTrunfo={ false }
          isSaveButtonDisabled={ this.isSaveButtonDisabled() }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ () => {} }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ superTrunfo }
        />
      </div>
    );
  }
}

export default App;
