import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;
    return (
      <form>
        <Input
          dataTestid="name-input"
          type="text"
          name="cardName"
          label="Nome"
          value={ cardName }
          onChange={ onInputChange }
        />
        <Input
          dataTestid="description-input"
          type="textarea"
          name="cardDescription"
          label="textarea"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <Input
          dataTestid="attr1-input"
          type="number"
          name="cardAttr1"
          label="number1"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <Input
          dataTestid="attr2-input"
          type="number"
          name="cardAttr2"
          label="number2"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <Input
          dataTestid="attr3-input"
          type="number"
          name="cardAttr3"
          label="number3"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <Input
          dataTestid="image-input"
          type="text"
          name="cardImage"
          label="textimagem"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <label htmlFor="raridade">
          Raridade
          <select
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
            name="cardRare"
          >
            <option value="normal">Normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <Input
          dataTestid="trunfo-input"
          type="checkbox"
          name="cardTrunfo"
          label="checkbox"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
        <button
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
          name="cardTrunfo"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
