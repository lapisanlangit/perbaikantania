import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'


class App extends Component {
  constructor() {
    super()
    this.handleRemove = this.handleRemove.bind(this);
  }
  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]
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
      </div>
    )
  }
}

export default App