import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props)
        this.initialState = {
            name: '',
            job: ''
        }

        this.state = this.initialState;
        this.onChangename = this.onChangename.bind(this)
        this.onChangejob = this.onChangejob.bind(this)

    }

    onChangename(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangejob(e) {
        this.setState({
            job: e.target.value
        });
    }

    submitForm = (e) => {
        e.preventDefault();
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChangename} />
                <label>Job</label>
                <input
                    type="text"
                    name="job"
                    value={this.state.job}
                    onChange={this.onChangejob} />
                <input type="button" value="Submit" onClick={this.submitForm} />

            </form>
        );
    }
}

export default Form;