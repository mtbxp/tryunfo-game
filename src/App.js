import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nameCard: '',
      descriptionCard: '',
      attr1: '',
      attr2: '',
      attr3: '',
      imageCard: '',
      rarity: '',
      trunfo: false,
      isSaveButtonDisabled: false,
      onInputChange: this.handleChange,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      nameCard,
      descriptionCard,
      attr1,
      attr2,
      attr3,
      imageCard,
      rarity,
      trunfo,
      isSaveButtonDisabled,
      onInputChange,
    } = this.state;
    return (
      <>
        <h1>Tryunfo</h1>
        <Form
          cardName={ nameCard }
          cardDescription={ descriptionCard }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ imageCard }
          cardRare={ rarity }
          cardTrunfo={ trunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ onInputChange }
        />
        <Card
          cardName={ nameCard }
          cardDescription={ descriptionCard }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ imageCard }
          cardRare={ rarity }
          cardTrunfo={ trunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ onInputChange }
        />
      </>
    );
  }
}

export default App;
