import logo from './logo.svg';
import './App.css';
//import React from 'react';
import React, { useState } from 'react';
import React, { useEffect } from 'react';
import NamesTable from './Names.js';
import upper, {text1,text2, text3} from "./file1";
import person, {email, firstName} from './file2.js';
import gender, {males,females} from './file2.js';

//class versionene af clock
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

//hvis klokken skal bruges som en IKKE CLASS COMPONENT SKAL "this" slettes og prop skal defineres (parses igennem funktionen)
function Clock2(props){
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function Clock3(){
  const [clock, setClock] = useState(new Date())
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {clock.toLocaleTimeString()}.</h2>
      <button onClick={function(){setClock(new Date())}}>Update Time</button>
    </div>
  );
}


//controlled components
const NameForm = () => {
  const [inputValue, setValue] = useState("");
   const handleChange = (event)=>{
     //console.log(event.target.value)
      setValue(event.target.value);
    }

    const handleSubmit = (event)=>{
      console.log()
      event.preventDefault();
    }

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
}

/*const makeList = () => {
  const [listvalue, setlistValue] = useState("");
  const [list, addToList] = useState([]);
   const handleChange = (event)=>{
     //console.log(event.target.value)
      setlistValue(event.target.value);
    }

    const handleSubmit = (event2)=>{
      event.preventDefault();
      addToList([...list, listvalue]);
      setlistValue("");
    }

    return (
      <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={listvalue} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {
      {list}.map((list) =>
      <p>{list}</p>
      )}
      </>
    );
}
*/

function useEffectExample() {
  const [lst,setList] = useEffect([])
  const [Count, setCount] = useState(0)

  useEffect(()=>{
fetch(`https://jsonplaceholder.typicode.com/albums`).then((res)=>res.json()).then((data)=>{
setList(data.result)
});

  },[Count]);
return(
  <div>
  <button onClick={()=>setCount(Count + 1)}>Populate</button>
  {lst.map((element, idx)=>{<p key={idx}>{element.title}</p>})}
</div>
);
}



function App() {
  const {firstName, email} = person;
  const {males, females} = gender;
  return (
    <>
    <div>
      <NamesTable/>
      <Clock date={new Date()}/>
      <Clock2 date={new Date()}/>
      <Clock3/>
      <NameForm/>
      <makeList/>
      <useEffectExample/>
    </div>
    <h2>Ex 1</h2>
    
    <p>{upper("please uppercase me")}</p>
    <p>{text1}</p>
    <p>{text2}</p>
    <p>{text3}</p>
    
    <h2>Ex 2</h2>
    <p>{firstName}</p>
    <p>{email}</p>
    <p>{males}</p>
    </>
  );
}

export default App;
