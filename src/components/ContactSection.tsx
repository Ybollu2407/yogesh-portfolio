import { motion } from "framer-motion";
import portfolio from "../data/portfolio.json";


export default function ContactSection() {
  const profile = portfolio.profile;
  const social = profile.social;

  return (
    <section
      id="contact"
      className="relative py-32 border-t border-zinc-900 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.18),transparent_40%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[5px] text-violet-400 font-semibold mb-6">
              Reach Out
            </p>

            <h2 className="text-6xl md:text-7xl font-black leading-none mb-4">
              Let&apos;s Build
            </h2>

            <h2 className="text-6xl md:text-7xl font-black leading-none bg-gradient-to-r from-violet-400 to-pink-500 text-transparent bg-clip-text mb-8">
              Something Great
            </h2>

            <p className="text-zinc-400 text-xl leading-relaxed max-w-xl mb-10">
              Open to collaborations, freelance work and AI / Full Stack
              opportunities. Let&apos;s connect and create impactful products.
            </p>

            <div className="flex flex-wrap gap-4">

              {/* Email */}
              <a
                href={`mailto:${social.email}`}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-pink-500 text-white font-semibold shadow-[0_0_35px_rgba(168,85,247,0.45)] hover:scale-105 transition-all duration-300"
              >
                Send Email
              </a>

              {/* LinkedIn */}
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full border border-zinc-800 hover:border-violet-500 text-white font-semibold hover:bg-violet-500/10 transition-all duration-300"
              >
                LinkedIn
              </a>


            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-[36px] border border-zinc-900 bg-black/40 p-10 backdrop-blur-xl shadow-[0_0_60px_rgba(168,85,247,0.08)]"
          >
            <div className="space-y-5">

              {/* Email */}
              <a
                href={`mailto:${profile.social.email}`}
                className="group block"
              >
                <div className="rounded-[32px] border border-zinc-900 bg-gradient-to-br from-zinc-950 to-black p-8 hover:border-violet-500/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.18)] hover:-translate-y-1 transition-all duration-300">
                  <p className="text-zinc-500 text-sm uppercase tracking-widest mb-2">
                    Email 📩
                  </p>
                  <h3 className="text-2xl font-bold group-hover:text-violet-300 transition">
                    Contact me
                  </h3>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918010560097"
                target="_blank"
                className="group block"
              >
                <div className="rounded-[32px] border border-zinc-900 bg-gradient-to-br from-zinc-950 to-black p-8 hover:border-violet-500/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.18)] hover:-translate-y-1 transition-all duration-300">
                  <p className="text-zinc-500 text-sm uppercase tracking-widest mb-2">
                    WhatsApp⚡
                  </p>
                  <h3 className="text-2xl font-bold group-hover:text-violet-300 transition">
                    Chat with me
                  </h3>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={profile.social.instagram}
                target="_blank"
                className="group block"
              >
                <div className="rounded-[32px] border border-zinc-900 bg-gradient-to-br from-zinc-950 to-black p-8 hover:border-violet-500/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.18)] hover:-translate-y-1 transition-all duration-300">
                  <p className="text-zinc-500 text-sm uppercase tracking-widest mb-2">
                    Instagram 🌐
                  </p>
                  <h3 className="text-2xl font-bold group-hover:text-violet-300 transition">
                    DM anytime
                  </h3>
                </div>
              </a>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}