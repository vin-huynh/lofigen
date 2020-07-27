import React from 'react';
import { useWakeLock } from "use-wake-lock";
import './App.css';
import Player from './Components/Player';

const App = (props) => {

  const { toggleWakeLock, wakeLockActive } = useWakeLock();

  return (
    <div className="App">
      <Player toggleWakeLock={toggleWakeLock}/>
    </div>
  );
}

export default App;
