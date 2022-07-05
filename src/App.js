import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

const SOMA_TOTAL = 210;
const MAX_PONTOS = 90;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      attr1: '',
      attr2: '',
      attr3: '',
      thumbnail: '',
      rare: '',
      trunfo: '',
      disabled: true,
    };
  }

  saveButtonValidation = () => {
    const {
      name,
      description,
      thumbnail,
      rare,
      attr1,
      attr2,
      attr3,
    } = this.state;
    if (
      name
      && description
      && thumbnail
      && rare
      && (attr1 <= MAX_PONTOS && attr1 >= 0)
      && (attr2 <= MAX_PONTOS && attr2 >= 0)
      && (attr3 <= MAX_PONTOS && attr3 >= 0)
      // https://pt.stackoverflow.com/questions/134453/como-converter-uma-string-para-int-em-javascript
      && (parseInt(attr1, 10) + parseInt(attr2, 10) + (parseInt(attr3, 10)) <= SOMA_TOTAL)
    ) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  handleChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.saveButtonValidation);
  }

  render() {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      thumbnail,
      rare,
      trunfo,
      disabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo!</h1>
        <Form
          cardName={ name }
          cardDescription={ description }
          onInputChange={ this.handleChange }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ thumbnail }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          isSaveButtonDisabled={ disabled }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          onInputChange={ this.handleChange }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ thumbnail }
          cardRare={ rare }
          cardTrunfo={ trunfo }
        />
      </div>
    );
  }
}

export default App;
