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
      isSaveButtonDisabled: true,
      card: [],
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

    const objects = { name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo };

    this.setState((prevState) => ({ card: [...prevState.card, objects] }), () => {
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
      isSaveButtonDisabled,
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
          cardTrunfo={ trunfo }
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
          // isSaveButtonDisabled={ isSaveButtonDisabled }
          // onSaveButtonClick={ this.onSaveButtonClick }
        />
      </div>
    );
  }
}

export default App;
