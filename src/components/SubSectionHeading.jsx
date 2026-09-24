import React from "react";

function SubSectionHeading({ heading, location = null, time = null }) {
  return (
    <div className="content-block" style={{ textAlign: "left", marginTop: "3rem" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          rowGap: "0.2rem",
        }}
      >
        <h2 style={{ margin: 0, lineHeight: 1.0 }}>{heading}</h2>

        <h2
          style={{
            fontWeight: 300,
            color: "#ccccccb3",
            margin: 0,
            lineHeight: 1.0,
          }}
        >
          {location}
          {time != null ? ` (${time})` : ""}
        </h2>
      </div>

      <div
        style={{
          height: "0.5px",
          backgroundColor: "white",
          width: "100%",
          position: "relative",
          top: "0.1rem",
          marginBottom: "0.5rem",
        }}
      />
    </div>
  );
}

export default SubSectionHeading;
