import React, {useContext }  from 'react';
import './SearchBar.css';
import {QuizzLevel} from './createContext';
import { useNavigate } from "react-router-dom";
function Selectbar() {
     
  let navigate = useNavigate();
      const context = useContext(QuizzLevel)
     let quizLevelSelectionftn=(e:React.ChangeEvent<{value:string}>)=>{
            context(e.target.value); 
     }
  return (
    <>
    
    <div className="searchBar">
    <div className="form-group searchInside ">
    <label htmlFor="exampleFormControlSelect1" className="selectionCaption">Example select</label>
    <select className="form-control" 
      onChange={quizLevelSelectionftn}
    id="exampleFormControlSelect1">
      
      <option value="easy" >Easy</option>
      <option value="medium">Medium</option>
      <option value="hard">Hard</option>
      
    </select>
      
  </div>

  
  </div>
  <div style={{display:"flex",justifyContent:"center"}}>
  <button type="button"  onClick={()=>{navigate("/Quizz")}} className="btn tryQuizzBtn">Try Quizz</button>
  </div>
  </>
  );
}


export default function MainPage(){
  return(
    <>
    <div className="App">
       <h4 className="quizQuote">Knowledge does not consist in narrating much. Knowledge is but a light which Allah places in the heart.</h4>
       <div className='QuizzApp'><h1>Quiz App</h1></div>
         <Selectbar/>
        
 
      
    </div>
    </>

  );
}