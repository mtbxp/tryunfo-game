import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      // hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  validaAtivacaoBotao = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const a = cardName;
    const b = cardDescription;
    const c = cardRare;
    const d = cardImage;
    const e = Number(cardAttr1);
    const f = Number(cardAttr2);
    const g = Number(cardAttr3);
    const soma = 210;
    const max = 90;
    // const minCarta = 0;
    const textoVazio = (a.length && c.length && b.length && d.length);
    const somaCarta = (e + f + g) <= soma;
    const pts = e >= 0 && f >= 0 && g >= 0 && e <= max && f <= max && g <= max;

    if (textoVazio && somaCarta && pts) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

    onInputChange = ({ target }) => {
      const { name, type } = target;
      const value = type === 'checkbox' ? target.checked : target.value;
      this.setState({
        [name]: value,
      },
      () => this.validaAtivacaoBotao());
    };

  onSaveButtonClick = () => {}

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
      // hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1 className="container">Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
      </div>
    );
  }
}
export default App;

/*

    ✕ Será validado se o botão `salvar` está desabilitado se o campo do atributo 1 for maior que 90 (864 ms)
    ✕ Será validado se o botão `salvar` está desabilitado se o campo do atributo 1 menor que 0 (712 ms)
    ✕ Será validado se o botão `salvar` está desabilitado se o campo do atributo 2 for maior que 90 (660 ms)
    ✕ Será validado se o botão `salvar` está desabilitado se o campo do atributo 2 menor que 0 (621 ms)
    ✕ Será validado se o botão `salvar` está desabilitado se o campo do atributo 3 for maior que 90 (646 ms)
    ✕ Será validado se o botão `salvar` está desabilitado se o campo do atributo 3 menor que 0 (599 ms)

    ✕ Será validado se o botão `salvar` está desabilitado se o campo do atributo 1 for maior que 90 (517 ms)
    ✕ Será validado se o botão `salvar` está desabilitado se o campo do atributo 1 menor que 0 (422 ms)
    ✕ Será validado se o botão `salvar` está desabilitado se o campo do atributo 2 for maior que 90 (437 ms)
    ✕ Será validado se o botão `salvar` está desabilitado se o campo do atributo 2 menor que 0 (410 ms)
    */
