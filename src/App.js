import { useState } from 'react';

import Button from './components/Buttons/Button';
import Output from './components/Output/Output';

import './App.css';

function App() {

  const [result, setResult] = useState('');
  const [history, setHistory] = useState('');


  const changeResult = (input,result) => {
    if (input==='=') {
      setHistory(result);
      // eslint-disable-next-line
      setResult(eval(result).toString());

    }

    else if (input==='AC' ) {
      setResult('')
    }

    else if(input==='DEL') {
      setResult(result?.slice(0, -1))
    }

    else{
      setResult(result.toString()+input.toString())
    }
    
  }

  const data = ['AC', "DEL",'+', 1,2,3,'-',4,5,6,'*',7,8,9,'/', 0, '.', '='];

  return (
    <div className="App">
        <div className="container">
        <Output history={history} value={result} setResult={setResult}/>
        {
          data.map((item, i)=> {
            return (
              <Button className={`button button-${item}`} key={i} input={item} result={result} action={changeResult}/>
            )
          })
        }
        </div>
    </div>
  );
}

export default App;
