import img1 from 

const userDetails = [
    { name: "Partha", city: "Ireland", skills: ["HTML", "CSS", "JS", "JAVA", "SQL", "C", "Front-End Developement"], online: true, profile: {img1} },
    { name: "Jercy", city: "Russia", skills: ["HTML", "CSS", "JS", "JAVA", "Node", "SQL","AWS", "Back-End Developement"], online: false, profile: {img2} },
    { name: "Vijay", city: "Califonia", skills: ["HTML", "CSS", "JS", "PYTHON", "DJANGO", "C++", "Full-Stack Developement"], online: false, profile: {img3} }
]


function User(props) {
    return (
        <div className="cardContainer">
            <span className={props.online ? "pro online" : "pro offline"}>{props.online ? "Online" : "Offline"}</span>
            <img src={props.profile} alt="" className="img" />
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <p>Front-End Developer</p>

            <div className="buttons">
                <button className="primary">Message</button>
                <button className="primary outline">Follow</button>
            </div>
            <div className="skills">
                <h6>Skills</h6>
                <ul>
                    {props.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export const App = () => {
    return (
        <>
            {userDetails.map((user,index)=>(
                <User key={index} name ={user.name} city={user.city} skills={user.skills} online = {user.online} profile = {user.profile}/>
            ))};
    </>
    );
};

export default App;

// return (
//     <User name = "Naveen" city = "Tenkasi" skills = {["HTML","CSS","JS","JAVA","SQL","C","Front-End Developement"]} online = {true} profile = ""/>
// ) --> Our Refference Code.