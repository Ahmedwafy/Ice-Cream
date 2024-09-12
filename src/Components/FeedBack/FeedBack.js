import { Container, Row, Col, Image, Form, Button} from 'react-bootstrap';
import image from '../../Images/section6-img.png'
import './FeedBack.css'

function FeedBack () {
    return (
        <Container className='feedback'>
        <Row >
            <Col sx={{span:4, offset:0}} className='d-flex justify-content-center'>
                <div>
                    <Image src={image} alt='#'/>
                </div>
            </Col>

            <Col>
                <Form>

                    <h2 style={{fontFamily:'Great Vibes',color:'#FF4747'}}>Send Us Your Feedback</h2>
                    <h2 style={{fontFamily:'Chewy, system-ui',fontSize:'49px'}}>Help us become better!</h2>
       
                <br/>
                    <Form.Group style={{ border: '1px solid #ccc' }} className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email"/>
                    </Form.Group>

                    <Form.Group style={{ border: '1px solid #ccc' }} className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="name" placeholder="Name"/>
                    </Form.Group>

                    <Form.Group style={{ border: '1px solid #ccc' }} className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group style={{ border: '1px solid #ccc' }} className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" placeholder="Message" rows={5} />
                    </Form.Group>
                    
                    <Button className='custom-button3' style={{marginBottom:'20px'}}
                        type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>

        </Row>
        </Container>
    )
}

export default FeedBack