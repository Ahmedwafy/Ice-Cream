import { Container, Image, Col, Row} from "react-bootstrap";

import Footer from "../Footer/Footer"
import  Navbar  from "../Nav-Bar/Nav-Bar";
import image from '../../Images/section3-img.jpg'

import './About_Us.css'

function AboutUs () {
    return (
        <div className="AboutUS">
            <Navbar />  
            <div className="Containerrr" style={{position:'relative',top:'100px'}}>
                <Container>
                    <Row className="d-flex">
                        <Col lg={{span:6, offset:0}} >
                            <h2 style={{color:'#FF4747',fontSize:'20px',fontFamily:'"Assistant", sans-serif'}}>Who we are</h2>
                            <h2 style={{fontWeight:'bold',fontSize:'50px'}}>About Us</h2>
                            <hr style={{width:'15%', color:'red'}}></hr>
                            <div >
                            <span >spanellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum volutpat in arcu non rutr. Aliquam eros nulla. Sed vel dolor quis urna pellentesque porta eget eu nunic. Praesent tempor bibendum urna, ut congue augue malesuada quisay. Nullam lectus nulla, scelerisque ac eleifend nec.
                            Tristique nec ipsum. Ut quis ornare erat. Duis et urna sit amet nulla one venenatis pharetra. Aenean a cursus purus. Nam accumsan scelerisque orci vitae finibus.
                            </span>
                            <br></br>
                            <br></br>
                            <span>spanellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum volutpat in arcu non rutr. Aliquam eros nulla. Sed vel dolor quis urna pellentesque porta eget eu nunic. Praesent tempor</span>
                            </div>
                            <br/>
                            <button className="custom-btn5">Read More</button>
                        </Col>

                        <Col lg={{span:4, offset:1}} className="d-flex justify-content-center">
                            <Image src={image} 
                                alt="#" 
                            />
                        </Col>

                    </Row>
                </Container>   
                <br/>
                <br/>
            <Footer />  
            </div>
        </div>
    )
}

export default AboutUs;