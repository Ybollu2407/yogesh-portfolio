import { motion } from "framer-motion";
import { usePortfolio } from "../hooks/usePortfolio";

export default function ExperienceSection() {
  const { experience } = usePortfolio();

  return (
    <section
      id="experience"
      className="relative py-40 border-t border-zinc-900 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.12),transparent_45%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="mb-20">
          <p className="uppercase tracking-[0.25em] text-violet-400 font-semibold mb-4">
            Journey
          </p>

          <h2 className="text-6xl md:text-7xl font-black text-white mb-6">
            Experience
          </h2>

          <p className="text-zinc-400 text-lg max-w-2xl leading-8">
            My journey building AI products, full stack systems and modern
            digital experiences.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-zinc-800 ml-4">
          {experience.map((item: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative mb-10 ml-10"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[54px] top-10 w-5 h-5 rounded-full bg-violet-500 shadow-[0_0_30px_rgba(168,85,247,0.9)]" />

              {/* Card */}
              <motion.div
                whileHover={{
                  y: -6,
                  scale: 1.01,
                }}
                className="rounded-[32px] border border-zinc-800 bg-zinc-950/70 backdrop-blur-xl p-7 md:p-8 shadow-[0_0_50px_rgba(168,85,247,0.08)] hover:border-violet-500/40 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 mb-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-2">
                      {item.role}
                    </h3>

                    <p className="text-violet-300 text-xl font-semibold">
                      {item.company}
                    </p>

                    <p className="text-zinc-500 text-sm mt-2">
                      {item.location}
                    </p>
                  </div>

                  <span className="w-fit px-5 py-2 rounded-full border border-zinc-700 text-zinc-300 text-sm">
                    {item.period}
                  </span>
                </div>

                {/* Summary */}
                <p className="text-zinc-400 text-lg leading-8 mb-7 max-w-4xl">
                  {item.summary}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-3">
                  {item.highlights?.map(
                    (highlight: string, i: number) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-200 text-sm hover:bg-violet-500/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] transition-all duration-300"
                      >
                        {highlight}
                      </span>
                    )
                  )}
                </div>

                {/* Bottom */}
                <div className="flex justify-end mt-4">
                  <span className="text-5xl md:text-6xl font-black text-violet-500/15">
                    0{index + 1}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}