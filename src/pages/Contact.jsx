import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, CheckCircle } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  const data = {
    access_key: "bee1778d-408b-412c-9b43-869d65a6a1dc",
    name: formData.name,
    email: formData.email,
    message: formData.message,

    subject: "New Portfolio Contact",
  };

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  setLoading(false);

  if (result.success) {
    setIsSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  } else {
    console.log(result);
    alert(result.message);
  }
};
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/reejalchoudhary",
    handle: "@reejalchoudhary",
    gradient: "from-gray-600 to-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://linkedin.com/in/reejalchoudhary",
    handle: "reejalchoudhary",
    gradient: "from-blue-600 to-blue-800",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://instagram.com/reejalhere",
    handle: "@reejalhere",
    gradient: "from-pink-600 to-purple-600",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:reejalree@gmail.com",
    handle: "reejalree@gmail.com",
    gradient: "from-primary to-secondary",
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
              Contact Me
            </span>
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2 leading-relaxed">
            Have an idea, project, or collaboration in mind? Let's build something amazing.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 md:gap-12 items-start lg:[grid-template-areas:'left_right''social_right']">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-5 sm:space-y-8 lg:[grid-area:left]"
          >

            <div className="relative group">

              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />

              <div className="relative bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-5 sm:p-8 space-y-5 sm:space-y-6">

                <div className="space-y-3 sm:space-y-4">

                  <h2 className="text-2xl sm:text-3xl font-bold">
                    Let's Connect
                  </h2>

                  <div className="space-y-4">

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Got an idea that sounds impossible, stupid, or completely random?
                      Perfect. Those are usually the fun ones. Let’s build something legendary together 🚀
                    </p>

                    <div className="flex flex-wrap gap-2">

                      <span className="px-3 py-1 rounded-full text-xs bg-primary/10 border border-primary/20 text-primary">
                        ⚡ Frontend Wizard
                      </span>

                      <span className="px-3 py-1 rounded-full text-xs bg-secondary/10 border border-secondary/20 text-secondary">
                        ☕ Powered By Coffee
                      </span>

                      <span className="px-3 py-1 rounded-full text-xs bg-accent/10 border border-accent/20 text-accent">
                        🚀 Idea Builder
                      </span>

                      <span className="px-3 py-1 rounded-full text-xs bg-pink-500/10 border border-pink-500/20 text-pink-400">
                        🐞 Bug Hunter
                      </span>

                    </div>

                    <div className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3">
                      <p className="text-xs sm:text-sm text-muted-foreground italic">
                        “Turning caffeine into responsive websites since 2021.”
                      </p>
                    </div>

                  </div>

                </div>

                <div className="space-y-4 pt-5 sm:pt-6 border-t border-primary/20">

                  <h3 className="font-semibold text-lg sm:text-xl">
                    What I Can Help With:
                  </h3>

                  <ul className="space-y-3">

                    {[
                      "Frontend Web Development",
                      "UI/UX Design & Implementation",
                      "React & Modern JavaScript",
                      "Responsive Web Design",
                      "Performance Optimization",
                    ].map((item, index) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground"
                      >

                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />

                        <span>{item}</span>

                      </motion.li>
                    ))}

                  </ul>

                </div>

              </div>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative group lg:[grid-area:right]"
          >

            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

            <div className="relative bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-5 sm:p-8 hover:border-primary/50 transition-all duration-300">

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 sm:py-4 text-sm sm:text-base bg-input-background border border-primary/20 rounded-lg outline-none focus:border-primary transition-colors"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="abc@email.com"
                  required
                  className="w-full px-4 py-3 sm:py-4 text-sm sm:text-base bg-input-background border border-primary/20 rounded-lg outline-none focus:border-primary transition-colors"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="  Don't be shy...
    Write anything... I actually read it 👀"
                  required
                  rows={6}
                  className="w-full px-4 py-3 text-sm sm:text-base bg-input-background border border-primary/20 rounded-lg resize-none outline-none focus:border-primary transition-colors"
                />

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  className={`w-full px-6 py-3.5 sm:py-4 rounded-lg font-medium flex items-center justify-center gap-2 text-sm sm:text-base ${
                    isSubmitted
                      ? "bg-accent text-background"
                      : "bg-gradient-to-r from-primary to-secondary text-background"
                  }`}
                >

                  {loading ? (
                    <>
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>

              </form>

            </div>

          </motion.div>

          <div className="lg:[grid-area:social] grid grid-cols-2 gap-3 sm:gap-4">

            {socialLinks.map((social, index) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative"
                >

                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${social.gradient} rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300`}
                  />

                  <div className="relative bg-card border border-primary/20 rounded-xl p-3 sm:p-4 flex items-center gap-2 sm:gap-4 hover:border-primary/50 transition-all duration-300">

                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r ${social.gradient} flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                    </div>

                    <div className="flex-1 min-w-0">

                      <p className="font-semibold text-xs sm:text-base text-foreground truncate">
                        {social.name}
                      </p>

                      <p className="text-[10px] sm:text-sm text-muted-foreground truncate">
                        {social.handle}
                      </p>

                    </div>

                  </div>

                </motion.a>
              );
            })}

          </div>

        </div>

      </div>
    </div>
  );
}