import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName=""
          cardDescription=""
          cardAttr1={ 0 }
          cardAttr2={ 0 }
          cardAttr3={ 0 }
          cardImage=""
          cardRare=""
          cardTrunfo={ false }
          hasTrunfo={ false }
          isSaveButtonDisabled={ false }
          onInputChange
          onSaveButtonClick
        />
      </div>
    );
  }
}

export default App;
