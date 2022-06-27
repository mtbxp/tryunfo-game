import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <div>
          <Form
            cardName=""
            cardDescription=""
            cardAttr1=""
            cardAttr2=""
            cardAttr3=""
            cardImage=""
            cardRare=""
            cardTrunfo={ false }
            hasTrunfo={ false }
            isSaveButtonDisabled={ false }
            onInputChange={ () => {} }
            onSaveButtonClick={ () => { } }
          />
          <Card
            cardName=""
            ardDescription=""
            cardAttr1=""
            cardAttr2=""
            cardAttr3=""
            cardImage=""
            cardRare=""
            cardTrunfo={ false }
          />
        </div>
      </div>
    );
  }
}

export default App;
