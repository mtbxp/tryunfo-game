import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>TRYUNFO</h1>
        <Form />
        <Card />
      </div>
    );
  }
}

export default App;
