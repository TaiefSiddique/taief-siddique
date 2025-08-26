"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Star, Medal } from "lucide-react"

const Achievements = () => {
  const achievements = [
    {
      title: "Vice Chancellor's Award",
      description:
        "Received the prestigious Vice Chancellor's Award for academic excellence and outstanding performance in Computer Science.",
      year: "2023",
      category: "Academic",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500",
      featured: true,
    },
    {
      title: "Best Paper Award - ICCIT 2023",
      description:
        "Won the Best Paper Award at the International Conference on Computer and Information Technology for research on edge computing.",
      year: "2023",
      category: "Research",
      icon: Award,
      color: "from-blue-500 to-cyan-500",
      featured: true,
    },
    {
      title: "Code Samurai Finalist",
      description:
        "Achieved finalist position in Code Samurai, Bangladesh's premier programming competition, ranking among top 50 teams.",
      year: "2022",
      category: "Programming",
      icon: Star,
      color: "from-purple-500 to-pink-500",
      featured: false,
    },
    {
      title: "Dean's List Recognition",
      description:
        "Consistently maintained position in Dean's List for academic excellence throughout undergraduate studies.",
      year: "2020-2023",
      category: "Academic",
      icon: Medal,
      color: "from-green-500 to-emerald-500",
      featured: false,
    },
    {
      title: "ICPC Regional Participation",
      description:
        "Represented university in ACM ICPC Asia Dhaka Regional Contest, demonstrating strong problem-solving skills.",
      year: "2022",
      category: "Programming",
      icon: Trophy,
      color: "from-red-500 to-rose-500",
      featured: false,
    },
    {
      title: "Outstanding Leadership Award",
      description:
        "Recognized for exceptional leadership in organizing programming contests and workshops at Green University Computer Club.",
      year: "2022",
      category: "Leadership",
      icon: Award,
      color: "from-indigo-500 to-blue-500",
      featured: false,
    },
  ]

  const categories = ["All", "Academic", "Research", "Programming", "Leadership"]

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Achievements &{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Awards</span>
          </h2>
          <p className="text-foreground dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Recognition for academic excellence, research contributions, and leadership in the tech community
          </p>
        </motion.div>

        {/* Featured Achievements */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {achievements
            .filter((achievement) => achievement.featured)
            .map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-transparent dark:bg-slate-800/50 border-border dark:border-slate-700 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-4 rounded-full bg-gradient-to-r ${achievement.color} shadow-lg`}>
                        <achievement.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-foreground">{achievement.title}</h3>
                          <Badge className={`bg-gradient-to-r ${achievement.color} text-white border-0`}>
                            Featured
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                          <Badge variant="outline" className="border-blue-500 text-blue-500 dark:text-blue-400">
                            {achievement.category}
                          </Badge>
                          <span className="text-foreground dark:text-slate-400 text-sm">{achievement.year}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-foreground dark:text-slate-300 leading-relaxed">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </motion.div>

        {/* Other Achievements */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {achievements
            .filter((achievement) => !achievement.featured)
            .map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-transparent dark:bg-slate-800/50 border-border dark:border-slate-700 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${achievement.color} shadow-lg`}>
                        <achievement.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-foreground mb-1">{achievement.title}</h3>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="border-border dark:border-slate-600 text-foreground dark:text-slate-400 text-xs">
                            {achievement.category}
                          </Badge>
                          <span className="text-foreground dark:text-slate-500 text-xs">{achievement.year}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-foreground dark:text-slate-300 text-sm leading-relaxed">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Awards Won", value: "6+", icon: Trophy },
            { label: "CGPA", value: "3.92", icon: Star },
            { label: "Publications", value: "3", icon: Award },
            { label: "Competitions", value: "10+", icon: Medal },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-transparent dark:bg-gradient-to-br dark:from-slate-800/50 dark:to-slate-900/50 border-border dark:border-slate-700 backdrop-blur-sm text-center">
                <CardContent className="p-6">
                  <stat.icon className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-foreground dark:text-slate-400 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
