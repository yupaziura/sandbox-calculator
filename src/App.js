import Button from './components/Buttons/Button';
import Output from './components/Output/Output';

import './App.css';

function App() {

  const data = [1,2,3,4,5,6,7,8,9,0,'+','-','*','/', '=']
  return (
    <div className="App">
        <div className="container">
        <Output/>
        {
          data.map((item, i)=> {
            return (
              <Button key={i} value={item} />
            )
          })
        }

        {/* <Button value={1} />
        <Button value={2} />
        <Button value={3} />
        <Button value={4} />
        <Button value={5} />
        <Button value={6} />
        <Button value={7} />
        <Button value={8} />
        <Button value={9} />
        <Button value={0} /> */}
        </div>
    </div>
  );
}

export default App;
