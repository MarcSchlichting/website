// import React from "react";

// function SubSectionHeading({ heading, location = null, time = null }) {
//   return (
//     <section title={heading} style={{
//       textAlign: 'left',
//       marginLeft: "2rem",
//       marginTop: "3rem",
//     }}>
//       <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap:"0.5rem"}}>
//         <h3 style={{ margin: 0 }}>{heading}</h3>
//         <h3
//           style={{
//             marginLeft: "auto",   // pushes it to the far right
//             fontWeight: 300,      // thin font
//             color:"#ccccccb3",
//             marginRight: "4rem",  // 2rem from the right edge
//             margin: 0,
//           }}
//         >
//           {location}
//           {time != null ? ` (${time})` : ""}
//         </h3>
//       </div>
//       <div
//         style={{
//           flexGrow: 1,           // takes remaining space
//           height: "1px",         // thickness of the line
//           backgroundColor: "white", // color of the line
//           marginLeft: "0rem",    // gap between heading and line
//           marginRight: "0rem",
//           width: "100vw",         // full viewport width
//           position: "relative",
//           top: "-0.25rem",
//           marginBottom: "0.5rem",
//         }}
//       />
//     </section>
//   );
// }

// export default SubSectionHeading;

import React from "react";

function SubSectionHeading({ heading, location = null, time = null }) {
  return (
    <section
      title={heading}
      style={{
        textAlign: "left",
        marginLeft: "4rem",
        marginTop: "3rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",      
          gap: "0.5rem",
          marginRight:"5rem",
          rowGap: "0rem",
        }}
      >
        <h3 style={{ 
          margin: 0, 
          marginTop: "-0.5rem",
          }}>{heading}</h3>

        <h3
          style={{
            fontWeight: 300,
            color: "#ccccccb3",
            margin: 0,
            marginTop: "-0.5rem",
          }}
        >
          {location}
          {time != null ? ` (${time})` : ""}
        </h3>
      </div>

      <div
        style={{
          flexGrow: 1,
          height: "1px",
          backgroundColor: "white",
          width: "100vw",
          position: "relative",
          top: "-0.25rem",
          marginBottom: "0.5rem",
        }}
      />
    </section>
  );
}

export default SubSectionHeading;

