import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     name: '',
  //     description: '',
  //     attr1: '',
  //     attr2: '',
  //     attr3: '',
  //     image: '',
  //     rare: 'normal',
  //     trunfo: false,
  //     hasTrunfo: false,
  //     isSaveButtonDisabled: false,
  //   };

  //   this.onInputChange = this.onInputChange.bind(this);
  // }

  // onInputChange = ({ target }) => {
  //   const { name, type } = target;
  //   const value = type === 'checkbox' ? target.checked : target.value;
  //   this.setState({
  //     [name]: value,
  //   });
  // }

  //   onSaveButtonClick = (e) => {
  //     e.preventDefault();
  //   }

  render() {
    // const { name, description, attr1,
    //   attr2, attr3, image,
    //   rare, trunfo, isSaveButtonDisabled, hasTrunfo } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        {/* <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        /> */}
        <Form />
      </div>
    );
  }
}

export default App;
