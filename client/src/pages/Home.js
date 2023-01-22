import React from 'react';
import Navbar from '../components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';



function Home() {
    return(
        <Router>
            <Navbar />
        </Router>
        
    );
}


export default Home;