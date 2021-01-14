import  {createContext} from 'react';



export  let QuizzLevel = createContext((value: String)=>{ });
type quizzfilterData={
    question:String
    answer:String
    option:String[]
  }
  let dummy:quizzfilterData[]=[
    {question: "What is the most common surname Wales?", answer: "Jones", option: ['4',"5"]}

  ]
export let QuizzData=createContext<quizzfilterData[]>(dummy);
export let quizzScoreContext=createContext((value:number)=>{});
export let quizzScoreProvider=createContext(0);