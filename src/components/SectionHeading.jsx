import React from "react";

function SectionHeading({ heading }) {
  return (
    <div className="content-block" style={{ textAlign: "left" }}>
      <h1>{heading}</h1>
    </div>
  );
}

export default SectionHeading;
