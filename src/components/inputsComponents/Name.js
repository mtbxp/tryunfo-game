import React from 'react';

class Name extends React.Component {
  render() {
    return (
      <label htmlFor="name-input">
        <input
          data-testid="name-input"
        />
      </label>
    );
  }
}

export default Name;
