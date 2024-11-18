import { useState } from "react";


const Faqs = ({question,answer}) => {
    const [visible,setVisible] = useState(false);

    const clickingEvent = () =>{
        setVisible(!visible);
    }
    return (
        <>
        <div className={`container ${visible ? "active" : ""}`}>
        <div className="faq-header" onClick={clickingEvent}>
                <div className="faq-question">
                    {question}
                </div>
            </div>
            <div className="faq-body">
                <div className="faq-answer">
                    {answer}
                </div>
            </div>
        </div>
        </>
    )
};

const Faq = ({faqs}) => {
    return (
        <>
            <div className="faq">
                <h2>FAQ's</h2>
                {
                    faqs.map((item)=>(
                        <Faqs key={item.id} question={item.question} answer={item.answer}/>
                    ))
                }
            </div>
        </>
    )
};


const faqs = [
    {
        id:1,
      question: "What is React.js?",
      answer: "React.js is a JavaScript library for building user interfaces, primarily used for single-page applications where data changes over time."
    },
    {
        id:2,
      question: "How does JavaScript handle asynchronous code?",
      answer: "JavaScript uses a combination of callbacks, promises, and async/await syntax to handle asynchronous code, allowing for non-blocking code execution."
    },
    {
        id:3,
      question: "What are the main components of a full-stack application?",
      answer: "A full-stack application typically includes a front-end (UI), a back-end (server-side logic), a database, and an API for communication between the front and back end."
    },
    {id:4,
      question: "What is the purpose of HTML in web development?",
      answer: "HTML (Hypertext Markup Language) provides the structure for web pages, allowing developers to define elements like headings, paragraphs, links, and images."
    },
    {
        id:5,
      question: "Why is CSS important in web design?",
      answer: "CSS (Cascading Style Sheets) controls the visual appearance of web pages, enabling developers to style elements with colors, layouts, fonts, and responsive designs."
    },
    {
        id:6,
      question: "What is Node.js used for?",
      answer: "Node.js is a runtime environment that allows JavaScript to be used on the server-side, enabling the development of scalable and fast web applications."
    },
    {
        id:7,
      question: "How does version control work?",
      answer: "Version control systems, like Git, track changes to code, allowing developers to collaborate and revert to previous versions if necessary."
    },
    {
        id:8,
      question: "What is a RESTful API?",
      answer: "A RESTful API is an API that conforms to REST principles, using standard HTTP methods (GET, POST, PUT, DELETE) for communication between clients and servers."
    },
    {
        id:9,
      question: "What is the difference between SQL and NoSQL databases?",
      answer: "SQL databases are structured with tables and schemas, while NoSQL databases are more flexible, supporting document, key-value, and graph data models."
    },
    {
        id:10,
      question: "What is JSON, and why is it used?",
      answer: "JSON (JavaScript Object Notation) is a lightweight data format used to structure data for easy reading and transmission between a server and client."
    }
  ];

export const App = () => {
    return (
        <>
            <Faq faqs={faqs}/>
        </>
    )
};


export default App;