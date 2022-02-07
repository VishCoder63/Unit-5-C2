import React from "react";

export function Table({ data, displayTable }) {  
  const sortOrder = React.useRef({
    gamename: 0,
    gameprice: 0,
    gamerating: 0
  })
  function sortIt(data, str) {  
    console.log(sortOrder.current[str]==0)
    if (sortOrder.current[str] == 0) {
      sortOrder.current[str] = 1
      data.sort((a, b) => {              
        return b[str] - a[str];        
      })  
    } else {
      sortOrder.current[str] = 0
      data.sort((a, b) => {              
        return a[str] - b[str];
      })
    }
    return data;
  }
  let order=["gamename","gameauthor","gameprice","gametags","forkids","gamerating"]
  return <>
  <h1>Games List...</h1>  
    <table id='table' border={1}>
      <thead>        
        <th>game name
          {console.log(sortOrder,data)}
          <button id='' onDoubleClick={() => {                                   
            displayTable(sortIt(data,'gamename') )
          }
          }>Sort</button>
        </th>
        <th>game author</th>
        <th>game price
          <button id='sortbyprice' onDoubleClick={() => {
            displayTable(sortIt(data,'gameprice'))
          }} >Sort</button>
        </th>
        <th>game tags</th>
        <th>is for kids</th>
        <th>rating
          <button id='sortbyrating' onDoubleClick={() => {
            displayTable(sortIt(data,'gamerating'))
          }}>Sort</button>
        </th>
      </thead>
      <tbody>
        
  {/* let order=["gamename"," gameauthor","gameprice","gametags","forkids","gamerating"] */}
        {data.map(e => {          
          return <tr className='gamerow'> 
            {order.map(o => {
              if (o == 'forkids') return <td>{e[o] == true ? 'true' : 'false'}</td>
              else if(o=='gamename')  return <td className="gamename">{e[o]}</td>
              else if(o=='gameprice')  return <td className="gameprice">{e[o]}</td>
              else if(o=='gamerating')  return <td className="gamerating">{e[o]}</td>
              else return <td>{e[o]}</td>
            })
            }
          </tr>
        })}
      </tbody>
  </table>
  </>
}