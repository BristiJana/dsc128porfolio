import React, {useEffect,useState} from 'react';

import '../Css/Work.css';
import Aos from 'aos';
import Navigation from './Navigation.js';
import 'aos/dist/aos.css';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';



function Work() {

 

  return (
    <div class="wb">
    <Navigation/>
    <div class="fifth-container">
    <section id="portfolio" class="portfolio">
      <div class="container">

        

        

        <div class="row portfolio-container" >

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="assets/portfolio/Project1.png" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Project 1</h4>
                <p>Dice Game</p>
                <div class="portfolio-links">
                  <a href="assets/portfolio/Project1.png"  class="portfolio-lightbox" title="Project 1"><i class="bx bx-plus"></i></a>
                  <a href="https://bristijana.github.io/Dice-Game/" ><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="assets/portfolio/Project2.png" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Project 2</h4>
                <p>Drum Kit</p>
                <div class="portfolio-links">
                  <a href="assets/portfolio/Project2.png"  class="portfolio-lightbox" title="Project 2"><i class="bx bx-plus"></i></a>
                  <a href="https://bristijana.github.io/DrumKit/"  ><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="assets/portfolio/Project3.png" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Project 3</h4>
                <p>Simon Game</p>
                <div class="portfolio-links">
                  <a href="assets/portfolio/Project3.png"  class="portfolio-lightbox" title="Project 3"><i class="bx bx-plus"></i></a>
                  <a href=" https://bristijana.github.io/Simon-game/"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          

          
          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="assets/portfolio/App1.png" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>App 1</h4>
                <p>Recipe App</p>
                <div class="portfolio-links">
                  <a href="assets/portfolio/App1.png"  class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a>
                  <a href="https://react-test32.herokuapp.com"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          

          
        </div>

      </div>
    
   </section>

        </div>
        </div>
  );
}

export default Work;
