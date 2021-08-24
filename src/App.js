import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let pinkMode = {
    backgroundColor: "#e1487c",
    color: "white",
    navColor:"#d71d5c"
  }

  let blueMode = {
    backgroundColor: "#2083d3",
    color: "white",
    navColor:"#3f51b5"
  }

  let darkMode = {
    backgroundColor: "rgb(33, 37, 41)",
    color: "white",
    navColor:"black"
  }

  let lightMode = {
    backgroundColor: "white",
    color: "black",
    navColor:"rgb(248, 249, 250)"
  }

  const [mode, setMode] = useState(lightMode);
  const [alert, setAlert] = useState(null);

  const handleMode = (mode)=>{
    if(mode==="light"){
      setMode(lightMode);
      document.body.style.backgroundColor = lightMode.backgroundColor;
      document.body.style.color = lightMode.color;
      showAlert("Light mode enabled", "success");
    }
    else if(mode==="dark"){
      setMode(darkMode);
      document.body.style.backgroundColor = darkMode.backgroundColor;
      document.body.style.color = darkMode.color;
      showAlert("Dark mode enabled", "success");
    }
    else if(mode==="blue"){
      setMode(blueMode);
      document.body.style.backgroundColor = blueMode.backgroundColor;
      document.body.style.color = blueMode.color;
      showAlert("Blue mode enabled", "success");
    }
    else if(mode==="pink"){
      setMode(pinkMode);
      document.body.style.backgroundColor = pinkMode.backgroundColor;
      document.body.style.color = pinkMode.color;
      showAlert("Pink mode enabled", "success");
    }
  }

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} handleMode={handleMode} />
    <Alert alert={alert} />
    <Switch>
      <Route exact path="/#/about">
        <About/>
      </Route>
      <Route path="/">
        <TextForm showAlert={showAlert} heading="Enter The Text To Analyze" mode={mode} />
      </Route>
    </Switch>
    </Router>
    </>
  );
}

export default App;
