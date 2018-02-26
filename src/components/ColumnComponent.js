import React from 'react';
import CardListItem from './CardListItem';

export default ({ cards }) => {
  return (
    <div className="column-component">
    {
      cards
      .map((card, idx) => {
        return (
          <CardListItem
          title = { card.title }
          priority = { card.priority }
          status = { card.status }
          created_by = { card.created_by }
          assigned_to = { card.assigned_to }
          // toggleEdit = { toggleEdit.bind(this, card) }
          key = { idx }
          />
        )
      })
      
    }
    </div>
  )
}

// const CardsList = ({ cards }) => {
 
//   const cardsListContent = cards.map((card, idx) => {
//     return <CardListItem key={idx} {...card} />
//   });

//   return (
//     <ul className="cards-list" >
//       {cardsListContent}
//     </ul>
//   );
// }

// export default CardsList
