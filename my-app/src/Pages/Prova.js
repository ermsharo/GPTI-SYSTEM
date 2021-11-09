import * as React from 'react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import styled from 'styled-components'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import DescriptionIcon from '@mui/icons-material/Description';
import Typography from '@mui/material/Typography';
import QuestaoDissertativa from '../Components/Prova/QuestãoDissertativa';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Paper from '@mui/material/Paper';
import { StepIcon } from '@mui/material';
import Headers from './../Components/Header/index';
import QuestaoMultiplaEscolha from '../Components/Prova/QuestãoMultiplaEscolha';
const ProvaBox = styled.div`
padding: 32px;
width: 60vw;
margin: auto;



`



const QuestionBox = styled.div`

display: grid;
grid-template-columns: 200px auto;
padding-top: 64px;


`

const NavigationBox = styled.div`

margin-left: 200px;
margin-right: 16px;
display: flex;
justify-content: space-between;



`



const IndexBox = styled.div`



`



const steps = [
  {
    label: 'Questão 1',
    description: ``,
  },
  {
    label: 'Questão 2',
    description: ``,
  },
  {
    label: 'Questão 3',
    description: ``,
  },
  {
    label: 'Questão 4',
    description: ``,
  },
  {
    label: 'Questão 5',
    description: ``,
  },
  {
    label: 'Questão 6',
    description: ``,
  },

];

const Questions = [

  <QuestaoMultiplaEscolha number = {1} index ={1}/>,
  <QuestaoDissertativa number = {2} index ={1}/>,
  <QuestaoDissertativa number = {3} index ={1}/>,
  <QuestaoDissertativa number = {4} index ={1}/>,
  <QuestaoDissertativa number = {5} index ={1}/>,
  <QuestaoDissertativa number = {6} index ={1}/>,

]

export default function UseFormControl() {

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
          <Headers />
      <ProvaBox>
         <Typography gutterBottom variant="h4" component="div">
       <DescriptionIcon/>  PROVA 01 - Banco de dados 
          </Typography>
          <QuestionBox>

          <IndexBox>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
            >
              {step.label}
            </StepLabel>
            
          </Step>
        ))}
      </Stepper>
  
    </IndexBox>

        <div>
      {Questions[activeStep]}
        </div>
    
 
</QuestionBox>
<NavigationBox sx={{ mb: 2 }}>
                <div>


                {(activeStep == 0) ? null :   <Button
                   
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                 Questão {(activeStep-1) + 1}
                  </Button>}
             


         
         
                </div>
                <div>         {(activeStep > Questions.length -2) ? null :  <Button
             onClick={handleNext}
             sx={{ mt: 1, mr: 1 }}
           >
        Questão {(activeStep+1)+1}
           </Button>}</div>


               {(activeStep < Questions.length -1 ) ? null :    <div>   <Button
        
             sx={{ mt: 1, mr: 1 }}
           >
    Submeter respostas
           </Button> </div>}

              </NavigationBox>
    
      
    </ProvaBox>

    
    

    </>
  );
}