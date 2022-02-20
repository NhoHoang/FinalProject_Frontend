import React from "react";

const showList = (props) => {
  return (
    <option key={props.key} value={props.value}>
      {props.tilte}
    </option>
  );
};

export default showList;
