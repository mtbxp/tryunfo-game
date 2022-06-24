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
      superTrunfo: false,
    };

    this.handle = this.handle.bind(this);
  }

  handle({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      name, description, attr1, attr2, attr3, image, rare, superTrunfo,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo do Kauan Lets Bora</h1>
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
          isSaveButtonDisabled={ false }
          onInputChange={ this.handle }
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
