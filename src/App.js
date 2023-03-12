import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{ useState }from 'react'
import Alert from './components/Alert';
/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";*/

//import About from './components/About';

function App() {
  const [mode,setMode]=useState('light');//Whether dark mode is enabled or not
  const [alert,setAlert]=useState(null);

   

   const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      typ:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
   }

  const toggleMode = ()=>{
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#041f47'
    showAlert("Dark Mode Enabled","success")
    }
    else{
    setMode('light');
    document.body.style.backgroundColor = 'white'
    showAlert("LIght Mode Enabled","success")
      }
  }
  return (
    <>
  {/*<Navbar title= "TextUtils"  About = "About Us">**/}
  {/*<Router>*/}
 < Navbar title = "TextUtils " aboutText = "about" mode={mode} toggleMode={toggleMode}/>
 <Alert alert = {alert}/>
 <div className="container my-3">
 {/*<Switch>*/}
          {/*<Route  exact path="/about">
          <About />
          </Route>
  <Route exact path="/">*/}
          <TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode={mode}/>
         {/* </Route>*/}
{/*</Switch>*/}
</div>
{/*</Router>*/}
 

 </>
  );
}

export default App;
