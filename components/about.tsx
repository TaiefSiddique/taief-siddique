"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Award, BookOpen, Code } from "lucide-react"

const About = () => {
  const stats = [
    { icon: Award, label: "CGPA", value: "3.92/4.00" },
    { icon: Code, label: "Projects", value: "25+" },
    { icon: BookOpen, label: "Publications", value: "3" },
    { icon: Award, label: "Awards", value: "5+" },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-foreground dark:text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate developer and researcher with a strong foundation in computer science
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-transparent dark:bg-card/50 border-border backdrop-blur-sm">
              <CardContent className="p-6">
                <p className="text-foreground leading-relaxed mb-6">
                  I'm a dedicated Computer Science graduate from Green University of Bangladesh with a CGPA of
                  3.92/4.00. Currently working as an Interactive Media Developer @Bikroy, I specialize in full-stack
                  development using the MERN stack.
                </p>
                <p className="text-foreground leading-relaxed mb-6">
                  My research interests lie at the intersection of AI/ML and edge computing. I'm passionate about
                  developing innovative solutions that can make a real impact in the tech industry. My goal is to pursue
                  an MS in Data-Centric Computing to further advance my research capabilities.
                </p>
                <p className="text-foreground leading-relaxed">
                  Beyond coding, I'm actively involved in competitive programming and community building. I believe in
                  continuous learning and sharing knowledge with fellow developers.
                </p>
              </CardContent>
            </Card>

            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0"
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-transparent dark:bg-gradient-to-br dark:from-card/50 dark:to-background/50 border-border backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
