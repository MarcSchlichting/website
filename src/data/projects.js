export const featuredProjects = [
    {
        title: "AI Copilot for Pilots",
        subtitle: "Flight tests with the USAF Test Pilot School",
        videoId: "bZhC35emqlY",
        description:
            "An LLM-based assistant that helps pilots handle in-flight emergencies. It combines a tool-calling agent, retrieval over aircraft documentation, and a speech interface tuned for cockpit noise. I led the project from initial concept to flight tests with the U.S. Air Force Test Pilot School in under one year. 24 test pilots evaluated the assistant in flight, and our redundant, fault-tolerant infrastructure logged more than 30 hours of incident-free flight testing.",
        linksLabel: "In the news",
        links: [
            { label: "Stanford Report", url: "https://news.stanford.edu/stories/2026/01/researchers-air-force-test-pilots-ai-copilots-safety" },
            { label: "FlightGlobal", url: "https://www.flightglobal.com/fixed-wing/us-air-force-partners-with-stanford-university-to-test-cockpit-ai/165977.article" },
            { label: "Aerotech News", url: "https://www.aerotechnews.com/blog/2026/02/25/stanford-researchers-and-air-force-partner-to-test-ai-copilots/" },
        ],
    },
    {
        title: "Aquila",
        subtitle: "Multi-model LLM serving for GPU clusters",
        image: "/aquila-screenshot.png",
        imageAlt: "Aquila dashboard showing model deployments and GPU nodes",
        description:
            "I am the primary developer of Aquila, the lab's platform for running many vLLM models across a shared GPU cluster (H100, A100, L40, GB10). An admin dashboard and client agents handle deployments, and an OpenAI-compatible gateway provides API-key auth, a GPU/RAM model warm cache, LoRA upload, metrics, and alerting. It deploys with Docker or Podman and is published on PyPI with CI.",
        links: [
            { label: "Code", url: "https://github.com/sisl/aquila" },
            { label: "Documentation", url: "https://sisl.github.io/aquila/" },
        ],
    },
];

export const projects = [
    {
        name: "DiFS",
        tagline: "Diffusion-based failure sampling",
        description:
            "Iteratively trains a conditional denoising diffusion model as the proposal distribution for failure trajectories of cyber-physical systems.",
        url: "https://github.com/sisl/DiFS",
    },
    {
        name: "ASTRA-RL",
        tagline: "Reinforcement learning toolbox for LLM red-teaming",
        description:
            "Adaptive stress testing for red-teaming LLMs with reinforcement learning. I contributed the LlamaGuard 3 and WildGuard safety scorers.",
        url: "https://github.com/sisl/astra-rl",
    },
    {
        name: "XPlaneConnectX",
        tagline: "Plugin-free X-Plane 12 interface in Julia and Python",
        description:
            "UDP interface that replaces NASA's XPlaneConnect without a plugin, using only each language's standard library. Includes flight-data recording.",
        url: "https://github.com/sisl/XPlaneConnectX",
    },
    {
        name: "moonlight-python",
        tagline: "Low-latency streaming client for the Stanford Flight Simulator Laboratory",
        description:
            "Developed in my role as technical lead of the Stanford Flight Simulator Laboratory. Returns decoded video frames as NumPy arrays for computer-vision and robotics pipelines, with synchronized audio capture, C bindings via CFFI, and prebuilt multi-platform wheels on PyPI.",
        url: "https://github.com/StanfordFSL/moonlight-python",
    },
    {
        name: "LeRAAT",
        tagline: "LLM-enabled real-time aviation advisory tool",
        description:
            "Combines live flight data and ECAM alerts with RAG over A320 documentation to give pilots real-time procedural advice in X-Plane.",
        url: "https://github.com/sisl/LeRAAT",
    },
];
