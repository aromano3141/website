export const data = {
  profile: {
    name: "Anthony Romano",
    title: "CS & Physics Student | AI/ML Researcher",
    location: "Rolla, MO",
    email: "aromano0429@gmail.com",
    github: "https://github.com/aromano3141",
    linkedin: "https://www.linkedin.com/in/anthony-d-r",
    bio: "I bridge the gap between theoretical physics and applied machine learning. Currently researching multimodal learning and NLP architectures at Missouri S&T (Class of 2027). Focused on building scalable, data-intensive systems."
  },
  experience: [
    {
      company: "Missouri University of Science and Technology",
      role: "AI/ML Researcher",
      period: "Sep 2025 -- Present",
      description: "Benchmarking deep learning models for multimodal tasks, fusing features from ViT (Vision Transformers) and CLIP. Accelerating training cycles by 40% using PyTorch Lightning."
    },
    {
      company: "National Science Foundation REU",
      role: "Machine Learning Intern",
      period: "May 2025 -- July 2025",
      description: "Engineered scalable NLP architectures using PyTorch and Hugging Face. Optimized emotion–cause detection methods with SBERT and FAISS, improving retrieval accuracy over baseline models."
    }
  ],
  projects: [
    {
      title: "Spotify Listening Companion",
      tech: ["Node.js", "PostgreSQL", "React", "OAuth", "Spotify API"],
      description: "A data-intensive application syncing user libraries to Postgres. Features a 'Smart Skip' re-ranking algorithm that dynamically adjusts playback queues based on real-time play/skip heuristics and local audio feature caching.",
      link: "https://github.com/aromano3141/Spotify-companion"
    },
    {
      title: "Allergy Atlas",
      tech: ["Python", "FastAPI", "React", "Docker", "scikit-learn"],
      description: "Full-stack allergen detection platform. Uses a custom ML pipeline (TF-IDF + Logistic Regression) to predict allergens from unstructured text with 90%+ precision. Containerized via Docker Compose.",
      link: "https://github.com/meganm2c/AllergyProject"
    }
  ],
  publications: [
    {
      title: "EmoCIE: Emotion–Cause Identification with Intensity Estimation",
      conference: "Proceedings of WISE 2025",
      authors: "Romano, A., Schmidt, J., Adesokan, A., Madria, S."
    },
    {
      title: "CRISIS: Classification of Response Intent via Social Media",
      conference: "NSF REU Symposium 2025",
      authors: "Schmidt, J., Romano, A., Adesokan, A., Madria, S."
    }
  ],
  skills: {
    "Languages": ["Python", "Java", "C/C++", "SQL", "JavaScript", "R"],
    "AI/ML": ["PyTorch", "TensorFlow", "Transformers", "scikit-learn", "Optuna"],
    "Web": ["React", "FastAPI", "Node.js", "PostgreSQL", "Docker"]
  }
};