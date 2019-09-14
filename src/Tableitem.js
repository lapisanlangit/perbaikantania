import React, { Component } from 'react';

class Tableitem extends Component {
    constructor(props){
        super(props)
        this.hapusItem=this.hapusItem.bind(this)
    }

    hapusItem(){
        this.props.removeData(this.props.item.name)
    }

    render() {
        return (
            <tr key={this.props.item.index}>
            <td>{this.props.item.name}</td>
            <td>{this.props.item.job}</td>
            <td> <button onClick={this.hapusItem}>Delete</button></td>
          </tr>
        );
    }
}

export default Tableitem;