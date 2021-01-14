import React,{useContext} from 'react';
import './QuizzQuestion.css';
import Quizzform from './QuizzForm';
import {quizzScoreProvider} from './createContext';

export default function MainQUizz(){
  const Scorecontext = useContext(quizzScoreProvider);
   return(
       <>
       <div className="MainQuizzContainer">
                     <h1 className="quizzScore">Score : {Scorecontext}</h1>
                     <div className="MainquestionContainer">
                           <div className="QuestionBox">
                                  <h2 className="questionText">Question</h2>
                                    <Quizzform/>

                           </div>
                     </div>
       </div>
       </>
   );
}