import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./stepOne.scss";
import Step1 from "./steps/step1";
import ImageUploader from "../Photos/photo";
import { updateBusinessOwner } from "../../actions/businessOwner";
import { connect } from "react-redux";
//.MuiTypography-body1
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // display: "flex",
    // padding: "27px",
    // width: "724px",
    // marginRight: "390px",
    // marginTop: "19px",
    // backgroundColor: "#dee2e6",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: "inline-block",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["פרטים אישיים", "העלה תמונות", "תשלום מאובטח"];
}

function getStepContent(step, handleNext) {
  switch (step) {
    case 0:
      return <Step1 handleNext={handleNext}></Step1>;
    case 1:
      return <ImageUploader multiple={true}></ImageUploader>;
    case 2:
      return "333333333333333333333333333";
    default:
      return "Unknown step";
  }
}
const HorizontalNonLinearStepper = (props) => {
  // const MuiPaperRoot = {
  //   "backgroundColor": "#e2e2e2"
  // };

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    var bussinesOwner = JSON.parse(localStorage.getItem("newBuss"));
    // debugger;
    props.updateBusinessOwner(bussinesOwner);
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <div className={classes.root}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton
              onClick={handleStep(index)}
              completed={completed[index]}
            >
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <div>
            <Typography className={classes.instructions + " div2"}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep, handleNext)}
            </Typography>
            <div>
              <div className="divLink">
                <Link
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  {/* <i style="font-size:24px" class="fa">&#xf104;</i> */}
                  <i class="fa fa-angle-left"></i>
                  Next
                </Link>
                <Link
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  Back
                  <i class="fa fa-angle-right"></i>
                </Link>
              </div>

              {/* {activeStep !== steps.length &&
                  (completed[activeStep] ? (
                    <Typography variant="caption" className={classes.completed}>
                      Step {activeStep + 1} already completed
                  </Typography>
                  ) : (
                      <Button variant="contained" color="primary" onClick={handleComplete}>
                        {completedSteps() === totalSteps() - 1 ? 'Finish' : null}
                      </Button>
                    ))} */}

              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" className={classes.completed}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : null)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
const myStateToProps = (state) => {
  return {};
};
export default connect(myStateToProps, { updateBusinessOwner })(
  HorizontalNonLinearStepper
);

{
  /* <div class="image-thumbnail image-upload-button-container">
  <input type="file" accept="image/png, image/jpg, image/jpeg" multiple="" class="image-upload-button">
    <span>+</span>
    </div> */
}
