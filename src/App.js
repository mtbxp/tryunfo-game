import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <div className="Master-Content">
        <Form />
        <section className="Card-Container">
          <Card />
        </section>
      </div>
    );
  }
}

export default App;
