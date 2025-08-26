"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Filter } from "lucide-react"
import Image from "next/image"

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with advanced features like real-time inventory, payment integration, and admin dashboard.",
      image: "/modern-ecommerce-interface.png",
      category: "web",
      technologies: ["React.js", "Node.js", "MongoDB", "Stripe", "Socket.io"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      title: "AI-Powered Chatbot",
      description:
        "Intelligent chatbot using NLP and machine learning for customer service automation with sentiment analysis.",
      image: "/ai-chatbot-interface.png",
      category: "ml",
      technologies: ["Python", "TensorFlow", "Flask", "NLP", "React.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      title: "Task Management System",
      description:
        "Collaborative project management tool with real-time updates, team collaboration, and advanced analytics.",
      image: "/project-management-dashboard.png",
      category: "web",
      technologies: ["Vue.js", "Laravel", "MySQL", "WebSocket", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
    },
    {
      title: "Edge Computing Framework",
      description:
        "Research project on optimizing ML model deployment on edge devices with reduced latency and improved performance.",
      image: "/edge-computing-network.png",
      category: "ml",
      technologies: ["Python", "PyTorch", "Docker", "Kubernetes", "IoT"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      title: "Hospital Management System",
      description:
        "Comprehensive healthcare management system with patient records, appointment scheduling, and billing.",
      image: "/placeholder-iw3oz.png",
      category: "java",
      technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "Bootstrap"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
    },
    {
      title: "Social Media Analytics",
      description:
        "Data analysis tool for social media metrics with sentiment analysis and trend prediction capabilities.",
      image: "/social-media-analytics-dashboard.png",
      category: "ml",
      technologies: ["Python", "Pandas", "Scikit-learn", "Django", "D3.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
    },
  ]

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "ml", label: "Machine Learning" },
    { id: "java", label: "Java/PHP Projects" },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-foreground dark:text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my best work in web development, machine learning, and software engineering
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0"
                  : "border-border text-foreground hover:border-primary hover:text-primary"
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              <Filter className="mr-2 h-4 w-4" />
              {filter.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={project.featured ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <Card className="bg-transparent dark:bg-card/50 border-border backdrop-blur-sm hover:border-primary/50 transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">
                      Featured
                    </Badge>
                  )}
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                  <p className="text-foreground dark:text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-transparent dark:bg-secondary border border-border text-foreground dark:text-secondary-foreground text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 flex-1"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-border text-foreground hover:border-primary hover:text-primary bg-transparent"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
