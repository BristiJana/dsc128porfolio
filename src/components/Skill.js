import React, {useEffect,useState} from 'react';

import '../Css/Skill.css';
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

import { Planet } from 'react-planet';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

function Skill() {

 const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const classes = useStyles();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <div class="sb" style={{backgroundColor:"black"}}>
    <Navigation/>
    <div class="fourth-container">
    <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography className={classes.typography}>HTML,CSS,JavaScript,jQuery,ReactJs,
              NodeJs, MySql,C++,Python,GitHub,Git
              </Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
      
  <Planet
  class="ps"
  mass={4}
      tension={500}
      friction={19}
        rotation={12}
        orbitRadius={ 240}
            centerContent={
                <div
                    style={{
                        height: 200,
                        width: 200,
                        borderRadius: '200%',
                        backgroundColor: '#FF7600',
                        boxShadow: '0 0 60px #FFB740',
  
                    }}
                />
            }
            open
            autoClose
        >
            <div
                style={{
                    height: 50,
                    width: 50,
                    borderRadius: '200%',
                    backgroundColor: '#595260',
                     boxShadow: '0 0 40px #B2B1B9',
                }}
               
               onClick={handleClick('top-end')}            
            />
            
            <div
                style={{
                    height:50,
                    width: 50,
                    borderRadius: '200%',
                    backgroundColor: '#FFD523',
                    boxShadow: '0 0 40px #E5B299',
                }}
                
               onClick={handleClick('top-end')} 
            />
            
            <div
                style={{
                    height:50,
                    width: 50,
                    borderRadius: '200%',
                    backgroundColor: '#002366',
                     boxShadow: '0 0 40px #BCFFB9',

                }}
              onClick={handleClick('top-start')}  
            />
            
            <div
                style={{
                    height:50,
                    width: 50,
                    borderRadius: '200%',
                    backgroundColor: '#BB8760',
                    boxShadow: '0 0 50px #EC5858',

                }}
              onClick={handleClick('top-start')}  
            />
            
            <div
                style={{
                    height:50,
                    width: 50,
                    borderRadius: '200%',
                    backgroundColor: '#F5E8C7',
                    boxShadow: '0 0 50px #E7E0C9',
                }}
               onClick={handleClick('top-start')}
            />
            
            <div
                style={{
                    height:50,
                    width: 50,
                    borderRadius: '200%',
                    backgroundColor: '#CC9B6D',
                    boxShadow: '0 0 50px #FFF47D',
                }}
              onClick={handleClick('top-start')}  
            />
            
        </Planet>   
        </div>
        </div>
  );
}

export default Skill;
