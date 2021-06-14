import React, { Component, useState } from 'react';
import axios from 'axios';


const API_URL = 'http://127.0.0.1:8000/api/v1'
class Search extends Component {
  state = {
    query: '',
    results: []
  }
  getInfo = (e) => {
    e.preventDefault();
    axios.get(`${API_URL}/search/?q=${this.state.query}`)
      .then(({ data }) => {
        this.props.history.push("/display", { "result": data.data });
      })
  }
  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <form className="form-inline" onSubmit={this.getInfo}>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" ref={input => this.search = input}
              onChange={this.handleInputChange} />
            <button >Search</button>
          </form>
        </nav>
      </div>
    )
  }
}
export default Search
