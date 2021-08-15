import React, {useEffect} from 'react';

import '../Css/App.css';
import Aos from 'aos';
import Navigation from './Navigation.js';
import 'aos/dist/aos.css';

function App() {

  useEffect(()=>{

  Aos.init({duration:2000});
},[])

  return (
    
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <Navigation/>
  <div class="carousel-indicators">
   
   
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    
   
  </div>
  
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="4000">
      <div class="wsa">
             <div class="second-container">
      <div class="patterns">
  <svg width="100%" height="100%">
    <defs>
      <pattern id="polka-dots" x="0" y="0" width="100" height="100"
               patternUnits="userSpaceOnUse">
        <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
      </pattern>  
        <style>
     @import url("https://fonts.googleapis.com/css?  family=Lora:400,400i,700,700i");
   </style>
      
    </defs>

<text x="50%" y="80%"  text-anchor="middle"  >
  Bristi Jana
  
 </text>
 
 </svg>
 <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">

<p className="sp">A skilled programmer in C++ and Python  <br/>
along with analytical knowledge and Problem-solving skills in Algorithm and Data Structure.</p></div>
</div>
</div>
              
      <div class="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    </div>
   
    <div class="carousel-item" data-bs-interval="4000">
      <div class="wsb">
                <div class="second-container">
      <div class="patterns">
  <svg width="100%" height="100%">
    <defs>
      <pattern id="polka-dots" x="0" y="0" width="100" height="100"
               patternUnits="userSpaceOnUse">
        <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
      </pattern>  
        <style>
     @import url("https://fonts.googleapis.com/css?  family=Lora:400,400i,700,700i");
   </style>
      
    </defs>

<text x="50%" y="80%"  text-anchor="middle"  >
  Specialized In
  
 </text>
 
 </svg>
<p className="sp">Also, a Front-End Developer , open source contributor and have enough Knowledge in Back-End too, <br/> 
pursuing a Bachelor of Technology in Computer Science from Jaypee Institute of Information Technology, Noida.</p>
</div>
</div>
              
      <div class="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    
  </div>
</div>
    </div>
    
  );
}

export default App;
