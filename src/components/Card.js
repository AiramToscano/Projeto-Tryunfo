import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = this.props;

    return (
      <div>
        <div>
          <p data-testid="name-card">{ cardName }</p>
        </div>
        <div>
          <img data-testid="image-card" alt={ cardName } src={ cardImage } />
        </div>
        <div>
          <p data-testid="description-card">{ cardDescription }</p>
        </div>
        <div>
          <p data-testid="attr1-card">{ cardAttr1 }</p>
        </div>
        <div>
          <p data-testid="attr2-card">{ cardAttr2 }</p>
        </div>
        <div>
          <p data-testid="attr3-card">{ cardAttr3 }</p>
        </div>
        <div>
          <p data-testid="rare-card">{ cardRare }</p>
        </div>
        <div>
          { cardTrunfo ? <h3 data-testid="trunfo-card"> Super Trunfo</h3> : null }
        </div>
      </div>
    );
  }
}

export default Card;

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
