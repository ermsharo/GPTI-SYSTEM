import * as React from 'react';
import styled from 'styled-components'
import Button from '@mui/material/Button';
import DescriptionIcon from '@mui/icons-material/Description';
import Typography from '@mui/material/Typography';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Headers from '../Components/Header/index';
import { Routes, Route, Link } from "react-router-dom";
import QuestaoMultiplaEscolhaNaoRevisadaProfessor from '../Components/ProvaNaoRevisada/QuestãoMultiplhaEscolhaNaoRevisadaProfessor';
import QuestaoDissertativaNaoRevisadaProfessor from '../Components/ProvaNaoRevisada/QuestãoDissertativaNaoRevisadaProfessor';
const ProvaBox = styled.div`
padding: 32px;
width: 60vw;
margin: auto;

`
const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
      display: grid;
      grid-template-columns: 200px auto;
      padding-top: 64px;
    }
`

const NavigationBox = styled.div`

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
  <QuestaoMultiplaEscolhaNaoRevisadaProfessor number = {1} index ={1}/>,
  <QuestaoDissertativaNaoRevisadaProfessor number = {2} index ={1}/>,
  <QuestaoDissertativaNaoRevisadaProfessor number = {3} index ={1}/>,
  <QuestaoDissertativaNaoRevisadaProfessor number = {4} index ={1}/>,
  <QuestaoDissertativaNaoRevisadaProfessor number = {5} index ={1}/>,
  <QuestaoMultiplaEscolhaNaoRevisadaProfessor number = {6} index ={1} correct = {true}/>,
  <QuestaoDissertativaNaoRevisadaProfessor number = {7} index ={1}/>,
]
let CorrectAwnsers = [true, true, true, false, false, true]; 

export default function ProvaNaoReview() {

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


  let Icon = (index, status)=>{
    return(
       <Typography gutterBottom variant="h6" component="div" >
{index}
       </Typography>
    )

  }


  return (
    <>
          <Headers />
      <ProvaBox>
         <Typography gutterBottom variant="h4" component="div">
       <DescriptionIcon/>  PROVA 01 - Banco de dados 
          </Typography>
          <QuestionBox>

          <IndexBox>
      <Stepper activeStep={activeStep}   orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label} >
            <StepLabel > {step.label}</StepLabel> 

    
            
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
              <Link to = "/pagina_curso">Encerar revisão</Link>
                </Button> </div>}
    </NavigationBox>
    </ProvaBox>
    </>
  );
}