// import './App.css';
// import  Navbar  from './Components/Nav-Bar/Nav-Bar';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUS/About_Us';
import Services from './Components/Services/Services';
import Pricing from './Components/Pricing/Pricing';
import ContactUs from './Components/ContactUS/ContactUs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App () {
  return (
    <BrowserRouter className="App">


      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/AboutUs" element={<AboutUs />}/>
        <Route path="/Services" element={<Services />}/>
        <Route path="/Pricing" element={<Pricing />}/>
        <Route path="/ContactUs" element={<ContactUs />}/>
      </Routes>


    </BrowserRouter>
  );
}

export default App;



