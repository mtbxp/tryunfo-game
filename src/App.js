import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <main>
        <div>
          <h1>Tryunfo</h1>
          <Form />
          <Card />
        </div>
      </main>
    );
  }
}

export default App;
