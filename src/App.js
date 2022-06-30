import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.handleEvent = this.handleEvent.bind(this);

    this.state = {
      numeroDeCliques: 0,
    };
  }

  handleEvent() {
    this.setState((estadoAnterior) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
    }));
  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form />
      </div>
    );
  }
}

export default App;
