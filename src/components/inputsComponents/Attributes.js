import React from 'react';

class Attributes extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="attr1-input">
          <input
            data-testid="attr1-input"
            type="number"
          />
        </label>

        <label htmlFor="attr2-input">
          <input
            data-testid="attr2-input"
            type="number"
          />
        </label>

        <label htmlFor="attr3-input">
          <input
            data-testid="attr3-input"
            type="number"
          />
        </label>
      </div>
    );
  }
}

export default Attributes;
