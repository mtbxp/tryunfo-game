import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardInfo: {
        cardName: '',
        cardDescription: '',
        cardAttr1: '',
        cardAttr2: '',
        cardAttr3: '',
        cardImage: '',
        cardRare: 'Normal',
        cardTrunfo: false,
        hasTrunfo: false,
        isSaveButtonDisabled: true,
      },
    };
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState((state) => ({
      cardInfo: {
        ...state.cardInfo,
        [name]: value,
      },
    }));
  }

  onSaveButtonClick = () => {
    //
  }

  render() {
    const { cardInfo } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form onInputChange={ this.onInputChange } cardInfo={ cardInfo } />
        <Card cardInfo={ cardInfo } />
      </div>
    );
  }
}

export default App;
