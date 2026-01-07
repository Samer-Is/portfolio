// Resume Content Model
// All portfolio content lives in this single file

export interface Experience {
  company: string;
  title: string;
  dates: string;
  bullets: string[];
}

export interface Project {
  title: string;
  bullets: string[];
  tech: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  dates: string;
}

export interface Certification {
  name: string;
}

export interface ResumeData {
  name: string;
  location: string;
  email: string;
  phone: string;
  headline: string;
  summary: string;
  links: {
    linkedin: string;
    github: string;
    calendly: string;
  };
  coreStrengths: string[];
  experience: Experience[];
  projects: Project[];
  skillGroups: SkillGroup[];
  education: Education[];
  certifications: Certification[];
  collaborationIntro: string;
  collaborationBullets: string[];
}

export const resumeData: ResumeData = {
  name: "Samer H. Ismail",
  location: "Amman, Jordan",
  email: "samer.hisham@outlook.com",
  phone: "+962 77 680 1524",
  headline: "AI and Data Lead focused on AI strategy, delivery, adoption, and responsible implementation.",
  summary: `AI and Data Lead with hands-on experience shaping AI programs, validating readiness, shipping solutions, and building adoption across organizations. Skilled in Python, machine learning, and generative AI with practical exposure to cloud AI services and LLM tooling. Focused on privacy-aligned delivery that meets business goals while maintaining trust and compliance. Combines strategic thinking with technical depth to drive measurable outcomes.`,
  links: {
    linkedin: "https://www.linkedin.com/in/samerismail",
    github: "https://github.com/Samer-Is",
    calendly: "https://calendly.com/gsu-units/30min",
  },
  coreStrengths: [
    "AI program planning and prioritization",
    "Data and platform foundation planning",
    "Solution discovery, build, and rollout",
    "Privacy, security, and risk alignment for AI work",
    "Stakeholder engagement and enablement",
    "Vendor and consultant coordination",
    "Predictive modeling, statistical analysis, and experimentation",
    "Generative AI solutions for knowledge and analytics workflows",
  ],
  experience: [
    {
      company: "QOAD",
      title: "Data and AI Lead",
      dates: "Nov 2025 – Present",
      bullets: [
        "Build and lead the AI function, defining priorities and setting direction for data and AI initiatives.",
        "Enable adoption by aligning AI capabilities with business needs and identifying high-impact opportunities.",
        "Assess data readiness and platform requirements to ensure successful solution delivery.",
        "Deliver solutions using cloud AI services and LLM tooling, focusing on practical outcomes and user value.",
        "Align privacy and security requirements before rollout, ensuring compliance with internal and regulatory standards.",
        "Run enablement sessions to help teams understand and adopt AI tools effectively.",
        "Coordinate with external partners and vendors to support delivery and expand capabilities.",
      ],
    },
    {
      company: "Orange Telecom",
      title: "Data Science and AI Expert",
      dates: "Jul 2016 – Oct 2025",
      bullets: [
        "Built and launched an analytics assistant that reduced analysis preparation from days to minutes and helped retire executive dashboards and external BI licenses.",
        "Delivered predictive models and segmentation including churn prediction, NPS prediction, and next best offer for precision campaigns and loyalty programs.",
        "Built an AI-driven recruitment English assessment that generates questions and scores applicants automatically.",
        "Developed transformer-based summarization for over 10,000 legal contracts, reducing review time from weeks to hours.",
        "Ran task-specific tuning experiments and evaluated quality and safety before rollout.",
        "Owned delivery lifecycle including planning, backlog management, budgeting, vendor negotiation, UAT, rollout, and value tracking.",
        "Coached junior data scientists and supported teams through user training and documentation.",
        "Created GenAI guardrails aligned with GDPR and Jordan data protection requirements.",
      ],
    },
    {
      company: "Caranx Medical",
      title: "Computer Vision and AI Intern – R&D",
      dates: "Sep 2021 – Jan 2022",
      bullets: [
        "Contributed to surgical robot situational awareness using computer vision techniques.",
        "Built an ultrasound dataset from scratch for training and validation.",
        "Exceeded internal benchmark within five months of joining the team.",
      ],
    },
    {
      company: "The Coca-Cola Company",
      title: "Sales Analyst",
      dates: "Mar 2015 – Jun 2016",
      bullets: [
        "Performed sales analysis to identify trends and support decision-making.",
        "Resolved discrepancies in sales data and reporting.",
        "Supported forecasting and profitability analysis for regional operations.",
      ],
    },
    {
      company: "Novartis Pharmaceuticals Company",
      title: "Sales Force Effectiveness Associate",
      dates: "Aug 2014 – Mar 2015",
      bullets: [
        "Analyzed sales force activity to improve performance and coverage.",
        "Defined KPI standards and tracking mechanisms.",
        "Created dashboards for leadership visibility and decision support.",
      ],
    },
  ],
  projects: [
    {
      title: "AI analytics and prediction copilot",
      bullets: [
        "Enables business users to ask questions over structured tables and receive insights, charts, and recommendations.",
        "Supports workflows such as segmentation, trend detection, anomaly explanations, and basic forecasting.",
        "Uses strict column definitions and produces reproducible analysis steps for consistency.",
      ],
      tech: "Python, Streamlit, LLM APIs, RAG patterns, evaluation harness",
    },
    {
      title: "Customer service agent for Instagram online shops",
      bullets: [
        "Handles product questions, availability checks, and order flow in a consistent tone.",
        "Routes edge cases to a human and captures structured order details for follow-up.",
        "Designed to reduce response time and improve consistency across conversations.",
      ],
      tech: "LLM workflows, intent routing, structured outputs, automation workflows",
    },
    {
      title: "Video intelligence for event detection and summarization",
      bullets: [
        "Enables natural language search over CCTV footage to locate incidents, objects, or time windows of interest.",
        "Generates short, review-friendly summaries to speed up triage and reporting while keeping humans in control.",
        "Designed with privacy-by-design practices including retention limits and access controls for sensitive footage.",
      ],
      tech: "Multimodal inference, local deployment options, event-driven automation, privacy controls",
    },
    {
      title: "Document intelligence for summarization and extraction",
      bullets: [
        "Summarizes long documents into executive-ready briefs with key risks, obligations, and actions.",
        "Extracts structured fields into JSON for downstream workflows and search with privacy-aware handling.",
        "Improves review speed and consistency for Legal, Compliance, and Operations.",
      ],
      tech: "Python, NLP, LLM pipelines, retrieval patterns, redaction rules",
    },
    {
      title: "AI adoption enablement toolkit",
      bullets: [
        "Prompting guide with examples by role and task type, including quality checks and common failure modes.",
        "Training plan and workshop materials to help teams adopt AI with confidence.",
        "Light governance templates for safe use, including review steps and usage standards.",
      ],
      tech: "Playbooks, templates, enablement materials",
    },
    {
      title: "Reachy Mini robot with local LLM integration",
      bullets: [
        "Prototype that connects a local LLM to the robot control layer for interactive conversations.",
        "Maintains a simple internal state to coordinate speech and movements during interactions.",
        "Focuses on safe and predictable behavior when operating in physical environments.",
      ],
      tech: "Local LLM deployment, robotics APIs, event-driven automation, safety constraints",
    },
  ],
  skillGroups: [
    {
      category: "Strategy and Delivery",
      skills: [
        "AI strategy",
        "Program management",
        "Stakeholder alignment",
        "Vendor negotiation",
        "Budgeting",
        "Value tracking",
        "Automation workflows",
      ],
    },
    {
      category: "Generative AI and NLP",
      skills: [
        "LLM application design",
        "Prompt engineering",
        "Guardrails",
        "Retrieval patterns",
        "RAG",
        "Text summarization",
        "Document intelligence",
        "Fine-tuning LLMs",
        "Local LLM deployment and production",
      ],
    },
    {
      category: "Machine Learning and Analytics",
      skills: [
        "Python",
        "Predictive modeling",
        "Segmentation",
        "Evaluation",
        "Monitoring",
        "Computer vision",
      ],
    },
    {
      category: "Cloud and Platforms",
      skills: [
        "SQL",
        "AWS",
        "Azure",
        "GCP",
        "Power BI",
        "Oracle",
        "SAS",
        "Neo4j",
      ],
    },
  ],
  education: [
    {
      degree: "MSc Data Science and Artificial Intelligence",
      institution: "Data Science Tech Institute",
      location: "Nice, France",
      dates: "2020 – 2021",
    },
    {
      degree: "Bachelor of Economics",
      institution: "An-Najah National University",
      location: "Nablus, Palestine",
      dates: "2009 – 2013",
    },
  ],
  certifications: [
    { name: "AWS Certified Solutions Architect" },
    { name: "Neo4j Certified Professional" },
    { name: "Predictive Modeling and Segmentation Diploma" },
    { name: "Data Mining and Advanced Analytics Diploma" },
    { name: "Analyzing and Visualizing Data with Microsoft Power BI" },
    { name: "Advanced Microsoft Excel" },
  ],
  collaborationIntro:
    "I am open to collaboration on projects that align with my expertise in AI strategy, adoption, and responsible delivery. Whether you need strategic guidance, hands-on implementation, or team enablement, I welcome the conversation.",
  collaborationBullets: [
    "AI strategy and adoption planning",
    "GenAI copilots for analytics and knowledge workflows",
    "Responsible AI governance and delivery standards",
    "Predictive analytics and decision support",
    "Workshops and enablement for non-technical teams",
    "Short advisory engagements and solution reviews",
    "Partnership discussions for AI products",
  ],
};
