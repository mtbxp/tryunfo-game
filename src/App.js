import React from 'react';
import Card from './components/Card';
import From from './components/Form';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <From />
        <Card />
      </div>
    );
  }
}

export default App;
