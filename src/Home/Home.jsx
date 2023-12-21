

import { useEffect } from "react";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Footer from "./Footer";
import Type from "../Page/Whattype/Type";



const Home = () => {
    useEffect(() => {
        document.title = "Home";
    }, [])

    

    return (
        <div>
        
            <Banner></Banner>
            
           <About></About>
            <Contact></Contact>
           
            <Footer></Footer>
        </div>
    );
};

export default Home;