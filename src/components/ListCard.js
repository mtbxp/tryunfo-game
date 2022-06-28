import React, { Component } from 'react';
import Card from '/card';

class ListCard extends Component {
  render() {
    const { listOfCards, removeButton } = this.props;
    return (
      <div>
        {listOfCards.map((card, index) =>
        <div key={ index }>
          <Card/>
        </div>
        )}
      </div>;