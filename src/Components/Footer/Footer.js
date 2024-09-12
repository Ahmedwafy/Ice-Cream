    import { Container, Row, Col, Image} from 'react-bootstrap';    
    import image from '../../Images/2.png'
    import './Footer.css'
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { faFacebook, faInstagram, faLinkedinIn, faPinterest, faXTwitter } from '@fortawesome/free-brands-svg-icons';
    import BotNav from '../BotNav/BotNav';
    function Footer () {
        return (
            <div className='Footer' style={{background:"#D3D3D3",paddingTop:'20px'}} >
                <Container>

                    <Row>
                        <Col xs={{ span:4 , offset:5 }}>
                            <Image src={image} alt='#'/>
                        </Col>
                    </Row>

                    <br/>
                    <br/>
                    
                    <Row className='justify-content-between'>

                        <Col lg={{span:4, offset:0}} >
                            <div style={{ background:'#FF4747',height:"150px",borderRadius:'8px',padding:'20px',textAlign:'center',overFlow:'hidden'}}>
                                <h style={{fontSize:'17px',color:'#FFFFFF',fontWeight:'bold'}}>ADDRESS</h>
                                <div style={{fontSize:'17px',color:'#FFFFFF',marginTop:'20px'}}>
                                    Vitae pharetra vehicula Street <br/> 
                                    Sed ipsum arcu, 8547
                                </div>
                            </div>
                        </Col>

                        <Col lg={{span:4, offset:0}} style={{marginBottom:'10px'}}>
                            <div >
                                <h2 style={{width:'150px', margin:'auto', paddingBottom:'30px'}}>Follow us</h2>
                                <ul className='list' style={{ listStyle:'none'}}>
                                    <FontAwesomeIcon className='icon' icon={faFacebook} />
                                    <FontAwesomeIcon className='icon' icon={faInstagram} />
                                    <FontAwesomeIcon className='icon' icon={faLinkedinIn} />    
                                    <FontAwesomeIcon className='icon' icon={faPinterest} />
                                    <FontAwesomeIcon className='icon' icon={faXTwitter} />
                                </ul>
                            </div>
                        </Col>

                        <Col lg={{span:4, offset:0}}>
                            <div style={{ background:'#4CA48F', height:"150px", borderRadius:'8px', padding:'20px',textAlign:'center'}}>
                                <h style={{fontSize:'17px',color:'#FFFFFF',fontWeight:'bold'}}>Contant us</h>
                                <div style={{fontSize:'17px',color:'#FFFFFF',marginTop:'20px'}}>
                                    info@sitename.com <br/>
                                    121 - 369 - 8547
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
                <br/>
                <br/>
                <br/>
                <BotNav/>
            </div>
        )
    }

    export default Footer