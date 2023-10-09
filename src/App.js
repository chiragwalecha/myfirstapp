import { useState } from 'react';
import './App.css';
// import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const [mode,setMode] = useState("light");

  const [alert,setAlert] = useState(null);

  const toggleMode = ()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor = "#0D1322";
      showAlert("Dark mode has been enabled","success");
 
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","success");
    }
  }

  const showAlert = (msg,type)=>{
    setAlert({msg:msg,type:type});
    setTimeout(()=>{setAlert(null)},1800)
  }


  return (
    <>

    {/* <BrowserRouter> */}

    <NavBar title = "ExactShop" aboutText = "About" mode = {mode}  toggleMode = {toggleMode}/>
    <Alert alert = {alert}/>

    {/* <Routes> */}

      {/* <Route */}
       {/* path = "/" element  = */}
        <TextForm  heading = "Enter the text to Analyze below:" mode = {mode} showAlert = {showAlert} />
       {/* /> */}


      {/* <Route */}
       {/* path = "/About" element = {<About/>} */}
       {/* /> */}

    {/* </Routes> */}
    {/* </BrowserRouter> */}



    </>
  );
}

export default App;
