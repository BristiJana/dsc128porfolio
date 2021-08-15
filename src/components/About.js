import React, {useEffect,useState} from 'react';

import '../Css/About.css';
import Aos from 'aos';
import Navigation from './Navigation.js';
import 'aos/dist/aos.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MemoryIcon from '@material-ui/icons/Memory';
import PanToolIcon from '@material-ui/icons/PanTool';
import red from "@material-ui/core/colors/red";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


function About() {

  useEffect(()=>{

  Aos.init({duration:2000});
},[])

const box = {
    border:'0px',
    backgroundColor:'pink'
}
const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
  <div class="ab">
    
   <Navigation/>
    <div class="third-container">
 

<div class="row">
  <div class="col-sm-12 col-md-12 col-lg-4">
  
    <div class="tcard" >
    <Button variant="outlined" color="primary" onClick={handleClickOpen}  style={box}>
  <div class="image">
  
  <FavoriteIcon class="image__img " alt="love" />
    <div class="image__overlay image__overlay--primary">
        <div class="image__title">Love</div>
        
    </div>
</div>
  </Button>
   <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Love to ready story books and singing.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
         
          <Button onClick={handleClose} color="primary" autoFocus>
           Close
          </Button>
        </DialogActions>
      </Dialog>
</div>

  </div>
  <div class="col-sm-12 col-md-12 col-lg-4">
  
    <div class="tcard" >
    <Button variant="outlined" color="primary" onClick={handleClickOpen}  style={box}>
  <div class="image">
  <MemoryIcon class="image__img "  alt="memory"/>
    <div class="image__overlay image__overlay--primary">
        <div class="image__title">Brain</div>
        
    </div>
</div>
  </Button>
  <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Good memorising ability
          </DialogContentText>
        </DialogContent>
        <DialogActions>
         
          <Button onClick={handleClose} color="primary" autoFocus>
           Close
          </Button>
        </DialogActions>
      </Dialog>
</div>

  </div>

  <div class="col-sm-12 col-md-12 col-lg-4">
  
    <div class="tcard" >
    <Button variant="outlined" color="primary" onClick={handleClickOpen}  style={box}>
  <div class="image">
  <PanToolIcon class="image__img "  alt="Work"/>
    <div class="image__overlay image__overlay--primary">
        <div class="image__title">Work</div>
        
    </div>
</div>
 </Button>
  <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Good in competetive coding and development
          </DialogContentText>
        </DialogContent>
        <DialogActions>
         
          <Button onClick={handleClose} color="primary" autoFocus>
           Close
          </Button>
        </DialogActions>
      </Dialog>
  </div>
</div>

  </div>
</div>

</div>    
  );
}

export default About;
