"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, ExternalLink, Calendar, Users } from "lucide-react"

const Publications = () => {
  const publications = [
    {
      title: "Edge Computing Optimization for IoT Applications: A Machine Learning Approach",
      authors: ["Md. Abu Taief Siddique", "Dr. Rahman Ahmed", "Prof. Sarah Johnson"],
      conference: "International Conference on Computer and Information Technology (ICCIT)",
      year: "2023",
      status: "Published",
      abstract:
        "This paper presents a novel approach to optimize edge computing resources for IoT applications using machine learning algorithms. We propose a dynamic resource allocation framework that reduces latency by 35% and improves energy efficiency.",
      keywords: ["Edge Computing", "IoT", "Machine Learning", "Resource Optimization"],
      pdfUrl: "/publications/edge-computing-optimization.pdf",
      award: "Best Paper Award",
      citations: 12,
    },
    {
      title: "Real-time Data Processing in Distributed Edge Networks: Challenges and Solutions",
      authors: ["Md. Abu Taief Siddique", "Dr. Michael Chen", "Dr. Lisa Wang"],
      conference: "IEEE International Conference on Edge Computing",
      year: "2023",
      status: "Published",
      abstract:
        "We address the challenges of real-time data processing in distributed edge networks and propose a novel architecture that ensures low-latency processing while maintaining data consistency across edge nodes.",
      keywords: ["Edge Networks", "Real-time Processing", "Distributed Systems", "Data Consistency"],
      pdfUrl: "/publications/realtime-edge-processing.pdf",
      award: null,
      citations: 8,
    },
    {
      title: "AI-Driven Predictive Analytics for Smart City Infrastructure",
      authors: ["Md. Abu Taief Siddique", "Dr. Ahmed Hassan", "Prof. Emily Davis"],
      conference: "International Conference on Smart Cities and IoT",
      year: "2024",
      status: "Under Review",
      abstract:
        "This research explores the application of artificial intelligence in predictive analytics for smart city infrastructure management, focusing on traffic optimization and energy consumption prediction.",
      keywords: ["Smart Cities", "Predictive Analytics", "AI", "Infrastructure Management"],
      pdfUrl: null,
      award: null,
      citations: 0,
    },
  ]

  return (
    <section id="publications" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Research{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Publications
            </span>
          </h2>
          <p className="text-foreground dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Contributing to the advancement of computer science through research in edge computing and AI/ML
          </p>
        </motion.div>

        <div className="space-y-8">
          {publications.map((publication, index) => (
            <motion.div
              key={publication.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-transparent dark:bg-slate-800/50 border-border dark:border-slate-700 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg flex-shrink-0">
                      <FileText className="h-8 w-8 text-white" />
                    </div>

                    <div className="flex-1 space-y-4">
                      <div>
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                            {publication.title}
                          </h3>
                          {publication.award && (
                            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 flex-shrink-0">
                              {publication.award}
                            </Badge>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <div className="flex items-center gap-2 text-foreground dark:text-slate-400">
                            <Users className="h-4 w-4" />
                            <span className="text-sm">{publication.authors.join(", ")}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <div className="flex items-center gap-2 text-blue-400">
                            <Calendar className="h-4 w-4" />
                            <span className="font-medium">{publication.conference}</span>
                          </div>
                          <Badge
                            variant="outline"
                            className={`${
                              publication.status === "Published"
                                ? "border-green-500 text-green-400"
                                : "border-yellow-500 text-yellow-400"
                            }`}
                          >
                            {publication.status} • {publication.year}
                          </Badge>
                          {publication.citations > 0 && (
                            <span className="text-foreground dark:text-slate-400 text-sm">{publication.citations} citations</span>
                          )}
                        </div>
                      </div>

                      <p className="text-foreground dark:text-slate-300 leading-relaxed">{publication.abstract}</p>

                      <div className="space-y-3">
                        <div>
                          <span className="text-foreground font-semibold text-sm">Keywords: </span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {publication.keywords.map((keyword, i) => (
                              <Badge key={i} variant="secondary" className="bg-transparent dark:bg-slate-700 border border-border text-foreground dark:text-slate-300 text-xs">
                                {keyword}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {publication.pdfUrl && (
                          <Button
                            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0"
                            onClick={() => window.open(publication.pdfUrl, "_blank")}
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View PDF
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Research Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Publications", value: "3", icon: FileText },
            { label: "Citations", value: "20+", icon: ExternalLink },
            { label: "Conferences", value: "3", icon: Calendar },
            { label: "Awards", value: "1", icon: Badge },
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
                  <div className="text-3xl font-bold text-foreground dark:text-white mb-1">{stat.value}</div>
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

export default Publications
