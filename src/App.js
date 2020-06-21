import React, {useState} from 'react';
import './App.css';
import Child from './child';
import Reducer from './reducer';

function App() {
  let  countState = useState(1)
  return (
    <Reducer.Provider value={countstate}>
    <div>
     <Child/>
    </div>
    </Reducer.Provider>
  );
}

export default App;
