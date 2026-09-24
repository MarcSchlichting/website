import React from "react";
import "./ShortBio.css";
import headshot from "./../assets/headshot.jpg";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { SiGooglescholar } from "react-icons/si";
import SkillsShowcase from "./Skill";
import skills from "../data/skills";

const contacts = [
    { label: "Mail", href: "mailto:mschl@stanford.edu", Icon: IoMdMail },
    { label: "LinkedIn", href: "https://linkedin.com/in/marcschlichting", Icon: FaLinkedin },
    { label: "GitHub", href: "https://github.com/marcschlichting", Icon: FaGithub },
    { label: "Scholar", href: "https://scholar.google.com/citations?user=IseulBgAAAAJ", Icon: SiGooglescholar },
];

function ShortBio() {
    return (
        <section className="bio-section">
            <div className="bio-image">
                <img
                    src={headshot}
                    alt="Portrait of Marc Schlichting"
                    width={800}
                    height={800}
                />
            </div>
            <div className="bio-text">
                <h1 className="fade-up" style={{
                    fontWeight: 100,
                    letterSpacing: "-0.02rem",
                    marginTop: 0,
                    marginBottom: "2rem",
                    animationDelay: "0.1s"
                }}>
                    Marc Schlichting
                </h1>

                <div className="fade-up bio-paragraphs" style={{ animationDelay: "0.25s" }}>
                    <p>
                        I'm a Postdoctoral Researcher at the Stanford Intelligent Systems Laboratory and Center for AI Safety, focused on making AI systems—particularly large language models—safe and reliable enough for deployment in high-stakes environments.
                    </p>
                    <p>
                        I hold a PhD in Aeronautics/Astronautics from Stanford (dissertation: <em>Enhancing Safety Through Generative Models in Decision-Making Systems</em>), along with Stanford master's degrees in Aeronautics/Astronautics and Neuroscience, and a bachelor's in Aerospace Engineering from University of Stuttgart, Germany.
                    </p>
                    <p>
                        My unique perspective combines deep expertise in modern AI systems—including extensive research on LLMs and generative models during my PhD—with rigorous training in aerospace safety engineering and verification. This dual background positions me uniquely to address today's AI safety challenges: I understand both the capabilities and limitations of current AI systems and the systematic safety practices that have made aviation one of the world's safest industries. I believe the AI field can learn much from these proven methodologies as we start to understand the risks associated with LLMs.
                    </p>
                    <p>
                        Over the years, I've led multidisciplinary teams and industry collaborations with partners including NASA, Airbus, the U.S. Air Force, Nissan, and Allstate, translating research into deployed systems. My goal is to help organizations build AI systems they can trust in their most critical applications by bringing aerospace-grade safety practices to AI development.
                    </p>
                </div>

                <h3 className="fade-up" style={{ animationDelay: "0.35s" }}>
                    Interests and Skills
                </h3>
                <p className="fade-up text-sm pb-4" style={{ animationDelay: "0.35s" }}>
                    <em>Hover or tap a skill to see details.</em>
                </p>
                <SkillsShowcase skills={skills} />

                <h3 className="fade-up" style={{ animationDelay: "0.5s" }}>
                    Contact
                </h3>
                <div style={{ display: "flex", gap: "2rem", marginTop: "-0.5rem" }}>
                    {contacts.map((contact, idx) => {
                        const { label, href, Icon } = contact;
                        const external = href.startsWith("http");
                        return (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                style={{ animationDelay: `${0.55 + idx * 0.1}s` }}
                                className="fade-up group relative w-12 h-12 cursor-pointer"
                                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            >
                                <Icon aria-hidden="true" className="absolute bottom-0 left-1/2 -translate-x-1/2 text-2xl text-gray-500 transition-transform duration-300 group-hover:-translate-y-3 group-hover:text-gray-300 group-focus-visible:-translate-y-3 group-focus-visible:text-gray-300" />
                                <span className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-3 mt-1 text-sm text-gray-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                                    {label}
                                </span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default ShortBio;
