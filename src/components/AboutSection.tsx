import { motion } from "framer-motion";
import portfolio from "../data/portfolio.json";

export default function AboutSection() {
  const profile = portfolio.profile;

  const skills = [
    {
      title: "AI / ML",
      desc: "Intelligent systems & AI-powered experiences",
      no: "01",
    },
    {
      title: "Full Stack",
      desc: "Scalable web applications & backend systems",
      no: "02",
    },
    {
      title: "UI / UX",
      desc: "Modern interfaces with premium feel",
      no: "03",
    },
  ];

  return (
    <section
      id="about"
      className="relative border-t border-zinc-900 overflow-hidden py-28 px-6"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.12),transparent_50%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="uppercase tracking-[0.25em] text-violet-400 text-sm mb-5 font-medium">
            KNOW ME BETTER
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-none mb-6">
            About Me
          </h2>

          <h3 className="text-3xl md:text-5xl font-black leading-tight mb-8">
            Building intelligent digital experiences through{" "}
            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              AI & Full Stack Engineering
            </span>
          </h3>

          <p className="text-zinc-400 text-lg leading-9 mb-10 max-w-xl">
            {profile.bio}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/resumee.pdf"
              target="_blank"
              className="rounded-full bg-gradient-to-r from-violet-600 to-pink-500 px-8 py-4 text-white font-semibold shadow-[0_0_35px_rgba(168,85,247,0.35)] hover:scale-105 transition"
            >
              View Resume
            </a>

            <a
              href="#contact"
              className="rounded-full border border-zinc-800 px-8 py-4 text-white font-medium hover:border-violet-500/40 hover:bg-violet-500/10 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          {skills.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="
              rounded-[34px]
              border border-violet-500/20
              bg-zinc-950/60
              shadow-[0_0_30px_rgba(168,85,247,0.08)]
              hover:border-violet-500/40
              hover:shadow-[0_0_45px_rgba(168,85,247,0.18)]
              transition-all duration-300
              p-10
              "
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-4xl font-black">
                  {item.title}
                </h3>

                <span className="text-violet-400 text-3xl font-bold">
                  {item.no}
                </span>
              </div>

              <p className="text-zinc-400 text-lg">
                {item.desc}
              </p>
            </motion.div>
          ))}

          {/* Focus Card */}
          <div className="rounded-[36px] bg-gradient-to-br from-violet-950/30 to-pink-950/20 border border-violet-500/15 p-8 shadow-[0_0_45px_rgba(168,85,247,0.10)]">
            <p className="text-violet-300 text-sm uppercase tracking-widest mb-3">
              Current Focus
            </p>

            <h4 className="text-3xl font-black mb-4">
              AI Products + Premium Full Stack Systems
            </h4>

            <p className="text-zinc-400 leading-8">
              Focused on building AI-first products, scalable applications and
              modern digital experiences with strong engineering and design.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
