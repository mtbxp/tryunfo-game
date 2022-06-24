import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <section id="section__create-card">
          <Form />
        </section>
      </div>
    );
  }
}

export default App;
