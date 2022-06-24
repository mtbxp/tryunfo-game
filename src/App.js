import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './styles/global.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1> Tryunfo</h1>
        <Form />
        <Card />
      </div>
    );
  }
}

export default App;
