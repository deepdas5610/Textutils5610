import React from 'react'

function Alert(props) {
  const capatalize =(word)=>{
   const lower = word.toLowerCase();
   return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  return (
    props.alert && <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
    {capatalize(props.alert.typ)}:{props.alert.msg}
    
  </div>
  )
}

export default Alert
