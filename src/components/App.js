import React from "react";
import Header from "./Header";
import Footer from "./footer";
import Notes from "./Notes.js";
import note from "./note";

function notedetails(not){
    return <Notes key = {not.key}
    title = {not.title}
    content  = {not.content}
    />
}

const App =()=>{
    return(
        <div>
            <Header/>
            {note.map(notedetails)}
            <Footer/>
        </div>
    )
}


export default App;