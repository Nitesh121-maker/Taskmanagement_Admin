import React from 'react'
import '../css/Assignment.css';

function Assignment(props) {

  return (
    <div className="create-assignment-form">
       <div className="header">
         <h2>Create Assignment  </h2> 
         <h3 onClick={props.onCutForm}>X</h3>
       </div>
      <form>
        <div className="form-group">
          <label htmlFor="assignmentName">Name of Assignment</label>
          <input type="text" id="assignmentName" name="assignmentName" required />
        </div>

        <div className="form-group">
          <label htmlFor="purpose">Purpose</label>
          <input type="text" id="purpose" name="purpose" required />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" rows="4" required />
        </div>

        <div className="form-group">
          <label htmlFor="duration">Duration of Assignment (in days)</label>
          <input type="number" id="duration" name="duration" required />
        </div>

        <button type="submit">Create Assignment</button>
      </form>
    </div>
  )
}

export default Assignment