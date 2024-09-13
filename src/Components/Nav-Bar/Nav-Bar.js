/* The following line can be included in your src/index.js or App.js file */
import 'bootstrap/dist/css/bootstrap.min.css';

import "./Nav-Bar.css"
import React, { useState, useEffect } from "react";
import { Image, Col, Row, ListGroup, Container, Dropdown, DropdownButton} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedinIn, faPinterest, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import phone from "../../Images/1.png"
import logo from "../../Images/2.png"
import { NavLink } from 'react-router-dom';

function Nav_Bar () {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 576);
      };
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);


    return ( 
        <Container>     

            <Row className="justify-content-between bg-light py-3">

                <Col className="text-start">
                    <div className='custom-bar'>
                        <Image className='custom-image1' style={{paddingTop:'20px', scale:'1.3'}} src={phone} alt="#" /> 
                        <span style={{marginLeft:'20px', fontWeight:'revert-layer'}} className='custom-span1'>Need Help?</span> 
                        <br/>
                        <span style={{marginLeft:'43px'}} className='custom-span'>123-456-7890</span>
                    </div>
                </Col>

                <Col className="text-center d-flex justify-content-center">
                    <NavLink to="/" id='logoo'>    
                        <Image src={logo} alt="#"/>
                    </NavLink>
                </Col>

                <Col className="text-center">
                    <ListGroup horizontal className='justify-content-center custom-list'>

                        <ListGroup.Item>
                            <FontAwesomeIcon className='icon1' icon={faFacebook} />
                        </ListGroup.Item>
                        
                        <ListGroup.Item>
                            <FontAwesomeIcon className='icon2' icon={faInstagram} />
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <FontAwesomeIcon className='icon3' icon={faLinkedinIn} />
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <FontAwesomeIcon className='icon4' icon={faPinterest} />
                        </ListGroup.Item>

                        
                        <ListGroup.Item>
                            <FontAwesomeIcon className='icon5' icon={faXTwitter} />
                        </ListGroup.Item>

                    </ListGroup>
                </Col>
            </Row>   

            <br/>

        {isMobile ? (
            // Component for =< 576px ..  less than 576px
            <div className='d-flex justify-content-center baar'>
                <DropdownButton id="dropdown-basic-button" title="Menu">

                    <Dropdown.Item className='home'>
                        <NavLink className={({ isActive }) => isActive ? 'home1 active' : 'home1'} to="/">Home</NavLink>
                    </Dropdown.Item>

                    <Dropdown.Item className='AboutUs'>
                        <NavLink className={({ isActive }) => isActive ? 'aboutus1 active' : 'aboutus1'} to="/AboutUs">About Us</NavLink> 
                    </Dropdown.Item>

                     <Dropdown.Item className='Services'>
                        <NavLink className={({ isActive }) => isActive ? 'services1 active' : 'services1'} to="/Services">Services</NavLink> 
                    </Dropdown.Item>

                    <Dropdown.Item className='Pricing'>
                        <NavLink className={({ isActive }) => isActive ? 'price1 active' : 'price1'} to="/Pricing">Pricing</NavLink> 
                    </Dropdown.Item>

                    <Dropdown.Item className='ContactUs'>
                        <NavLink className={({ isActive }) => isActive ? 'contact1 active' : 'contact1'} to="/ContactUs">Contact Us</NavLink> 
                    </Dropdown.Item>
                </DropdownButton>
            </div>
        ) :  (
            // Component for > 576px ..  more than 576px
            <Row className="justify-content-center pt-3 baar" style={{background:'#FF4747',borderRadius:'8px'}}>
            <Col className='d-flex justify-content-center'>
                <ListGroup horizontal >

                    <ListGroup.Item className='home'>
                        <NavLink className={({ isActive }) => isActive ? 'home1 active' : 'home1'} to="/">Home</NavLink>
                    </ListGroup.Item>

                    <ListGroup.Item className='AboutUs'>
                        <NavLink className={({ isActive }) => isActive ? 'aboutus1 active' : 'aboutus1'} to="/AboutUs">About Us</NavLink> 
                    </ListGroup.Item>

                    <ListGroup.Item className='Services'>
                        <NavLink className= {({ isActive }) => isActive ? 'services1 active' : 'services1'} to="/Services">Services</NavLink>
                    </ListGroup.Item>

                    <ListGroup.Item className='Pricing'>
                        <NavLink className={({ isActive }) => isActive ? 'price1 active' : 'price1'} to="/Pricing">Pricing</NavLink>
                    </ListGroup.Item>

                    <ListGroup.Item className='ContactUs'>
                        <NavLink className={({ isActive }) => isActive ? 'contact1 active' : 'contact1'} to="/ContactUs">Contact Us</NavLink>
                    </ListGroup.Item>

                </ListGroup>
            </Col>
            </Row>
        )}
        </Container>
  
    )
    
}

export default Nav_Bar

// Purpose of useEffect:
// useEffect runs after the component has been rendered to the DOM, 
// and it's used here to add an event listener for the window resizing. 
// It allows the component to react to changes in the window size dynamically.

//--------------------------------------------------------------

// handleResize:
// This function is defined inside the useEffect and will be triggered whenever 
// the window is resized.

//--------------------------------------------------------------

// window.innerWidth <= 576 checks the current window width. 
// If it's 576 pixels or less, setIsMobile(true) will be called. 
// If it's greater, setIsMobile(false) will be called. 
// This keeps the state (isMobile) in sync with the screen width as the window is
// resized.

//--------------------------------------------------------------

// window.addEventListener("resize", handleResize):
// This adds an event listener to the window, so whenever the window is resized, 
// handleResize will be executed, adjusting the isMobile state accordingly.
// return () => window.removeEventListener("resize", handleResize);:

//--------------------------------------------------------------

// This is a cleanup function that runs when the component unmounts (i.e., when it's 
// removed from the page). 
// It removes the resize event listener to avoid memory leaks.
// [] Dependency Array:
// The empty array [] means the useEffect will run only once, after the component is 
// first rendered. It won't run again on subsequent renders unless the component is 
// unmounted and mounted again.
// The event listener for resize will stay active as long as the component is mounted.

//--------------------------------------------------------------

// Summary: 

// Initially, the state (isMobile) is set based on the window width.

// After the component mounts, an event listener tracks changes in window size.

// When the window is resized, the isMobile state is updated based on whether the 
// new window width is 576 pixels or less.

// The cleanup function ensures that the event listener is removed when the component is
// no longer needed.

// This setup ensures that your component dynamically adjusts based on the screen width.