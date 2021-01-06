import React from 'react';

import './App.css';
import Selectbar from './Components/SelectBar';

function App() {
  return (
    <div className="App">
       <h4 className="quizQuote">Knowledge does not consist in narrating much. Knowledge is but a light which Allah places in the heart.</h4>
       <div className='QuizzApp'><h1>Quiz App</h1></div>
         <Selectbar/>
        
 
      
    </div>
  );
}

export default App;
