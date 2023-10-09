import React, {useState} from 'react'

export default function TextForm(props) {

    const[text,setText] = useState()

     function handleUpClick(){
        if(text!=null){
        setText(text.toUpperCase());
        props.showAlert("text converted to uppercase","success")
        }

}
    function handleLoClick(){
        if(text!=null){
        setText(text.toLowerCase());
        props.showAlert("text converted to lowercase","success")
        }
    }

    function handleOnChange(event){
        setText(event.target.value)
    }


  return (
    <>
<div className="container my-3">
    <form>
    <div className="mb-3" style = {{color : props.mode === "light" ? "black" : "white" }}>
        <h1>{props.heading}</h1>
        <textarea placeholder='Enter text here' value = {text} onChange={handleOnChange} className="form-control" style = {{backgroundColor : props.mode === "light" ? "white" : "grey", color : props.mode === "light" ? "black" : "white" }} id="myBox" rows = "8" ></textarea>
    </div>
    </form>
    <button onClick={handleUpClick} className="btn btn-primary mx-2 my-2">Convert to Uppercase</button>
    <button onClick={handleLoClick} className="btn btn-primary mx-2">Convert to Lowercase</button>
</div>


<div className="container" style = {{color : props.mode === "light" ? "black" : "white" }}>
    <h1>Your Text Summary:</h1>
    <p> {(text==null || text === "")    ? 0 :  text.trim().split(/\s+/).length} words and {(text==null || text === "") ? 0 :  text.replace(/\s/g,'').length} chars</p>
    <p> {0.48 * ((text==null || text === "")     ? 0 :  text.trim().split(/\s+/).length)} Minutes Read</p>
    <h2>Preview:</h2>
    <p>{text}</p>
</div>



</>
  )
}
