import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCards } from '../../actions/CardActions';
import ColumnComponent from '../../components/ColumnComponent';


class Cards extends Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   title: '',
    //   priority: '',
    //   status: '',
    //   created_by: '',
    //   assigned_to: ''
    // }

  }
  componentWillMount() {
    console.log('FIRING', this.props)
    return this.props.loadCards();
  }

  render() {
    return (
      <div id="columns-wrapper">
        <ColumnComponent
        cards={this.props.cards}
        />
      </div>
    );
  }
}

//defines an object that were going to return where the keys of the object becomes the keys of the props and the values of the keys becomes the values of the keys of this.props
const mapStateToProps = state => {
  console.log('STATE', state)
  return {
    cards: state.cards.cards
  }
}

//defines an object that were going to return where the keys of the object becomes the keys of the props and the values of the keys becomes the values of the keys of this.props
const mapDispatchToProps = (dispatch) => {
  return {
    loadCards: () => {
      dispatch(loadCards());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards)
