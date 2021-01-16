import React,{useContext,useState} from 'react';


import Radio from '@material-ui/core/Radio';
import {QuizzData,quizzScoreContext} from './createContext';
import "./QuizzQuestion.css"
import Button from '@material-ui/core/Button';




export default function Quizzform() {
  let validate=()=>{
    if(selectedValue===dataContextPack[arrayIncrement[0]].answer){
      setquizzScoreState(++quizzScoreState);
     
      quizzScoreSetter(quizzScoreState);
      
    }
    else{
      setquizzScoreState(quizzScoreState);
      quizzScoreSetter(quizzScoreState);
    }
   
    setquestionIncrement(++questionIncrement);
                           arrayIncrement[1](++arrayIncrement[0]);
  }
   let [selectedValue, setSelectedValue] = React.useState("");
   let [questionIncrement, setquestionIncrement] = useState<number>(0)
   let dataContextPack = useContext(QuizzData);
  
    let quizzScoreSetter=useContext(quizzScoreContext);
    let [quizzScoreState, setquizzScoreState] = useState<number>(0);
     
          let arrayIncrement=useState(0)
      let handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
      

      
  };
    
  if(questionIncrement<10 && dataContextPack!==undefined){   
  return (
        
    <div>
        <h1>{dataContextPack[questionIncrement].question.length===0? "":dataContextPack[questionIncrement].question }</h1>
        <div className="radioDisplay">
            <div style={{display:"flex",flexDirection:"column"}}>

          <div>        
          <label htmlFor="btn0">
      <Radio
        checked={selectedValue === dataContextPack[questionIncrement].option[0]}
        onChange={handleChange}
        value={dataContextPack[questionIncrement].option[0]}
         id="btn0"
        name="radio-button-demo"
      /> {dataContextPack[questionIncrement].option[0]}
      </label>
      </div>
      <div>
        <label htmlFor="btn3">
      <Radio
        checked={selectedValue === dataContextPack[questionIncrement].option[1]}
        onChange={handleChange}
        value={dataContextPack[questionIncrement].option[1]}
         id="btn3"
        name="radio-button-demo"
      /> {dataContextPack[questionIncrement].option[1]}
      </label>
      </div>

      </div>
         <div style={{display:"flex",flexDirection:"column"}}>
             <div>
       <label htmlFor="usr"> 
      <Radio
        checked={selectedValue === dataContextPack[questionIncrement].option[2]}
        onChange={handleChange}
        value={dataContextPack[questionIncrement].option[2]}
        color="default"
        id="usr"
        name="radio-button-demo"
        />{dataContextPack[questionIncrement].option[2]}
      </label>
      </div>
      <div>
      <label htmlFor="btn4">   
          <Radio
        checked={selectedValue === dataContextPack[questionIncrement].option[3]}
        onChange={handleChange}
        value={dataContextPack[questionIncrement].option[3]}
        color="default"
        id="btn4"
        name="radio-button-demo"
      />{dataContextPack[questionIncrement].option[3]}
      </label>
      </div>
      </div>

      </div>
      <Button  style={{backgroundColor:" #02C873",color:"white" , marginLeft:"40%"}} onClick={()=>{
                    validate();
       
      }}>Next</Button>
    </div>
  );
     }
    
     else{
         return(
             <>
             <h1 style={{textAlign:"center"}}>Try Again</h1>
             </>
         )
     }
}

