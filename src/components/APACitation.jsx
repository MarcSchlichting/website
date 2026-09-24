import React from "react";
import "./APACitation.css";

// Renders "A, B, & C" with Marc's name bolded and "*" as an equal-contribution superscript.
function formatAuthors(authors) {
  return authors.map((raw, idx) => {
    const equal = raw.endsWith("*");
    const name = equal ? raw.slice(0, -1) : raw;
    const isMe = name.startsWith("Schlichting");
    const sep = idx === 0 ? "" : idx === authors.length - 1 ? ", & " : ", ";
    return (
      <React.Fragment key={idx}>
        {sep}
        {isMe ? <strong className="apa-me">{name}</strong> : name}
        {equal && <sup>*</sup>}
      </React.Fragment>
    );
  });
}

function APACitation({ authors, year, title, venue, venueShort, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="apa-link">
      {venueShort && <span className="apa-venue">{venueShort} {year}</span>}
      <span>
        {formatAuthors(authors)} ({year}). {title}. <em>{venue}</em>.
      </span>
    </a>
  );
}

export default APACitation;
