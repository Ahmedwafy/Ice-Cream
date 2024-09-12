import { Container, Col, Row } from "react-bootstrap"

import NavBar from "../Nav-Bar/Nav-Bar"
import Footer from '../Footer/Footer'
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
function Pricing () {
    return (
        <div>
            <NavBar/>

        <Container>
            <div style={{textAlign:'center',marginTop:'100px'}}>
                <h5 style={{fontSize:'50px'}}>Choose the perfect plan</h5>
                <span>am text block. Click editbutton to change this text. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    <br/> Ut elit tellus, luctus nec ullamcorper mattis, 
                    pulvinar dapibus leo. 
                </span>          
            </div>
        <br/>
        <br/>
        <br/>
            <Row>
                <Col lg={4} style={{textAlign:'center',padding:'50px 0px'}} className="justify-content-center">
                    <h1 style={{fontSize:'70px'}}>$ 19</h1>
                    {/* <hr style={{width:'50%',margin:'auto'}}/> */}
                    <span>PER MONTH</span>                   
                    <div style={{borderTop:'3px solid black', width:'15%',margin:'auto',marginTop:'50px',marginBottom:'50px'}}></div>
                   
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'20px',margin:'auto'}}>
                        <FontAwesomeIcon icon={faCheck} />
                        <span  className="d-block" style={{margin:'10px 0px'}}>Historical Data</span>
                    </div>

                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'20px'}}>
                        <FontAwesomeIcon icon={faCheck} />
                        <span className="d-block" style={{margin:'10px 0px'}}>Unlimited Users</span>
                    </div> 

                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'20px'}}>
                        <FontAwesomeIcon icon={faCheck} />
                        <span className="d-block" style={{margin:'10px 0px'}}>Individual Tracking</span>
                    </div>

                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'20px'}}>
                        <FontAwesomeIcon icon={faCheck} />
                        <span className="d-block" style={{margin:'10px 0px'}}>Dedicated Account</span>
                    </div>
                </Col>

                <Col lg={4} style={{textAlign:'center',background:"#FF4747",color:'#FFFEFE',padding:'50px 0px',borderRadius:'10px'}}>
                    <h1 style={{fontSize:'70px'}}>$ 49</h1>
                    {/* <hr style={{width:'50%',margin:'auto'}}/> */}
                    <span>PER MONTH</span>
                    <div style={{borderTop:'3px solid #FFFEFE', width:'15%', margin:'auto',marginTop:'50px',marginBottom:'50px'}}></div>
                        
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'20px',margin:'auto'}}>
                        <FontAwesomeIcon icon={faCheck} />
                        <span  className="d-block" style={{margin:'10px 0px'}}>Historical Data</span>
                    </div>

                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'20px'}}>
                        <FontAwesomeIcon icon={faCheck} />
                        <span className="d-block" style={{margin:'10px 0px'}}>Unlimited Users</span>
                    </div> 

                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'20px'}}>
                        <FontAwesomeIcon icon={faCheck} />
                        <span className="d-block" style={{margin:'10px 0px'}}>Individual Tracking</span>
                    </div>


                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'20px'}}>
                        <FontAwesomeIcon icon={faCheck} />
                        <span className="d-block" style={{margin:'10px 0px'}}>Dedicated Account</span>
                    </div>
                </Col>

                <Col lg={4} style={{textAlign:'center',padding:'50px 0px'}}>
                    <h1 style={{fontSize:'70px'}}>$ 99</h1>
                    {/* <hr style={{width:'50%',margin:'auto'}}/> */}
                    <span>PER MONTH</span>
                    <div style={{borderTop:'3px solid black', width:'15%', margin:'auto',marginTop:'50px',marginBottom:'50px'}}></div>
                        
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'20px',margin:'auto'}}>
                        <FontAwesomeIcon icon={faCheck} />
                        <span  className="d-block" style={{margin:'10px 0px'}}>Historical Data</span>
                    </div>

                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'20px'}}>
                        <FontAwesomeIcon icon={faCheck} />
                        <span className="d-block" style={{margin:'10px 0px'}}>Unlimited Users</span>
                    </div> 

                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'20px'}}>
                        <FontAwesomeIcon icon={faCheck} />
                        <span className="d-block" style={{margin:'10px 0px'}}>Individual Tracking</span>
                    </div>

                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'20px'}}>
                        <FontAwesomeIcon icon={faCheck} />
                        <span className="d-block" style={{margin:'10px 0px'}}>Dedicated Account</span>
                    </div>
                </Col>
            </Row>
        </Container>
        <br/>
        <br/>
        <br/>
        <Footer/>

        </div>
    )
}

export default Pricing