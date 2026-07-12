import { motion } from "framer-motion";
import { Trophy, Calendar, Code, Users } from "lucide-react";

export function Hackathons() {
  const hackathons = [
    {
      name: "CyberGeek'26 CTF",
      date: "March, 2026",
      description:
        "Participated in CyberGeek'26, a Capture The Flag (CTF) cybersecurity competition organized under Aparoksha by IIIT Allahabad. Competed among 300+ teams, solving real-world security challenges involving web exploitation, cryptography, reconnaissance, and logical problem-solving while strengthening teamwork and analytical thinking under competitive conditions.",
      technologies: [
        "Cybersecurity",
        "Capture The Flag (CTF)",
        "Web Exploitation",
        "Cryptography",
        "OSINT",
        "Network Security",
        "Linux",
        "Problem Solving",
      ],
      achievement: "Elite CTF Participant",
      color: "from-pink-500 via-purple-500 to-indigo-600",
    },

    {
      name: "Google Cloud Study Jams",
      date: "March, 2026",
      description:
        "Successfully completed the Google Cloud Study Jams organized by GDG On Campus Chandigarh University, finishing 20 hands-on cloud and GenAI activities focused on modern cloud infrastructure, serverless computing, AI development, and data engineering. Gained practical experience building scalable applications, managing cloud services, and developing Generative AI solutions using Google Cloud technologies.",
      technologies: [
        "Google Cloud Platform",
        "Vertex AI",
        "Gemini AI",
        "Cloud Computing",
        "Cloud Storage",
        "Pub/Sub",
        "API Gateway",
        "Looker",
        "Dataplex",
      ],
      achievement: "Tier 1 Cloud Study Jams Achiever",
      color: "from-blue-400 via-green-400 to-yellow-400",
    },

    {
      name: "CodeStorm | Enyguma'26",
      date: "March, 2026",
      description:
        "Participated in CodeStorm during Enyguma'26 organized by IIIT Bhagalpur, successfully qualifying the first-round coding challenge by solving competitive programming and logical problem-solving tasks under time constraints. Strengthened analytical thinking, debugging skills, and algorithmic problem-solving through the competition environment.",
      technologies: [
        "Competitive Programming",
        "Data Structures",
        "Algorithms",
        "Problem Solving",
        "Coding Challenges",
      ],
      achievement: "Qualified Round 1",
      color: "from-indigo-400 via-blue-500 to-cyan-400",
    },

    {
      name: "GenAI Academy 2.0",
      date: "JANUARY, 2026",
      description:
        "Completed the Security learning track of Gen AI Academy 2.0 by Google Cloud, gaining hands-on experience in cloud security, sensitive data protection, IAM access management, and secure AI infrastructure. Explored enterprise-grade data governance and cloud protection practices through practical labs and real-world security workflows.",
      technologies: [
        "Google Cloud",
        "Cloud Security",
        "Dataplex",
        "Sensitive Data Protection",
        "Security Operations",
        "Risk Management",
      ],
      achievement: "Security Track Certified",
      color: "from-fuchsia-400 via-purple-500 to-violet-700",
    },

    {
      name: "AI for Bharat",
      date: "JANUARY, 2026",
      description:
        "Built and submitted an AI-powered business analytics agent during the AI for Bharat Workshop 4, leveraging agent orchestration and analytics integration to generate data-driven insights. Gained hands-on experience with AI workflows, automation pipelines, and intelligent system design while documenting the development process through a technical implementation blog.",
      technologies: [
        "AWS",
        "Amazon Bedrock",
        "Strands Agents SDK",
        "Agent Orchestration",
        "AWS Builder Center",
        "AI Agents",
      ],
      achievement: "AI Agent Builder",
      color: "from-emerald-400 via-teal-500 to-cyan-500",
    },

    {
      name: "Training and Trailer Making Competition",
      date: "MAY, 2025",
      description:
        "Developed and presented a creative trailer concept during the Unlocking Creativity: Training and Trailer Making Competition organized under WAVES 2025 by FICCI, Netflix Fund for Creative Equity, and the Ministry of Information & Broadcasting. Explored storytelling, cinematic editing, visual pacing, and digital media production while collaborating with creative minds and industry-focused sessions throughout the event.",
      technologies: [
        "FCCI",
        "Netflix",
        "WAVES 2025",
        "Ministry of Information & Broadcasting",
        "Storytelling",
        "Cinematic Editing",
        "Digital Media Production",
      ],
      achievement: "Participant",
      color: "from-amber-300 via-orange-500 to-red-500",
    },

    {
      name: "Republic Day Hackathon-India@75",
      date: "MARCH, 2023",
      description:
        "Developed and submitted an interactive AR effect using Spark AR Studio for the Republic Day Hackathon – India@75 by Reskilll. Gained hands-on experience in AR design, effect creation, and rapid prototyping during the event.",
      technologies: ["AR", "SparkAR Studio", "Meta", "Instagram"],
      achievement: "Participant",
      color: "from-rose-400 via-pink-500 to-fuchsia-600",
    },
  ];

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 sm:mb-16 space-y-4"
        >

          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 px-2">

            <Trophy className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary shrink-0" />

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Hackathons and Competitions
              </span>
            </h1>
          </div>

          <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Competitive coding experiences where I've built innovative solutions under pressure.
          </p>
        </motion.div>

        <div className="relative">

          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />

          <div className="space-y-8 sm:space-y-12">

            {hackathons.map((hackathon, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={hackathon.name}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative lg:flex ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-center gap-8`}
                >

                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary border-4 border-background z-10" />
                  <div className="w-full lg:w-1/2 group relative">

                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${hackathon.color} rounded-2xl blur-lg opacity-20 sm:opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
                    />

                    <div className="relative bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-4 sm:p-6 md:p-8 hover:border-primary/50 transition-all duration-300 overflow-hidden">

                      <div className="flex items-start justify-between gap-3 sm:gap-4 mb-4">

                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2 leading-tight">
                            {hackathon.name}
                          </h3>

                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span className="text-xs sm:text-sm">
                              {hackathon.date}
                            </span>
                          </div>
                        </div>

                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r ${hackathon.color} flex items-center justify-center shrink-0`}
                        >
                          <Code className="w-5 h-5 sm:w-6 sm:h-6 text-background" />
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                        {hackathon.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">

                        {hackathon.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-[10px] sm:text-sm bg-primary/10 text-primary rounded-full border border-primary/20 whitespace-nowrap"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {hackathon.achievement && (
                        <div
                          className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r ${hackathon.color} rounded-lg text-background font-medium text-xs sm:text-sm`}
                        >
                          <Trophy className="w-4 h-4" />
                          {hackathon.achievement}
                        </div>
                      )}

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >

          {[
            {
              label: "Hackathons Attended",
              value: "10+",
              icon: Trophy,
              gradient: "from-primary to-blue-400",
            },

            {
              label: "Projects Built",
              value: "5+",
              icon: Code,
              gradient: "from-secondary to-purple-400",
            },

            {
              label: "Team Members",
              value: "15+",
              icon: Users,
              gradient: "from-accent to-green-400",
            },

            {
              label: "Awards Won",
              value: "5+",
              icon: Trophy,
              gradient: "from-orange-500 to-yellow-400",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >

              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300`}
              />

              <div className="relative bg-card border border-primary/20 rounded-xl p-4 sm:p-6 text-center space-y-2 sm:space-y-3 hover:border-primary/50 transition-all duration-300">

                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto" />

                <p className="text-3xl sm:text-4xl font-bold">
                  {stat.value}
                </p>

                <p className="text-[11px] sm:text-sm text-muted-foreground leading-snug">
                  {stat.label}
                </p>

              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
