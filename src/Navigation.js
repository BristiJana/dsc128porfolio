import React, {useEffect} from 'react';

//import { Link } from 'react-router-dom';

import "../Css/Navigation.css";

import { Link } from 'react-router-dom';
import Aos from 'aos';

import 'aos/dist/aos.css';




 function Navigation() {



    return (
        <div>  
        
        <nav class="navbar nav-underline solid black navbar-expand-lg navbar-light fixed-top ">
        <div class="container-fluid">
        
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler9" aria-controls="navbarToggler9" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarToggler9">
        <ul class="navbar-nav">
            <li class="nav-item">
                <Link class="nav-link" href="#Mission">Mission/Vision</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" href="#HowWeWork">How we Work</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" href="#Achievements">Our Achievements</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" href="#Leadership">Meet Our Leedership</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" href="#Team">Meet our Team</Link>
            </li>
        </ul>
    </div>
    </div>
</nav>
          

        </div>
    );
}

export default Navigation;