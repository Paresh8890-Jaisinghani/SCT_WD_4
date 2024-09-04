### ReactDom ###
take three parameters (What to show , Where to show , When to show)
ReactDom.render(<h1>Hello</h1>,document.getelementbyId('root'))
we are writing html in js file , React dependency convert our html into js (react is a compiler use babel javasript to convert plane js to readable js)

### 
Javascript inside html Whole inside javaScript
const name = "Paresh"
ReactDom.render(<h1>Hello {name}</h1>,documnet.getelementbyid('root')); inside {} braces we can write any JavaScript 

## HTML Atrributes for styling (https://www.w3schools.com/tags/ref_standardattributes.asp)


### Inline style in js
{color : "red"} -- Js object    
<h1 style = {{color : "red"}}></h1>

### React Component ###
React developer tools extension for finding components levelwise
1.In the same file of js / In the different file (import/Exports behaviour)

### React porop ### 
For using same component with a different attributes like input tag in html has id = "",value = "";
import React from "react";
import ReactDOM from "react-dom";
function Card(props){
  return (
    <div><h1>Hello User {props.name}</h1>
    <p>Your phone Number is {props.tel}</p>

    </div>
  )
}
ReactDOM.render(
  <div>
    <Card name = "Paresh" tel ="8890510990"/>
    <Card name = "Jaisinghani" tel = "6375211531"/>
  </div>,
  document.getElementById("root")
)


### map,filter,Reduce ###
function callback(x){
  return x*2;
}
function.map(callbackfunction);
const newnumbers = number.map(funciton(x){
  return x*2
})


const newnumbers = numbers.filter(function(x){
  return x > 30;
})

var newsum = numbers.reduce(function(accumlator,curr){
  return accumlator + curr;
})


const num = numbers.find(function(numb){
  return numb > 10;
})

### State ###
Userinterface = f(state) (eg : water is ice at temperature of -10* but water at temperature of 60*)


const stylechange = {text-decoration : line-through}

funtion App=()=>{
  return (
    var done = false;
    <p style = {done ? stylechange : null}>task done</p>
  )
}
Here the userinterface depended on the state called done;

### React Hooks ###
### usestate ###
import React from "react";
import { useState } from "react";

function App() {
  const [cnt, setcnt] = useState(0);

  function render() {
    setcnt(12);
  }
  return (
    <div className="container">
      <h1>{cnt}</h1>
      <button onClick={render}>+</button>
    </div>
  );
}

export default App;
Here above first h1 will show cnt = 0 on screen but as the button is clicked it will update the state of our hook usestate and update the value of usestate which will update the value of cnt



### onMouseOver , onMouseOut ### 

whenever any eventhandlers are triggered event is passed through it 
like : onSubmit = {handelsubmit}
ev -- event
handelsubmit(ev){
  ev.preventDeafault();

}



### spread operator ### (...prevValue)
 const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handelchange(ev) {
    const { value, name } = ev.target;

    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }


  ### todo items added using hooks,mapping,spread operator ### 
  import React, { useState } from "react";

function App() {
  const [todo, settodo] = useState("");
  const [todoadded, settodoadded] = useState([]);

  function handelchange(ev) {
    const detail = ev.target.value;
    settodo(detail);
  }

  function handelclick(ev) {
    const todoitem = todo;
    settodoadded((prevValue) => {
      return [...prevValue, todoitem];
    });
    settodo("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          name="tododetail"
          type="text"
          value={todo}
          onChange={handelchange}
        />
        <button onClick={handelclick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todoadded.map((items) => {
            return <li>{items}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

