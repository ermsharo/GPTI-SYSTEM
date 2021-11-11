import * as React from 'react';
import styled from 'styled-components'
import Button from '@mui/material/Button';
import DescriptionIcon from '@mui/icons-material/Description';
import Typography from '@mui/material/Typography';
import QuestaoDissertativa from '../Components/Prova/QuestãoDissertativa';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Headers from '../Components/Header/index';
import QuestaoMultiplaEscolha from '../Components/Prova/QuestãoMultiplaEscolha';
import QuestaoMultiplaEscolhaRevisada from '../Components/ProvaRevisada/QuestãoMultiplhaEscolhaRevisada';
import QuestaoDissertativaRevisada from '../Components/ProvaRevisada/QuestãoDissertativaRevisada';
import { Routes, Route, Link } from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Box from '@mui/material/Box';

const ProvaBox = styled.div`
padding: 32px;
width: 60vw;
margin: auto;



`



const QuestionBox = styled.div`

display: flex;
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
  }

];


let CorrectAwnsers = [true, true, true, false, false, true]; 

export default function ProvaReview() {

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

          <QuestionBox>

        <div>
        <div>
         <Typography gutterBottom variant="h4" component="div">
          Questão 1
          </Typography>

          <Typography gutterBottom variant="h6" component="div">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tincidunt turpis. 
          Nullam ultricies, magna vel ultrices fermentum, ex ante laoreet mi, nec mollis tortor lacus et ligula
          </Typography>
         
          <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '90%'
  ,     
   minHeight:'400px',
   margin : 'auto' },
      }}
      noValidate
      autoComplete="off"
      paddingTop = "16px"
      paddingBottom = "16px"
      



    >
            <FormControl component="fieldset">
      <FormLabel component="legend"></FormLabel>
      <RadioGroup
        aria-label=""
        defaultValue=""
        name="radio-buttons-group"
      >

        {true? <div> <FormControlLabel style = {{color: '#81ac8d'}} value="1" control={<Radio />} label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tincidunt turpis. " />
        <FormControlLabel value="1" control={<Radio />} label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tincidunt turpis. " /></div>:
        
        <div><FormControlLabel style = {{color: '#81ac8d'}} value="1" control={<Radio />} label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tincidunt turpis. " />
        <FormControlLabel value="2"  style = {{color: '#e35241',
      fontWeight:'BOLDER'} }  control={<Radio />} label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tincidunt turpis. " /></div>}


      
        <FormControlLabel value="3" control={<Radio />} label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tincidunt turpis. " />
        <FormControlLabel value="4" control={<Radio />} label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tincidunt turpis. " />
        <FormControlLabel value="5" control={<Radio />} label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tincidunt turpis. " />
      </RadioGroup>
    </FormControl>

<br/>


     
    </Box>
    </div>
        </div>
    
 
</QuestionBox>

       
           
           
           <Link to = "/perguntas"><Button>
             Voltar</Button></Link>
           </ProvaBox>
    

    </>
  );
}