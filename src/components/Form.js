import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          <input
            type="text"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="description">
          <input
            type="textarea"
            data-testid="description-input"
          />
        </label>
      </form>
    );
  }
}

export default Form;
