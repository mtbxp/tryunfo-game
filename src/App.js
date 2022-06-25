import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  // #VQV
  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form />
        <Card />
      </div>
    );
  }
}

export default App;
