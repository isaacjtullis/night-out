import React from 'react';

const NewLocationForm = props => {
  return (
    <form onSubmit={props.handleZipCode}>
      <button><i className="fa fa-sticky-note-o" aria-hidden="true">New ZipCode</i></button>
      <input
        type="text"
        placeholder="search"
        onChange={props.handleNewZipCode}
        >
      </input>
    </form>
  )
};

export default NewLocationForm;
