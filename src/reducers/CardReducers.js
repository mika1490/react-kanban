import { LOAD_CARDS, ADD_CARD } from '../actions/CardActions';

const initialState = {
  cards: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARDS:

      // return [ ...action.cards ];
      return {...state, cards: action.cards};

      default:
      return state;
  };
};