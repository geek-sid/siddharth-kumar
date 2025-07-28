import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MapPin, Calendar, Users, Code, Trophy } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-foreground">Siddharth</h1>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">Experience</a>
              <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Achievements</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-6">
              Engineering Manager
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Building high-performing teams and scalable systems. 12+ years of extensive experience in product development 
              and leading engineering organizations across multiple phases of the SDLC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg">
                <Github className="mr-2 h-4 w-4" />
                View Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-2xl flex items-center justify-center">
                <Users size={120} className="text-primary" />
              </div>
            </div>
            <div className="animate-fade-in">
              <p className="text-lg text-muted-foreground mb-6">
                Engineering Manager with over 12+ years of extensive experience in product development. 
                Acknowledged for conducting coordination between multiple teams and working in all phases 
                of Software Development from Requirements gathering to Acceptance Testing.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Excellent Communication Skills with good experience in solving mission-critical issues, 
                root cause analysis and accountability. "CAN DO" attitude and eager to remain updated 
                with market trends and learn new things.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="px-3 py-1">Team Leadership</Badge>
                <Badge variant="secondary" className="px-3 py-1">Product Development</Badge>
                <Badge variant="secondary" className="px-3 py-1">Full-Stack Development</Badge>
                <Badge variant="secondary" className="px-3 py-1">Agile Methodologies</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Professional Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                title: "Engineering Manager",
                company: "ALQIMI",
                period: "July 2025 - Present",
                location: "Delhi, India",
                achievements: [
                  "Led end-to-end technical strategy and architecture for scalable full-stack applications",
                  "Managed and mentored a cross-functional team of frontend and backend engineers",
                  "Oversaw agile delivery processes and sprint planning for high-quality product releases",
                  "Drove continuous improvement through performance metrics and adoption of best practices."
                ]
              },
              {
                title: "Senior Technical Lead Frontend",
                company: "ALQIMI",
                period: "Sept 2021 - June 2025",
                location: "Delhi, India",
                achievements: [
                  "Managed upgrade of existing AOSEN Product to latest tech stack and multiple client projects",
                  "Responsible for development & release of iOS and Android Mobile applications",
                  "Involved in all phases of agile, including requirements analysis, architecture design, and deployment",
                  "Led development teams through complete SDLC from requirements to ongoing support."
                ]
              },
              {
                title: "Technical Lead Frontend",
                company: "ALQIMI",
                period: "Sept 2019 - Aug 2021",
                location: "Delhi, India",
                achievements: [
                  "Feature development for both frontend in Angular framework & backend in Spring boot microservices",
                  "Responsible for post-release development of existing AOSEN products",
                  "Led code review processes, task allocations and delivery of requirements on time",
                  "Established development standards and best practices for the team"
                ]
              },
              {
                title: "Team Lead",
                company: "Newgen Software",
                period: "July 2017 - Aug 2019",
                location: "Delhi, India",
                achievements: [
                  "Provided technical assistance for development and deployment of large-scale sites",
                  "Trained new interns about system and software languages used in the organization",
                  "Coordinated with clients regarding requirements and delivered Sprint demos to stakeholders",
                  "Responsible for Sprint Task Planning, allocation and time estimation"
                ]
              },
              {
                title: "Senior Software Developer",
                company: "Newgen Software",
                period: "July 2015 - June 2017",
                location: "Delhi, India",
                achievements: [
                  "Advocated web interaction design best practices with focus on consistency and usability",
                  "Built reusable code and libraries for future use and ensured all user inputs were validated",
                  "Worked closely with backend developers to optimize web technology for best user experience",
                  "Created clean, precise browser compatible code and collaborated with UI/UX teams"
                ]
              },
              {
                title: "Software Developer",
                company: "Newgen Software",
                period: "July 2013 - June 2015",
                location: "Delhi, India",
                achievements: [
                  "Researched and developed applications on Xerox/HP MFP devices using HTML/CSS/JavaScript and SOAP",
                  "Participated in designing, development and testing of projects",
                  "Responsible for post-release development of Omni Scan Web Product",
                  "Gained expertise in full-stack development and enterprise application development"
                ]
              }
            ].map((job, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow animate-fade-in">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{job.title}</h3>
                    <p className="text-lg text-primary font-semibold">{job.company}</p>
                  </div>
                  <div className="text-right text-muted-foreground">
                    <div className="flex items-center justify-end md:justify-start">
                      <Calendar className="mr-2 h-4 w-4" />
                      {job.period}
                    </div>
                    <div className="flex items-center justify-end md:justify-start">
                      <MapPin className="mr-2 h-4 w-4" />
                      {job.location}
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <Trophy className="mr-3 h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow animate-fade-in">
              <Users className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold mb-4">Leadership</h3>
              <div className="space-y-2">
                <Badge variant="outline">Team Management</Badge>
                <Badge variant="outline">Technical Mentoring</Badge>
                <Badge variant="outline">Sprint Planning</Badge>
                <Badge variant="outline">Client Coordination</Badge>
              </div>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow animate-fade-in">
              <Code className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold mb-4">Technical Stack</h3>
              <div className="space-y-2">
                <Badge variant="outline">Java/Spring Boot</Badge>
                <Badge variant="outline">Angular/JavaScript</Badge>
                <Badge variant="outline">Microservices</Badge>
                <Badge variant="outline">Kubernetes/Docker</Badge>
                <Badge variant="outline">Jenkins/CI-CD</Badge>
                <Badge variant="outline">SonarQube</Badge>
              </div>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow animate-fade-in">
              <Trophy className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold mb-4">Expertise</h3>
              <div className="space-y-2">
                <Badge variant="outline">Mobile Development</Badge>
                <Badge variant="outline">RESTful Services</Badge>
                <Badge variant="outline">System Architecture</Badge>
                <Badge variant="outline">GraphQL/APIs</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Achievements & Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Education & Certifications",
                description: "B.TECH in Computer Science from ITM University, Gurugram (77%). Online Certificate in Project Management from IIT Delhi.",
                tech: ["Computer Science", "Project Management", "IIT Delhi", "Academic Excellence"]
              },
              {
                title: "Professional Achievements",
                description: "Successfully qualified GATE 2013. Awarded Google-Udacity Web Development Scholarship and C.B.S.E Central Sector scholarship.",
                tech: ["GATE 2013", "Google Scholarship", "Academic Awards", "Merit Recognition"]
              },
              {
                title: "Product Modernization",
                description: "Led upgrade of existing AOSEN Product to latest tech stack. Doubled overall frontend team throughput through process improvements.",
                tech: ["Angular", "Spring Boot", "Team Leadership", "Performance"]
              },
              {
                title: "Mobile Development Leadership",
                description: "Responsible for development & release of iOS and Android mobile applications. Introduced unit testing and SonarQube for code quality.",
                tech: ["iOS Development", "Android Development", "Code Quality", "SonarQube"]
              },
              {
                title: "Technical Excellence",
                description: "Established best practices for development, infrastructure & deployment. Led all 3rd party integrations and microservices architecture.",
                tech: ["DevOps", "Microservices", "Best Practices", "Integration"]
              },
              {
                title: "Team Leadership Impact",
                description: "Created technical requirement documents and LOE for different projects. Trained new interns and coordinated with multiple client teams.",
                tech: ["Technical Documentation", "Training", "Client Management", "Leadership"]
              }
            ].map((project, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow animate-fade-in">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always interested in discussing engineering leadership, team building, and innovative technology solutions.
          </p>
          <div className="mb-6 text-muted-foreground">
            <p className="text-lg"><MapPin className="inline mr-2 h-4 w-4" />Janakpuri, Delhi, India-110058</p>
            <p className="text-lg">+91-7503745183</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Mail className="mr-2 h-4 w-4" />
              Siddharth.smk@gmail.com
            </Button>
            <Button variant="outline" size="lg">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Siddharth. Built with passion for engineering excellence.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
