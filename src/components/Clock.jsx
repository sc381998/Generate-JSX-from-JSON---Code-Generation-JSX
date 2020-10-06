import React from "react";
import Hour from "./Hour";
import Minute from "./Minute";

const customStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center"
};

function Clock() {
  return (
    <div style={customStyle}>
      <Hour />
      <Minute />
    </div>
  );
}

export default Clock;