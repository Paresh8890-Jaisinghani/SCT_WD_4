import React from "react";

function CreateArea(props) {

    
  
    const [todotext,settodotext] = React.useState({
        title : "",
        content : ""
    })

    function hadletodotext(ev){
        const {name,value} = ev.target

        settodotext((prevvalue)=>{
            return {
                ...prevvalue,
                [name] : value
            }
        })
    }

    function hadletodopass(ev){
        props.ontodoadd(todotext)
        settodotext({
          title : "",
          content : ""
        })
        ev.preventDefault()
    }

    
  return (
    <div>
      <form>
        <input 
        name="title"
        placeholder="Title"
        value={todotext.title}
        onChange = {hadletodotext}
        />
        <textarea 
        name="content" 
        placeholder="Take a note..." rows="3"
        value={todotext.content}
        onChange = {hadletodotext}
        />
        <button
        onClick={hadletodopass}
        >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
