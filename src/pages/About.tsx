
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SkillCategory, EducationType } from "@/types";

const skills: SkillCategory[] = [
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

const education: EducationType[] = [
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

const certifications = [
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

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-portfolio-accent">About Me</h1>
            <p className="text-lg text-portfolio-text mb-6">
              Aspiring computer science engineer with a strong foundation in Java full-stack development, 
              Node.js backend, and machine learning. Proficient in designing scalable applications, API 
              development, and database management, with hands-on experience in Spring Boot, Express.js, 
              and cloud deployment.
            </p>
            <p className="text-lg text-portfolio-text">
              A scholar mindset with a commitment to continuous learning, earning certifications to validate 
              technical expertise. Seeking to leverage problem-solving skills and technical knowledge for 
              impactful contributions.
            </p>
          </div>
          <div>
            <Card className="bg-portfolio-darker border-portfolio-accent/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-4">Personal Details</h3>
                <div className="space-y-2 text-portfolio-muted">
                  <p><span className="text-portfolio-text font-medium">Date of Birth:</span> 7th Dec 2002</p>
                  <p><span className="text-portfolio-text font-medium">Age:</span> 23</p>
                  <p><span className="text-portfolio-text font-medium">Marital Status:</span> Single</p>
                  <p><span className="text-portfolio-text font-medium">Location:</span> Singur, West Bengal, India, 712409</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-12 bg-portfolio-accent/20" />

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 inline-block relative">
          <span className="text-portfolio-accent">Skills</span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-portfolio-accent/30"></span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <Card key={index} className="bg-portfolio-darker border-portfolio-accent/20">
              <CardContent className="p-6">
                <h3 className="font-medium text-lg mb-4 text-portfolio-accent">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} className="bg-portfolio-code text-portfolio-text hover:bg-portfolio-accent/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-12 bg-portfolio-accent/20" />

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 inline-block relative">
          <span className="text-portfolio-accent">Education</span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-portfolio-accent/30"></span>
        </h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="bg-portfolio-darker border-portfolio-accent/20">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="font-semibold text-xl text-portfolio-accent">{edu.degree}</h3>
                  <span className="text-sm text-portfolio-muted mt-2 md:mt-0">{edu.duration}</span>
                </div>
                <p className="text-portfolio-text">{edu.institution}</p>
                <p className="text-portfolio-muted mb-4">{edu.location}</p>
                {edu.gpa && <p className="text-sm mb-2"><span className="text-portfolio-text font-medium">GPA:</span> {edu.gpa}</p>}
                {edu.percentage && <p className="text-sm mb-2"><span className="text-portfolio-text font-medium">Percentage:</span> {edu.percentage}</p>}
                <p className="text-sm text-portfolio-muted">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-12 bg-portfolio-accent/20" />

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 inline-block relative">
          <span className="text-portfolio-accent">Certifications</span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-portfolio-accent/30"></span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-portfolio-darker border-portfolio-accent/20 hover:shadow-md hover:shadow-portfolio-accent/10 transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-medium text-lg mb-2 text-portfolio-accent">{cert.title}</h3>
                <div className="flex justify-between text-sm">
                  <span className="text-portfolio-text">{cert.issuer}</span>
                  <span className="text-portfolio-muted">{cert.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
