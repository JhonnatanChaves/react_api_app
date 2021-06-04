
/*
import React from 'react';  
import Stepper from '@material-ui/core/Stepper';  
import Step from '@material-ui/core/Step';  
import StepLabel from '@material-ui/core/StepLabel';  
import Button from '@material-ui/core/Button';  
import Typography from '@material-ui/core/Typography';  
//import ListCompanies from "../Company/List" 
//import ListProduct from "../Product/index"


const getSteps = () => {  
  return ['Companhia', 'Produto', 'Pagamento','Confirmar Compra'];  
}  


const getStepContent = step => {  
  switch (step) {  
    case 0:  
       return "..."
             
    case 1:  
      return "listas";  
    case 2:  
      return 'Escolher forma de pagamento';    
    default:  
      return 'exibir dados';  
  }  
}  
  
const StepperDemo = () => {  
  const [activeStep, setActiveStep] = React.useState(0);  
  const [skipped, setSkipped] = React.useState(new Set());  
  const steps = getSteps();  
  
  const isStepSkipped = step => {  
    return skipped.has(step);  
  };  
  
  const handleNext = () => {  
    let newSkipped = skipped;  
    if (isStepSkipped(activeStep)) {  
      newSkipped = new Set(newSkipped.values());  
      newSkipped.delete(activeStep);  
    }  
  
    setActiveStep(prevActiveStep => prevActiveStep + 1);  
    setSkipped(newSkipped);  
  };  
  

  const handleBack = () => {  
    setActiveStep(prevActiveStep => prevActiveStep - 1);  
  };  
   
  return (  
    <div>  
      <Stepper activeStep={activeStep}>  
        {steps.map((label, index) => {  
          const stepProps = {};  
          const labelProps = {};  
            
          if (isStepSkipped(index)) {  
            stepProps.completed = false;  
          }  
          return (  
            <Step key={label} {...stepProps}>  
              <StepLabel {...labelProps}>{label}</StepLabel>  
            </Step>  
          );  
        })}  

      </Stepper>  

      <div>  
        {activeStep === steps.length ? (  
          <div>  
            <Typography >  
              Compra Solicitada  
            </Typography>  
            
          </div>  
        ) : (  
          <div>  
            <div>{getStepContent(activeStep)}</div>  
            <div>  
              <Button disabled={activeStep === 0} onClick={handleBack} >  
                Voltar  
              </Button> 
  
              <Button  
                variant="contained"  
                color="primary"  
                onClick={handleNext}  
                
              >  
                {activeStep === steps.length - 1 ? 'Comprar' : 'Próximo'}  
              </Button>  
            </div>  
          </div>  
        )}  
      </div>  


    </div>  
     
  );  
}  
export default StepperDemo;

*/