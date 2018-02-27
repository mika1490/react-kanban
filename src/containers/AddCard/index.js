import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../actions/CardActions';

class AddCardForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title : '',
      priority : '',
      status : '',
      created_by : '',
      assigned_to : ''
    }
    this.handleOnChangeTitle = this.handleOnChangeTitle.bind(this);
    this.handleOnChangePriority = this.handleOnChangePriority.bind(this);
    this.handleOnChangeStatus = this.handleOnChangeStatus.bind(this);
    this.handleOnChangeCreatedBy = this.handleOnChangeCreatedBy.bind(this);
    this.handleOnChangeAssignedTo = this.handleOnChangeAssignedTo.bind(this);

  }
  handleSubmit(element) {
    element.preventDefault();
    this.props.addCard({
      title: this.state.title,
      priority: this.state.priority,
      status: this.state.status,
      created_by: this.state.created_by,
      assigned_to: this.state.assigned_to
    })
    this.setState({
      title : '',
      priority : '',
      status : '',
      created_by : '',
      assigned_to : ''
    })
  }
  handleOnChangeTitle(event) {
    this.setState({ title: event.target.value });
  }
  handleOnChangePriority(event) {
    this.setState({ priority: event.target.value })
  }
  handleOnChangeStatus(event) {
    this.setState({ status: event.target.value })
  }
  handleOnChangeCreatedBy(event) {
    this.setState({ created_by: event.target.value })
  }
  handleOnChangeAssignedTo(event) {
    this.setState({ assigned_to: event.target.value })
  }

  render() {
    return (
      <div id="addCardForm">
          <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" value={this.state.title} placeholder='title' onChange={this.handleOnChangeTitle} />
          <input type="text" value={this.state.priority} placeholder='priority' onChange={this.handleOnChangePriority} />
          <input type="text" value={this.state.status} placeholder='status' onChange={this.handleOnChangeStatus} />
          <input type="text" value={this.state.created_by} placeholder='created by' onChange={this.handleOnChangeCreatedBy} />
          <input type="text" value={this.state.assigned_to} placeholder='assigned to' onChange={this.handleOnChangeAssignedTo} />
          <input type="submit" value="Submit Card" />
        </form>
       
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCard : (newCard) => {
      console.log('NEWCARDDDD', newCard)
      dispatch(addCard(newCard))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddCardForm);