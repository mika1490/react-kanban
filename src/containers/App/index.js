import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../index.css';
import Cards from '../Cards';
import CardListItem from '../../components/CardListItem';
import { loadCards } from '../../actions/CardActions';

class App extends Component {
  constructor(props) {
    super(props)
  }

  
  componentDidMount() {
    this.props.loadCards();
  }

  render() {
    return (
      <div className="App">
        Hello World
        <CardListItem
        cards={this.props.cards}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards : state.cards.cards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCards : () => {
      dispatch(loadCards());
    }
  }
}

    export default connect(
      mapStateToProps,
      mapDispatchToProps
    )(App)