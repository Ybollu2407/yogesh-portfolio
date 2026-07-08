import { motion } from "framer-motion";

export default function HeroSection() {
  const badges = [
    "AI Engineer",
    "Full Stack",
    "UI/UX",
    "Problem Solver",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(168,85,247,0.18),transparent_40%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative inline-block mb-8"
        >
          <div className="absolute inset-0 rounded-full blur-3xl bg-violet-600/30 animate-pulse" />

          <img
            src="/avatar.png"
            alt="Yogesh"
            className="relative w-48 h-48 rounded-full object-cover border border-violet-500/25 shadow-[0_0_60px_rgba(168,85,247,0.35)]"
          />
        </motion.div>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="uppercase tracking-[0.35em] text-violet-400 text-sm mb-5 font-medium"
        >
          AI • FULL STACK • UI/UX
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-6xl md:text-8xl font-black leading-[0.95] mb-5"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-violet-300 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
            Yogesh
          </span>
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-2xl md:text-3xl text-zinc-100 font-semibold mb-6"
        >
          Full Stack & AI Engineer
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="max-w-3xl mx-auto text-zinc-400 text-lg md:text-xl leading-relaxed mb-10"
        >
          Building intelligent digital experiences with modern full stack
          engineering, AI systems and premium UI experiences.
        </motion.p>

        {/* Premium Chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {badges.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, scale: 1.05 }}
              className="
              px-6 py-3 rounded-full
              border border-zinc-800
              bg-zinc-950/50
              backdrop-blur-xl
              text-white font-medium
              hover:border-violet-500/40
              hover:bg-violet-500/10
              hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]
              transition-all duration-300
              "
            >
              {item}
            </motion.div>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-5"
        >
          <a
            href="#projects"
            className="px-9 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 shadow-[0_0_35px_rgba(168,85,247,0.45)] hover:scale-105 transition-all duration-300"
          >
            View Projects
          </a>

          <a
            href="/resumee.pdf"
            target="_blank"
            className="px-9 py-4 rounded-full border border-zinc-800 bg-zinc-900/30 text-zinc-200 font-medium hover:border-violet-500/40 hover:text-white hover:bg-zinc-900/60 transition-all duration-300"
          >
            View Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
