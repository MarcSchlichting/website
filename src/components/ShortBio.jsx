import React from "react";
import { useRef } from "react";
import "./ShortBio.css"; // separate CSS for this component
import headshot from "./../assets/headshot.jpg";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import SkillsShowcase from "./Skill";

function ShortBio({ scrollContainerRef }) {
    const [mounted, setMounted] = React.useState(false);


    const bioContainerRef = useRef(null);

    React.useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 50);
        return () => clearTimeout(timer);
    }, []);

    // React.useEffect(() => {
    //     const interval = setInterval(() => {
    //         console.log(scrollContainerRef.current);
    //     }, 1000);

    //     // Cleanup when component unmounts
    //     return () => clearInterval(interval);
    // }, [scrollContainerRef]);

    const mySkills = [
        {
            id: 1,
            name: "AI Safety",
            level: 95,
            projects: [
                "Contributed to ASTRA RL, a reinforcement learning toolbox for LLM red teaming",
                "Developed a diffusion model–based falsification method for safety validation",
                "Conducted research on meta-learning for adversarial scenario generation"
            ]
        },
        {
            id: 0,
            name: "AI in Safety-Critical Domains",
            level: 97,
            projects: [
                "Designed AI tools for aviation emergency decision support using tool calling, RAG, and speech recognition",
                "Built real-time, on-edge LLM systems and custom RAG pipelines for safety-critical applications",
                "Experienced with distributed and on-device compute infrastructure for high reliability"
            ]
        },
        {
            id: 2,
            name: "Human-AI Interaction",
            level: 90,
            projects: [
                "Conducted quantitative and qualitative assessments of pilot stress, workload, and performance during real flight tests",
                "Gained expertise in UI/UX design for safety-critical workflows and decision support tools",
            ]
        },
        {
            id: 3,
            name: "LLMs",
            level: 90,
            projects: [
                "Extensive experience with tool calling and agentic LLM systems",
                "Worked with open-source models (Llama, Qwen, GPT-OSS, DeepSeek) and API-based systems (OpenAI, Anthropic, Gemini)",
                "Deployed and optimized LLMs using vLLM and Ollama for latency-sensitive applications",
                "Familiar with reasoning models and optimization for edge inference"
            ]
        },
        {
            id: 4,
            name: "RAG",
            level: 93,
            projects: [
                "Hands-on experience with frameworks including Ragatouille, LightRAG, GraphRAG, and HippoRAG2",
                "Developed advanced chunking and re-ranking strategies for high-accuracy retrieval",
                "Built a scalable tool-retrieval framework enabling hundreds of tools for LLM use",
                "Worked extensively with embedding models and retrieval optimization"
            ]
        },
        {
            id: 5,
            name: "ML/DL",
            level: 85,
            projects: [
                "Strong foundation in statistics and ML theory, backed by multiple graduate-level CS courses",
                "Familiar with structured data, vision, and RL architectures",
                "Undergraduate thesis on deep reinforcement learning for collision avoidance"
            ]
        },
        {
            id: 6,
            name: "Real-World Deployment",
            level: 90,
            projects: [
                "Led development of an AI cockpit assistant from concept to flight tests within one year, a process that usually takes multiple years",
                "Built redundant, fault-tolerant infrastructure enabling 30+ hours of incident-free flight testing",
                "Experienced in deploying safety-critical, real-time AI systems"
            ]
        },
        {
            id: 7,
            name: "Simualation",
            level: 87,
            projects: [
                "Strong background in numerical methods and custom simulation design",
                "Extensive experience with X-Plane (including plugin development of XPlaneConnectX bindings)",
                "Familiar with MuJoCo, Applied Intuition, and CARLA for autonomous systems",
                "Experienced in building lightweight simulation frameworks in Python and Julia"
            ]
        },
        {
            id: 12,
            name: "APIs/Backend",
            level: 80,
            projects: [
                "Built a FastAPI-based backend for the AI pilot assistant to handle communication between frontend, speech recognition, and the LLM models",
                "Followed cybcersecurity best practices for deployment (e.g., used JWT)",
                "Developed a cloud-based backend for real-time wearable data processing and analytics in a graduate class project",
            ]
        },
        {
            id: 13,
            name: "Speech Recognition",
            level: 80,
            projects: [
                "Built a wakeword, silence detection, and transcription pipeline optimized for cockpit environments that allows pilots to talk to the assistant like they are used from Siri, Alexa, or other assistants",
                "Knowledgeable in ASR model architectures and signal theory",
                "Experience with data augmentation and fine-tuning using synthetic datasets"
            ]
        },
        {
            id: 8,
            name: "Python",
            level: 98,
            projects: [
                "Primary language, used daily for 7+ years",
                "Deep experience with PyTorch, JAX, NumPy, SciPy, Pandas, FastAPI, Pydantic, and more",
            ]
        },
        {
            id: 9,
            name: "React/JS",
            level: 70,
            projects: [
                "Built frontend UI for the AI pilot assistant with seamless backend integration",
                "AI pilot assistant UI features include a chat window, voice output, moving maps, and display relevant PDF documents",
                "UI received highly positive feedback from pilots",
            ]
        },
        {
            id: 10,
            name: "Julia/Matlab",
            level: 60,
            projects: [
                "Interactive portfolio website with skill cards",
                "MATLAB for signal processing and control system design",
                "Responsive UI components showcasing projects"
            ]
        },
        {
            id: 11,
            name: "C/C++",
            level: 55,
            projects: [
                "Used for RL policy deployment on drones for flight testing",
                "Developed custom X-Plane plugins",
            ]
        },
        {
            id: 14,
            name: "Project Management",
            level: 90,
            projects: [
                "Led multi-institution collaborations with USAF, Airbus, Nissan, and Allstate",
                "Successfully mentored over 13 students until now, resulting in publications and successful intership/job applications",
                "Current project lead for a research team of 8 students, 1 postdoc, and external partners",
                "Proven record of on-time delivery and successful execution across complex technical projects",
            ]
        },
        
    ];


    return (
        <div ref={bioContainerRef} style={{ display: "flex", flexDirection: "column", alignContent: "center", justifyContent: 'center', minHeight: "100dvh" }}>
            <section className="two-column-section">
                <div style={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                }}>
                    <img
                        src={headshot}
                        alt="Headshot"
                        style={{ display: "block", height: "auto", width: "100%" }}
                    />
                </div>
                <div style={{
                    textAlign: 'left',
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                }}>
                    <h1 className="fade-up" style={{
                        fontWeight: 100,
                        letterSpacing: "-0.02rem",
                        // fontSize:"2rem",
                        marginTop: 0,
                        marginBottom: "2rem",
                        animationDelay: "0.1s"
                    }}>
                        Marc Schlichting
                    </h1>
                    {/* <>
                    I am a PhD candidate in Aeronautics and Astronautics at Stanford University, advised by Professor Mykel Kochenderfer. My research bridges artificial intelligence, aerospace systems, and neuroscience, focusing on applying large language models to safety-critical applications. As a research assistant at the Stanford Intelligent Systems Laboratory, the Center for AI Safety, and the Center for Interdisciplinary Brain Sciences Research, I develop safety validation techniques and lead interdisciplinary projects that translate cutting-edge research into real-world impact in aviation and human-AI interaction.
                </> */}
                    <div className="fade-up" style={{ animationDelay: "0.25s" }}>
                        I am a Ph.D. candidate in Aeronautics and Astronautics at Stanford University, advised by Professor Mykel Kochenderfer. My work sits at the intersection of AI safety, aerospace systems, and human factors, with a focus on the safe deployment of large language models in safety-critical domains. At the Stanford Intelligent Systems Laboratory and the Center for AI Safety, I develop robust validation techniques and real-time AI systems that operate reliably under uncertainty.
                        Beyond research, I have led multidisciplinary teams and industry collaborations with partners such as Airbus and the U.S. Air Force, turning academic insights into practical systems deployed in real flight tests. My goal is to advance trustworthy, safety-aligned AI that can be deployed confidently in high-stakes environments.
                    </div>
                    <h3 className="fade-up" style={{ paddingBottom: "0.0rem", animationDelay: "0.35s" }}>
                        Interests and Skills
                    </h3>
                    <text className="fade-up text-sm pb-4" style={{ animationDelay: "0.35s" }}><em>Hover over any skill to see details.</em></text>
                    <SkillsShowcase skills={mySkills} scrollContainerRef={scrollContainerRef} bioContainerRef={bioContainerRef} />
                    <h3 className="fade-up" style={{ animationDelay: "0.5s" }}>
                        Contact
                    </h3>
                    <div style={{ display: "flex", gap: "2rem", marginTop: "-0.5rem" }}>
                        {/* Mail */}
                        <a style={{ animationDelay: "0.55s" }} href="mailto:mschl@stanford.edu" className="fade-up group relative w-12 h-12 cursor-pointer">
                            {/* Icon centered in container */}
                            <IoMdMail className="absolute bottom-0 left-1/2 -translate-x-1/2 text-2xl text-gray-500 transition-transform duration-300 group-hover:-translate-y-3 group-hover:text-gray-300" />
                            {/* Label centered under icon */}
                            <span className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-3 mt-1 text-sm text-gray-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                Mail
                            </span>
                        </a>

                        {/* LinkedIn */}
                        <a style={{ animationDelay: "0.66s" }} href="https://linkedin.com/in/marcschlichting" target="_blank" className="fade-up group relative w-12 h-12 cursor-pointer">
                            <FaLinkedin className="absolute bottom-0 left-1/2 -translate-x-1/2 text-2xl text-gray-500 transition-transform duration-300 group-hover:-translate-y-3 group-hover:text-gray-300" />
                            <span className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-3 mt-1 text-sm text-gray-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                LinkedIn
                            </span>
                        </a>

                        {/* Github */}
                        <a style={{ animationDelay: "0.75s" }} href="https://github.com/marcschlichting" target="_blank" className="fade-up group relative w-12 h-12 cursor-pointer">
                            <FaGithub className="absolute bottom-0 left-1/2 -translate-x-1/2 text-2xl text-gray-500 transition-transform duration-300 group-hover:-translate-y-3 group-hover:text-gray-300" />
                            <span className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-3 mt-1 text-sm text-gray-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                Github
                            </span>
                        </a>
                    </div>






                </div >
            </section >
        </div>
    );






    // return (
    //     <section className="two-column-section">
    //         {/* Left column: headshot */}
    //         <div style={{ width: "50%", display: "flex", flexDirection: "column", gap: "1rem" }}>
    //             <div
    //                 className="fade-up"
    //                 style={{ animationDelay: mounted ? "0.05s" : "0s" }}
    //             >
    //                 <img
    //                     src={headshot}
    //                     alt="Headshot"
    //                     className="bio-headshot"
    //                     // inline style fallback (you can keep styling in CSS file instead)
    //                     style={{ display: "flex", width: "100%", maxWidth: 360, borderRadius: 12, objectFit: "cover" }}
    //                 />
    //             </div>
    //         </div>

    //         {/* Right column: text, skills, contact */}
    //         <div style={{ textAlign: "left", display: "flex", flexDirection: "column", width: "100%" }}>
    //             {/* Name */}
    //             <div
    //                 className="fade-up"
    //                 style={{ animationDelay: mounted ? "0.1s" : "0s" }}
    //             >
    //                 <h1
    //                     style={{
    //                         fontWeight: 100,
    //                         letterSpacing: "-0.02rem",
    //                         marginTop: 0,
    //                         marginBottom: "2rem",
    //                     }}
    //                 >
    //                     Marc Schlichting
    //                 </h1>
    //             </div>

    //             {/* Bio paragraph */}
    //             <div
    //                 className="fade-up"
    //                 style={{ animationDelay: mounted ? "0.25s" : "0s" }}
    //             >
    //                 <p>
    //                     I am a Ph.D. candidate in Aeronautics and Astronautics at Stanford University, advised by Professor Mykel Kochenderfer. My work sits at the intersection of AI safety, aerospace systems, and human factors, with a focus on the safe deployment of large language models in safety-critical domains. At the Stanford Intelligent Systems Laboratory and the Center for AI Safety, I develop robust validation techniques and real-time AI systems that operate reliably under uncertainty.
    //                     Beyond research, I have led multidisciplinary teams and industry collaborations with partners such as Airbus and the U.S. Air Force, turning academic insights into practical systems deployed in real flight tests. My goal is to advance trustworthy, safety-aligned AI that can be deployed confidently in high-stakes environments.
    //                 </p>
    //             </div>

    //             {/* Interests & Skills */}
    //             <div
    //                 className="fade-up"
    //                 style={{ animationDelay: mounted ? "0.45s" : "0s" }}
    //             >
    //                 <h3 style={{ paddingBottom: "0rem", marginTop: "1.25rem" }}>Interests and Skills</h3>
    //                 <p className="text-sm pb-4"><em>Hover over any skill to see details.</em></p>

    //                 {/* SkillsShowcase (it has its own small mount animation too) */}
    //                 <SkillsShowcase skills={mySkills} />
    //             </div>

    //             {/* Contact */}
    //             <div
    //                 className="fade-up"
    //                 style={{ animationDelay: mounted ? "0.75s" : "0s" }}
    //             >
    //                 <h3>
    //                     Contact
    //                 </h3>
    //                 <div style={{ display: "flex", gap: "2rem", marginTop: "-0.5rem" }}>
    //                     {/* Mail */}
    //                     <a href="mailto:mschl@stanford.edu" className="group relative w-12 h-12 cursor-pointer">
    //                         {/* Icon centered in container */}
    //                         <IoMdMail className="absolute bottom-0 left-1/2 -translate-x-1/2 text-2xl text-gray-500 transition-transform duration-300 group-hover:-translate-y-3 group-hover:text-gray-300" />
    //                         {/* Label centered under icon */}
    //                         <span className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-3 mt-1 text-sm text-gray-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
    //                             Mail
    //                         </span>
    //                     </a>
    //                     {/* LinkedIn */}
    //                     <a href="https://linkedin.com/in/marcschlichting" target="_blank" className="group relative w-12 h-12 cursor-pointer">
    //                         <FaLinkedin className="absolute bottom-0 left-1/2 -translate-x-1/2 text-2xl text-gray-500 transition-transform duration-300 group-hover:-translate-y-3 group-hover:text-gray-300" />
    //                         <span className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-3 mt-1 text-sm text-gray-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
    //                             LinkedIn
    //                         </span>
    //                     </a>
    //                     {/* Github */}
    //                     <a href="https://github.com/marcschlichting" target="_blank" className="group relative w-12 h-12 cursor-pointer">
    //                         <FaGithub className="absolute bottom-0 left-1/2 -translate-x-1/2 text-2xl text-gray-500 transition-transform duration-300 group-hover:-translate-y-3 group-hover:text-gray-300" />
    //                         <span className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-3 mt-1 text-sm text-gray-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
    //                             Github
    //                         </span>
    //                     </a>
    //                 </div>
    //             </div>
    //         </div>
    //     </section>
    // );


}

export default ShortBio;
