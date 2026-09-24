const skills = [
    {
        id: "ai-safety",
        name: "AI Safety",
        projects: [
            "Contributed to ASTRA-RL, a reinforcement learning toolbox for LLM red teaming",
            "Developed a diffusion model-based falsification method for safety validation",
            "Conducted research on meta-learning for adversarial scenario generation",
        ],
    },
    {
        id: "safety-critical",
        name: "AI in Safety-Critical Domains",
        projects: [
            "Designed AI tools for aviation emergency decision support using tool calling, RAG, and speech recognition",
            "Built real-time, on-edge LLM systems and custom RAG pipelines for safety-critical applications such as aviation emergencies",
            "Experienced with distributed and on-device compute infrastructure for high reliability",
        ],
    },
    {
        id: "interpretability",
        name: "Interpretability & Evals",
        projects: [
            "Contributed LlamaGuard 3 and WildGuard safety scorers to the ASTRA-RL red-teaming toolbox",
            "Co-authored research on token-level uncertainty signatures of committed and persistent LLM reasoning failures",
            "Contributed to mechanistic interpretability for learning assurance of a vision-based landing system",
        ],
    },
    {
        id: "aviation-assurance",
        name: "Aviation Assurance",
        projects: [
            "Protection levels for vision-based aircraft pose estimation (DASC 2026)",
            "Aircraft localization during taxiing using semantic segmentation (AIAA AVIATION 2026)",
            "Real-time flight test maneuver selection with Monte Carlo tree search (DASC 2026)",
        ],
    },
    {
        id: "human-ai",
        name: "Human-AI Interaction",
        projects: [
            "Conducted quantitative and qualitative assessments of pilot stress, workload, and performance during real flight tests",
            "Gained expertise in UI/UX design for safety-critical workflows and decision support tools",
        ],
    },
    {
        id: "llms",
        name: "LLMs",
        projects: [
            "Extensive experience with tool calling and agentic LLM systems",
            "Worked with open-source models (Llama, Qwen, GPT-OSS, DeepSeek) and API-based systems (OpenAI, Anthropic, Gemini)",
            "Deployed and optimized LLMs using vLLM and Ollama for latency-sensitive applications",
            "Familiar with reasoning models and optimization for edge inference",
        ],
    },
    {
        id: "rag",
        name: "RAG",
        projects: [
            "Hands-on experience with frameworks including Ragatouille, LightRAG, GraphRAG, and HippoRAG2",
            "Developed advanced chunking and re-ranking strategies for high-accuracy retrieval",
            "Built a scalable tool-retrieval framework enabling hundreds of tools for LLM use",
            "Worked extensively with embedding models and retrieval optimization",
        ],
    },
    {
        id: "ml",
        name: "ML/DL",
        projects: [
            "Strong foundation in statistics and ML theory, backed by multiple graduate-level CS courses",
            "Familiar with models for structured data, vision, and RL",
            "Undergraduate thesis on deep reinforcement learning for collision avoidance",
        ],
    },
    {
        id: "deployment",
        name: "Real-World Deployment",
        projects: [
            "Led development of an AI cockpit assistant from concept to flight tests within one year, a process that usually takes multiple years",
            "Built redundant, fault-tolerant infrastructure enabling 30+ hours of incident-free flight testing",
            "Experienced in deploying safety-critical, real-time AI systems",
        ],
    },
    {
        id: "infra",
        name: "Infrastructure/MLOps",
        projects: [
            "Primary developer of Aquila, the lab's platform for serving many vLLM models on a shared GPU cluster (OpenAI-compatible gateway, API-key auth, GPU/RAM warm cache, monitoring and alerting)",
            "Docker/Podman and Apptainer deployments on Linux HPC/GPU clusters (H100, A100, L40, GB10)",
            "Published Python packages on PyPI with CI",
        ],
    },
    {
        id: "simulation",
        name: "Simulation",
        projects: [
            "Strong background in numerical methods and custom simulation design",
            "Extensive experience with X-Plane, including XPlaneConnectX, a plugin-free X-Plane 12 interface in Julia and Python",
            "Familiar with MuJoCo, Applied Intuition, and CARLA for autonomous systems",
            "Experienced in building lightweight simulation frameworks in Python and Julia",
        ],
    },
    {
        id: "backend",
        name: "APIs/Backend",
        projects: [
            "Built a FastAPI-based backend for the AI pilot assistant to handle communication between frontend, speech recognition, and the LLM models",
            "Followed cybersecurity best practices for deployment (e.g., used JWT)",
            "Developed a cloud-based backend for real-time wearable data processing and analytics in a graduate class project",
        ],
    },
    {
        id: "speech",
        name: "Speech Recognition",
        projects: [
            "Built a wake-word, silence detection, and transcription pipeline optimized for cockpit noise, letting pilots talk to the assistant the way they would talk to Siri or Alexa",
            "Knowledgeable in ASR model architectures and signal theory",
            "Experience with data augmentation and fine-tuning using synthetic datasets",
        ],
    },
    {
        id: "python",
        name: "Python",
        projects: [
            "Primary language, used daily for 7+ years",
            "Deep experience with PyTorch, JAX, NumPy, SciPy, Pandas, FastAPI, Pydantic, and more",
        ],
    },
    {
        id: "react",
        name: "React/JS",
        projects: [
            "Built frontend UI for the AI pilot assistant with seamless backend integration",
            "AI pilot assistant UI features include a chat window, voice output, moving maps, and display of relevant PDF documents",
            "UI received highly positive feedback from pilots",
        ],
    },
    {
        id: "julia-matlab",
        name: "Julia/MATLAB",
        projects: [
            "Julia and Python bindings for XPlaneConnectX, a plugin-free X-Plane 12 interface",
            "Julia for research tooling and simulations at the Stanford Intelligent Systems Laboratory",
            "MATLAB/Simulink for signal processing and control system design",
        ],
    },
    {
        id: "cpp",
        name: "C/C++",
        projects: [
            "Used for RL policy deployment on drones for flight testing",
            "Developed custom X-Plane plugins",
        ],
    },
    {
        id: "pm",
        name: "Project Management",
        projects: [
            "Led multi-institution collaborations with USAF, Airbus, Nissan, and Allstate",
            "Mentored 13 undergraduate students, resulting in publications and successful internship and job applications",
            "Current project lead for a research team of 8 students, 1 postdoc, and external partners",
            "Proven record of on-time delivery and successful execution across complex technical projects",
        ],
    },
];

export default skills;
