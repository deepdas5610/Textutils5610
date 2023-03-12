import React,{useState} from 'react'



export default function TextForm(props) {
    const handelUpCase =()=>{
       // console.log("UpperCase was clicked"+Text)
        let newText = Text.toUpperCase()
        setText(newText)
        props.showAlert(" Converted to uppercase","success")
    }
    const handelLoCase =()=>{
       // console.log("UpperCase was clicked"+Text)
        let newText = Text.toLowerCase()
        setText(newText)
        props.showAlert(" Converted to lowercase","success")
    }
    const handelClearCase =()=>{
       // console.log("UpperCase was clicked"+Text)
        let newText =("")
        setText(newText)
        props.showAlert(" Text cleared","success")
    }
   
    const handelCopy =()=>{ 
       var newText = document.getElementById("mybox")
       newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert(" Copy to clipboard","success")
    }
    const handelRemove =()=>{
       var newText = Text.split(/[ ]+/);
       setText(newText.join(" "))
       props.showAlert(" Extra spaces removed","success")
    }
   
    const handleOnChange =(event)=>{
        //console.log("On change")
        setText(event.target.value)
    }
   
    
    const [Text, setText] = useState('');
  return (
    <>
    <div className='container' style = {{color:props.mode==='dark'? 'white':'black'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
          <textarea className="form-control" value = {Text} onChange = {handleOnChange} style = {{backgroundColor:props.mode==='dark'? 'grey':'white',color:props.mode==='dark'? 'white':'black'}} id="mybox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-3" onClick={handelUpCase}style = {{backgroundColor:props.mode==='dark'? 'black':'#dc3545',color:props.mode==='dark'? 'white':'white'}}>covert to Uppercase</button>
          <button className="btn btn-primary  mx-3" onClick={handelLoCase}style = {{backgroundColor:props.mode==='dark'? 'black':'#dc3545',color:props.mode==='dark'? 'white':'white'}}>covert to Lowercase</button>
          <button className="btn btn-primary mx-3" onClick={handelClearCase}style = {{backgroundColor:props.mode==='dark'? 'black':'#dc3545',color:props.mode==='dark'? 'white':'white'}}> Clear All</button>
          <button className="btn btn-primary mx-3" onClick={handelCopy}style = {{backgroundColor:props.mode==='dark'? 'black':'#dc3545',color:props.mode==='dark'? 'white':'white'}}> Copy text</button>
          <button className="btn btn-primary mx-3" onClick={handelRemove}style = {{backgroundColor:props.mode==='dark'? 'black':'#dc3545',color:props.mode==='dark'? 'white':'white'}}> Remove extra spaces</button>
        
          
    </div>
    <div className = 'container my-3' style = {{color:props.mode==='dark'? 'white':'black'}} >
        <h2>Your text Summery</h2>
        <p>{Text.split(' ').length} words and {Text.length} characters</p>
        <p>{0.008 * Text.split(' ').length} Minutes read </p>
        <h2>Preview</h2>
        <p>{Text.length>0?Text:'Enter something in the textbox above to preview it here. '}</p>
    </div>
    </>

  )
}
