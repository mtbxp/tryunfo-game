import React from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  render() {
    return (
      <main>
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
        <Card
          cardName="Arthur"
          cardDescription="Lindo e Perfeito"
          cardAttr1="10"
          cardAttr2="10"
          cardAttr3="10"
          cardImage="Url da imagem"
          cardRare="muito raro"
          cardTrunfo
        />
      </main>
    );
  }
}

export default App;
