import React from "react";
import { lowLevels, treatingLBS } from "../research";

function LBSTodo() {
  return (
    <div>
      <div className="symptoms-list-main-div">
        <h3>{treatingLBS.title}</h3>
        <h3>{treatingLBS.subtitle}</h3>
        <h3>{treatingLBS.level}</h3>
        {/* <h3>{lowLevels}</h3> */}
        <ul>
          <li>{treatingLBS.todos[1]}</li>
          <li>{treatingLBS.todos[2]}</li>
          <li>{treatingLBS.todos[3]}</li>
          <li>{treatingLBS.todos[4]}</li>
          <li>{treatingLBS.todos[5]}</li>
          <li>{treatingLBS.todos[6]}</li>
        </ul>
        <h3>{treatingLBS.warning}</h3>
      </div>
    </div>
  );
}

export { LBSTodo };
