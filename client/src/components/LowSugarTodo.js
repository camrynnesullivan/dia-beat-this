import React from "react";
import { lowLevels, treatingLBS } from "../research";

function LBSTodo() {
  return (
    <div>
      <div className="symptoms-list-main-div">
        <h3>{treatingLBS.title}</h3>
        <h4>{treatingLBS.subtitle}</h4>
        <ul>
          <li>{treatingLBS.todos[1]}</li>
          <li>{treatingLBS.todos[2]}</li>
          <li>{treatingLBS.todos[3]}</li>
          <li>{treatingLBS.todos[4]}</li>
        </ul>
      </div>
    </div>
  );
}

export { LBSTodo };
