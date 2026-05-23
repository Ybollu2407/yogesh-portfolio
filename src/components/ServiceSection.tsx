import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "AI / ML",
    desc: "Intelligent systems, AI products and automation experiences.",
    icon: "🧠",
  },
  {
    number: "02",
    title: "Full Stack",
    desc: "Scalable web applications, APIs and backend systems.",
    icon: "💻",
  },
  {
    number: "03",
    title: "UI / UX",
    desc: "Modern premium interfaces with strong user experience.",
    icon: "✨",
  },
];

export default function ServiceSection() {
  return (
    <section
      id="services"
      className="relative py-32 border-t border-zinc-900 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.15),transparent_45%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="uppercase tracking-[4px] text-violet-400 font-semibold mb-4">
            Expertise
          </p>

          <h2 className="text-5xl md:text-7xl font-black mb-6">
            Services
          </h2>

          <p className="text-zinc-400 text-lg max-w-2xl leading-8">
            Creating AI-first products, scalable systems and premium
            digital experiences with modern technologies.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="relative overflow-hidden rounded-[34px]
              border border-zinc-800 bg-[#0a0a0a]
              p-8 shadow-[0_0_45px_rgba(168,85,247,0.08)]
              hover:border-violet-500/40 transition-all duration-500"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-pink-500/5 opacity-0 hover:opacity-100 transition duration-500" />

              {/* Number */}
              <div className="absolute top-6 right-6 text-violet-400/70 text-2xl font-bold">
                {service.number}
              </div>

              {/* Icon */}
              <div className="text-5xl mb-8 relative z-10">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-3xl font-black mb-4 relative z-10">
                {service.title}
              </h3>

              {/* Desc */}
              <p className="text-zinc-400 leading-8 relative z-10">
                {service.desc}
              </p>

              {/* Bottom line */}
              <div className="mt-10 h-[2px] w-16 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}