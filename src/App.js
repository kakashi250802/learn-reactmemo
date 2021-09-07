import {useState} from 'react';
import './App.css';
import Hero from './components/Hero';
function App() {

  const [count,setCount] = useState(0)

  return (
    <div className="App">
    <p>{count}</p>
    <button onClick={() => setCount(count +1)}>Increase</button>    
    <Hero name="Ngô Sỹ Dương" />
    </div>
  );
}

export default App;
