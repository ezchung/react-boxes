import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from 'uuid';
import Box from "./Box"


/**
 * Document what state object is -- { key/value pairs }
 */

function BoxList() {
  const [boxes, setBoxes] = useState([]);


  /** Initialize a new box */
  function addBox(boxInfo) {
    let newBox = { ...boxInfo, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }
  // end

  //delete box --> pass this to each box
  function deleteBox(id) {
    // evt.preventDefault();
    // console.log(evt.target, "<<<<<<<<<<<< delete Box event")
    // const id = evt.target.id
    boxes.filter(box =>box.id !== id)
  }

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      {boxes.map(box =>
        <Box backgroundColor={box.backgroundColor}
          width={box.width}
          height={box.height}
          // deleteBox={deleteBox} 
          // id={box.id}
          />)}
    </div>
  );
}
// end

export default BoxList;