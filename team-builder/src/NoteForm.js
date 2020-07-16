import React from "react";

const NoteForm = props => {


  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleTitle}
        type="text"
        name="title"
        value={title}
        placeholder="title"
      />
      <input
        onChange={handleBody}
        type="text"
        name="body"
        value={body}
        placeholder="body"
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
