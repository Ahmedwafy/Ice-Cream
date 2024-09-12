import { Container, Row, Col, Image} from 'react-bootstrap';
import React from 'react'
// import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ExampleCarouselImage from '../ExampleCarouselImage/ExampleCarouselImage';
import Carousel from 'react-bootstrap/Carousel';

import "./Clients.css"

import image1 from '../../Images/team1-150x150.jpg'
import image2 from '../../Images/team2-150x150.jpg'
import image3 from '../../Images/team3-150x150.jpg'

function Clients () {
    return (
        <div className='Clients' style={{paddingTop:'30px'}}>
            <Container>
              <Row>
              
                <Col xs={{span:11,offset:0}} sm={{span:10,offset:2}} lg={{span:8,offset:4}}>

                    <Row>
                        <Col>
                            <h2 style={{fontFamily:'Great Vibes',marginLeft:'25px'}}>Different flavors of taste</h2>
                            <h2 style={{fontFamily:'Chewy, system-ui',fontSize:'50px',marginLeft:'25px'}}>Clients Are Saying</h2>
                        </Col>
                    </Row>

                    <Carousel>

                        <Carousel.Item > 
                            <ExampleCarouselImage text="consectetur adipiscing elitcons consectetur adipiscing elitcons consectetur adipiscing elitcons consectetur adipiscing elitcons consectetur adipiscing elitcons consectetur adipiscing elitcons"/>
                            <Carousel.Caption>
                            <div className='image'>
                                <Image src={image1} alt='First Slide' roundedCircle/>
                                <div className='slide'>    
                                    <h2 className='name'>Alina Doe</h2>
                                    <span className='words'>Happy Customer</span>
                                </div>
                            </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        
                        <Carousel.Item>
                            <ExampleCarouselImage text="consectetur adipiscing elitcons consectetur adipiscing elitcons consectetur adipiscing elitcons"/>
                            <Carousel.Caption>
                            <div className='image'>
                                <Image src={image2} alt='First Slide' roundedCircle/>
                                <div className='slide'>    
                                    <h2 className='name'>John Doe</h2>
                                    <span className='words'>Happy Customer</span>
                                </div>
                            </div>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <ExampleCarouselImage text="consectetur adipiscing elitcons consectetur adipiscing elitcons"/>
                            <Carousel.Caption>
                            <div className='image'>
                                <Image src={image3} alt='First Slide' roundedCircle/>
                                <div className='slide'>    
                                    <h2 className='name'>Sara Doe</h2>
                                    <span className='words'>Happy Customer</span>
                                </div>
                            </div>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>
                </Col>
              </Row>
            </Container>
        </div>
    )
}

export default Clients