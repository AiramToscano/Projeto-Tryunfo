import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Register extends Component {
  render() {
    const { users } = this.props;
    return (
      <section className="register">
        <h1>Cartas registradas</h1>
        {users.map((user) => (
          <>
            <div>
              <p>{ user.cardName }</p>
            </div>
            <div>
              <img alt={ user.cardName } src={ user.cardImage } />
            </div>
            <div>
              <p>{ user.cardDescription }</p>
            </div>
            <div>
              <p>{ user.cardAttr1 }</p>
            </div>
            <div>
              <p>{ user.cardAttr2 }</p>
            </div>
            <div>
              <p>{user.cardAttr3 }</p>
            </div>
            <div>
              <p>{ user.cardRare }</p>
            </div>
            <div>
              { user.cardTrunfo ? <h3> Super Trunfo</h3> : null }
            </div>
          </>
        ))}
      </section>
    );
  }
}

export default Register;

Register.propTypes = {
  users: PropTypes.string.isRequired,
};
