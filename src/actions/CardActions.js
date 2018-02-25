import 'whatwg-fetch';
const listOfCards = '/api/cards';

export const LOAD_CARDS = 'LOAD_CARDS';



export const loadCards = () => {
  return dispatch => {
  
    return fetch(listOfCards)
    .then(response => {
      console.log('CARDS', response)
      return response.json();
    })
    .then(json => {
      console.log('JSON', json)
      return json[0];
    })
    .then(cards => {
      dispatch({
        type: LOAD_CARDS,
        cards: cards
      })
  });
}
}

 