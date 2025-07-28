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
            <h1 className="text-xl font-bold text-foreground">Alex Chen</h1>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">Experience</a>
              <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a>
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
              Building high-performing teams and scalable systems. 10+ years leading engineering organizations 
              and delivering innovative products.
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
                Passionate engineering leader with a proven track record of scaling teams from 5 to 50+ engineers. 
                I believe in empowering teams through clear vision, strong processes, and continuous learning.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                My experience spans full-stack development, DevOps, and product management, giving me a unique 
                perspective on building both technical solutions and high-performing teams.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="px-3 py-1">Team Leadership</Badge>
                <Badge variant="secondary" className="px-3 py-1">System Design</Badge>
                <Badge variant="secondary" className="px-3 py-1">Product Strategy</Badge>
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
                title: "Senior Engineering Manager",
                company: "TechCorp Inc.",
                period: "2021 - Present",
                location: "San Francisco, CA",
                achievements: [
                  "Led a team of 25+ engineers across 4 product squads",
                  "Reduced deployment time by 80% through CI/CD improvements",
                  "Implemented OKR framework, improving team alignment by 90%",
                  "Mentored 8 engineers to senior and lead positions"
                ]
              },
              {
                title: "Engineering Manager",
                company: "StartupCo",
                period: "2019 - 2021",
                location: "Remote",
                achievements: [
                  "Scaled engineering team from 5 to 15 members",
                  "Architected microservices platform handling 1M+ daily requests",
                  "Established code review and testing standards",
                  "Led migration from monolith to microservices architecture"
                ]
              },
              {
                title: "Senior Software Engineer",
                company: "Enterprise Solutions",
                period: "2016 - 2019",
                location: "Seattle, WA",
                achievements: [
                  "Tech lead for customer-facing platform serving 100K+ users",
                  "Reduced system downtime by 95% through monitoring improvements",
                  "Mentored junior developers and led technical interviews",
                  "Designed and implemented real-time analytics dashboard"
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
                <Badge variant="outline">Team Building</Badge>
                <Badge variant="outline">Performance Management</Badge>
                <Badge variant="outline">Strategic Planning</Badge>
                <Badge variant="outline">Conflict Resolution</Badge>
              </div>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow animate-fade-in">
              <Code className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold mb-4">Technical</h3>
              <div className="space-y-2">
                <Badge variant="outline">System Architecture</Badge>
                <Badge variant="outline">Cloud Platforms</Badge>
                <Badge variant="outline">DevOps & CI/CD</Badge>
                <Badge variant="outline">Microservices</Badge>
              </div>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow animate-fade-in">
              <Trophy className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold mb-4">Product</h3>
              <div className="space-y-2">
                <Badge variant="outline">Product Strategy</Badge>
                <Badge variant="outline">Agile/Scrum</Badge>
                <Badge variant="outline">Data-Driven Decisions</Badge>
                <Badge variant="outline">User Experience</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Platform Modernization",
                description: "Led complete platform migration to cloud-native architecture, resulting in 50% cost reduction and 99.9% uptime.",
                tech: ["Kubernetes", "AWS", "Microservices", "Terraform"]
              },
              {
                title: "Team Scaling Initiative",
                description: "Designed hiring and onboarding processes that enabled 300% team growth while maintaining code quality.",
                tech: ["Process Design", "Mentorship", "Training", "Documentation"]
              },
              {
                title: "Real-time Analytics Platform",
                description: "Architected data pipeline processing 10M+ events daily with sub-second latency for business insights.",
                tech: ["Apache Kafka", "Redis", "React", "PostgreSQL"]
              },
              {
                title: "Developer Experience Platform",
                description: "Built internal tooling that reduced deployment time from hours to minutes and improved developer productivity by 40%.",
                tech: ["CI/CD", "Docker", "Monitoring", "Automation"]
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Mail className="mr-2 h-4 w-4" />
              alex.chen@email.com
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
          <p>&copy; 2024 Alex Chen. Built with passion for engineering excellence.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;