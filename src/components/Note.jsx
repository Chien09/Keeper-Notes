import React from "react"; 
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'; //using material UI npm package 

function Note(props){

    //to delete the note 
    function handleClick(event){
        //triggering the deleteNote in App.jsx and passing the id of the note to be deleted
        props.onDelete(props.id); 
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}><DeleteForeverIcon /></button>
        </div>
    );
}

export default Note;