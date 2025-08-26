"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar, Award, BookOpen, Code, Heart } from "lucide-react"

const Community = () => {
  const activities = [
    {
      title: "President - Green University Computer Club (GUCC)",
      organization: "Green University of Bangladesh",
      period: "2022 - 2023",
      description:
        "Led the university's premier computer club with 200+ active members. Organized programming contests, workshops, and tech talks.",
      achievements: [
        "Organized 5 major programming contests",
        "Conducted 15+ technical workshops",
        "Increased club membership by 150%",
        "Established partnerships with tech companies",
      ],
      icon: Users,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "ICPC Volunteer & Mentor",
      organization: "ACM ICPC Asia Dhaka Regional",
      period: "2021 - 2023",
      description:
        "Volunteered as a technical coordinator and mentor for competitive programming teams preparing for ICPC.",
      achievements: [
        "Mentored 10+ teams for ICPC preparation",
        "Coordinated technical logistics for 200+ participants",
        "Developed training materials and problem sets",
        "Achieved 80% team advancement rate",
      ],
      icon: Award,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Workshop Organizer & Speaker",
      organization: "Various Tech Communities",
      period: "2020 - Present",
      description:
        "Regularly conduct workshops on web development, AI/ML, and competitive programming for students and professionals.",
      achievements: [
        "Conducted 25+ technical workshops",
        "Trained 500+ students and professionals",
        "Topics: MERN Stack, AI/ML, Competitive Programming",
        "Maintained 95% positive feedback rating",
      ],
      icon: BookOpen,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Open Source Contributor",
      organization: "GitHub Community",
      period: "2019 - Present",
      description:
        "Active contributor to open source projects, focusing on web development tools and educational resources.",
      achievements: [
        "Contributed to 15+ open source projects",
        "Maintained 3 popular repositories",
        "100+ GitHub stars across projects",
        "Helped 50+ developers through code reviews",
      ],
      icon: Code,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Tech Community Ambassador",
      organization: "Bangladesh Tech Community",
      period: "2021 - Present",
      description: "Representing and promoting tech education and innovation in the local developer community.",
      achievements: [
        "Organized 10+ community meetups",
        "Connected 200+ developers and students",
        "Promoted diversity in tech initiatives",
        "Facilitated industry-academia collaborations",
      ],
      icon: Heart,
      color: "from-rose-500 to-pink-500",
    },
  ]

  return (
    <section id="community" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Community &{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Leadership</span>
          </h2>
          <p className="text-foreground dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Actively contributing to the tech community through leadership, mentorship, and knowledge sharing
          </p>
        </motion.div>

        <div className="space-y-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-transparent dark:bg-slate-800/50 border-border dark:border-slate-700 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className={`p-4 rounded-full bg-gradient-to-r ${activity.color} shadow-lg flex-shrink-0`}>
                      <activity.icon className="h-8 w-8 text-white" />
                    </div>

                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{activity.title}</h3>

                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <Badge className={`bg-gradient-to-r ${activity.color} text-white border-0`}>
                            {activity.organization}
                          </Badge>
                          <div className="flex items-center gap-2 text-foreground dark:text-slate-400">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">{activity.period}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-foreground dark:text-slate-300 leading-relaxed">{activity.description}</p>

                      <div>
                        <h4 className="text-foreground font-semibold mb-3">Key Achievements:</h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {activity.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <span className="text-blue-400 mt-1 flex-shrink-0">•</span>
                              <span className="text-foreground dark:text-slate-300 text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Community Impact Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Students Mentored", value: "500+", icon: Users },
            { label: "Workshops Conducted", value: "25+", icon: BookOpen },
            { label: "Community Events", value: "15+", icon: Calendar },
            { label: "Years of Service", value: "4+", icon: Heart },
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

export default Community
