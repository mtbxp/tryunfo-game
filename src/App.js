import React from 'react';
import Form from './components/Form';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <section className="add-new-card">
            <Form />
          </section>
        </main>
      </>
    );
  }
}

export default App;
