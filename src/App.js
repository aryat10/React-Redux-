
import './App.css';

import Counter from './components/Count';
import Image from './components/Image';
import { useDispatch } from 'react-redux';
function App() {
  const dis = useDispatch(); // provide a dispatch for a event we used in store
  
  return (
    <div className="App">
      <button  onClick={(e)=>dis({type: 'INCREMENT'})}>
        Increment
      </button>
      <Counter />
      <button  onClick={(e)=>dis({type: 'DECREMENT'})}>Decrement</button>
      <h1>Let's Learn Redux !!! </h1>
      <Image />
    </div>
    
  );
}

export default App;
