import React from "react";
import { Stats } from "./Stats";

export function Overview(props) {

  let data = props.data.US;
  
  return (
    <div className="overview">
      <Stats type="overview" state={data} />
      <img src="./img/scale.png" alt="scale" />
    </div>
  );
}
