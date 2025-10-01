import React from "react";
import "./APACitation.css";

function APACitation({ authors, year, title, venue, link }) {
  return (
    <p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="apa-link"
      >
        {authors} ({year}). {title}. <em>{venue}</em>.
      </a>
    </p>
  );
}

export default APACitation;
