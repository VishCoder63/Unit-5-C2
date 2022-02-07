import { Form } from "./Form";
import React from 'react'
import { Table } from "./Table";
import axios from 'axios';

export function Gamestore() {
  const [form, setForm] = React.useState(false);
  const [games, setGames] = React.useState([]);

  React.useEffect(() => {
    displayTable([]);
  },[])
  
  function displayTable(data) {
    if (data.length == 0) {
      axios.get('http://localhost:3001/games').then(e => {
        setGames(e.data)    
      })      
    } else {      
      setGames([...data])          
    }    
  }
 
  function addGame(g) {
    axios.post('http://localhost:3001/games', g).then(()=>{displayTable([])})
  }
  return <div>
    <button onClick={() => {
      if (form == false) setForm(true)     
      else setForm(false)
    }
    }> {form == true ? 'Hide Form' : 'Show Form'} </button>
    {form ? <Form addGame={ addGame}/>:null}
    <Table displayTable={displayTable} data={games}/>
  </div>
}