import logo from './logo.svg';
import './App.css';
import { List } from './components/list';
import { List2 } from './components/list2';
import { NewList } from './components/newList/newList';
import { useState } from 'react';

function App() {
  const [pros, setPros]=useState([
    {name:'name1' ,id:1}
  ])
  const [cons, setCons]=useState([
    {name:'cons2',id:2}
  ])

  
  return (
    <div className="App">
      <div className='Should-I-Eat-at-McDonalds'>Should I  Eat  at McDonalds?</div>
          <div className='lists'> 
              <NewList title ={"pros"} list={pros} onChange={setPros}/>
              <NewList title ={"cons"} list={cons} onChange={setCons}/>

          </div>
          
    </div>
  );
}

export default App;
