import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

const INITIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: true,
};

class App extends React.Component {
  constructor(e) {
    super(e);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = INITIAL_STATE;
  }

  // Ajudado pelos colegas da trybe, não estava conseguindo escrever o name,
  // vi que tinha que mudar a propriedade 'name' do meu form.
  onInputChange(event) {
    const { name } = event.target;
    const value = event.target.type === 'checkbox' ? event.target.checked
      : event.target.value;
    this.setState({
      [name]: value,
    }, this.validForm); // Com ajuda do ruy barbosa criei um função para validar meus componentes
    // mas preciso, receber meus valores do estado antes de validar, por isso
    // que eu uso uma callback para fazer essa verificação de await
  }

  validForm = () => {
    const maxAtr = 90;
    const maxSumAtr = 210;
    const { cardName, cardDescription, cardImage,
      cardRare, cardAttr1, cardAttr2, cardAttr3 } = this.state;
    if (cardName !== '' && cardDescription !== ''
      && cardImage !== ''
      && cardRare !== ''
      && cardAttr1 !== ''
      && cardAttr2 !== ''
      && cardAttr3 !== ''
      && (Number(cardAttr1) >= 0 && Number(cardAttr1) <= maxAtr)
      && (Number(cardAttr2) >= 0 && Number(cardAttr2) <= maxAtr)
      && (Number(cardAttr3) >= 0 && Number(cardAttr3) <= maxAtr)
      && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxSumAtr
    ) {
      this.setState(
        {
          isSaveButtonDisabled: false,
        },
      );
    } else {
      this.setState(
        {
          isSaveButtonDisabled: true,
        },
      );
    }
    this.validCheck();
  }

  validCheck = () => {
    const { cardTrunfo } = this.state;

    if (cardTrunfo === true) {
      this.setState(
        {
          hasTrunfo: true,
        },
      );
    } else {
      this.setState(
        {
          hasTrunfo: false,
        },
      );
    }
  }

  onSaveButtonClick = (event) => {
    event.preventDefault(); // preciso parar o evento de recarregar da pagina
    const INITIAL_STATE2 = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
    };
    this.setState(INITIAL_STATE2);
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
