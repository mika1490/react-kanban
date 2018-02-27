import axios from 'axios';
const listOfCards = '/api/cards';

export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';
export const EDITING = 'EDITING';
export const EDIT_CARD = 'EDIT_CARD';
export const DEL_CARD = 'DEL_CARD';


export const loadCards = () => {
  return dispatch => {
    return axios.get(listOfCards)
    .then(cards => {
      dispatch({
        type : LOAD_CARDS,
        cards : cards.data
      });
    })
    .catch(err => {
      console.log(err)     
    });
  };
};


export const addCard = newCard => {
  return dispatch => {
    return axios.post(listOfCards, newCard)
    .then(newCardDetails => {
      if(newCardDetails.data && newCardDetails.data.id) {
        dispatch(loadCards())
      }
    })
    .catch(err => {
      console.log(err)
    });
  };
};

