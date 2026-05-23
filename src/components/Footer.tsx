import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative border-t border-zinc-900 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(168,85,247,0.18),transparent_45%)]" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">

        {/* Top CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-violet-400 uppercase tracking-[0.25em] text-sm mb-4">
            LET'S BUILD
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Ready to create something amazing?
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Open to AI, Full Stack and creative digital opportunities.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="inline-block mt-8 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_45px_rgba(236,72,153,0.55)] transition-all duration-300"
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Bottom Row */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">

          {/* Logo + copyright */}
          <div>
            <h3 className="text-3xl font-black text-white">YB</h3>
            <p className="text-zinc-500 text-sm mt-2">
              © 2026 Yogesh Bollu • Crafted with passion & AI
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm font-medium text-zinc-400">
            <a
              href="#home"
              className="hover:text-violet-400 transition"
            >
              Home
            </a>

            <a
              href="#about"
              className="hover:text-violet-400 transition"
            >
              About
            </a>

            <a
              href="#projects"
              className="hover:text-violet-400 transition"
            >
              Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="hover:text-violet-400 transition"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}