import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Register extends Component {

  render() {
    const { users, deleteCard } = this.props;
    return (
      <section  className="register">
        <h1>Cartas registradas: </h1>
        {users.map((user) => (
          <div id={user.cardName} className='registeruser'>
          <div className='cardTotal'>
          <section className='cardTotal1'>
            
        <div className='cardname'>
          <p data-testid="name-card">{ user.cardName }</p>
        </div>
        <div className='cardimage'>
          <img data-testid="image-card" alt={ user.cardName } src={ user.cardImage } />
        </div>
        <div className='teste'>
        <div className='cardd'>
          <p data-testid="description-card">{ user.cardDescription }</p>
        </div>
        <div className='cardatr1'> Nível de bebida:
          <p data-testid="attr1-card"> { user.cardAttr1 }</p>
        </div>
        <div className='cardatr1'> Nível de beleza:
          <p data-testid="attr2-card"> { user.cardAttr2 }</p>
        </div>
        <div className='cardatr2'>Idade:
          <p data-testid="attr3-card">{ user.cardAttr3 }</p>
        </div>
        <div className='rarecard'> Raridade:
          <p data-testid="rare-card">{ user.cardRare }</p>
        </div>
        </div>
        <div className='cardtrunfo'>
          { user.cardTrunfo ? <h3 data-testid="trunfo-card"> Super Trunfo</h3> : null }
        </div>
        </section>
        </div>
        <button
            id="deleteCard"
            data-testid="delete-button"
            onClick={deleteCard}
          > 
            Excluir {console.log(user.cardName)}
          </button>
        </div>
        ))}
        
      </section>
    );
  }
}

export default Register;

Register.propTypes = {
  users : PropTypes.string.isRequired,
};
