import { LOAD_CARDS, ADD_CARD } from '../actions/CardActions';

const initialState = {
  cards: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    
    case LOAD_CARDS:
      return {...state, cards: action.cards};

      case ADD_CARD:
        return {...state, cards: action.card}
        
      default:
      return state;
  };
};