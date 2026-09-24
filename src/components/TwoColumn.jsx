import React from "react";
import "./TwoColumn.css"; // separate CSS for this component

function TwoColumn({ image, alt, text, maxWidthImage }) {
    return (
        <div className="two-column-section-2">
            <div className="text">
                {text}
            </div>
            <div
                className="image-wrapper"
                style={{ maxWidth: maxWidthImage }}
            >
                <img src={image} alt={alt} loading="lazy" />
            </div>
        </div>
    );
}

export default TwoColumn;
