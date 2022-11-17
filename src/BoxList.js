import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from 'uuid';


/**
 */

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function renderBox() {
    return (
        <ul>
          {boxes.map(box => (
              <li key={box.id}>
                {box.name}: {box.qty}
              </li>
          ))}
        </ul>
    );
  }
  // end

  /** Add new item object to cart. */
  function addBox(boxInfo) {
    let newBox = { ...boxInfo, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }
  // end

  return (
    <div className="ShoppingList">
      <NewBoxForm addBox={addBox} />
      {renderBox()}
    </div>
  );
}
// end

export default BoxList;