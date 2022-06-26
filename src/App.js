import React from 'react';
import './App.css';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <div>
        <Form
          cardName="Nome da carta"
          cardDescription="Descrição da carta"
          cardAttr1="12"
          cardAttr2="34"
          cardAttr3="56"
          cardImage="url-to-image"
          cardRare="raro"
          cardTrunfo
          hasTrunfo={ false }
          isSaveButtonDisabled={ false }
          onInputChange={ () => { } }
          onSaveButtonClick={ () => { } }
        />
      </div>
    );
  }
}

export default App;
