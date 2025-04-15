
import { 
  ExperienceType, 
  ProjectType, 
  EducationType, 
  CertificationType, 
  SkillCategory 
} from "./index";

export const experiences: ExperienceType[] = [
  {
    position: "Machine Learning Intern",
    company: "Unified Mentor",
    duration: "Sept. 24 - Oct '24",
    description: [
      "Designed a machine learning model to predict heart disease risk using patient data, improving early diagnosis.",
      "Utilised random forest classifier, feature engineering, and hyperparameter tuning to optimise model performance.",
      "Gained 93.27% accuracy on a validation dataset."
    ]
  },
  {
    position: "POSp",
    company: "InsuranceDekho",
    duration: "Apr '24 - Oct '24",
    description: [
      "Analysed customer trends in general insurance products, identifying patterns and key areas for sales focus.",
      "Collaborated with marketing to implement insights, enhancing client engagement."
    ]
  }
];

export const projects: ProjectType[] = [
  {
    title: "OncoVision",
    description: "A CNN model for detecting brain tumours from MRI images",
    timeline: "Oct '24 — Oct '24",
    skills: ["CNN", "TensorFlow", "Medical Imaging"],
    achievements: [
      "Designed a CNN model for detecting brain tumours from MRI images, achieving 82% accuracy.",
      "Applied the Tanh activation function with 3 hidden layers to improve model efficiency.",
      "Employed BCELoss for binary classification to ensure accurate tumour identification."
    ]
  },
  {
    title: "PulsePredict",
    description: "A predictive model for heart disease risk assessment",
    timeline: "Sep '24 — Oct '24",
    skills: ["Random Forest", "scikit-learn", "Feature Engineering"],
    achievements: [
      "Engineered a sophisticated model to effectively predict heart disease risk using comprehensive patient data.",
      "Utilized the Random Forest Classifier, along with feature engineering and hyperparameter tuning, to optimize the model's performance.",
      "Achieved an impressive accuracy of 93.27% on the validation dataset through meticulous testing and validation."
    ]
  },
  {
    title: "HealthDekho",
    description: "Health insurance cost estimation model",
    timeline: "Kolkata, India",
    skills: ["Linear Regression", "Data Analysis", "Insurance"],
    achievements: [
      "Build a comprehensive predictive model aimed at accurately estimating health insurance costs through the use of linear regression techniques.",
      "Successfully achieved an impressive accuracy of 92.15% in estimating insurance premiums, demonstrating the effectiveness of the model."
    ]
  }
];

export const education: EducationType[] = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Academy of Technology",
    location: "Adisaptagram, West Bengal, India",
    duration: "Aug 2021 - Jun 2025",
    gpa: "8.65",
    description: "Final-year Computer Science and Engineering student, have received three government scholarships for academic excellence and am actively involved in projects and extracurricular activities."
  },
  {
    degree: "Higher Secondary in General Science",
    institution: "Mahesh Sri Ramkrishna Ashram",
    location: "Rishra, West Bengal, India",
    duration: "May 2019 - Jun 2021",
    percentage: "89.4%",
    description: "Completed higher secondary education with a focus on physics, chemistry, mathematics, and computer science, earning two scholarships for academic excellence."
  }
];

export const certifications: CertificationType[] = [
  {
    title: "Machine Learning with Python",
    issuer: "IBM",
    date: "Oct 2024"
  },
  {
    title: "Wipro TalentNext Full Stack Java Certification",
    issuer: "Wipro",
    date: "Oct 2024"
  },
  {
    title: "AWS APAC Solutions Architecture",
    issuer: "Forage",
    date: "Oct 2024"
  },
  {
    title: "Data Visualisation: Empowering Business with Effective Insights",
    issuer: "Forage",
    date: "Aug 2024"
  }
];

export const skills: SkillCategory[] = [
  {
    category: "Programming and Scripting",
    skills: ["Python", "Java", "Bash"]
  },
  {
    category: "Web Technologies",
    skills: ["React.js", "Material-UI", "Java (Spring Boot)", "Node.js (Express.js)"]
  },
  {
    category: "Security",
    skills: ["JWT", "Spring Security"]
  },
  {
    category: "Version Control",
    skills: ["Git", "GitHub"]
  },
  {
    category: "Databases",
    skills: ["SQL Server", "MongoDB"]
  },
  {
    category: "Productivity Tools",
    skills: ["MS Office", "JIRA"]
  }
];

export const personalInfo = {
  name: "Priyanath Bhukta",
  title: "Computer Science Engineer",
  email: "priyanathbhukta@gmail.com",
  phone: "+91 916-362-0567",
  location: "Singur, West Bengal, India, 712409",
  dob: "7th Dec 2002",
  age: "23",
  maritalStatus: "Single",
  fathersName: "Jayanta Bhukta",
  links: {
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  }
};
