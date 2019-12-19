import React from 'react';

const Params = (props) => {
  return (
    <div style={{textAlign:"end"}}>
      <select
        onChange={(event)=>props.change(event.currentTarget.value)}
        name="param"
        value={props.selected}
      >
        <option value="yield">Yield</option>
        <option value="spread">Spread</option>
        <option value="price">Price</option>
      </select>
    </div>
  )
}

export default Params;
