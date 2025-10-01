import React from "react";
import "./TwoColumn.css"; // separate CSS for this component

function TwoColumn({ image, text, maxWidthImage }) {
    return (
        <section className="two-column-section-2">
            <div className="text">
                {text}
            </div>
            <div
                className="image-wrapper"
                style={{ maxWidth: maxWidthImage }}
            >
                <img src={image} alt="Title" />
            </div>
        </section>
    );
}


export default TwoColumn;
