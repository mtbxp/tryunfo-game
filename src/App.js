import React from 'react'; // exodia obliterar
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 id="title">Tryunfo</h1>
        <Form />
        <Card
          cardName="Omori"
          cardImage="https://preview.redd.it/zs47l46zh1j61.gif?format=png8&s=3b7763fda35062c74f47324e8a3f15ab2a31b927"
          cardDescription="Alterego de Sunny"
          cardAttr1={ 70 }
          cardAttr2={ 90 }
          cardAttr3={ 60 }
          cardRare="raro"
          cardTrunfo={ true }
        />
      </div>
    );
  }
}

export default App;
