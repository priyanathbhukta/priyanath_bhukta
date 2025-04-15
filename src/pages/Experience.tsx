
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ExperienceType, ProjectType } from "@/types";

const experiences: ExperienceType[] = [
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

const projects: ProjectType[] = [
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

export default function Experience() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-portfolio-accent">Professional Experience</h1>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-portfolio-darker border-portfolio-accent/20">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="font-semibold text-xl text-portfolio-accent">{exp.position}</h3>
                  <span className="text-sm text-portfolio-muted mt-2 md:mt-0">{exp.duration}</span>
                </div>
                <p className="text-portfolio-text mb-4">{exp.company}</p>
                <ul className="list-disc pl-5 space-y-2 text-portfolio-muted">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-12 bg-portfolio-accent/20" />

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-10 inline-block relative">
          <span className="text-portfolio-accent">Projects</span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-portfolio-accent/30"></span>
        </h2>
        
        <div className="space-y-10">
          {projects.map((project, index) => (
            <Card key={index} className="bg-portfolio-darker border-portfolio-accent/20">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="font-semibold text-xl text-portfolio-accent">{project.title}</h3>
                  <span className="text-sm text-portfolio-muted mt-2 md:mt-0">{project.timeline}</span>
                </div>
                <p className="text-portfolio-text mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs rounded-full bg-portfolio-accent/10 text-portfolio-accent">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="mt-4">
                  <h4 className="text-sm font-medium mb-2 text-portfolio-text">Achievements:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-portfolio-muted">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
