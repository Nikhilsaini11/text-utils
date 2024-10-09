import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#223d4b';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }


  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar mode={mode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert}></Alert>
        <div className="container my-3">
        <TextForm mode={mode} showAlert={showAlert}></TextForm>
          {/* <Routes>
            <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert}></TextForm>} />
            <Route exact path="/about" element={<About mode={mode}></About>} />
          </Routes> */}
        </div>

      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
