import React from "react";
import "./ShortBio.css"; // separate CSS for this component
import headshot from "./../assets/headshot.jpg";

function ShortBio() {
    return (
        <section className="two-column-section">
            <div style={{width: "35%"}}>
                <img src={headshot} alt="Headshot" />
            </div>
            <div className="text" style={{ textAlign: 'left' }}>
                <h1 style={{
                    fontWeight:100,
                    letterSpacing: "-0.02rem",
                    // fontSize:"2rem",
                    marginTop:0,
                    marginBottom:"2rem",
                }}>
                    Marc Schlichting
                </h1>
                <>
                    I am a PhD candidate in Aeronautics and Astronautics at Stanford University, advised by Professor Mykel Kochenderfer. My research bridges artificial intelligence, aerospace systems, and neuroscience, focusing on applying large language models to safety-critical applications. As a research assistant at the Stanford Intelligent Systems Laboratory, the Center for AI Safety, and the Center for Interdisciplinary Brain Sciences Research, I develop safety validation techniques and lead interdisciplinary projects that translate cutting-edge research into real-world impact in aviation and human-AI interaction.
                </>
            </div>
        </section>
    );
}

export default ShortBio;
