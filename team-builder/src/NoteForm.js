import React from "react";

const NoteForm = props => {

  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  const handleTitle = event => setTitle(event.target.value);
  const handleBody = event => setBody(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    if (title && body) {
      props.setNotes([...props.notes, { title, body }]);
      resetState();
    }
  };

  const resetState = () => {
    setTitle("");
    setBody("");
  };


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
