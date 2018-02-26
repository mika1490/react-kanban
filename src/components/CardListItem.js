import React from 'react';

export const CardListitem = (props) => {


  return (
    <div className="card">
    {
      <div>
        <div> Title: { props.title } </div>
        <div> Priority: { props.priority }</div>
        <div> Status: { props.status }</div>
        <div> Created By: { props.created_by}</div>
        <div> Assigned To: { props.assigned_to }</div>
        {/* <input type="submit" value="EDIT" onClick={ toggleEdit } /> */}
        </div>
    }
    </div>
  )
}
export default CardListitem;
  