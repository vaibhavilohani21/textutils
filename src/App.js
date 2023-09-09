
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alerts from './components/Alerts';
import About from './components/About';
// import {
//   BrowserRouter ,Routes,
  
//   Route
  
// } from "react-router-dom";



function App() {
  const [mode,setMode] = useState('light');//Whetherdark mode is enabled or not
  const [alert,setAlert] = useState('null');
  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);

    },1500);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0f315e';
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  // const toggleGreenMode = () =>{
  //   if(mode === 'light'){
  //     setMode('green');
  //     document.body.style.backgroundColor = '#65b87f';
  //     showAlert("Green mode has been enabled","success");
  //   }else{
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     showAlert("Light mode has been enabled","success");
  //   }
  // }
  return (
   <>
   {/* <BrowserRouter> */}

{/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
{/* <Navbar /> */}
{/* <Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode} toggleGreenMode={toggleGreenMode}/> */}
<Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode} />
<Alerts alert = {alert}/>

<div className="container my-3">
{/* /* <Routes> */}
          {/* /users --> Component 1
              /users/home --> Component 2 */}
          {/* <Route exact path="/about" element = {<About />}>
          </Route>
          
          <Route exact path="/" element = {<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode = {mode}/>}>
          </Route>
</Routes> */ }

  {/* <About/> */}
  <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode = {mode}/>
  </div>
  {/* </BrowserRouter> */}

  
   </>
  );
}

export default App;
