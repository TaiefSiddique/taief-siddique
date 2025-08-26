"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      title: "Interactive Media Developer @Bikroy",
      company: "Bikroy",
      location: "Dhaka, Bangladesh",
      period: "2023 - Present",
      type: "Full-time",
      description:
        "Developing interactive media solutions and full-stack web applications using MERN stack. Leading frontend development initiatives and implementing modern UI/UX designs.",
      achievements: [
        "Improved application performance by 40% through code optimization",
        "Led development of 3 major product features",
        "Mentored 2 junior developers",
        "Implemented responsive design systems",
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "TypeScript"],
      logo: "🏢",
    },
    {
      title: "Full-Stack Developer",
      company: "Freelance",
      location: "Remote",
      period: "2021 - 2023",
      type: "Freelance",
      description:
        "Worked with various clients to develop custom web applications, e-commerce platforms, and business management systems.",
      achievements: [
        "Completed 15+ successful projects",
        "Maintained 98% client satisfaction rate",
        "Developed scalable solutions for SMEs",
        "Specialized in MERN stack development",
      ],
      technologies: ["React.js", "Vue.js", "PHP", "Laravel", "MySQL"],
      logo: "💼",
    },
    {
      title: "Research Assistant",
      company: "Green University of Bangladesh",
      location: "Dhaka, Bangladesh",
      period: "2022 - 2023",
      type: "Part-time",
      description:
        "Conducted research in edge computing and AI/ML applications. Assisted in academic projects and published research papers.",
      achievements: [
        "Co-authored 3 research papers",
        "Won Best Paper Award at ICCIT 2023",
        "Presented research at international conferences",
        "Developed ML models for edge devices",
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "Edge Computing"],
      logo: "🎓",
    },
    {
      title: "Software Development Intern",
      company: "Tech Solutions Ltd.",
      location: "Dhaka, Bangladesh",
      period: "2021 - 2022",
      type: "Internship",
      description:
        "Gained hands-on experience in software development lifecycle, worked on client projects, and learned industry best practices.",
      achievements: [
        "Contributed to 5 client projects",
        "Learned agile development methodologies",
        "Improved coding skills and best practices",
        "Received excellent performance review",
      ],
      technologies: ["Java", "Spring Boot", "MySQL", "Git"],
      logo: "🚀",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Work{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-foreground dark:text-slate-400 text-lg max-w-2xl mx-auto">
            My professional journey and key contributions in the tech industry
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-background z-10"></div>

              {/* Content Card */}
              <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                <Card className="bg-transparent dark:bg-slate-800/50 border-border dark:border-slate-700 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-3xl">{exp.logo}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-blue-400 mb-2">
                          <Building className="h-4 w-4" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-foreground dark:text-slate-400 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                          <Badge variant="outline" className="border-blue-500 text-blue-400">
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <p className="text-foreground dark:text-slate-300 mb-4 leading-relaxed">{exp.description}</p>

                    <div className="mb-4">
                      <h4 className="text-foreground font-semibold mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-foreground dark:text-slate-300 text-sm flex items-start gap-2">
                            <span className="text-blue-400 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-foreground font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="bg-transparent dark:bg-slate-700 border border-border text-foreground dark:text-slate-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
