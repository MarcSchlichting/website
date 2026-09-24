import React from "react";
import { FaGithub } from "react-icons/fa";
import { featuredProjects, projects } from "../data/projects";
import "./Projects.css";

function FeaturedProject({ project, reversed }) {
    return (
        <article className={`featured-project ${reversed ? "featured-reversed" : ""}`}>
            {project.videoId ? (
                <div className="featured-media video-frame">
                    <iframe
                        src={`https://www.youtube-nocookie.com/embed/${project.videoId}`}
                        title={`${project.title}: ${project.subtitle}`}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>
            ) : (
                <a href={project.image} target="_blank" rel="noopener noreferrer" className="featured-media image-frame">
                    <img src={project.image} alt={project.imageAlt} loading="lazy" />
                </a>
            )}
            <div className="featured-text">
                <p className="featured-kicker">Featured project</p>
                <h2 className="featured-title">{project.title}</h2>
                <p className="featured-subtitle">{project.subtitle}</p>
                <p>{project.description}</p>
                <div className="featured-links">
                    {project.linksLabel && <span className="featured-links-label">{project.linksLabel}:</span>}
                    {project.links.map((link) => (
                        <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="project-link">
                            {link.label} →
                        </a>
                    ))}
                </div>
            </div>
        </article>
    );
}

function Projects() {
    return (
        <div className="content-block">
            <div className="featured-list">
                {featuredProjects.map((project, idx) => (
                    <FeaturedProject key={project.title} project={project} reversed={idx % 2 === 1} />
                ))}
            </div>
            <div className="project-grid">
                {projects.map((project) => (
                    <a
                        key={project.name}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card"
                    >
                        <div className="project-card-header">
                            <h3 className="project-name">{project.name}</h3>
                            <FaGithub aria-label="GitHub repository" className="project-icon" />
                        </div>
                        <p className="project-tagline">{project.tagline}</p>
                        <p className="project-description">{project.description}</p>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Projects;
