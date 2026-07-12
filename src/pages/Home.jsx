import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Trophy, Award, Layers } from "lucide-react";
import { useEffect, useState } from "react";

export function Home() {
  const [typedText, setTypedText] = useState("");

  const roles = [
    "UI/UX Specialist",
    "Frontend Developer",
    "Cross-Platform App Builder",
    "Security & Forensics Learner",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentRole.length) {
          setTypedText(currentRole.substring(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(currentRole.substring(0, typedText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, isDeleting ? 30 : 40);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, roleIndex]);

  const stats = [
    {
      icon: Code,
      label: "Projects Built",
      value: "5+",
      gradient: "from-primary to-blue-400",
    },
    {
      icon: Trophy,
      label: "Hackathons Participated",
      value: "10+",
      gradient: "from-secondary to-purple-400",
    },
    {
      icon: Award,
      label: "Certificates Earned",
      value: "30+",
      gradient: "from-accent to-green-400",
    },
    {
      icon: Layers,
      label: "Technologies Known",
      value: "10+",
      gradient: "from-orange-500 to-yellow-400",
    },
  ];

  return (
    <div className="relative overflow-hidden">

      <div className="particles -z-10 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `-${Math.random() * 100}px`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <section className="min-h-[calc(100vh-4rem)] flex items-center py-10 sm:py-14 lg:py-0">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-1 w-full space-y-6 sm:space-y-8 text-center lg:text-left"
            >

              <div className="space-y-3 sm:space-y-4">

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-base sm:text-xl text-muted-foreground"
                >
                  Hello, I'm
                </motion.p>

                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold leading-none">
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    Reejal Choudhary
                  </span>
                </h1>

                <div className="h-12 sm:h-16 flex items-center justify-center lg:justify-start">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl text-primary font-semibold">
                    {typedText}
                    <span className="animate-pulse">|</span>
                  </h2>
                </div>

              </div>

              <p className="text-sm sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Sometimes a developer, sometimes a UPSC aspirant, sometimes self-declared geopolitics expert.
              </p>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-2 relative w-full"
            >

              <div className="relative group">

                <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />

                <div className="relative bg-card/50 backdrop-blur-sm border border-primary/30 rounded-2xl p-5 sm:p-8 space-y-6 overflow-hidden">

                  <div className="space-y-3 relative z-10">

                    {[
                      "const student = {",
                      '  name: "Reejal Choudhary",',
                      '  attendance: "Low",',
                      '  semester: "Surviving somehow",',
                      '  placements: "Manifesting daily",',
                      "  mentalHealth: console.log(\"hehe\")",
                      "};",
                    ].map((line, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + i * 0.1 }}
                        className="font-mono text-xs sm:text-sm text-muted-foreground break-all"
                      >
                        {line}
                      </motion.div>
                    ))}

                  </div>

                  <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">

                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary rounded-full"
                        animate={{
                          x: [Math.random() * 400, Math.random() * 400],
                          y: [Math.random() * 400, Math.random() * 400],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 3 + Math.random() * 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}

                  </div>

                </div>

              </div>

            </motion.div>

            <div className="order-3 w-full flex flex-row gap-3 sm:gap-4 justify-center lg:justify-start relative z-50">

              <Link to="/projects" className="flex-1 sm:flex-none z-50">

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-4 text-sm sm:text-base whitespace-nowrap bg-gradient-to-r from-primary to-secondary rounded-lg font-medium text-background flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 cursor-pointer relative z-50"
                >
                  View Projects

                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.div>

              </Link>

              <Link to="/contact" className="flex-1 sm:flex-none z-50">

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-auto min-w-[140px] px-2 sm:px-8 py-5 sm:py-4 text-sm sm:text-base bg-card border-2 border-primary/30 rounded-lg font-medium text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300 flex items-center justify-center cursor-pointer relative z-50"
                >
                  Contact Me
                </motion.div>

              </Link>

            </div>

          </div>

        </div>
      </section>

      <section className="relative py-12 sm:py-16 lg:py-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >

                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`}
                />

                <div className="relative bg-card border border-primary/20 rounded-xl p-4 sm:p-6 space-y-4 hover:border-primary/50 transition-all duration-300 min-h-[180px] sm:min-h-[220px]">

                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r ${stat.gradient} flex items-center justify-center`}
                  >
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-background" />
                  </div>

                  <div>
                    <p className="text-2xl sm:text-3xl font-bold">
                      {stat.value}
                    </p>

                    <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                      {stat.label}
                    </p>
                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

    </div>
  );
}