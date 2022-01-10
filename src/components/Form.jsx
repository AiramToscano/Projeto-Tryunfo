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
          id="nameInput"
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
          id="areaInput"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <Input
          dataTestid="attr1-input"
          type="number"
          max="90"
          min="0"
          name="cardAttr1"
          label="number1"
          value={ cardAttr1 }
          onChange={ onInputChange }
          id="cardAttr1"
        />
        <Input
          dataTestid="attr2-input"
          max="90"
          min="0"
          type="number"
          name="cardAttr2"
          label="number2"
          value={ cardAttr2 }
          onChange={ onInputChange }
          id="cardAttr2"
        />
        <Input
          dataTestid="attr3-input"
          type="number"
          name="cardAttr3"
          max="90"
          min="0"
          label="number3"
          value={ cardAttr3 }
          onChange={ onInputChange }
          id="cardAttr3"
        />
        <Input
          dataTestid="image-input"
          type="text"
          name="cardImage"
          label="textimagem"
          value={ cardImage }
          onChange={ onInputChange }
          id="cardImage"
        />
        <label htmlFor="raridade">
          Raridade
          <select
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
            name="cardRare"
            id="raridade"
          >
            <option value="normal">Normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        { cardTrunfo ? "Você já tem um Super Trunfo em seu baralho" : <Input
          dataTestid="trunfo-input"
          type="checkbox"
          name="cardTrunfo"
          label="checkbox"
          checked={ cardTrunfo  }
          onChange={ onInputChange }
          id="cardTrunfo"
        /> }
        <button
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
          name="cardTrunfo"
          id="cardTrunfo"
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
