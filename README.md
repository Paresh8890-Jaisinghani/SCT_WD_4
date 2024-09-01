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