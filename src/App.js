import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import Register from './components/Register';
import './App.css'

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
  users: [], // criei um array vazio para armazenar minhas cartas
};

class App extends React.Component {
  constructor(e) {
    super(e);
    this.onInputChange = this.onInputChange.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
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

  deleteCard = ({target}) => {
    const { users } = this.state;
    const filter = users.filter((card) => card.cardName !== target.parentElement.id)
    this.setState({
      users: [...filter],
      hasTrunfo: filter.some(card => card.cardTrunfo),
    });
   console.log(filter)
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


  addNewCart = (newCard) => {
    // para acrescentarmos ou removermos algo de uma propriedade
    // do state, precisamos passar uma callback para o setState
    // adiciono cada carta ao meu array usando spread operator

    this.setState((prevState) => ({ // preciso de uma callback para meu estado anterior
      users: [...prevState.users, newCard],
    }));
  }

  onSaveButtonClick = (event) => {
    event.preventDefault(); // preciso parar o evento de recarregar da pagina
    const { cardName, cardDescription, cardTrunfo, cardAttr1,
      cardAttr2, cardAttr3, cardRare, cardImage} = this.state;
    const objectCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    const INITIAL_STATE2 = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      isSaveButtonDisabled: true,
      cardTrunfo: false,
    };
    this.setState(INITIAL_STATE2);
    this.validCheck(); // validaçao do meu checkbox
    this.addNewCart(objectCard); // adiciona minha nova carta
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      users } = this.state;
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
        <Register users={ users }  deleteCard={this.deleteCard} />
      </div>
    );
  }
}

export default App;
