import React from 'react';

export const CardListitem = (props) => {
  const { id, title, priority_id, priority, status_id, status, creator_id, created_by, dev_id,  assigned_to, toggleEdit, isEditing, editCard, deleteCard, handleChange, handleSubmit } = props
  
  function removeCard() {
    deleteCard(id);
  }
  return (
    <div className="card">
    { !isEditing &&
      <div>
        <div> Title: { title } </div>
        <div> Priority: { priority }</div>
        <div> Status: { status }</div>
        <div> Created By: { created_by}</div>
        <div> Assigned To: { assigned_to }</div>
        <input type="submit" value="EDIT" onClick={ toggleEdit } />
        </div>
    }
    {isEditing &&
    <div>
    <form onSubmit={ (e) => handleSubmit(id, e) }>
      <div>
        <input
          className="addInput"
          name="title"
          placeholder= "title"
          onChange={ handleChange }
          defaultValue={ title } />
      </div>
      <div>
        <select
          className="addInput"
          name="priority"
          onChange={ handleChange }
          defaultValue={ priority_id }>
          <option value="1">High</option>
          <option value="2">Medium</option>
          <option value="3">Low</option>
          <option value="4">Blocker</option>
        </select>
      </div>
      <div>
        <select
          className="addInput"
          name="status"
          onChange={ handleChange }
          defaultValue={ status_id }>
          <option value="1">In Queue</option>
          <option value="2">In Progress</option>
          <option value="3">Done</option>
        </select>            
      </div>
      <div>
        <input
          className="addInput"
          name="created_by"
          placeholder="created by"
          onChange={ handleChange }
          defaultValue={ creator_id } />
      </div>
      <div>
        <input
          className="addInput"
          name="assigned_to"
          placeholder="assigned to"
          onChange={ handleChange }
          defaultValue={ dev_id } />
      </div>    
        <input type="submit"  value="UPDATE" />
      </form>
      <button type="submit" onClick={ removeCard }>DELETE
      </button>
    <div>
    </div>      
  </div>
    }
</div>
)
}
export default CardListitem;
  