import React from 'react';

class Rare extends React.Component {
  render() {
    return (
      <label htmlFor="rare-input">
        <select
          data-testid="rare-input"
        >
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
      </label>
    );
  }
}

export default Rare;
