import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../index.css';
import Cards from '../Cards';
import AddCardForm from '../AddCard';


class App extends Component {
  
  render() {
    return(
      <div className="App">
        KANBAN
        <Cards />
        <AddCardForm />

     </div> 
    )
  }
}

export default connect()(App)