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
      thumbnail: '',
      rare: 'normal',
      trunfo: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
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
