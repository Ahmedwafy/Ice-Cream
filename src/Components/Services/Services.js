import './Services.css'
import React, { useState } from 'react';

import { Container, Col, Row} from "react-bootstrap";
import NavBar from '../Nav-Bar/Nav-Bar';
import image1 from '../../Images/icecream-img3.png'
import image2 from '../../Images/icecream-img2.png'
import image3 from '../../Images/icecream-img4.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from '../Footer/Footer'
function Services () {

  // Using React State for Inline Hover
  // 1 - Add useState to your component [ import useState ]
  // 2 - Modify the component to handle hover using onMouseEnter and onMouseLeave: next 4 lines
  // 3 - now use [ imageStyle / handleMouseEnter / handleMouseLeave ] in Image
  
    // next 4 lines for 1st img card
    const [hover, setHover] = useState(false);
    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);
    const imageStyle = hover ? { transform: 'scale(1.05)', transition: 'transform 0.3s ease' } : {};


    // next 4 lines for 2nd img card
    const [hover2, setHover2] = useState(false);
    const handleMouseEnter2 = () => setHover2(true);
    const handleMouseLeave2 = () => setHover2(false);
    const imageStyle2 = hover2 ? { transform: 'scale(1.05)', transition: 'transform 0.3s ease'} : {};


    // next 4 lines for 3rd img card
    const [hover3, setHover3] = useState(false);
    const handleMouseEnter3 = () => setHover3(true);
    const handleMouseLeave3 = () => setHover3(false);
    const imageStyle3 = hover3 ? { transform: 'scale(1.05)', transition: 'transform 0.3s ease'} : {};
    
    return (
        <div>
            <NavBar/>
            <div>
                <Container>

                    <div style={{textAlign:'center',marginTop:'100px'}}>
                        <h5 style={{fontSize:'50px'}}>Our services</h5>
                        <span>am text block. Click editbutton to change this text. 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            <br/> Ut elit tellus, luctus nec ullamcorper mattis, 
                            pulvinar dapibus leo.
                        </span>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <Row className='d-flex justify-content-center'>
                        <Col lg={4} className='d-flex justify-content-center'>
                            <Card style={{ width:'15rem'}} className='card'>
                                
                                <Card.Img className='imaage1'
                                    variant="top" 
                                    src={image1} 
                                    // 3 
                                    style={imageStyle}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                />

                                <Card.Body>
                                    <Card.Title style={{textAlign:'center'}}>
                                        Icecream Making
                                    </Card.Title>
                                    <Card.Body style={{textAlign:'center'}}>
                                    Some quick example text to build on the card 
                                    title and make up the
                                    bulk of the card's content.
                                    </Card.Body>
                                    <div className="d-flex justify-content-center">
                                        <Button variant="danger">Read More</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4} className='d-flex justify-content-center'>
                        <Card style={{ width:'15rem'}} className='card'>
                                
                                <Card.Img className='imaage2'
                                    variant="top" 
                                    src={image2} 
                                    style={imageStyle2}
                                    onMouseEnter={handleMouseEnter2}
                                    onMouseLeave={handleMouseLeave2}
                                />

                                <Card.Body>
                                    <Card.Title style={{textAlign:'center'}}>
                                        Icecream Making
                                    </Card.Title>
                                    <Card.Body style={{textAlign:'center'}}>
                                    Some quick example text to build on the card 
                                    title and make up the
                                    bulk of the card's content.
                                    </Card.Body>
                                    <div className="d-flex justify-content-center">
                                        <Button variant="warning">Read More</Button>
                                    </div>
                                </Card.Body>
                            </Card> 
                        </Col>

                        <Col lg={4} className='d-flex justify-content-center'>
                        <Card style={{ width:'15rem'}} className='card'>
                                
                                <Card.Img className='imaage3'
                                    variant="top" 
                                    src={image3} 
                                    style={imageStyle3}
                                    onMouseEnter={handleMouseEnter3}
                                    onMouseLeave={handleMouseLeave3}
                                />

                                <Card.Body>
                                    <Card.Title style={{textAlign:'center'}}>
                                        Icecream Making
                                    </Card.Title>
                                    <Card.Body style={{textAlign:'center'}}>
                                    Some quick example text to build on the card 
                                    title and make up the
                                    bulk of the card's content.
                                    </Card.Body>
                                    <div className="d-flex justify-content-center">
                                        <Button variant="primary">Read More</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
            <br/>
            <br/>
            <br/>
            <Footer/>
        </div>
    )
}

export default Services;