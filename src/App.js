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
      rarity: '',
      trunfo: false,
      hasTrunfo: false,
      buttonDisabled: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCardCreation = this.handleCardCreation.bind(this);
  }

  handleChange() {
    return 'não definida';
  }

  handleCardCreation() {
    return 'não definida';
  }

  render() {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rarity,
      trunfo,
      hasTrunfo,
      buttonDisabled,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <section id="section__create-card">
          <Form
            cardName={ name }
            cardDescription={ description }
            cardAttr1={ attr1 }
            cardAttr2={ attr2 }
            cardAttr3={ attr3 }
            cardImage={ image }
            cardRare={ rarity }
            cardTrunfo={ trunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ buttonDisabled }
            onInputChange={ this.handleChange }
            onSaveButtonClick={ this.handleCardCreation }
          />
          <Card
            cardName={ name }
            cardDescription={ description }
            cardAttr1={ attr1 }
            cardAttr2={ attr2 }
            cardAttr3={ attr3 }
            cardImage={ image }
            cardRare={ rarity }
            cardTrunfo={ trunfo }
          />
        </section>
      </div>
    );
  }
}

export default App;
