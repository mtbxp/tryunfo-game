import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      image: '',
      attr1: '',
      attr2: '',
      attr3: '',
      rare: '',
      trunfo: '',
      button: true,
    };
  }

  checkForm = () => {
    const { name, description, image, attr1, attr2, attr3 } = this.state;
    const maxSumValue = 210;
    const maxValue = 90;
    const sum = Number(attr1) + Number(attr2) + Number(attr3);
    this.setState({
      button: !(name !== ''
      && description !== ''
      && image !== ''
      // && rare !== ''
      && sum <= maxSumValue
      && attr1 <= maxValue
      && attr2 <= maxValue
      && attr3 <= maxValue
      && attr1 >= 0
      && attr2 >= 0
      && attr3 >= 0),
    });
  }

  // mentoria do Luanderson
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState(({
      [name]: value,
    }), () => this.checkForm());
  };

  render() {
    const { name,
      description,
      image, attr1,
      attr2, attr3,
      rare, trunfo,
      button } = this.state;
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
          onInputChange={ this.handleChange }
          isSaveButtonDisabled={ button }
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
