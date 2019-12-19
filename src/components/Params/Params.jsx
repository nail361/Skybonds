import React from './node_modules/react';

const Params = (props) => {
  return (
    <select onChange={props.change} name="param" value={props.selected}>
      <option value="yield">Yield</option>
      <option value="spread">Spread</option>
      <option value="price">Price</option>
    </select>
  )
}

export default Params;
