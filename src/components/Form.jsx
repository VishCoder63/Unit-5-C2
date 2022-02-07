import React from "react"

export function Form({addGame}) {
  const [name, setName] = React.useState('');
  const [author, setauthor] = React.useState('');
  const [tags, settags] = React.useState('');
  const [price, setprice] = React.useState('');
  const [kids, setkids] = React.useState('');
  const [gamedesc, setgamedesc] = React.useState('');
  const [gamerating, setgamerating] = React.useState('');
  let game = {},kid=false;
  function handleChange(n, val) {
    game = {
      ...game,
      'forkids':kid,
      [n]: val
    }  
    
}
  return <>
  <label htmlFor="">Add Game:</label> 
    <form id='addgame' onSubmit={(e) => {
      e.preventDefault()
      addGame(game)
    }}>      
      <input onChange={e => {
       handleChange(e.target.name,e.target.value)
      }} required type="text" name='gamename' placeholder="Please enter game name" />

      <input onChange={e => {
       handleChange(e.target.name,e.target.value)
      }} required type="text" name='gameauthor' placeholder="Please enter game author" />

      
      <input onChange={e => {
       handleChange(e.target.name,e.target.value)
      }} required type="number" name='gameprice' placeholder="Please enter price" />

      <input onChange={e => {
       handleChange(e.target.name,e.target.value)
      }} required type="text" name='gametags' placeholder="Please add tags(comma separated)" />

      
      <label htmlFor="forkids">For kids?</label>
      <input onChange={e => {
        kid = !kid;        
       handleChange(e.target.name,kid)
      }} type="checkbox" name='forkids' />
      
      <textarea onChange={e => {
       handleChange(e.target.name,e.target.value)
      }} required name="gamedesc" id="" cols="20" rows="10" placeholder="Please add some description"></textarea>

      <select required onChange={e => {
       handleChange(e.target.name,e.target.value)
      }} name="gamerating" id="">
        <option value=""></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <input type="submit" />
    </form>
  </>
}