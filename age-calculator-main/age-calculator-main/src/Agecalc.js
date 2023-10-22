import React, { useState } from 'react';


const Agecalc = ({calculateage}) => {
    const [birthdate,setbirthdate]=useState('');
    
    const handleChangeDate =(e)=>{
        setbirthdate(e.target.value);
    }

    const handlesubmit=(e)=>{
        e.preventDefault();
        calculateage(birthdate);
    }
  return (
    <form onSubmit={handlesubmit}>
        <div>
            <input value={birthdate} type='date' onChange={handleChangeDate} />
        </div>
        <div>
            <button disabled={!birthdate} type='submit'>Calculate Age</button>
        </div>
    </form>

  );
}

export default Agecalc;