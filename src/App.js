import React from 'react';
// import PropTypes from 'prop-types';
import Form from './components/Form';

class App extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     cardName: '',
  //     cardDescription: '',
  //     cardAttr1: '',
  //     cardAttr2: '',
  //     cardAttr3: '',
  //     cardImage: '',
  //     cardRare: '',
  //     cardTrunfo: false,
  //     hasTrunfo: false,
  //     isSaveButtonDisabled: false,
  //     onInputChange: () => { },
  //     onSaveButtonClick: () => { },
  //   };
  // }

  // onInputChange = ({ target }) => {
  //   const { name, type } = target;
  //   const value = type === 'checkbox' ? target.checked : target.value;

  //   this.setState({
  //     [name]: value,
  //   });
  // }

  // onSaveButtonClick = () => {}

  render() {
    // const {
    //   cardName, cardDescription, cardAttr1,
    //   cardAttr2, cardAttr3, cardImage, cardRare,
    //   cardTrunfo, hasTrunfo, isSaveButtonDisabled,
    //   onInputChange, onSaveButtonClick,
    // } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form />
      </div>
    );
  }
}

export default App;

// cardName={ cardName }
// cardDescription={ cardDescription }
// cardAttr1={ cardAttr1 }
// cardAttr2={ cardAttr2 }
// cardAttr3={ cardAttr3 }
// cardImage={ cardImage }
// cardRare={ cardRare }
// cardTrunfo={ cardTrunfo }
// hasTrunfo={ hasTrunfo }
// isSaveButtonDisabled={ isSaveButtonDisabled }
// onInputChange={ onInputChange }
// onSaveButtonClick={ onSaveButtonClick }
