import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'
import axios from './interceptor'
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

class App extends Component {
  constructor() {
    super()

    this.state = {
      characters: []
    }

    this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidMount() {

    axios.get('http://localhost:4000/rtes/getName', {
      cancelToken: source.token
    })
      .then(function (response) {
        this.setState({ characters: response.data })
      }.bind(this))
      .catch(function (thrown) {
        if (axios.isCancel(thrown)) {
          console.log('Request canceled', thrown.message);
        } else {
          // handle error
        }
      });

   
  }

  batal(){

    source.cancel('Operation canceled by the user.');

  }


  handleRemove(index) {

    const { characters } = this.state;
    this.setState({
      characters: characters.filter((character) => {
        return character.name !== index
      })
    })
  }

  handleSubmit = character => {

    this.setState({ characters: [...this.state.characters, character] })
  }

  render() {
    return (
      <div className="container">
        <Table characterData={this.state.characters} removeCharacter={this.handleRemove} />
        <Form handleSubmit={this.handleSubmit} />
        <button onClick={this.batal}>Batal</button>
      </div>

    )
  }
}

export default App