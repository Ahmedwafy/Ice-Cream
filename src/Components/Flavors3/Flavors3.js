import { Container, Row, Col, Image} from 'react-bootstrap';
import image1 from '../../Images/section3-img.jpg'
import './Flavors3.css'

function Flavors3 () {
    return (
      <div className='Flavors3'>
        <Container style={{marginTop:"100px"}}>
          <Row>
            
            <Col className='d-flex justify-content-center'>
              <Image src={image1} alt='#'/>
            </Col>

            <Col >
              <div style={{marginTop:"50px"}}>
            
                <h2 style = {{
                  fontFamily:'Great Vibes',
                  color:'#FF4747'}}>
                  Enjoy moments with
                </h2>

                <h2 style= {{ fontFamily:'Chewy, system-ui',
                  fontSize:'50px'}}>
                  Tasty Ice Cream
                </h2>

                <br/>

                <div>
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Vestibulum volutpat in arcu non
                  rutr. Aliquam a eros nullai. Sed vel dolor quis urna pellentesque 
                  porta eget eu nunic. Ptraesent tempore bibendum urna.
                </div>

                <br/>
                <br/>

                <div>
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Vestibulum volutpat in arcu non 
                  rutr.
                </div>

                <button className='custum-btn'>View All Ice Creams</button>
              </div>
            </Col>

          </Row>
        </Container>
      </div>
    );
  }
  
  export default Flavors3;