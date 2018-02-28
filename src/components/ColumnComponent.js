import React from 'react';
import CardListItem from './CardListItem';


const ColumnComponent = ({ status, cards, toggleEdit, editCard, deleteCard, handleChange, handleSubmit }) => {

  const cardsListContent = cards
    .filter(card => {
      return card.status === status;
    })
    .map((card, idx) => {
      return <CardListItem 
      key={idx} 
      {...card} 
      toggleEdit = { toggleEdit.bind(this, card) }
      isEditing = { card.isEditing }
      editCard = { editCard }
      deleteCard = { deleteCard }
      handleChange = { handleChange }
      handleSubmit = { handleSubmit }
      id = { card.id }
      />
    });

  return (
    <ul className="cards-list" >
      {cardsListContent}
    </ul>

  );
}

export default ColumnComponent;
