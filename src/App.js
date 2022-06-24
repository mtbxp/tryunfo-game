import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form />
        <Card />
        <div>
          <p data-testid="name-card">{ cardName }</p>
          <img
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
          />
          <p data-testid="description-card">
            { cardDescription }
          </p>
          <p data-testid="attr1-card">
            { cardAttr1 }
          </p>
          <p data-testid="attr2-card">
            { cardAttr2 }
          </p>
          <p data-testid="attr3-card">
            { cardAttr3 }
          </p>
          <p data-testid="rare-card">
            { cardRare }
          </p>
          <p data-testid="trunfo-card">
            { cardTrunfo }
          </p>
        </div>
      </div>
    );
  }
}

export default App;
