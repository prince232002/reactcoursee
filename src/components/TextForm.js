import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick= () => {
    // console.log("uppercas was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText)
  }
  const handleDownClick= () => {
    // console.log("uppercas was clicked"+text);
    let newText=text.toLowerCase();
    setText(newText)
  }
  const handleClearClick= () => {
    // console.log("uppercas was clicked"+text);
    let newText="";
    setText(newText)
  }
  const clipboardData=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleUpCapClick= () => {
  

//split the above string into an array of strings 
//whenever a blank space is encountered

const arr = text.split(" " ||(  "\n") ) ;

//loop through each element of the array and capitalize the first letter.


for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}

//Join all the elements of the array back into a string 
//using a blankspace as a separator 
const str2 = arr.join(" ");
let newText=str2;
setText(newText)
  }
  
  
  const handleOnChange=(event)=>{
    // console.log("on change");
    setText(event.target.value) 
  }
  const[text,setText]=useState('enter the text2');  //learn it 

  // text ="new text"; //wrong way to change the text 
  // setText("new text"); //correct way to change the text 
  return (
    <> 
    <div>
  <h2>{props.heading}</h2>    
<div className="mb-3">
  {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>clear text</button> 
<button className="btn btn-primary mx-2" onClick={handleUpCapClick}>convert to Upcasetext</button> 
<button className="btn btn-primary mx-2" onClick={clipboardData}>copy</button> 
    </div>
  )
  <div className="container my-3">
  <h1>Your text summary</h1>
  <p>Count - {text.split(" ").length} words and {text.length} characters </p>
  <p>{0.008 * text.split(" ").length } mins read</p>
  <h2>Preview</h2>
  <p>{text}</p>
  </div>
  </>
  )
}


/* 
settext(text variable )- set the text to changed state 

*/































