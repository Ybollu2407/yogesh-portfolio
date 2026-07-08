import { motion } from "framer-motion";

export default function Navbar() {
  const navItems = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-24 flex items-center justify-between">

        {/* LOGO */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.06 }}
          className="text-4xl font-black tracking-tight text-white"
        >
          YB
        </motion.a>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              whileHover={{ y: -2 }}
              className="relative text-sm font-semibold tracking-wide text-zinc-400 hover:text-white transition duration-300 group"
            >
              {item.name}

              {/* PREMIUM UNDERLINE */}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-violet-500 to-pink-500 transition-all duration-300 group-hover:w-full shadow-[0_0_12px_rgba(168,85,247,0.7)]" />
            </motion.a>
          ))}
        </div>

        {/* RESUME BUTTON */}
        <motion.a
          href="/resumee.pdf"
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="px-7 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 shadow-[0_0_25px_rgba(168,85,247,0.45)] hover:shadow-[0_0_40px_rgba(236,72,153,0.6)] transition-all duration-300"
        >
          Resume
        </motion.a>
      </div>
    </motion.nav>
  );
}
