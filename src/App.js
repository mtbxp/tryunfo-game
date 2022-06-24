import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      defaultProps: {
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: 'raro',
        cardTrunfo: true,
        hasTrunfo: false,
        isSaveButtonDisabled: false,
        onInputChange: () => { },
        onSaveButtonClick: () => { },
      },
    };
  }

  render() {
    const { defaultProps } = this.state;
    return (
      <div>
        <Form { ...defaultProps } />
        <Card { ...defaultProps } />
      </div>
    );
  }
}

export default App;
