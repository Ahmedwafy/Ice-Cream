
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import "./Flavors2.css"

import image1 from "../../Images/feature-icecream-img (1).png"
// import image3 from "../../Images/feature-icecream-img2.png"
import image2 from "../../Images/center-img.png"

function Flavors2 () {
  return (
    <div style={{background:"#50CAB7"}}>
    <Container style={{paddingTop:'30px'}} className='Flavors2'>
      
      <Row>
        <Col md={6} style={{margin:'auto'}}>
          <h2 style = {{
            fontFamily:'Great Vibes',
            textAlign:'center',
            fontSize:'40px'
            }}>
            Flavors of</h2>
        </Col>
      </Row>

      <Row>
        <Col  md={6} style={{margin:'auto'}} className='d-flex justify-content-center'>
          <h3 style = {{
            fontFamily:'Chewy, system-ui',
            textAlign:'center',
            fontSize:'50px',
            color:'white'
            }}>
            Our Ice Cream</h3>
        </Col>
      </Row>

      <br/>

      <Row className="justify-content-between">

        <Col lg={4} style={{textAlign:'start'}} > 

          <div className='d-flex justify-content-center' style={{marginTop:'20px'}}>
            <Image src={image1} alt='#' />
            <div className='desc1' style={{color:'white'}}>
              <h5>Stracciatella</h5>
              <span>Vestibulum rutrum, ligufrifeugiat sena rhoncus.</span>
            </div>
          </div>

          <div className='d-flex justify-content-center' style={{marginTop:'60px'}}>
            <Image src={image1} alt='#' />
            <div className='desc1' style={{color:'white'}}>
              <h5>Stracciatella</h5>
              <span>Vestibulum rutrum, ligufrifeugiat sena rhoncus.</span>
            </div>
          </div>

          <div className='d-flex justify-content-center' style={{marginTop:'60px'}}>
            <Image src={image1} alt='#' />
            <div className='desc1' style={{color:'white'}}>
              <h5>Stracciatella</h5>
              <span>Vestibulum rutrum, ligufrifeugiat sena rhoncus.</span>
            </div>
          </div>

        </Col>  

        <Col lg={4} className='cone'> 
          <Image src={image2} alt='#' />
        </Col>

        <Col  lg={4} style={{textAlign:'end'}} > 

          <div className='d-flex justify-content-center' style={{marginTop:'20px'}}>
            <div className='desc2' style={{color:'white'}}>
              <h5>Stracciatella</h5>
              <span>Vestibulum rutrum, ligufrifeugiat sena rhoncus.</span>
            </div>
            <Image src={image1} alt='#' />
          </div>

          <div className='d-flex justify-content-center' style={{marginTop:'60px'}}>
            <div className='desc2' style={{color:'white'}}>
              <h5>Stracciatella</h5>
              <span>Vestibulum rutrum, ligufrifeugiat sena rhoncus.</span>
            </div>
            <Image src={image1} alt='#' />
          </div>

          <div className='d-flex justify-content-center' style={{marginTop:'60px'}}>
            <div className='desc2' style={{color:'white'}}>
              <h5>Stracciatella</h5>
              <span>Vestibulum rutrum, ligufrifeugiat sena rhoncus.</span>
            </div>
            <Image src={image1} alt='#' />
          </div>

        </Col>  

      </Row>  
    </Container>
    </div>
  );
}

export default Flavors2;