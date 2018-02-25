import { combineReducers } from 'redux';

import CardReducers from './CardReducers';

export default combineReducers({
  cards: CardReducers
});

// import { combineReducers } from 'redux';
// // cards is an array
// import data from './CardReducers';

// export default combineReducers({
//   cards:
// });