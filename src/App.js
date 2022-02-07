import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import {useState} from 'react'


import Main from './components/main'
import Dashboard from './components/dashboard';



function App() {
  const [isdash,setDash] = useState(false)



  function dash(){
    setDash(true)
  }


  function home(){
    setDash(false)
  }

  return (
    <div>

      {!isdash && <Main dash={dash}/> }
      {isdash && <Dashboard home={home} />}


    </div>
  );
}

export default App;
