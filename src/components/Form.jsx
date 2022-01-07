import React, { Component } from 'react';
import { Input } from './Input';

export class Form extends Component {
  render() {
    return (
      <form>
        <Input
          dataTestid="name-input"
          type="text"
          name="name"
          label="Nome"
          value=""
          onChange=""
        />
        <Input
          dataTestid="description-input"
          type="textarea"
          name="textarea"
          label="textarea"
          value=""
          onChange=""
        />
        <Input
          dataTestid="attr1-input"
          type="number"
          name="number1"
          label="number1"
          value=""
          onChange=""
        />
        <Input
          dataTestid="attr2-input"
          type="number"
          name="number2"
          label="number2"
          value=""
          onChange=""
        />
        <Input
          dataTestid="attr3-input"
          type="number"
          name="number3"
          label="number3"
          value=""
          onChange=""
        />
        <Input
          dataTestid="image-input"
          type="text"
          name="textimagem"
          label="textimagem"
          value=""
          onChange=""
        />
        <label htmlFor="raridade">
          Raridade
          <select data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <Input
          dataTestid="trunfo-input"
          type="checkbox"
          name="checkbox"
          label="checkbox"
          value=""
          onChange=""
        />
        <button type="submit" data-testid="save-button">
          Salvar
        </button>
      </form>

    );
  }
}

export default Form;
