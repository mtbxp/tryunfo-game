import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  render() {
    const defaultProps = {
      cardName: 'Nome da carta',
      cardDescription: 'Descrição da carta',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: 'url-to-image',
      cardRare: 'raro',
      cardTrunfo: true,
      hasTrunfo: false,
      isSaveButtonDisabled: false,
      onInputChange: () => { },
      onSaveButtonClick: () => { },
    };
    return (
      <div>
        <Form { ...defaultProps } />
      </div>
    );
  }
}

export default App;
