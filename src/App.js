import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      descrip: '',
      attr01: '',
      attr02: '',
      attr03: '',
      image: '',
      rare: '',
      trunfo: '',
      isSaveButtonDisabled: true,
      deck: [],
    };
  }

  addNewCard = () => {
    const { name, descrip, image, attr01, attr02, attr03, rare, trunfo } = this.state;
    const card = { name,
      descrip,
      image,
      attr01,
      attr02,
      attr03,
      rare,
      trunfo };
    this.setState((prevState) => ({
      deck: [...prevState.deck, card],
    }));
    this.setState({
      name: '',
      descrip: '',
      image: '',
      attr01: 0,
      attr02: 0,
      attr03: 0,
      rare: '',
      trunfo: '',
    });
  }

  validateForms = () => {
    const { name,
      descrip,
      attr01,
      attr02,
      attr03,
      image } = this.state;
    const maxValue = 210;
    const maxPoints = 90;
    const sumPoints = Number(attr01) + Number(attr02) + Number(attr03);
    this.setState({
      isSaveButtonDisabled: !(name !== ''
      && descrip !== ''
      && image !== ''
      && attr01 >= 0
      && attr02 >= 0
      && attr03 >= 0
      && attr01 <= maxPoints
      && attr02 <= maxPoints
      && attr03 <= maxPoints
      && sumPoints <= maxValue),
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    }, () => this.validateForms());
  };

  render() {
    const { name, descrip, image, attr01, attr02, attr03, rare, trunfo,
      isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ name }
          cardDescription={ descrip }
          cardAttr1={ attr01 }
          cardAttr2={ attr02 }
          cardAttr3={ attr03 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          onInputChange={ this.handleChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.addNewCard }
        />
        <Card
          cardName={ name }
          cardDescription={ descrip }
          cardAttr1={ attr01 }
          cardAttr2={ attr02 }
          cardAttr3={ attr03 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
        />
      </div>
    );
  }
}

export default App;
