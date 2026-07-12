import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Database,
  GitBranch,
  Terminal,
  Globe,
  Server,
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      gradient: "from-primary to-blue-400",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "React", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Flutter", level: 75 },
      ],
    },

    {
      title: "Backend",
      icon: Server,
      gradient: "from-green-400 to-emerald-500",
      skills: [
        { name: "Node.js", level: 82 },
        { name: "Express.js", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Firebase", level: 78 },
        { name: "REST APIs", level: 84 },
        { name: "API Testing", level: 86 },
      ],
    },

    {
      title: "Cloud & DevOps",
      icon: Database,
      gradient: "from-cyan-400 to-sky-500",
      skills: [
        { name: "AWS", level: 72 },
        { name: "Google Cloud", level: 78 },
        { name: "Azure", level: 68 },
        { name: "GitHub", level: 90 },
        { name: "Git", level: 85 },
      ],
    },

    {
      title: "Programming",
      icon: Terminal,
      gradient: "from-secondary to-purple-400",
      skills: [
        { name: "Java", level: 82 },
        { name: "Cybersecurity", level: 70 },
        { name: "Responsive Design", level: 95 },
        { name: "UI/UX Design", level: 88 },
        { name: "Problem Solving", level: 90 },
      ],
    },
  ];

  const techStack = [
    { name: "HTML5", icon: Code2, color: "text-orange-500" },
    { name: "CSS3", icon: Palette, color: "text-blue-500" },
    { name: "JavaScript", icon: Code2, color: "text-yellow-500" },
    { name: "React", icon: Code2, color: "text-primary" },
    { name: "Tailwind", icon: Palette, color: "text-cyan-500" },

    { name: "Flutter", icon: Globe, color: "text-sky-400" },

    { name: "Node.js", icon: Server, color: "text-green-500" },
    { name: "MongoDB", icon: Database, color: "text-green-600" },
    { name: "Firebase", icon: Database, color: "text-yellow-600" },

    { name: "Java", icon: Terminal, color: "text-orange-400" },

    { name: "AWS", icon: Database, color: "text-orange-500" },
    { name: "GCP", icon: Globe, color: "text-blue-400" },
    { name: "Azure", icon: Globe, color: "text-cyan-400" },

    { name: "Cybersecurity", icon: Server, color: "text-red-500" },

    { name: "Git", icon: GitBranch, color: "text-orange-600" },
    { name: "GitHub", icon: GitBranch, color: "text-foreground" },

    { name: "VS Code", icon: Terminal, color: "text-blue-600" },
  ];

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14 sm:mb-16 space-y-4"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            My technical expertise and the tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16">

          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.15 }}
              className="group relative"
            >
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${category.gradient} rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
              />

              <div className="relative bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-5 sm:p-8 space-y-5 sm:space-y-6 hover:border-primary/50 transition-all duration-300">

                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center`}
                  >
                    <category.icon className="w-6 h-6 sm:w-7 sm:h-7 text-background" />
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold">
                    {category.title}
                  </h2>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">

                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm sm:text-base text-foreground">
                          {skill.name}
                        </span>

                        <span className="text-primary font-semibold text-sm sm:text-base">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay:
                              categoryIndex * 0.2 + skillIndex * 0.1,
                          }}
                          className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                        />
                      </div>

                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">

            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />

                <div className="relative bg-card border border-primary/20 rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center gap-2 sm:gap-3 hover:border-primary/50 transition-all duration-300 min-h-[120px] sm:min-h-[150px]">

                  <tech.icon
                    className={`w-8 h-8 sm:w-10 sm:h-10 ${tech.color} group-hover:scale-110 transition-transform`}
                  />

                  <span className="font-medium text-xs sm:text-sm text-center">
                    {tech.name}
                  </span>

                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Core Competencies
            </span>
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              { skill: "UI/UX Design", percentage: 85 },
              { skill: "Web Development", percentage: 90 },
              { skill: "Responsive Design", percentage: 95 },
              { skill: "Problem Solving", percentage: 88 },
            ].map((item, index) => {
              const radius = 40;
              const circumference = 2 * Math.PI * radius;
              const strokeDashoffset =
                circumference - (item.percentage / 100) * circumference;

              return (
                <motion.div
                  key={item.skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center gap-3"
                >

                  <div className="relative w-24 h-24 sm:w-32 sm:h-32">

                    <svg
                      viewBox="0 0 100 100"
                      className="w-full h-full -rotate-90"
                    >

                      <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-muted"
                      />

                      <motion.circle
                        cx="50"
                        cy="50"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.5,
                          delay: index * 0.1,
                        }}
                        style={{
                          strokeDasharray: circumference,
                        }}
                        className="text-primary"
                      />

                    </svg>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg sm:text-2xl font-bold">
                        {item.percentage}%
                      </span>
                    </div>

                  </div>

                  <p className="font-medium text-center text-xs sm:text-base leading-tight">
                    {item.skill}
                  </p>

                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </div>
  );
}