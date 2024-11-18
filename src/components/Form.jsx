import React, { useState } from 'react'

export const Form = () => {
    const [user, setUser] = useState({
        name: "Naveen",
        age: 20,
        gender: "Male",
        isMarried: true,
        country: "India",
        bio: "None"
    })

    function changeUser(e) {
        const name = e.target.name;
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setUser({ ...user, [name]: value });
    }
    return (
        <>
            <form action="">
                <table>
                    <tbody>
                        <tr>
                            <td>Name : </td><td>{user.name}</td>
                        </tr>
                        <tr>
                            <td>Age : </td><td>{user.age}</td>
                        </tr>
                        <tr>
                            <td>Gender : </td><td>{user.gender}</td>
                        </tr>
                        <tr>
                            <td>Status : </td><td>{user.isMarried ? "Married" : "Not Married"}</td>
                        </tr>
                        <tr>
                            <td>Country : </td><td>{user.country}</td>
                        </tr>
                        <tr>
                            <td>Bio : </td><td>{user.bio}</td>
                        </tr>
                    </tbody>
                </table>
                <div className='Box'>
                    <input type="text" name='name' placeholder='Enter Name ' value={user.name} onChange={changeUser} />
                    <input type="number" name='age' placeholder='Enter Age' value={user.age} onChange={changeUser} />
                    <label htmlFor="Gender">
                        <input type="radio" value={"Male"} name='gender' checked={user.gender == "Male"} onChange={changeUser} />Male
                    </label>
                    <label htmlFor="Gender">
                        <input type="radio" value={"Female"} name='gender' checked={user.gender == "Female"} onChange={changeUser} />Female
                    </label>
                    <label htmlFor="Status">
                        <input name='isMarried' type="checkbox" value={""} onChange={changeUser} checked={user.isMarried} />isMarried
                    </label>
                </div>
                <div className='country'>
                    <select name="country" id='country' onChange={changeUser}>
                        <option value="India">India</option>
                        <option value="US">US</option>
                        <option value="UK">UK</option>
                    </select>
                    <textarea value={user.bio} name="bio" id="" cols="30" rows="5" placeholder='Something About You' onChange={changeUser} >

                    </textarea>
                </div>

            </form>
        </>
    )
}

export default Form;