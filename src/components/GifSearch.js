import React, { Component } from 'react'

export default class GifSearch extends Component {
    state = {
        input: '',
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.getGifs(this.state.input)
    }

    render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.input} onChange={this.handleChange} />
              <input type='submit' />
            </form>
          </div>
        );
    }
}
