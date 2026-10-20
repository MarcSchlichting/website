import './App.css'
import React from 'react'
import Navbar from "./components/Navbar";
import ShortBio from './components/ShortBio'
import SectionHeading from './components/SectionHeading'
import SubSectionHeading from './components/SubSectionHeading'
import TwoColumn from './components/TwoColumn'
import APACitation from './components/APACitation'
import Projects from './components/Projects'
import publications from './data/publications'

// Body text under a sub-section heading, capped at a readable line length.
function Prose({ children }) {
  return <div className="content-block prose">{children}</div>;
}

function App() {
  return (
    <>
      <Navbar />

      <main className="page">
        <section id="bio" className="hero">
          <ShortBio />
        </section>

        <section id="projects">
          <SectionHeading heading="Projects" />
          <Projects />
        </section>

        <section id="experience">
          <SectionHeading heading="Experience" />

          <SubSectionHeading heading={"Postdoctoral Researcher"} location={"Stanford University"} time={"12/2025 - now"} />
          <Prose>
            <p>At the Stanford Intelligent Systems Laboratory and Center for AI Safety, my postdoctoral research focuses on three critical threads in AI safety: 1) safety evaluation and red-teaming of LLMs in high-stakes domains such as mental health and cybersecurity, 2) mitigating risks in safety-critical deployments by reducing LLMs' reliance on potentially unreliable internal knowledge, and 3) identifying and detecting emerging threats from adversarial human misuse of AI systems. I also co-author research on token-level uncertainty signatures of committed and persistent reasoning failures in chain-of-thought traces, and contribute to the assurance of vision-based aircraft navigation, including mechanistic interpretability for learning assurance, protection levels for pose estimation, and taxi localization.</p>
            <p>I am the primary developer of Aquila, the lab's platform for serving many vLLM models on a shared GPU cluster, with an OpenAI-compatible gateway, API-key authentication, a GPU/RAM model warm cache, and monitoring and alerting.</p>
            <p>Beyond research, I lead a team of 8 students, 1 postdoc, and external partners, and manage multiple industry collaboration projects, mentoring graduate students and serving as the primary liaison between our lab and industry partners. This role has strengthened my ability to translate between academic research and real-world deployment requirements.</p>
          </Prose>

          <SubSectionHeading heading={"Technical Lead"} location={"Stanford Flight Simulator Laboratory"} time={"02/2026 - now"} />
          <Prose>
            <p>I am the technical lead and aviation simulation research lead of the <a href="https://flightsim.stanford.edu" target="_blank" rel="noopener noreferrer" className="inline-link">Stanford Flight Simulator Laboratory</a>, a shared, multi-domain simulation facility in the Department of Aeronautics and Astronautics that serves five faculty groups. The lab is built around a modular simulator with a 6-DOF motion platform, configurable avionics, and a separate control room, and it can be reconfigured for fixed-wing, rotorcraft, and ground-vehicle studies.</p>
            <p>The facility is designed as a human-in-the-loop testbed for frontier AI technologies in safety-critical settings such as aviation, with a focus on human-AI teaming. It supports research on collision avoidance in congested airspace, GPS-denied navigation, pilot coordination with autonomous systems, and human-vehicle interaction.</p>
          </Prose>

          <SubSectionHeading heading={"Graduate Research Assistant"} location={"Stanford University"} time={"06/2021 - 12/2025"} />
          <Prose>
            <p>I served as project lead for collaborations with the U.S. Air Force, Airbus, Nissan, and Allstate. My main project was an LLM-based AI assistant for pilots in emergencies, which I took from initial concept to flight tests with the USAF Test Pilot School in under one year. I built the full assistant stack: a tool-calling LLM agent with custom RAG over aircraft documentation, a wake-word and speech-recognition pipeline tuned for cockpit noise, a FastAPI backend, and a React UI with chat, voice output, a moving map, and document display. We evaluated the assistant in flight with 24 Test Pilot School pilots, and the redundant, fault-tolerant infrastructure I built enabled more than 30 hours of incident-free flight testing.</p>
            <p>On the safety validation side, I developed an iterative red-teaming approach for sequential decision-making systems such as LLMs, diffusion model-based failure sampling and falsification methods for autonomous systems (IEEE ERAS, IV, and ITSC 2025), and a meta-learning approach for efficient adversarial scenario generation to validate autonomous vehicles (SAVME, ITSC 2023). I also applied machine learning to neuroscience with the Center for Interdisciplinary Brain Sciences Research, including fNIRS-based biomarkers of PTSD.</p>
          </Prose>

          <SubSectionHeading heading={"Research Mentor"} location={"Stanford University"} time={"2021 - now"} />
          <Prose>
            <p>At the Stanford Intelligent Systems Laboratory, I have mentored 13 undergraduate researchers, leading to publications and internship and job offers.</p>
          </Prose>

          <SubSectionHeading heading={"(Head) Teaching Assistant"} location={"Stanford University"} time={"09/2021 - 12/2023"} />
          <Prose>
            <p>I was responsible for CS238/AA228, “Decision Making Under Uncertainty,” a class with over 500 students covering Bayesian networks, dynamic programming, reinforcement learning, and POMDPs. I oversaw eight teaching assistants, managed course logistics, and handled grading. In addition, I independently taught sections, held weekly office hours, and ran course staff meetings. The class consistently received excellent feedback from students. For serving as head teaching assistant during the winter 2023, I received the Centennial Teaching Assistant Award.</p>
          </Prose>

          <SubSectionHeading heading={"Research Intern"} location={"NASA Ames (KBR)"} time={"06/2023 - 09/2023"} />
          <Prose>
            <p>I contributed to the safety validation of image-based deep learning systems and presented the final results to key stakeholders, including representatives from the U.S. Department of Transportation, the Federal Aviation Administration, and Boeing, highlighting actionable insights and system reliability.</p>
          </Prose>

          <SubSectionHeading heading={"Visiting Researcher"} location={"Georgia Institute of Technology"} time={"02/2020 - 08/2020"} />
          <Prose>
            <p>I conducted research at the Institute for Robotics and Intelligent Machines and at the Dynamics and Control Systems Laboratory under Professor Panagiotis Tsiotras, applying deep reinforcement learning methods for representation learning to develop efficient and explainable abstractions of traffic scenarios.</p>
          </Prose>

          <SubSectionHeading heading={"Student Trainee"} location={"Daimler AG, Germany"} time={"11/2018 - 09/2019"} />
          <Prose>
            <p>I developed an algorithm for fatigue-lifetime calculations of powertrain components using a modified deep conditional convolutional generative adversarial network architecture with a controller to stabilize the training process. I implemented the software into the existing calculation framework and prepared data gathered from test vehicles for use with neural networks.</p>
          </Prose>
        </section>

        <section id="education">
          <SectionHeading heading="Education" />

          <SubSectionHeading heading={"PhD Aeronautics and Astronautics"} location={"Stanford University"} time={"05/2022 - 01/2026"} />
          <Prose>
            <p>The overarching theme of my PhD is exploring how AI can be safely deployed in highly safety-critical environments, where there is little to no room for error, and conversely, how AI can be leveraged within these environments to enhance safety. My research focuses on developing methods that ensure reliable, robust decision-making, as well as using generative models to support and augment human and system performance in real-time. My thesis advisor was Professor Mykel Kochenderfer, my committee included Professors Somil Bansal and Mac Schwager, and my thesis is titled <em>Enhancing Safety through Generative Models in Decision-Making Systems</em>.</p>
            <div className="video-frame thesis-video">
              <iframe
                src="https://www.youtube-nocookie.com/embed/nCtkqVG79i0"
                title="PhD thesis defense: Enhancing Safety through Generative Models in Decision-Making Systems"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </Prose>

          <SubSectionHeading heading={"M.S. Neuroscience"} location={"Stanford University"} time={"01/2024 - 08/2025"} />
          <Prose>
            <p>Completed coursework spanning molecular to systems neuroscience, following the same requirements as the Neurosciences PhD program. This culminated in a qualification exam proposal designed to assess the ability to conduct independent research in neuroscience. Worked with Professor Scott Linderman on a proposal focused on connectome-constrained dynamics modeling in <em>C. elegans</em>.</p>
          </Prose>

          <SubSectionHeading heading={"M.S. Aeronautics and Astronautics"} location={"Stanford University"} time={"09/2020 - 06/2022"} />
          <Prose>
            <p>Completed coursework spanning applied mathematics, artificial intelligence, controls, dynamics, and aerodynamics, building on the foundation from my B.S. Graduated as valedictorian of the program, receiving the Nicholas J. Hoff Award.</p>
          </Prose>

          <SubSectionHeading heading={"B.S. Aerospace Engineering"} location={"University of Stuttgart, Germany"} time={"10/2016 - 11/2019"} />
          <Prose>
            <p>Received a comprehensive education in aerospace engineering with a strong emphasis on numerical simulation and control systems, graduating with a GPA of 1.4 on the German scale (US equivalent 3.97). The program included a mandatory industry internship and a bachelor’s thesis focused on drone collision avoidance using deep reinforcement learning. The research, which explored spatial encoding with LSTMs, was published in the AIAA Journal of Guidance, Control, and Dynamics.</p>
          </Prose>

          <SubSectionHeading heading={"Abitur (High-School Diploma)"} location={"Remstal Gymnasium, Weinstadt, Germany"} time={"07/2016"} />
          <Prose>
            <p>Graduated with a GPA of 1.2 on the German scale.</p>
          </Prose>
        </section>

        <section id="awards">
          <SectionHeading heading="Awards" />
          <SubSectionHeading heading={"Centennial Teaching Assistant Award"} location={"Stanford University"} time={"05/2023"} />
          <TwoColumn image={"/ct_award.jpg"} alt={"Centennial Teaching Assistant Award certificate"} text={"I was honored with Stanford's 2023 Centennial Teaching Assistant Award for my work as Head TA of AA228 / CS238 (Decision Making under Uncertainty), a course that had the third-largest enrollment at Stanford that quarter with the highest number of students per course assistant in the department history. The award, administered by Stanford's Center for Teaching and Learning, recognizes TAs who make exceptional contributions to student learning at an undergraduate and graduate level. My nomination noted the extra steps I took to support such a large and diverse group of students—holding open-ended office hours that often ran late into the night, ensuring quick turnaround on feedback and grading, organizing staff processes to keep the course running smoothly, and creating an environment where every individual student felt supported despite the scale."} maxWidthImage={"40%"} />

          <SubSectionHeading heading={"Nicholas J. Hoff Award"} location={"Stanford University"} time={"06/2022"} />
          <TwoColumn image={"/njh_award.jpg"} alt={"Nicholas J. Hoff Award plaque"} text={"In 2022, I was honored with the Nicholas J. Hoff Award for Outstanding Master's Degree Student in Stanford's Department of Aeronautics & Astronautics. This award recognizes the student who has demonstrated exceptional academic excellence and rigor throughout their Master's program. The award is named after Professor Nicholas J. Hoff, a pioneering figure in the field who founded Stanford's independent Department of Aeronautics & Astronautics in 1957."} maxWidthImage={"25%"} />

          <SubSectionHeading heading={"AIAA GNC Graduate Student Paper Competition"} location={"AIAA SciTech Forum"} time={"01/2021"} />
          <Prose>
            <p>In 2021, I received third place in the AIAA GNC Graduate Student Paper Competition for my research on spatial encoding using LSTMs for drone collision avoidance. This recognition was awarded at the AIAA SciTech Forum, a premier event for aerospace professionals and students. The competition evaluates innovative contributions to the field of guidance, navigation, and control.</p>
          </Prose>

          <SubSectionHeading heading={"School of Engineering Fellowship"} location={"Stanford University"} time={"09/2020 - 06/2022"} />
          <Prose>
            <p>Full funding support for the M.S. in Aeronautics and Astronautics.</p>
          </Prose>
        </section>

        <section id="talks">
          <SectionHeading heading="Talks" />

          <SubSectionHeading heading={"NeurIPS 2026 HAIC Workshop"} location={"Atlanta, GA"} time={"12/2026"} />
          <Prose>
            <p>I am on the organizing committee for the second edition of the Human-AI Coevolution (HAIC) Workshop, held at the Conference on Neural Information Processing Systems (NeurIPS) 2026 in Atlanta. Building on the first edition at ICLR 2025, this year's workshop focuses on measuring human-agent teams in the agentic era. I am responsible for submissions and review. More information is available on the <a href="https://neurips2026haic.com" target="_blank" rel="noopener noreferrer" className="inline-link">workshop website</a>.</p>
          </Prose>

          <SubSectionHeading heading={"Guest Lecture Stochastic and Population Optimization Methods"} location={"Stanford University"} time={"04/2025"} />
          <TwoColumn image={"/aa222_lecture.jpeg"} alt={"Guest lecture in AA222/CS361 on stochastic and population-based optimization"} text={<>As part of Stanford's AA222/CS361 <em>Engineering Design Optimization</em> course, I was invited to deliver a guest lecture on stochastic and population-based optimization. The session covered <em>Mesh Adaptive Direct Search</em>, the <em>Cross-Entropy Method</em>, and <em>genetic algorithms</em>. My goal was to ensure students left with not only an intuitive understanding of how these algorithms work individually, but also how they are connected. To achieve this, I created a highly visual lecture that relied on dynamic animations to convey ideas beyond what a textbook can capture. For this purpose, I extended Grant Sanderson’s (3Blue1Brown) <em>Manim</em> package, adapting it for the classroom setting while preserving its powerful animation capabilities.</>} maxWidthImage={"30%"} />

          <SubSectionHeading heading={"ICLR 2025 HAIC Workshop"} location={"Singapore"} time={"04/2025"} />
          <TwoColumn image={"/iclr_academia_panel.jpg"} alt={"Academia panel at the ICLR 2025 Human-AI Co-Evolution workshop"} text={<>I was part of the organizing committee for the first Human-AI Co-Evolution (HAIC) Workshop at the International Conference on Learning Representations (ICLR) 2025 in Singapore. With AI safety emerging as one of the central themes of ICLR 2025—a topic I am deeply passionate about—the workshop created a unique space to bring together researchers with deep expertise in pre-LLM AI safety and current leaders in large language model research. My responsibilities included supporting the peer-review process, coordinating scheduling, and shaping the program. I also moderated a panel with David Hsu, Lindsay Sanneman, Fan Shi, and Kokil Jaidka, where we discussed the future of safety-aware AI deployment and critically examined the limitations of current approaches. A key takeaway from the workshop was that the notion of “AI safety” in the LLM community is often interpreted too narrowly, overlooking the fact that safety is inherently context-dependent. The workshop sparked new discussions and collaborations, and we are currently developing a position paper to capture these insights.</>} maxWidthImage={"40%"} />
        </section>

        <section id="publications">
          <SectionHeading heading="Publications" />
          <div className="content-block publications-note">
            <p><em>Where possible, the open access version of the papers has been linked. <sup>*</sup> denotes equal contribution.</em></p>
          </div>

          <div className="content-block publication-list">
            {publications.map((pub) => (
              <APACitation key={pub.link} {...pub} />
            ))}
          </div>
        </section>

        <footer className="site-footer">
          © {new Date().getFullYear()} Marc Schlichting
        </footer>
      </main>
    </>
  );
}

export default App;
