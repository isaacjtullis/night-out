import React from 'react';

const NewLocationForm = props => {
  return (
    <div className="zipcode-form">
      <form onSubmit={props.handleZipCode}>
        <button>Add ZipCode</button>
        <input
          type="text"
          placeholder="Zipcoddeeee"
          onChange={props.handleNewZipCode}
          >
        </input>
      </form>
    </div>
  )
};

export default NewLocationForm;
