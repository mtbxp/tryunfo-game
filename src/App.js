import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import Header from './components/Header';
import './styles/app.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    };
  }

  handleChange = ({ target }) => {
    const { name, type, checked, value } = target;
    const stateValue = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: stateValue,
    });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;
    return (
      <>
        <Header />
        <main>
          <section className="add-new-card">
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              onInputChange={ this.handleChange }
            />
            <div className="card-preview">
              <h3>Pré-visualização</h3>
              <Card
                cardName={ cardName }
                cardDescription={ cardDescription }
                cardAttr1={ cardAttr1 }
                cardAttr2={ cardAttr2 }
                cardAttr3={ cardAttr3 }
                cardImage={ cardImage }
                cardRare={ cardRare }
                cardTrunfo={ cardTrunfo }
              />
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default App;
