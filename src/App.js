import './App.css';
import Testimonials from './components/Testimonials';
import reviews from './data';
import { useState } from 'react';


function App() {
  const [x, setX] = useState(0)
  const [data, setData] = useState(reviews);

  function nextData(){
    setX((x+1)%5);
  }
  function prevData(){
    if(x === 0){
      setX(reviews.length-1)
    }
    else{
      setX(x-1);
    }
  }
  function random(){
    let r = Math.floor(Math.random()*reviews.length);
    setX(r);
  }
  return (
    <div className="App">
      <div className='head'>
        <h1>Our Testimonials</h1>
      </div>
      <div className='card_con'>
        <div className='tests'>
          <Testimonials data={data[x]} setData={setData}/>
        </div>
        <div className='control_btns'>
          <button onClick={()=> prevData()}>{`<`}</button>
          <button onClick={()=>nextData()}>{`>`}</button>
        </div>
        <div className='suprise'>
          <button onClick={()=> random()}>Suprise Me</button>
        </div>
      </div>
     
    </div>
  );
}

export default App;
