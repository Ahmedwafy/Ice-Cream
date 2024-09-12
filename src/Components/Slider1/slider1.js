import { Carousel } from 'react-bootstrap';
// import ExampleCarouselImage from '../ExampleCarouselImage/ExampleCarouselImage';
import slider1 from "../../Images/slider1.jpg"
import slider2 from "../../Images/slider2.jpg"
import slider3 from "../../Images/slider3.jpg"
import './slider1.css'

function Slider1() {
  return (
    <Carousel fade>

      <Carousel.Item >
      {/* className to ensure that the images fill the entire width of the carousel item */}
        <img src={slider1} alt="First slide" className="d-block w-100" />
        <Carousel.Caption>
          <h3 className='h3'>Sweet Ice Cream</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button className='button'>Read More</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={slider2} alt="First slide" className="d-block w-100" />
        <Carousel.Caption>
          <h3 className='h3'>Sweet Ice Cream</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className='button'>Read More</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={slider3} alt="First slide" className="d-block w-100" />
        <Carousel.Caption>
          <h3 className='h3'>Sweet Ice Cream</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          <button className='button'>Read More</button>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default Slider1;