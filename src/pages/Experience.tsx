
import { Card, CardContent } from "@/components/ui/card";
import { ExperienceType } from "@/types";

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

export default function Experience() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section>
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
    </div>
  );
}
