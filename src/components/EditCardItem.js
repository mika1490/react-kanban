import React from 'react';

export default ({ id, title, priority, status, created_By, assigned_To, deleteCard, editCard }) => {
  
 

  return(
    <div className="card">
      { 
        <div>
          <div> title </div>
          <div>{ priority }</div>
          <div>{ status }</div>
          <div>{ created_By }</div>
          <div>{ assigned_To }</div>   
        </div>
      }
    </div>
  )
}