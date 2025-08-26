"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Mail, Github, Linkedin } from "lucide-react"
import Image from "next/image"

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = [
    "Interactive Media Developer @Bikroy",
    "Full-Stack MERN Developer",
    "AI/ML Enthusiast",
    "Edge Computing Researcher",
    "Competitive Programmer",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-foreground leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Md. Abu Taief Siddique
                </span>
              </motion.h1>

              <motion.div
                className="h-16 flex items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="text-xl md:text-2xl text-foreground dark:text-muted-foreground">{roles[currentRole]}</span>
              </motion.div>

              <motion.p
                className="text-lg text-foreground dark:text-muted-foreground max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Aspiring researcher seeking MS in Data-Centric Computing. CGPA 3.92/4.00 in CSE from Green University of
                Bangladesh. Passionate about building innovative solutions at the intersection of AI and web
                technologies.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0"
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                <Download className="mr-2 h-4 w-4" />
                View Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                onClick={scrollToContact}
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground dark:text-muted-foreground hover:text-primary hover:bg-primary/10"
                onClick={() => window.open("https://github.com", "_blank")}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground dark:text-muted-foreground hover:text-primary hover:bg-primary/10"
                onClick={() => window.open("https://linkedin.com", "_blank")}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-1"
              >
                <div className="w-full h-full rounded-full bg-transparent dark:bg-card p-4">
                  <Image
                    src="/taief.jpg"
                    alt="Md. Abu Taief Siddique"
                    width={300}
                    height={300}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <span className="text-2xl">🚀</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
              >
                <span className="text-2xl">💡</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
