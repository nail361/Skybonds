import React from 'react';
import './Period.css';

const buttons = [
  {period: 'week', title: 'Week'},
  {period: 'month', title: 'Month'},
  {period: 'quarter', title: 'Quarter'},
  {period: 'year', title: 'Year'},
  {period: 'max', title: 'Max'},
];

const Period = (props) => {
  return (
    <div className="period">
      { buttons.map( (button) =>
          <button
            key={button.period}
            type="button"
            onClick={()=>props.click(button.period)}
            className={`button ${button.period === props.period ? "selected" : ""}`}
          >
            {button.title}
          </button>
        )
      }
    </div>
  )
}

export default Period;
