import React from "react";

function SectionHeading({ heading }) {
  return (
    <section title={heading} style={{
      textAlign: 'left',
      paddingLeft: "4rem",
      paddingRight: "4rem",
    }}>
      <h1>
        {heading}
      </h1>

    </section>
  );
}

export default SectionHeading;