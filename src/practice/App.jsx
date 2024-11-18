import React from 'react'

export const App = () => {
  const users = [
    {Name:'Naveen',Age:20,id:1},
    {Name:'Kumar',Age:22,id:2},
    {Name:'Vijay',Age:21,id:3},
    {Name:'Ajith',Age:21,id:4},
    {Name:'Partha',Age:21,id:5},
    {Name:'Muruga',Age:20,id:6}
  ];
  return (
    <>
    <Ans users={users}/>
    </>
  )
};

const Ans = ({users})=>{

  return (
    <>
    <div className='container'>
      <table>
        <tbody>
          <tr>
            <th>Name</th><th>Age</th>
          </tr>

          {
            users.map((item)=>(<tr key={item.id}>
              <td key={item.id}>{item.Name}</td>
              <td key={item.id}>{item.Age}</td>
            </tr>))
          }

        </tbody>
      </table>
    </div>
    </>
  )
}

export default App;
