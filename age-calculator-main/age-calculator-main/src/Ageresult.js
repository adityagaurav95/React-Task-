import React from 'react';

const Ageresult = ({age}) => {
  return (
    <h4>You are {age.years} years, {age.months} months, and {age.days} days old.</h4>
  );
}

export default Ageresult;