"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const Skills = () => {
  const [activeTab, setActiveTab] = useState("programming")

  const skillCategories = {
    programming: {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 95, icon: "🟨" },
        { name: "TypeScript", level: 90, icon: "🔷" },
        { name: "Python", level: 88, icon: "🐍" },
        { name: "Java", level: 85, icon: "☕" },
        { name: "PHP", level: 80, icon: "🐘" },
        { name: "C++", level: 75, icon: "⚡" },
      ],
    },
    frontend: {
      title: "Frontend Technologies",
      skills: [
        { name: "React.js", level: 95, icon: "⚛️" },
        { name: "Next.js", level: 90, icon: "▲" },
        { name: "Vue.js", level: 85, icon: "💚" },
        { name: "Tailwind CSS", level: 92, icon: "🎨" },
        { name: "HTML/CSS", level: 95, icon: "🌐" },
        { name: "SASS/SCSS", level: 88, icon: "💄" },
      ],
    },
    backend: {
      title: "Backend & APIs",
      skills: [
        { name: "Node.js", level: 92, icon: "🟢" },
        { name: "Express.js", level: 90, icon: "🚀" },
        { name: "Laravel", level: 85, icon: "🔴" },
        { name: "REST APIs", level: 95, icon: "🔗" },
        { name: "GraphQL", level: 80, icon: "📊" },
        { name: "Socket.io", level: 85, icon: "🔌" },
      ],
    },
    database: {
      title: "Databases & Cloud",
      skills: [
        { name: "MongoDB", level: 90, icon: "🍃" },
        { name: "MySQL", level: 88, icon: "🐬" },
        { name: "PostgreSQL", level: 85, icon: "🐘" },
        { name: "Redis", level: 80, icon: "🔴" },
        { name: "AWS", level: 75, icon: "☁️" },
        { name: "Firebase", level: 85, icon: "🔥" },
      ],
    },
    aiml: {
      title: "AI/ML & Research",
      skills: [
        { name: "Machine Learning", level: 85, icon: "🤖" },
        { name: "Deep Learning", level: 80, icon: "🧠" },
        { name: "TensorFlow", level: 78, icon: "🔥" },
        { name: "PyTorch", level: 75, icon: "⚡" },
        { name: "Edge Computing", level: 82, icon: "📱" },
        { name: "Data Analysis", level: 88, icon: "📈" },
      ],
    },
  }

  const tabs = [
    { id: "programming", label: "Programming" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Database" },
    { id: "aiml", label: "AI/ML" },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-foreground dark:text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              className={`${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0"
                  : "border-border text-foreground hover:border-primary hover:text-primary"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </Button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeTab}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {skillCategories[activeTab as keyof typeof skillCategories].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-transparent dark:bg-slate-800/50 border-border dark:border-slate-700 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{skill.icon}</span>
                    <h3 className="text-foreground font-semibold">{skill.name}</h3>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground dark:text-slate-400">Proficiency</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-border dark:bg-slate-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
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

export default Skills
