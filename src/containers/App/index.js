import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../index.css';
import Cards from '../Cards';


class App extends Component {
  
  render() {
    return(
      <div className="App">
        KANBAN
        <Cards />


     </div> 
    )
  }
}

export default connect()(App)