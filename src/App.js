import React from 'react';
import './style/App.css';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  teste1() {
    console.log('oi');
  }

  teste2() {
    console.log('oi2');
  }

  render() {
    return (
      <div>
        <header>
          <h1>Tryunfo</h1>
        </header>
        <div className="createCard">
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
            onInputChange={ this.teste1 }
            onSaveButtonClick={ this.teste2 }
          />
          <Card
            cardName=""
            cardDescription=""
            cardAttr1={ 0 }
            cardAttr2={ 0 }
            cardAttr3={ 0 }
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
