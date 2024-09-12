import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import image1 from "../../Images/icecream-img1.png"
import image2 from "../../Images/icecream-img2.png"
import image3 from "../../Images/icecream-img3.png"
import image4 from "../../Images/icecream-img4.png"

import "./Flavors.css"

function Flavors () {
  return (
    <Container style={{marginTop:'100px'}}>
      <Row>
        <Col className="text-center" style = {{fontFamily:'Great Vibes',color:'#FF4747',fontSize:'40px'}}>
          See our best
        </Col>
      </Row>

      <Row>
        <Col className="text-center" style={{fontFamily:'Chewy, system-ui', fontSize:'50px'}}>
          Ice Creams
        </Col>
      </Row>

      <br/> 

      <Row className="justify-content-evenly" xs={{span:'10',offset:'0'}} lg={{span:'3',offset:'0'}}>

        <Col md={3} >
            <div style={{textAlign:'center'}}>
            <img src={image1} alt='#'/>
            <h5 style={{fontFamily:'Chewy, system-ui',color:'#FF94BE'}}>Sparkle Ice Cream</h5>
            <span>Pellentesque habitant mtristique senectu etuset malesuada fames turpis egestas.</span>
            </div>
        </Col>

        <Col md={3}>    
          <div style={{textAlign:'center'}}>
            <img src={image2} alt='#'/>
            <h5 style={{fontFamily:'Chewy, system-ui',color:'#FFB400'}}>Mango Ice Cream</h5>
            <span>Pellentesque habitant mtristique senectu etuset malesuada fames turpis egestas.</span>
          </div>
        </Col>


        <Col md={3}>   
          <div style={{textAlign:'center'}}>
            <img src={image3} alt='#'/>
            <h5 style={{fontFamily:'Chewy, system-ui',color:'#FC5937'}}>Orange Ice Cream</h5>
            <span>Pellentesque habitant mtristique senectu etuset malesuada fames turpis egestas.</span>
          </div>
        </Col>

        <Col md={3}>  
          <div style={{textAlign:'center'}}>
            <img src={image4} alt='#'/>
            <h5 style={{fontFamily:'Chewy, system-ui',color:'#50DAC1'}}>Berry Ice Cream</h5>
            <span>Pellentesque habitant mtristique senectu etuset malesuada fames turpis egestas.</span>
          </div>
        </Col>

        <Row>
          <Col md={4} style={{margin:'auto'}} className='d-flex justify-content-center'>
            <button style={{textAlign:'center'}} className='newButton'>View All Ice Creams</button>
          </Col>
        </Row>

          </Row>
    </Container>
  );
}

export default Flavors;