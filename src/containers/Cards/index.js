import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCards, makeCardEditable, editCard, deleteCard } from '../../actions/CardActions';
import ColumnComponent from '../../components/ColumnComponent';


class Cards extends Component {
  constructor() {
    super()
    this.state = {
      title : '',
      priority : '',
      status : '',
      created_by : '',
      assigned_to : ''
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  toggleEdit(card) {
    this.props.makeCardEditable(card.id);
    this.setState({
      title : card.title,
      priority : card.priority.id,
      status : card.status.id,
      created_by : card.creator.id,
      assigned_to : card.dev.id
    });
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name] : value
    });
  }

  handleSubmit(id, e) {    
    e.preventDefault();
    this.props.editCard({
      id : id,
      title : this.state.title,
      priority : this.state.priority,
      status : this.state.status,
      created_by : this.state.created_by,
      assigned_to : this.state.assigned_to
    });
  }
  componentWillMount() {
    return this.props.loadCards();
  }

  render() {
    return (
      <div id="columns-wrapper">
        <ColumnComponent
          status="1"
          cards={ this.props.cards }
          toggleEdit={ this.toggleEdit.bind(this) }
          editCard={ this.props.editCard }
          deleteCard={ this.props.deleteCard }
          handleChange={ this.handleChange }
          handleSubmit={ this.handleSubmit} />

        <ColumnComponent
          status="2"
          cards={ this.props.cards }
          toggleEdit={ this.toggleEdit.bind(this) }
          editCard={ this.props.editCard }
          deleteCard={ this.props.deleteCard }
          handleChange={ this.handleChange }
          handleSubmit={ this.handleSubmit} />

        <ColumnComponent
          status="3"
          cards={ this.props.cards }
          toggleEdit={ this.toggleEdit.bind(this) }
          editCard={ this.props.editCard }
          deleteCard={ this.props.deleteCard }
          handleChange={ this.handleChange }
          handleSubmit={ this.handleSubmit} />
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
    },
    makeCardEditable : cardID => {
      dispatch(makeCardEditable(cardID));
    },

    editCard : updatedCard => {
      dispatch(editCard(updatedCard));
    },
    // deleteCard : cardID => {
    //   dispatch(deleteCard(cardID));
    // }
  }

  }


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards)
