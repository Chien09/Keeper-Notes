import React, { useState } from "react"; 
import AddIcon from '@mui/icons-material/Add'; //using material UI npm package 

function CreateArea(props) {
    const [note, setNote] = useState({ title: "", content: ""}); 

    //method to handle input and save the note input title & content state 
    function handleChange(event){
        const {name, value} = event.target; 

        setNote(prevNote => {
            return {
                ...prevNote, 
                [name] : value
            }; 
        }); 
    } 

    function submitNote(event){
        //passing the new Note object to App.jsx to be added 
        props.onAdd(note); 

        //clearing the input tittle and content 
        setNote({ title: "", content: ""}); 

        //prevent page refreshing 
        event.preventDefault(); 
    }

  return (
    <div>
      <form className="create-note">
        <input name="title" value={note.title} placeholder="Title" onChange={handleChange}/>
        <textarea name="content" value={note.content} placeholder="Take a note..." rows="3" onChange={handleChange}/>
        <button onClick={submitNote}><AddIcon /></button>
      </form>
    </div>
  );
}

export default CreateArea;