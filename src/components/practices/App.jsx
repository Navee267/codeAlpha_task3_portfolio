import { useState } from "react";

export const App = () => {
    let [name,setName] = useState("Naveen");
    let [age,setAge] = useState(20);

    function Cname(){
        name=="Naveen" ?setName("Kumar"):setName("Naveen");
    }
    function Cage(){
        age == 20?setAge(25):setAge(20);
    }
  return (
    <div>
        <h1>User Details</h1>
        <h2>{name}</h2>
        <h2>{age}</h2>

        <button onClick={Cname}>Change Name</button>
        <button onClick={Cage}>Change Age</button>
    </div>
  )
}

export default App;