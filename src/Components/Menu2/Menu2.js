import { Container, Row, Col, Image} from 'react-bootstrap';
import image7 from '../../Images/section5-img.png'
import image4 from '../../Images/menu-img4.png'
import image5 from '../../Images/menu-img5.png'
import image6 from '../../Images/menu-img6.png' 
import "./Menu.css"

function Menu2 () {
    return (
        <div className='menu2' style={{paddingBottom:'20px'}}>
            <Container>
                <Row style={{background:"white"}} className='justify-content-around'>
                
                    <Row>
                        <Col xs={{span:12,offset:0}} style={{position:'relative',top:'100px'}}>
                            <h2 style={{fontFamily:'Great Vibes',color:'#FF4747'}}>See our best</h2>
                            <h2 style={{fontFamily:'Chewy, system-ui',fontSize:'50px',color:'black'}}>Smooth and Soft Drinks</h2>
                        </Col>
                    </Row>

                    <Col style={{textAlign:'center',marginTop:'120px'}} lg={3}>
                        <Image src={image4} alt='#'/>
                        
                            <h5 className='header1' style={{fontFamily:'Chewy, system-ui',textAlign:'center',fontSize:'25px'}}>Choco CupCake</h5>
                            <div className='price2'>$129.00</div>
                            <button className='btn2'>Add to cart</button>
                       
                    </Col>

                    <Col style={{textAlign:'center',marginTop:'120px'}} lg={3}>
                        <Image src={image5} alt='#'/>
                        
                            <h5 className='header2' style={{fontFamily:'Chewy, system-ui',textAlign:'center',fontSize:'25px'}}>Choco Banana</h5>
                            <div className='price2'>$129.00</div>
                            <button className='btn2'>Add to cart</button>
                        
                    </Col>

                    <Col style={{textAlign:'center',marginTop:'120px'}} lg={3}>
                        <Image src={image6} alt='#'/>
                        
                            <h5 className='header3' style={{fontFamily:'Chewy, system-ui',textAlign:'center',fontSize:'25px'}}>Vanilla Berry</h5>
                            <div className='price2'>$129.00</div>
                            <button className='btn2'>Add to cart</button>
                        
                    </Col>

                    <Col xs={3}>
                        <div>
                            <Image src={image7} alt='#'/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Menu2;
