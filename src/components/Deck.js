import React from 'react';
import propTypes from 'prop-types';
import Card from './Card';

class Deck extends React.Component {
  render() {
    const { deck } = this.props;
    return (
      <div className="previewDeck">
        <h1>Seu Baralho</h1>
        <br />
        <ul>
          { deck.map((carta) => <Card key={ carta } />) }
        </ul>
      </div>
    );
  }
}

Deck.propTypes = {
  deck: propTypes.arrayOf(propTypes.object).isRequired,
};

export default Deck;
