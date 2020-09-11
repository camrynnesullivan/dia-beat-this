import React from "react";
import { symptomsLBS, symptomsHBS } from "../../research";

function LBSSymptomList() {
  return (
      <div className="symptoms-list-main-div">
        <ul className="fa-ul">
          {symptomsLBS.symptoms.map((symptoms) => {
            return (
              <li>
                <span className={"fa-li"}>
                  <i className={symptoms.fontAwesomeClassname}></i>
                </span>
                {symptoms.symptomName}
              </li>
            );
          })}
        </ul>
      </div>
  );
}

function HBSSymptomList() {
  return (
      <div className="symptoms-list-main-div">
        <ul className="fa-ul">
          {symptomsHBS.symptoms.map((symptoms) => {
            return (
              <li>
                <span className={"fa-li"}>
                  <i className={symptoms.fontAwesomeClassname}></i>
                </span>
                {symptoms.symptomName}
              </li>
            );
          })}
        </ul>
      </div>
  );
}

export { LBSSymptomList, HBSSymptomList };
