
import { Project, Paper, Experience, Education } from './types';

export const PROJECTS: Project[] = [
  // Projects
  {
    id: 'worldsense',
    number: '01',
    title: 'WorldSense: Gamified General Knowledge App',
    description: 'A full-stack agentic platform that autonomously retrieves global news, curates insights, and generates interactive quizzes using LLM chains.',
    tech: ['LangChain', 'OpenAI', 'Next.js', 'Supabase'],
    category: 'application',
    imageUrl: '/images/worldsense-screenshot.png',
    githubUrl: '#' // Update with actual URL
  },
  {
    id: 'stranger-danger',
    number: '02',
    title: 'Identifying Children\'s "Stranger Danger" Behaviors',
    description: 'Automated fear/freeze behavior coding pipeline using Yolov8, MMPose, and multi-angle video synchronization, reducing manual coding latency by 78% and achieved 85% accuracy. Group project in BU Spark\'s course working with the BASE (Biobehavioral and Social-Emotional Development) Lab at BU. Selected from the course to present on Spark Day.',
    tech: ['Python', 'Yolov8', 'XGBoost', 'Computer Vision', 'Pose Estimation'],
    category: 'application',
    videoUrl: 'https://drive.google.com/file/d/1cIVXe28fOxS_PRbo71rVIJAAFQ1QF0p3/preview',
    githubUrl: '#'
  },
  {
    id: 'bubs-game',
    number: '03',
    title: 'Bubs: Multiplayer Bubble Popping Game',
    description: 'A multiplayer bubble-popping game using MediaPipe for hand and face tracking controls. Built to apply computer vision skills learned from the Stranger Danger project to a different, interactive gaming scenario.',
    tech: ['JavaScript', 'MediaPipe', 'PeerJS', 'WebRTC'],
    category: 'application',
    imageUrl: '/images/bubs.png',
    demoUrl: 'https://bubsgame.vercel.app/',
    githubUrl: 'https://github.com/medhasrivastavaa/bubblegame'
  },

  // Research Projects
  {
    id: 'compositional-corruption',
    number: '01',
    title: 'Compositional Corruption Robustness in Vision Models',
    description: 'Investigated how vision models perform when exposed to multiple simultaneous corruptions, revealing dramatic failures on novel corruption combinations. Proposed improved training strategies to enhance robustness for real-world deployment.',
    tech: ['Computer Vision', 'Deep Learning', 'Robustness Testing'],
    category: 'research',
    posterUrl: '/images/compositional-corruption-poster.png',
    githubUrl: 'https://github.com/medhasrivastavaa/CS523FinalProject/blob/main/CS523_Final_Paper.pdf'
  },
  {
    id: 'parafair',
    number: '02',
    title: 'ParaFair: Bias-Reduced Paraphrasing',
    description: 'A Seq2Seq Transformer model designed to mitigate bias and toxicity in natural language generation while maintaining high semantic integrity.',
    tech: ['PyTorch', 'Transformers', 'NLP', 'Research'],
    category: 'research',
    posterUrl: '/images/parafair-poster.png',
    githubUrl: 'https://github.com/medhasrivastavaa/Bias-Aware-Paraphrasing/blob/main/final.pdf'
  },
  {
    id: 'epi-model',
    number: '03',
    title: 'Predictive Epidemiology Research',
    description: 'A regression and propensity score analysis framework predicting infectious disease trends using Google Trends and search query data.',
    tech: ['R', 'Statistics', 'Predictive Analytics'],
    category: 'research',
    imageUrl: '/images/covidtrendspic.png',
    githubUrl: 'https://github.com/medhasrivastavaa/STA304Final/blob/main/Sta304finalpdfknitted.pdf'
  },
  {
    id: 'alzheimers-mri',
    number: '04',
    title: 'Alzheimer\'s Disease MRI Classification',
    description: 'Convolutional neural network model for automated classification of Alzheimer\'s disease stages using brain MRI scans. Group project from BU\'s Tools for Data Science course.',
    tech: ['Python', 'CNN', 'Deep Learning', 'Medical Imaging'],
    category: 'research',
    githubUrl: 'https://github.com/yhkwok326/CS506_final-'
  }
];

