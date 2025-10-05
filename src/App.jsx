import { useState, useRef } from 'react'
import './App.css'
import React from 'react'
import Navbar from "./components/Navbar";
import ShortBio from './components/ShortBio'
import SectionHeading from './components/SectionHeading'
import { TextAlignCenter, University } from 'lucide-react'
import SubSectionHeading from './components/SubSectionHeading'
import TwoColumn from './components/TwoColumn'
import APACitation from './components/APACitation'

function App() {
  const scrollContainer = useRef(null);
  return (
    <div style={{ height: "100dvh", display: "flex", flexDirection: "column" }}>
      {/* Navbar fixed at the top */}
      <div style={{ flexShrink: 0 }}>
        <Navbar scrollContainer={scrollContainer} />
      </div>

      {/* Main content scrollable */}
      <div
        style={{
          flexGrow: 1,            // take the remaining space
          overflowY: "auto",      // scroll vertically
          overflowX: "hidden",    // prevent horizontal scroll
          paddingTop: "5rem",           // remove padding
          paddingBottom: "5rem",
          margin: "0",            // remove margin
          width: "100vw",
        }}
        ref={scrollContainer}
      >
        <div style={{
          maxWidth: "1280px"
        }}>


          <div id="bio" style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100dvh",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <ShortBio />
          </div>

          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "5rem",
          }}>
            {/* <div id="projects" style={{
              minHeight: "100dvh",
            }}>
              <SectionHeading heading="Project Highlights" />
              <p>Here are a couple of project highlights over the years.</p>

              <SubSectionHeading heading={"AI Agent as Pilot Assistant"} />
              <p>
                Here are some details about the AI assistant project. Here are some
                details about the AI assistant project. Here are some details about the
                AI assistant project. Here are some details about the AI assistant
                project.
              </p>

              <SubSectionHeading heading={"Diffusion Models for Failure Sampling"} />
              <p>
                Here are some details about the DiFS project. Here are some details
                about the DiFS project. Here are some details about the DiFS project.
                Here are some details about the DiFS project. Here are some details
                about the DiFS project.
              </p>
            </div> */}

            <div id="experience" style={{
              minHeight: "100dvh",
            }}>
              <SectionHeading heading="Experience" />

              <SubSectionHeading heading={"Research Assistant"} location={"Stanford University"} time={"06/2021 - now"} />
              <p> I served as a project lead for collaborations with USAF, Airbus, Nissan, and Allstate, mentoring 13 undergraduate students on research projects. Currently, I am developing an AI assistant for pilots in emergency situations, taking it from initial concept to flight tests with the USAF Test Pilot School in less than one year.</p>

              <SubSectionHeading heading={"Teaching Assistant"} location={"Stanford University"} time={"09/2021 - 12/2023"} />
              <p> I was responsible for CS238/AA228, “Decision Making Under Uncertainty,” a class with over 500 students. I oversaw eight teaching assistants, managed course logistics, and handled grading. In addition, I independently taught sections, held weekly office hours, and ran course staff meetings. The class consistently received excellent feedback from students. For serving as head teaching assistant during the winter 2023, I received the Centennial Teaching Assistant Award. </p>

              <SubSectionHeading heading={"Research Intern"} location={"NASA Ames (KBR)"} time={"06/2023 - 09/2023"} />
              <p> I contributed to the safety validation of image-based deep learning systems and presented the final results to key stakeholders, including representatives from the U.S. Department of Transportation, the Federal Aviation Administration, and Boeing, highlighting actionable insights and system reliability.</p>

              <SubSectionHeading heading={"Visiting Researcher"} location={"Georgia Institute of Technology"} time={"02/2020 - 08/2020"} />
              <p> I conducted research at the Institute for Robotics and Intelligent Machines and at the Dynamics and Control Systems Laboratory under Professor Panagiotis Tsiotras, applying deep reinforcement learning methods for representation learning to develop efficient and explainable abstractions of traffic scenarios.</p>

              <SubSectionHeading heading={"Student Trainee"} location={"Daimler AG, Germany"} time={"11/2018 - 09/2019"} />
              <p>I developed an algorithm for fatigue-lifetime calculations of powertrain components using a modified deep conditional convolutional generative adversarial network architecture with a controller to stabilize the training process. I implemented the software into the existing calculation framework and prepared data gathered from test vehicles for use with neural networks.</p>

            </div>

            <div id="education" style={{
              minHeight: "100dvh",
            }}>
              <SectionHeading heading="Education" />

              <SubSectionHeading heading={"PhD Aeronautics and Astronautics"} location={"Stanford University"} time={"05/2022 - now"} />
              <p>The overarching theme of my PhD is exploring how AI can be safely deployed in highly safety-critical environments, where there is little to no room for error, and conversely, how AI can be leveraged within these environments to enhance safety. My research focuses on developing methods that ensure reliable, robust decision-making, as well as using generative models to support and augment human and system performance in real-time. My thesis is titled "Enhancing Safety through Generative Models in Decision-Making Systems."</p>

              <SubSectionHeading heading={"M.S. Neurosciences"} location={"Stanford University"} time={"01/2024 - 08/2025"} />
              <p>Completed coursework spanning molecular to systems neuroscience, following the same requirements as the Neurosciences PhD program. This culminated in a qualification exam proposal designed to assess the ability to conduct independent research in neuroscience. Worked with Professor Scott Linderman on a proposal focused on connectome-constrained dynamics modeling in <em>C.elegans.</em></p>

              <SubSectionHeading heading={"M.S. Aeronautics and Astronautics"} location={"Stanford University"} time={"09/2020 - 06/2022"} />
              <p>Completed coursework spanning applied mathematics, artificial intelligence, controls, dynamics, and aerodynamics, building on the foundation from my B.S. Graduated as valedictorian of the program, receiving the Nicholas J. Hoff Award.</p>

              <SubSectionHeading heading={"B.S. Aerospace Engineering"} location={"University of Stuttgart, Germany"} time={"10/2016 - 11/2019"} />
              <p>Received a comprehensive education in aerospace engineering with a strong emphasis on numerical simulation and control systems. The program included a mandatory industry internship and a bachelor’s thesis focused on drone collision avoidance using deep reinforcement learning. The research, which explored spatial encoding with LSTMs, was published in the AIAA Journal of Guidance, Control, and Dynamics.</p>
            </div>

            <div id="talks" style={{
              minHeight: "100dvh",
            }}>
              <SectionHeading heading="Talks" />

              <SubSectionHeading heading={"Guest Lecture Stochastic and Population Optimization Methods"} location={"Stanford University"} time={"04/2025"} />
              <TwoColumn image={"/aa222_lecture.jpeg"} text={<>As part of Stanford's AA222/CS361 <em>Design Engineering Optimization</em> course, I was invited to deliver a guest lecture on stochastic and population-based optimization. The session covered <em>Mesh Adaptive Direct Search</em>, the <em>Cross-Entropy Method</em>, and <em>genetic algorithms</em>. My goal was to ensure students left with not only an intuitive understanding of how these algorithms work individually, but also how they are connected. To achieve this, I created a highly visual lecture that relied on dynamic animations to convey ideas beyond what a textbook can capture. For this purpose, I extended Grant Sanderson’s (3Blue1Brown) <em>Manim</em> package, adapting it for the classroom setting while preserving its powerful animation capabilities.</>} maxWidthImage={"30%"} />

              <SubSectionHeading heading={"ICLR 2025 HAIC Workshop"} location={"Singapore"} time={"04/2025"} />
              <TwoColumn image={"./iclr_academia_panel.jpg"} text={<>I was part of the organizing committee for the first Human-AI Co-Evolution (HAIC) Workshop at the International Conference on Learning Representations (ICLR) 2025 in Singapore. With AI safety emerging as one of the central themes of ICLR 2025—a topic I am deeply passionate about—the workshop created a unique space to bring together researchers with deep expertise in pre-LLM AI safety and current leaders in large language model research. My responsibilities included supporting the peer-review process, coordinating scheduling, and shaping the program. I also moderated a panel with David Hsu, Lindsay Sanneman, Fan Shi, and Kokil Jaidka, where we discussed the future of safety-aware AI deployment and critically examined the limitations of current approaches. A key takeaway from the workshop was that the notion of “AI safety” in the LLM community is often interpreted too narrowly, overlooking the fact that safety is inherently context-dependent. The workshop sparked new discussions and collaborations, and we are currently developing a position paper to capture these insights.</>} maxWidthImage={"40%"} />

            </div>

            <div id="awards" style={{
              minHeight: "100dvh",
            }}>
              <SectionHeading heading="Awards" />
              <SubSectionHeading heading={"Centennial Teaching Assistant Award"} location={"Stanford University"} time={"05/2023"} />
              <TwoColumn image={"/ct_award.jpg"} text={"I was honored with Stanford's 2023 Centennial Teaching Assistant Award for my work as Head TA of AA228 / CS238 (Decision Making under Uncertainty), a course that had the third-largest enrollment at Stanford that quarter with the highest number of students per course assistant in the department history. The award, administered by Stanford's Center for Teaching and Learning, recognizes TAs who make exceptional contributions to student learning at an undergraduate and graduate level. My nomination noted the extra steps I took to support such a large and diverse group of students—holding open-ended office hours that often ran late into the night, ensuring quick turnaround on feedback and grading, organizing staff processes to keep the course running smoothly, and creating an environment where every individual student felt supported despite the scale."} maxWidthImage={"40%"} />

              <SubSectionHeading heading={"Nicholas J. Hoff Award"} location={"Stanford University"} time={"06/2022"} />
              <TwoColumn image={"/njh_award.jpg"} text={"In 2022, I was honored with the Nicholas J. Hoff Award for Outstanding Master's Degree Student in Stanford's Department of Aeronautics & Astronautics. This award recognizes the student who has demonstrated exceptional academic excellence and rigor throughout their Master's program. The award is named after Professor Nicholas J. Hoff, a pioneering figure in the field who founded Stanford's independent Department of Aeronautics & Astronautics in 1957."} maxWidthImage={"25%"} />

              <SubSectionHeading heading={"AIAA GNC graduate Student Paper Competition"} location={"AIAA SciTech Forum"} time={"01/2021"} />
              <p>In 2021, I received third place in the AIAA GNC Graduate Student Paper Competition for my research on spatial encoding using LSTMs for drone collision avoidance. This recognition was awarded at the AIAA SciTech Forum, a premier event for aerospace professionals and students. The competition evaluates innovative contributions to the field of guidance, navigation, and control.</p>

              <SubSectionHeading heading={"School of Engineering Fellowship"} location={"Stanford University"} time={"09/2020 - 06/2022"} />
              <p>Full funding support for the M.S. in Aeronautics and Astronautics.</p>
            </div>

            <div id="publications" style={{
              minHeight: "100dvh",
            }}>
              <SectionHeading heading="Publications" />
              <p style={{
                marginTop: "-2.5rem",
                paddingBottom: "4rem",
              }}><em>Note: Where possible, the open access version of the papers has been linked.</em></p>

              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                marginBottom: "2rem",
              }}>
                {/* DiFS Traffic Planning ITSC */}
                <APACitation authors={"Wang, J., Schlichting, M. R. & Kochenderfer, M. J."} title={"Robust Planning for Autonomous Vehicles with Diffusion-Based Failure Samplers"} year={2025} venue={"IEEE International Conference on Intelligent Transportation Systems"} link={"https://arxiv.org/abs/2507.11991"} />

                {/* LeRAAT ECAI */}
                <APACitation authors={"Schlichting, M. R., Rasmussen, V., Alazzeh, H., Liu, H., Jafari, K., Hardy, A. F., Asmar, D. M. & Kochenderfer, M. J."} title={"LeRAAT: LLM-Enabled Real-Time Aviation Advisory Tool"} year={2025} venue={"European Conference on Artificial Intelligence"} link={"https://arxiv.org/abs/2503.16477"} />

                {/* MPPCA Paper */}
                <APACitation authors={"Kruse, L. A., Schlichting, M. R. & Kochenderfer, M. J."} title={"Scalable Importance Sampling in High Dimensions with Low-Rank Mixture Proposals"} year={2025} venue={"International Conference on Control, Decision and Information Technologies"} link={"https://arxiv.org/abs/2505.13335"} />

                {/* DiFS Traffic IV */}
                <APACitation authors={<>Wang, J.<sup>*</sup>, Schlichting, M. R.<sup>*</sup>, Delecki, H. & Kochenderfer, M. J.</>} title={"Diffusion Models for Safety Validation of Autonomous Driving Systems"} year={2025} venue={"IEEE Intelligent Vehicles Symposium"} link={"https://arxiv.org/abs/2506.08459"} />

                {/* DiFS Paper ERAS */}
                <APACitation authors={<>Delecki, H.<sup>*</sup>, Schlichting, M. R.<sup>*</sup>, Arief, M., Corso, A., Vazquez-Chanlatte, M., & Kochenderfer, M. J.</>} title={"Diffusion-based failure sampling for evaluating safety-critical autonomous systems"} year={2025} venue={"IEEE Engineering Reliable Autonomous Systems Conference"} link={"https://arxiv.org/abs/2406.14761"} />

                {/* A month in review */}
                <APACitation authors={"Balters, S., Schlichting, M., Walton, T. O., Kochenderfer, M. J., & Kaysen, D."} title={"A Month in Review: Longitudinal Dynamics Between Daily PTSD Symptom networks, Affect, and Drinking Behaviors in Female College Students"} year={2024} venue={"Frontiers in Psychology Vol. 15"} link={"https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2024.1388539/full"} />

                {/* SAVME */}
                <APACitation authors={"Schlichting, M. R., Boord, N. V., Corso, A. L., & Kochenderfer, M. J."} title={"SAVME: Efficient Safety Validation For Autonomous Systems Using Meta-Learning"} year={2023} venue={"IEEE International Conference on Intelligent Transportation Systems"} link={"https://arxiv.org/abs/2309.12474"} />

                {/* Normalizing Flow for Robotics */}
                <APACitation authors={<>Delecki, H.<sup>*</sup>, Kruse, L. A.<sup>*</sup>, Schlichting, M. R.<sup>*</sup>, & Kochenderfer, M. J.</>} title={"Deep Normalizing Flows For State Estimation"} year={2023} venue={"International Conference on Information Fusion"} link={"https://arxiv.org/abs/2306.15605"} />

                {/* Subcortical Brain Inference */}
                <APACitation authors={<>Balters, S.<sup>*</sup>, Schlichting, M. R.<sup>*</sup>, Foland-Ross, L., Brigadoi, S., Miller, J. G., Kochenderfer, M. J., Garrett, A. S. & Reiss, A. L.</>} title={'Towards Assessing Subcortical "Deep Brain" Biomarkers of PTSD With Functional Near-Infrared Spectroscopy'} year={2023} venue={"Cerebral Cortex"} link={"https://academic.oup.com/cercor/article/33/7/3969/6692558"} />

                {/* AIAA JGDC */}
                <APACitation authors={"Schlichting, M. R., Notter, S., & Fichter, W."} title={"Long Short-Term Memory for Spatial Encoding in Multi-Agent Path Planning"} year={2022} venue={"Journal of Guidance, Control, and Dynamics"} link={"https://arc.aiaa.org/doi/abs/10.2514/1.G006129"} />

                {/* AIAA SciTech*/}
                <APACitation authors={"Schlichting, M. R., Notter, S., & Fichter, W."} title={"LSTM-Based Spatial Encoding: Explainable Path Planning For Time-Variant Multi-Agent Systems"} year={2021} venue={"AIAA SciTech Forum"} link={"https://arc.aiaa.org/doi/abs/10.2514/6.2021-1860"} />


              </div>

            </div>
          </div>

          <div style={{
            marginBottom: "-4rem",
          }}>
            © 2025 Marc Schlichting
          </div>
        </div>
      </div>
    </div >
  );

}

export default App;

