import React from "react";

function SectionHeading({ heading }) {
  return (
    <section title={heading} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" style={{
      textAlign: 'left',
    }}>
      <h1>
        {heading}
      </h1>

    </section>
  );
}

export default SectionHeading;