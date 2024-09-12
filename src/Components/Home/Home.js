// import Navbar  from "../Nav-Bar/Nav-Bar";
import Slider1 from "../Slider1/slider1"
import Flavors from "../Flavors/Flavors";
import Flavors2 from "../Flavors2/Flavors2";
import Flavors3 from "../Flavors3/Flavors3";
import Menu from "../Menu/Menu"
import Menu2 from "../Menu2/Menu2"
import Clients from "../Clients/Clients"
import FeedBack from "../FeedBack/FeedBack";
import Footer from "../Footer/Footer";
import  Navbar  from "../Nav-Bar/Nav-Bar";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Home() {
    return (
        <div>
            <Navbar />
            <Slider1 />
            <Flavors />
            <Flavors2 />
            <Flavors3 />
            <Menu />
            <Menu2 />
            <Clients />
            <FeedBack /> 
            <Footer /> 
        </div>
    )
}

export default Home;