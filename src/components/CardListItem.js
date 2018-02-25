import React from 'react';

export default ({title, priority, status, created_by, assigned_to}) => {

  return (
    <div className="card">
    <div>Title: {title}</div>
    <div>Priority: {priority}</div>
    <div>Status: {status}</div>
    <div>Created By: {created_by}</div>
    <div>Assigned To: {assigned_to}</div>
  </div>
)
}


