import { useState } from "react";
import Agecalcform from "./Agecalc";
import Ageresult from "./Ageresult";
import './App.css';
import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from 'date-fns';

function App() {
  const [age,setage]=useState(null);

const calculateage=(birthdate)=>{
  const today= new Date();
  const birthdateobj= new Date(birthdate);
  const ageyears= differenceInYears(today,birthdateobj);
  const agemonths= differenceInMonths(today,birthdateobj)%12;
  const agedays= differenceInDays(today,new Date(today.getFullYear(), today.getMonth(), birthdateobj.getDate()));

  setage({
      years: ageyears,
      months: agemonths,
      days: agedays,
    });
}

  return (
    <div className="app">
      <h1>Age Calculator</h1>
      <p>Write Your date of birth</p>
      <Agecalcform calculateage={calculateage}/>
      {age && <Ageresult age={age} />}
    </div>
  );
}

export default App;
