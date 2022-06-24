import React from 'react';
import Card from './components/Card';
import Forms from './components/Form';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Forms />
        <Card />
      </div>
    );
  }
}

export default App;
