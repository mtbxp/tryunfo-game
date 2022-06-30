import React from 'react';
import Card from './components/Card';
// import CardList from './components/CardList';
import Form from './components/Form';

class App extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     allCards: [{ }];
  //   }
  // }

  render() {
    // const { allCards } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form />
        <Card />
        {/* <CardList todosCards={ allCards } /> */}
      </div>
    );
  }
}

export default App;

//   constructor(props) {
//     super(props);
//     this.state = {
//       cardName: '',
//       cardDescription: '',
//       cardAttr1: '',
//       cardAttr2: '',
//       cardAttr3: '',
//       cardImage: '',
//       cardRare: '',
//       cardTrunfo: false,
//       hasTrunfo: false,
//       isSaveButtonDisabled: false,
//     };
//   }

//   onInputChange = ({ target }) => {
//     const { name, type } = target;
//     const value = type === 'checkbox' ? target.checked : target.value;
//     this.setState({
//       [name]: value,
//     });
//   }

//   onSaveButtonClick = () => {
//     console.log(this);
//   };
