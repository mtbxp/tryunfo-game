import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {}
  // }

  // addNewProject = (project) => {
  //   this.setState({

  //   });
  // }

  onInputChange({ target }) {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  negativeSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <Form />
        ,
        <Card />
        ,
      </div>
    );
  }
}

export default App;
