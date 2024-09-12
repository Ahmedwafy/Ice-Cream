import Nav from 'react-bootstrap/Nav';
import { Container, Row, Col } from 'react-bootstrap';   
import { NavLink as RouterNavLink } from 'react-router-dom';
import './BotNav.css'

function BotNav () {
  return (
    <Container className='botNav' >

        <Row  style={{background:'#C2C2C2',padding:'20px 0',borderRadius:'10px'}}>
        <Col >
            <Nav defaultActiveKey="/" as="ul" className="justify-content-center">

                <Nav.Item as="li" style={{marginRight:'10px'}} className='item'>
                    <RouterNavLink to="/" style={{color:'#282828',fontFamily:'sans-serif',fontSize:'20px',textDecoration:'none'}}>Home</RouterNavLink>
                </Nav.Item>

                <Nav.Item as="li" style={{marginRight:'5px',marginLeft:'5px'}} className='item'>
                    <RouterNavLink to="/AboutUs" style={{color:'#282828',fontFamily:'sans-serif',fontSize:'20px',textDecoration:'none'}}>About Us</RouterNavLink>
                </Nav.Item>

                <Nav.Item as="li" style={{marginRight:'5px',marginLeft:'5px'}} className='item'>
                    <RouterNavLink to="/Services" style={{color:'#282828',fontFamily:'sans-serif',fontSize:'20px',textDecoration:'none'}}>Services</RouterNavLink>
                </Nav.Item>
            
                <Nav.Item as="li" style={{marginRight:'5px',marginLeft:'5px'}} className='item'>
                    <RouterNavLink to="/Pricing" style={{color:'#282828',fontFamily:'sans-serif',fontSize:'20px',textDecoration:'none'}}>Pricing</RouterNavLink>
                </Nav.Item>
                
                <Nav.Item as="li" style={{marginLeft:'10px'}} className='item'>
                    <RouterNavLink to="/ContactUs" style={{color:'#282828',fontFamily:'sans-serif',fontSize:'20px',textDecoration:'none'}}>Contact Us</RouterNavLink>
                </Nav.Item>

            </Nav>
        </Col>
        </Row>

    <br/>

        <Row className="justify-content-center">
        <Col  style={{padding:'10px',textAlign:'center'}}>
            &copy; Copyright 2019. Ice Cream. All Rights Reserved. Designed by SKT Themes
        </Col>
        </Row>
        {/* © =  &copy; */}
    </Container>
    
  );
}

export default BotNav;

