import React,{useState,useEffect} from 'react';
import './App.css';
import MainPage from './Components/SelectBar';
import {
  
  Routes,
  Route
} from 'react-router-dom';
import {QuizzLevel,QuizzData,quizzScoreContext,quizzScoreProvider} from './Components/createContext';
import MainQUizz from './Components/quizzPage';
import firebase from './firebase';


function App() {
  const messaging=firebase.messaging();
  
  messaging.requestPermission().then(()=>{
      return messaging.getToken();
  }).then((token)=>{
       console.log("token",token);
       alert(token);

  })
  type quizzfilterData={
    question:String
    answer:String
    option:String[]
  }
  
  let  qizzLevelState = useState<String>("easy");
  

  const quizzScore=useState(0);
  let QuizzMaterial=useState<any>();
  
  useEffect(() => {
  
    
    Calling(qizzLevelState[0]);
  }, [])

  const Calling=async (level:String) => {
     
   
    type Quizz={
      category: String
       type: String
       difficulty: String
       question:String
       correct_answer: String
       incorrect_answers:String[]
 }
 

          
          const shuffleArray = (array: any[]) => 
           [...array].sort(() => Math.random() - 0.5);
             let api=fetch(`https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`);
             let {results}=await (await api).json();
             let quizzData:quizzfilterData[]=await results.map((quizz:Quizz,ind:number)=>{
                     return {
                      question:quizz.question,
                      answer:quizz.correct_answer,
                      option: shuffleArray([
                       ...quizz.incorrect_answers,
                       quizz.correct_answer,
                      ]),
                     }
             })
             
             QuizzMaterial[1](quizzData);
             
          
   }


  

  return (
    <>
    <QuizzLevel.Provider value={qizzLevelState[1]}>
      
      <QuizzData.Provider value={QuizzMaterial[0]}>
        <quizzScoreContext.Provider value={quizzScore[1]}>
          <quizzScoreProvider.Provider value={quizzScore[0]}>
            
        <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/Quizz" element={<MainQUizz/>}/>

    </Routes>
    </quizzScoreProvider.Provider>
    </quizzScoreContext.Provider>

    </QuizzData.Provider>
    </QuizzLevel.Provider>
  </>
  );
}

export default App;
