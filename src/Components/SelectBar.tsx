import React, { useState }  from 'react';
import './SearchBar.css';

export default function Selectbar() {
     
     let [quizzlevel, setquizzlevel] = useState("");
         
     let quizLevelSelectionftn=(e:React.ChangeEvent<{value:string}>)=>{
            setquizzlevel(e.target.value); 
     }
  return (
    <>
    
    <div className="searchBar">
    <div className="form-group searchInside ">
    <label htmlFor="exampleFormControlSelect1" className="selectionCaption">Example select</label>
    <select className="form-control" 
      onChange={quizLevelSelectionftn}
    id="exampleFormControlSelect1">
      
      <option value="Easy" >Easy</option>
      <option value="Medium">Medium</option>
      <option value="Hard">Hard</option>
      
    </select>
      
  </div>

  
  </div>
  <div style={{display:"flex",justifyContent:"center"}}>
  <button type="button" onClick={()=>{console.log(quizzlevel)}} className="btn tryQuizzBtn">Try Quizz</button>
  </div>
  </>
  );
}