export const PAPERS: Paper[] = [
  {
    id: 'p1',
    title: 'Transformers in Bias Mitigation: A Comparative Study',
    year: '2024',
    venue: 'Under Review',
    abstract: 'Exploring the intersection of fairness and performance in Seq2Seq models for paraphrasing sensitive content.',
    link: '#'
  },
  {
    id: 'p2',
    title: 'Agentic Workflows for Real-time Data Curation',
    year: '2024',
    venue: 'Internal Publication - BITLab',
    abstract: 'An architectural breakdown of self-correcting agentic loops in news aggregation systems.',
    link: '#'
  },
  {
    id: 'p3',
    title: 'Automated Affective Computing in Pediatric Research',
    year: '2023',
    venue: 'Bio-Behavioral Research Symposium',
    abstract: 'Leveraging pose estimation to reduce manual coding latency by 85% in child psychology studies.',
    link: '#'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Boston University',
    roles: [
      {
        title: 'Data Scientist',
        period: 'September 2024 — Present',
        bullets: [
          'Built ParaFair tool using Seq2Seq Transformers to generate bias-reduced paraphrased text, reducing toxicity metric while maintaining quality (BLEU/ROUGE and sentiment shift metrics).',
          'Created WorldSense, a full-stack agentic AI application that autonomously retrieves live data, curates insights, and generates daily quizzes (using LangChain, OpenAI, Supabase, Next.js) enabling personalized news engagement.',
          'Developed an epidemiological predictive model using Google Trends query data with regression and propensity score analysis in R to predict COVID-19 case trends.',
          'Automated manual behavior coding for biobehavioral research lab by building a computer vision pipeline & web app that auto-codes children\'s fear/freeze behavior from multi-angle videos using Yolov8, MMPose, XGBoost.',
          'Supported research on AI regulations and mishaps through data collection & processing for BITLab.'
        ]
      },
      {
        title: 'Graduate Teaching Assistant',
        period: 'May 2025 — Present',
        bullets: [
          'Led lab sessions and mentored 80+ graduate students in Object-Oriented Software Design and Responsible AI, focusing on AI governance and software architecture.'
        ]
      }
    ]
  },
  {
    company: 'NuEnergy.ai',
    roles: [
      {
        title: 'Software Engineer',
        period: 'July 2021 — September 2024; May — June 2025',
        bullets: [
          'Developed and deployed ML pipelines for AI governance tools, processing large datasets including financial, public sector, and operational data via AWS S3–based Python ETL pipelines to enable faster model validation and client-ready visualizations.',
          'Created a cloud-based (AWS) software platform developing an AI risk scoring system for ethical AI, transparency, & fairness, serving 10+ clients including government agencies. Developed UI through several iterations with 4 testing departments leading to commercialization.',
          'Integrated 5+ Python AI governance tools (AIF360, InterpretML, etc.) including custom tools, enabling automated evaluation across 100% of pre-deployment models and improving audit efficiency by 60% for 5+ enterprise clients.',
          'Proposed and designed end-to-end Playwright test automation, reducing manual QA time per release by 90%+, enabling automated regression testing on every deployment, saving 20+ hours monthly across teams.',
          'Tech Stack: Python, React, Typescript/JavaScript, CSS, HTML, Django, & MySQL.'
        ]
      },
      {
        title: 'Operations Analyst',
        period: 'June 2021 — September 2021',
        bullets: [
          'Established company-wide project tracking using Jira, Bitbucket integration, and Gantt charts to streamline planning and execution.'
        ]
      }
    ]
  },
  {
    company: 'High Peak Software',
    roles: [
      {
        title: 'Data Science Intern',
        period: 'March 2021 — June 2021',
        bullets: [
          'Built NLP-based Q&A and document classification system for legal contracts (BERT, Python).'
        ]
      }
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: 'Boston University',
    degree: 'Masters in Computer Science (specialisation in Data-Centric Computing)',
    period: '2024 — 2025',
    details: [
      'Relevant Coursework: Machine Learning, Deep Learning, NLP, Tools for Data Science, Graduate Algorithms, Computer Networks'
    ]
  },
  {
    institution: 'University of Toronto',
    degree: 'Honours Bachelor of Science',
    period: '2017 — 2021',
    details: [
      'Majors: Statistics, Cell & Molecular Biology (Double major)'
    ]
  },
  {
    institution: 'International School Manila',
    degree: 'International Baccalaureate Diploma Programme',
    period: '2017'
  }
];
