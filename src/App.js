import React, { Component } from 'react';
import './App.css'

export default class App extends Component {
  state = {
    count: 0
  }
  IncreaseState = () => this.setState({count:this.state.count+1})
  DecreaseState = () => this.setState({count:this.state.count-1})
  render() {
    return (
      <div className="container">
        <h1 
          className='heading'
          >Counter {this.state.count}
          </h1> 
        <button 
           className='updateBtn' 
           onClick={this.IncreaseState}
           >Increase Counter
           </button>
        <button className='updateBtn'
           onClick={this.DecreaseState}
           >Decrease Counter
           </button>
      </div>
    )
  }
}
