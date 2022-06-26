import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardTrunfo: false,
  };

  render() {
    const {
      cardTrunfo,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form />
        <Card
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
