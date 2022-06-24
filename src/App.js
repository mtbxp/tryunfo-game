import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Tryunfo </h1>
        <Form
          cardName=""
          cardRare=""
          cardImage=""
          cardTrunfo={ false }
          cardAttr2=""
          cardAttr3=""
          cardAttr1=""
          cardDescription=""
          onInputChange={ () => {} }
          isSaveButtonDisabled
          onSaveButtonClick={ () => {} }
        />
      </div>
    );
  }
}

export default App;
