import React, {Component} from 'react';
import {connect} from 'react-redux';
import { loadCards } from '../../actions/CardActions';
import CardListItem from '../../components/CardListItem';

const Cards = ({cards, loadCards}) => {
  return(
    <div className="cards">
    {
      cards 
      .map((card, idx) => {
          return(
            <CardListItem
              cards = {this.cards}
              key = {idx}
            />
          )
        })
      }
    </div>
  )
}

export default Cards;



// class Cards extends Component {
//   constructor(props) {
//     super(props)

//     this.state ={
//       title: '',
//       priority: '',
//       status: '',
//       created_by: '',
//       assigned_to: ''
//     }
//   }

  
//   componentDidMount() {
//     this.props.loadCards();
//   }

//   render() {
//     return (
//       <div id="cards">
//         Cards page
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     cards : state.cards.cards
//   }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     loadCards : () => {
//       dispatch(loadCards());
//     }
//   }
// }

//     export default connect(
//       mapStateToProps,
//       mapDispatchToProps
//     )(Cards)
