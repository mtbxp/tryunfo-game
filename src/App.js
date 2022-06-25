import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardInfo: '',
      attr1: '',
      attr2: '',
      attr3: '',
      cardImage: '',
      cardRarity: '',
      cardTrunfo: false,
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { cardName,
      cardInfo,
      attr1,
      attr2,
      attr3,
      cardImage,
      cardRarity,
      cardTrunfo } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          onInputChange={ this.onChange }
          cardDescription={ cardInfo }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ cardImage }
          cardRare={ cardRarity }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ false }
          isSaveButtonDisabled={ false }
          onSaveButtonClick={ () => {} }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardInfo }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ cardImage }
          cardRare={ cardRarity }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
