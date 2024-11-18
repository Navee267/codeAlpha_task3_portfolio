import { useState } from "react";

export const practice1 = () => {
    const [user,setUser] = useState({name:"Naveen",age:20});

    function both(e){
        setUser({...user,[e.target.name]:e.targer.value});
    }
  return (
    <div>
        <form action="#">
            <h2>{user.name}</h2>
            <h2>{user.age}</h2>

            <input name="name" value={user.name} type="text" placeholder='Enter Name'/>
            <input name="age" value={user.age} type="text" placeholder='Enter Age'/>

            <button onChange={both}>Change Name</button>
            <button onChange={both}>Change Age</button>
        </form>
    </div>
  )
}

export default practice1;