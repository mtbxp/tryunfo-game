import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import Header from './components/Header';
import './styles/app.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <section className="add-new-card">
            <Form />
            <div className="card-preview">
              <h3>Pré-visualização</h3>
              <Card />
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default App;
