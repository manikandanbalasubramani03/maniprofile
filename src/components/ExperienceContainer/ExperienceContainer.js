import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './ExperienceContainer.css';
import { Element } from "react-scroll";

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    textAlign: 'left',
    marginLeft:'60px'
   
  },
  
 
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['2013', '2018', '2019'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Winner in District Level Volleyball Tournament.`;
    case 1:
      return `Got Patent Rights for the Project  IOT Integrated Cam Actuated Bell `;
    case 2:
      return `Certified in Japanese Language Proficiency Test (N3)`;
    
    default:
      return 'Unknown step';
  }
}

export default function Works() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    
    <div className="expcont">
    <Element className="ExperienceContainer" id="exp">
    
      <h1>CERTIFICAT<span>ES</span></h1>
     
    <div className={classes.root}>
    <Stepper activeStep={activeStep} orientation="vertical" style={{borderRadius:'10px'}}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
        <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
      </Stepper>

    </div>
    </Element>
    </div>
  );
}