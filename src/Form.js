
import tour2 from './images/tour2.webp';
import './index.css';
function App(){
let input = (<input type='text' placeholder='Name'/>);
let button = <button>Submit</button>;
let form = (
  <form>
    {input}
    {button}
  </form>
);

return form;
}
function App1(){
  let input = (<input type="checkbox"/>);
  let button = <button>Submit</button>;
  let form1 = (
    <form1>
      {input}
      {button}
    </form1>
  );
  
  return form1;
}

function App2(){
  return (
    
    <img src={tour2} alt="Tour2" className='image'/>
    
  );
}

function Caller(){
  return(
    <>
      <App />
      <App1 />
      <App2 />
    </>
  );
}

export default Caller;