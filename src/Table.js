import React, { Component } from 'react'
import Tableitem from './Tableitem'


class Table extends Component {

  constructor(props) {
    super(props)
    this.hapusListItem=this.hapusListItem.bind(this)
  }

  hapusListItem(nilai){
    // console.log(nilai)
    this.props.removeCharacter(nilai)

  }
  render() {
    let tableItem;

    if (this.props.characterData) {
      tableItem = this.props.characterData.map(row => {
        return (
          <Tableitem key={row.name} item={row} removeData={this.hapusListItem} />
        )
      })
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          {tableItem}
        </tbody>
      </table>
    )
  }
}

export default Table