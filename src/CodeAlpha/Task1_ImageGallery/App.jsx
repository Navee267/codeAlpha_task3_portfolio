import navElements from "./navElements.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faBars, faMailBulk, faPen, faPhone, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useRef } from "react";
import { useState } from "react";

//Image Gallery Using React Js And Css 

export const App = () => {
    const container1Ref = useRef(null);
    const container2Ref = useRef(null);
    const container3Ref = useRef(null);
    const container4Ref = useRef(null);
    const container5Ref = useRef(null);

    const scrollToNextContainer = () => {
        // Scroll to the next container
        container2Ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    const scrollToNextContainer2 = () => {
        container3Ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    const scrollToNextContainer3 = () => {
        container4Ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    const scrollToNextContainer4 = () => {
        container5Ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    const imageLinks = [
        "https://picsum.photos/300/200?random=1",
        "https://picsum.photos/300/200?random=2",
        "https://picsum.photos/300/200?random=3",
        "https://picsum.photos/300/200?random=4",
        "https://picsum.photos/300/200?random=5"
    ];

    const imageLinks2 = [
        "https://picsum.photos/300/200?random=6",
        "https://picsum.photos/300/200?random=7",
        "https://picsum.photos/300/200?random=8",
        "https://picsum.photos/300/200?random=9",
        "https://picsum.photos/300/200?random=10"
    ];

    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNavbar = () => {
        setIsNavVisible(!isNavVisible);
    };

    const refresh = ()=>{
        window.location.reload();
    }
    const forMore = ()=>{
        window.location.href = "https://picsum.photos/";
    }
    return (
        <>
            <div className="container">
                <div id="home" className="firstPage" ref={container1Ref} >
                    <nav>
                        <h1>
                            <a href="#home">Gallery</a>
                        </h1>
                        <ul className="navs">
                            {
                                navElements.map((item, index) => (
                                    <li key={index} ><a key={index} href={item.link}>{item.element}</a></li>
                                ))
                            }
                            <button className="signup-btn">Sign Up</button>
                        </ul>
                        <p className="menu" onClick={toggleNavbar}> <FontAwesomeIcon icon={faBars}/>
                        </p>
                    </nav>
                    <div className="mobileNav" style={{ left: isNavVisible ? '250px' : '-300px' }}>
                        <ul>
                            {
                                navElements.map((item, index) => (
                                    <li key={index} ><a key={index} href={item.link}>{item.element}</a></li>
                                ))
                            }
                        </ul>
                        <p className="close" onClick={toggleNavbar}><FontAwesomeIcon icon={faXmark} /></p>
                    </div>
                    <div className="content">
                        <div className="div1">
                            <h1>"Moments Captured Beautifully"</h1>
                            <p>
                                Welcome to our gallery! Dive into beauty, stories, and moments captured in every image.</p>
                        </div>
                        <div className="div2">
                            <img src="https://cdn.greatbigphotographyworld.com/wp-content/uploads/2022/04/portuguese-gravity-SPUzGlCN0Vk-unsplash.jpg" alt="" />
                        </div>
                    </div>
                    <span className="scroll" onClick={scrollToNextContainer}>Scroll Down</span>

                </div>
                <div id="about" className="secondPage" ref={container2Ref} >
                    <div className="div1">
                        <h2>About</h2>
                    </div>
                    <p className="gap"></p>
                    <div className="div2">
                        <div><h2>"A World Through My Lens"</h2>
                            <p>Welcome to my gallery, where every image captures a unique story and moment.
                            </p></div>
                        <p>
                            You’ll find a mix of nature, people, and cityscapes, each showcasing different emotions and perspectives. Every shot aims to inspire, connecting viewers to the world in a new way.
                        </p>
                        <p>'
                            As you explore, let each image invite you to see the world through fresh eyes. I hope these photos bring inspiration, curiosity, and a sense of wonder. Enjoy the journey!
                        </p>
                    </div>
                    <span className="scroll" onClick={scrollToNextContainer2}>Scroll Down</span>
                </div>
                <div id="gallery" className="thirdPage" ref={container3Ref}>
                    <div className="div1">
                        <div>
                            {
                                imageLinks.map((image, index) => (
                                    <img src={image} key={index} />
                                ))
                            }
                        </div>

                        <span className="scroll-third" onClick={scrollToNextContainer3}>Scroll Down</span>
                    </div>
                    <p className="ver-gap"></p>
                    <div className="div2">
                        <div>
                            <h2>Explore Our Site..</h2>
                            <p>Explore more images and uncover stunning moments, vibrant colors, and unique perspectives that inspire and captivate with every view.</p>
                            <button className="btn" onClick={refresh}>Refresh</button>
                        </div>
                    </div>
                </div>
                <div className="fourthPage" ref={container4Ref}>
                    <div className="div1">
                        <div>
                            {
                                imageLinks2.map((image, index) => (
                                    <img src={image} key={index} />
                                ))
                            }
                        </div>
                        <span className="scroll-four" onClick={scrollToNextContainer4}>Scroll Down</span>
                    </div>
                    <p className="ver-gap2"></p>
                    <div className="div2">
                        <div>
                            <h2>"Explore More Images"</h2>
                            <p>Explore more images to uncover stunning visuals, vibrant colors, and unique perspectives that inspire and captivate with every glance.</p>
                            <button className="btn" onClick={forMore}>See More</button>
                        </div>
                    </div>
                </div>
                <div id="contact" className="fifthPage" ref={container5Ref}>
                    <div className="div1">
                        <h2>"Get in Touch with Us"</h2>
                        <p>
                            We are here to help! Whether you have questions, feedback, or just want to say hello, feel free to reach out. Our team is ready to assist you with any inquiries you may have.
                        </p>
                        <p className="gap-fifthPage"></p>
                    </div>
                    <div className="div2">
                        <h2>Contact Info</h2>
                        <ul>
                            <li><FontAwesomeIcon icon={faPhone} /> Phone : 1234567890 </li>
                            <li><FontAwesomeIcon icon={faMailBulk} /> Email : navinraja0681@gmail.com</li>
                            <li><FontAwesomeIcon icon={faAddressBook} /> Address : 1234 Street Name, City, State, ZIP Code</li>
                        </ul>

                        <div className="send-email">
                            <h3>Thank You For Visiting Our Website !</h3>
                            <div className="inputs">
                                <input type="email" placeholder="Enter Your E-Mail" />
                                <button>Send</button>
                            </div>
                        </div>
                        <footer>
                            <div className="social-media">
                                <a href="#"> <FontAwesomeIcon icon={faLinkedin} /></a>
                                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                                <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                            </div>
                            <p><FontAwesomeIcon icon={faPen} /> Designed By <a href="www.linkedin.com/in/n-naveen-kumar-b6a74a299">N.Naveen Kumar</a></p>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    )
};

export default App;
