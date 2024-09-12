import { Container, Row, Col, Image} from 'react-bootstrap';
import image1 from '../../Images/section4-img.png'
import image2 from '../../Images/menu-img1.png'
import image3 from '../../Images/menu-img2.png'
import image4 from '../../Images/menu-img3.png'
import "./Menu.css"
function Menu () {
    return (
        <div style={{background:"#F65945"}} className='menu'>
            <Container style={{marginTop:"100px",paddingTop:'50px'}}>
                <Row className='justify-content-around'>
                    <Row>
                        <Col xs={{span:4,offset:0}} lg={{span:5,offset:4}} style={{position:'relative',top:'100px'}}>
                            <h2 style={{fontFamily:'Great Vibes',color:'black'}}>Flavors Of</h2>
                            <h2 style={{fontFamily:'Chewy, system-ui',fontSize:'50px',color:'white'}}>Our Menu</h2>
                        </Col>
                    </Row>
                
                    <Col xs={{span:3,offset:0}}>
                        <div className='d-flex justify-content-center'>    
                            <Image src={image1} alt='#'/>
                        </div>
                    </Col>
                    
                    <Col style={{textAlign:'center',marginTop:'120px'}} lg={3}>
                        <Image src={image2} alt='#'/>
                        <h5 className='header' style={{fontFamily:'Chewy, system-ui',fontWeight:'lighter',fontSize:'25px'}}>Choco CupCake</h5>
                        <div className='price'>$14.55</div>
                        <button className='custom-btn2'>Add to cart</button>
                    </Col>
                

                    <Col style={{textAlign:'center',marginTop:'120px'}} lg={3}>
                        <Image src={image3} alt='#'/>
                        <h5 className='header' style={{fontFamily:'Chewy, system-ui',fontWeight:'lighter',fontSize:'25px'}}>Choco Banana</h5>
                        <div className='price'>$14.55</div>
                        <button className='custom-btn2'>Add to cart</button>
                    </Col>
                

                    <Col style={{textAlign:'center',marginTop:'120px'}} lg={3}>
                        <Image src={image4} alt='#'/>
                        <h5 className='header' style={{fontFamily:'Chewy, system-ui',fontWeight:'lighter',fontSize:'25px'}}>Vanilla Berry</h5>
                        <div className='price'>$14.55</div>
                        <button className='custom-btn2'>Add to cart</button>
                    </Col>
                        
                </Row>
            </Container> 
        </div>

    );
  }
  
  export default Menu;