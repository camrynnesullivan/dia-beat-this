import React from "react";
import { highLevels, treatingHBS } from "../research";

function HBSTodo() {
  return (
    <div>
      <div className="symptoms-list-main-div">
        <h3>{treatingHBS.title}</h3>
        <h3>{treatingHBS.subtitle}</h3>
        {/* <h3>{treatingLBS.level}</h3> */}
        {/* <h3>{highLevels}</h3> */}
        <ul>
          <li>{treatingHBS.todos[1]}</li>
          <li>{treatingHBS.todos[2]}</li>
          <li>{treatingHBS.todos[3]}</li>
        </ul>
        <h3>{treatingHBS.warning}</h3>
      </div>
    </div>
  );
}

export { HBSTodo };
