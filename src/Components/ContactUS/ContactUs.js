import NavBar from "../Nav-Bar/Nav-Bar"
import Footer from '../Footer/Footer'
import { Container, Col, Row } from "react-bootstrap"


function ContactUs () {
    return (
        <div>
            <NavBar/>
            
            <Container>
                <Row>
                    <Col md={4}> 
                        <div style={{textAlign:'center',marginTop:'100px'}}>
                            <h5 style={{fontSize:'50px'}}>Location</h5>
                            <span>709 Honey Creek Dr.<br/> New York, NY 10028</span>          
                        </div>
                    </Col>
                    <Col md={4}> 
                        <div style={{textAlign:'center',marginTop:'100px'}}>
                            <h5 style={{fontSize:'50px'}}>Hours</h5>
                            <span>10:00 AM – 22.00 PM<br/>Monday – Sunday</span>          
                        </div>
                    </Col >
                    <Col md={4}> 
                        <div style={{textAlign:'center',marginTop:'100px'}}>
                            <h5 style={{fontSize:'50px'}}>Contact us</h5>
                            <span>Phone: 1 800 755 60 20<br/>Email: contact@company.com</span>          
                        </div>
                    </Col>
                </Row>

            </Container>
            <br/>
            <br/>
            <br/>
            <br/>
            <Footer/>
        </div>
    )
}

export default ContactUs;