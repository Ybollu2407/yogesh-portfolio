import { motion } from "framer-motion";
import { usePortfolio } from "../hooks/usePortfolio";

export default function ProjectsSection() {
  const { projects } = usePortfolio();

  return (
    <section
      id="projects"
      className="relative px-6 py-28 border-t border-zinc-900 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.12),transparent_60%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-5xl md:text-7xl font-black tracking-tight"
        >
          Featured Projects
        </motion.h2>

        <div className="space-y-12">
          {projects.map((project: any, index: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group grid md:grid-cols-2 overflow-hidden rounded-[36px] border border-zinc-800 bg-zinc-950/70 backdrop-blur-xl shadow-[0_0_80px_rgba(168,85,247,0.10)] hover:shadow-[0_0_60px_rgba(168,85,247,0.18)] hover:border-violet-500/30 transition-all duration-500"
            >
              {/* LEFT */}
              <div className="flex flex-col justify-center p-10 md:p-14">

                <p className="mb-5 text-zinc-500 text-lg">
                  0{index + 1}
                </p>

                <h3 className="text-4xl md:text-5xl font-extrabold mb-4">
                  {project.title}
                </h3>

                <p className="text-xl text-purple-300 mb-8 font-medium">
                  {project.subtitle}
                </p>

                <p className="text-zinc-400 leading-8 mb-10 text-lg">
                  {project.description}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.stack?.map((tech: string) => (
                    <span
                      key={tech}
                      className="rounded-full border border-zinc-700 px-5 py-2 text-sm text-zinc-300 transition hover:border-purple-500 hover:bg-purple-500/10 hover:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.link || "#"}
                    className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-7 py-3 font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:scale-105"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github || "#"}
                    className="rounded-full border border-zinc-700 px-7 py-3 font-semibold text-zinc-300 transition hover:border-purple-500 hover:bg-purple-500/10 hover:text-white"
                  >
                    Github
                  </a>
                </div>
              </div>

              {/* IMAGE */}
              <div className="relative flex items-center justify-center p-8 md:p-10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-700/10 via-transparent to-pink-600/10" />

                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src={project.image}
                  alt={project.title}
                  className="relative z-10 w-full max-w-[650px] rounded-[28px] border border-zinc-800 object-cover shadow-[0_0_70px_rgba(168,85,247,0.25)] transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}