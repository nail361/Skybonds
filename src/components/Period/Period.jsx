import React from './node_modules/react';

const Period = (props) => {
  return (
    <div>
      <button type="button" onClick={()=>props.click("week")}>Week</button>
      <button type="button" onClick={()=>props.click("month")} >Month</button>
      <button type="button" onClick={()=>props.click("quarter")}>Quarter</button>
      <button type="button" onClick={()=>props.click("year")}>Year</button>
      <button type="button" onClick={()=>props.click("max")}>Max</button>
    </div>
  )
}

export default Period;
