import { useState } from 'react';

import Button from './components/Buttons/Button';
import Output from './components/Output/Output';

import './App.css';

function App() {

  const [result, setResult] = useState('');


  const changeResult = (input,result) => {
    if (input==='=') {
      // eslint-disable-next-line
      setResult(eval(result).toString());
    }

    else if (input==='AC' ) {
      setResult('')
    }

    else{
      setResult(result.toString()+input.toString())
    }
    
  }

  const data = [1,2,3,4,5,6,7,8,9,0,'+','-','*','/', '=', 'AC'];
  return (
    <div className="App">
        <div className="container">
        <Output value={result} setResult={setResult}/>
        {
          data.map((item, i)=> {
            return (
              <Button key={i} input={item} result={result} action={changeResult}/>
            )
          })
        }
        </div>
    </div>
  );
}

export default App;
