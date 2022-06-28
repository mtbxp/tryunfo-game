import React from 'react';
import Form from './components/Form';
import './App.css';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      describe: '',
      cardImage: '',
      firstAttribute: '',
      secondAttribute: '',
      thirdAttribute: '',
    };
  }

  render() {
    const
      {
        nome,
        describe,
        cardImage,
        firstAttribute,
        secondAttribute,
        thirdAttribute,
      } = this.state;

    const onChange = ({ target }) => {
      const { name, value } = target;
      this.setState(() => ({
        [name]: value,
      }));
    };

    return (
      <div className="App">
        <h1>Tryunfo</h1>
        <Form
          cardName={ nome }
          cardDescription={ describe }
          cardAttr1={ firstAttribute }
          cardAttr2={ secondAttribute }
          cardAttr3={ thirdAttribute }
          cardImage={ cardImage }
          cardRare=""
          cardTrunfo={ false }
          hasTrunfo=""
          isSaveButtonDisabled={ false }
          onInputChange={ onChange }
          onSaveButtonClick={ () => {} }
        />
        <Card
          cardName={ nome }
          cardDescription={ describe }
          cardAttr1={ firstAttribute }
          cardAttr2={ secondAttribute }
          cardAttr3={ thirdAttribute }
          cardImage={ cardImage }
          cardRare=""
          cardTrunfo
        />
      </div>
    );
  }
}

export default App;
