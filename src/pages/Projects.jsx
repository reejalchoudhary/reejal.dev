import { motion } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";

export function Projects() {

  const projects = [

        {  
      title: "Jawali Now",
      description:
        "wali Now is a modern local discovery app built for Jawali, Himachal Pradesh. Discover nearby places, local businesses, attractions, services, and community spots with an easy-to-use experience designed for the local community.",
      image:
        "https://github.com/reejalchoudhary/Jawali-Now/raw/main/assets/1.jpeg",
      tags: ["Flutter", "Android app", "Local Discovery", "Community App", "Location Based"],
      liveUrl:
        "https://github.com/reejalchoudhary/Jawali-Now",
      githubUrl:
        "https://github.com/reejalchoudhary/Jawali-Now",
    },

    {  
      title: "Button Adda",
      description:
        "A modern React button library with 49+ animated, interactive, and highly customizable buttons built to make web interfaces more engaging.",
      image:
        "https://github.com/reejalchoudhary/site-buttonadda/blob/main/public/image.png?raw=true",
      tags: ["React", "UI Library", "Component", "Animated Buttons", "Open Source"],
      liveUrl:
        "https://button-adda.netlify.app",
      githubUrl:
        "https://www.npmjs.com/package/button-adda",
    }, 
         
   {  
      title: "BUGVINASH ",
      description:
        "BUGVINASH is a CLI tool that scans your React project, detects bugs, performance issues, and bad practices and helps you fix them.",
      image:
        "https://i.postimg.cc/W1dPmXfz/image.png",
      tags: ["React", "CLI Tool", "Bug Detector", "Performance Analyzer", "Node.js"],
      liveUrl:
        "https://www.npmjs.com/package/bugvinash",
      githubUrl:
        "https://github.com/reejalchoudhary/bugvinash",
    },

    {  
      title: "API Pariksha",
      description:
        "API Pariksha is a modern, beginner-friendly API testing platform built for developers, students, and API learners.",
      image:
        "https://i.postimg.cc/zvy9wfxm/image.png",
      tags: ["API Testing", "REST API", "Developer Tool", "Open Source", "Debugging"],
      liveUrl:
        "https://api-pariksha.vercel.app",
      githubUrl:
        "https://github.com/reejalchoudhary/api-pariksha-frontend",
    }, 

    // {  
    //   title: "",
    //   description:
    //     "",
    //   image:
    //     "",
    //   tags: [],
    //   liveUrl:
    //     "",
    //   githubUrl:
    //     "",
    // }, 

    {
      title: "Flutter Food Delivery Application",
      description:
        "A small attempt to make an Food delivery app user interface in Flutter for Android and iOS.",
      image:
        "https://github.com/reejalchoudhary/flutter-food-delivery-app/raw/main/screens/full_ui.png",
      tags: ["FLUTTER", "DART", "UI", "MOBILE"],
      liveUrl:
        "https://github.com/reejalchoudhary/flutter-food-delivery-app",
      githubUrl:
        "https://github.com/reejalchoudhary/flutter-food-delivery-app",
    },

    {
      title: "College E-Library System",
      description:
        "A frontend-based college e-library system built with a clean and interactive UI.",
      image:
        "https://i.postimg.cc/1Xc4VKv4/Screenshot-2026-05-03-080006.png",
      tags: ["REACT JS", "TAILWIND", "FRAMER MOTION", "UI", "WEB"],
      liveUrl: "https://gcns-elibrary.netlify.app/",
      githubUrl:
        "https://github.com/reejalchoudhary/college-e-library",
    },

    {
      title: "Flutter Quiz Application Design",
      description:
        "A small attempt to make an Quiz app user interface in Flutter for Android, iOS and Windows. 📱💻",
      image:
        "https://github.com/reejalchoudhary/Quiz-App-Flutter/raw/main/screen%20shots/appui.png",
      tags: ["FLUTTER", "DART", "UI", "MOBILE"],
      liveUrl:
        "https://github.com/reejalchoudhary/Quiz-App-Flutter",
      githubUrl:
        "https://github.com/reejalchoudhary/Quiz-App-Flutter",
    },
  ];

  return (
    <div className="min-h-screen py-10 sm:py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 sm:mb-16 space-y-4"
        >

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2 leading-relaxed">
            Things I have built and experimented with.
          </p>

        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className="group relative"
            >

              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500" />

              <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-card/60 backdrop-blur-sm">

                <div className="relative overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-64 md:h-72 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                </div>

                <div className="p-5 sm:p-7 space-y-5">

                  <div className="space-y-3">

                    <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
                      {project.title}
                    </h2>

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                  </div>

                  <div className="flex flex-wrap gap-2">

                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs sm:text-sm bg-primary/10 border border-primary/20 text-primary"
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                  <div className="flex gap-3 pt-2">

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <button className="w-full h-12 rounded-xl bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 font-medium flex items-center justify-center gap-2 text-sm sm:text-base">

                        <ExternalLink className="w-4 h-4" />
                        Live Demo

                      </button>
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="h-12 px-5 sm:px-6 rounded-xl border border-primary/20 bg-card hover:bg-primary/10 transition-all duration-300 flex items-center justify-center gap-2">

                        <GitBranch className="w-4 h-4" />
                        <span className="hidden sm:inline">
                          Code
                        </span>

                      </button>
                    </a>

                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </div>
  );
}