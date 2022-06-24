import React from 'react';
import '../Css/Card.css'

class Card extends React.Component {
  constructor(){
      super();

      this.isSuperTrunfo = this.isSuperTrunfo.bind(this)
  }

  isSuperTrunfo() {
    if(this.props.cardTrunfo === true) {
        return (
            <p id="super-trunfo" data-testid="trunfo-card">Super Trunfo</p>
        );
    }
  }

  render() {
      const {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
      } = this.props
    return (
      <section id="section-card">
          <h3 id='title' data-testid="name-card">{ cardName }</h3>
          <img id="card-image" data-testid="image-card" src={ cardImage } alt={ cardName } />
          <p data-testid="description-card">{ cardDescription }</p>
          <div id="card-infos">
          <p data-testid="attr1-card">{ cardAttr1 }</p>
          <p data-testid="attr2-card">{ cardAttr2 }</p>
          <p data-testid="attr3-card">{ cardAttr3 }</p>
          <p data-testid="rare-card">{ cardRare }</p>
          </div>
          <div>{ this.isSuperTrunfo() }</div>
      </section>
    );
  }
}

export default Card;