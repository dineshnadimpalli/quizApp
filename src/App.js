import React from 'react';
import './App.css';
import Routes from './Router';
import logo from './Assets/skuad_logo.png'

function App() {
  // console.log("==", process.env);

  return (
    <div className="App">
      <div className='appbar'>
        <div className='logoAppbarSection' onClick={()=>window.location.href='/'}>
          {/* <img src={logo} className='appLogo' /> */}
          <span className='subtitle'>
            Skill Test
          </span>
        </div>
      </div>
      <Routes />
    </div>
  );
}

export default App;
