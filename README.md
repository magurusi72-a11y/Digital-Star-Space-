import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <header className="bg-blue-700 text-white p-4">
        <nav className="max-w-5xl mx-auto flex flex-wrap justify-between items-center">
          <h1 className="text-xl font-bold">Digital Star Space</h1>
          <div className="space-x-4">
            <a href="#home" className="hover:text-yellow-300">Home</a>
            <a href="#about" className="hover:text-yellow-300">About</a>
            <a href="#projects" className="hover:text-yellow-300">Projects</a>
            <a href="#contact" className="hover:text-yellow-300">Contact</a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto p-6 space-y-16">
        {/* Hero Section */}
        <section id="home" className="text-center mt-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-blue-700"
          >
            Empowering Young Minds
          </motion.h2>
          <p className="text-lg text-gray-700 mt-4">
            Inspiring and equipping young people with digital skills, creativity,
            and confidence for the future.
          </p>
        </section>

        {/* About Section */}
        <section id="about" className="space-y-3">
          <h3 className="text-2xl font-semibold text-blue-700">About Us</h3>
          <p>
            Digital Star Space is a youth-led initiative based in Mwanza, Tanzania.
            Our mission is to connect young people with opportunities and tools to
            thrive in the digital era.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-3">
          <h3 className="text-2xl font-semibold text-blue-700">Our Projects</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Coding for Kids:</strong> Basic coding & problem-solving for
              primary learners.
            </li>
            <li>
              <strong>Digital Skills Bootcamp:</strong> Practical computer literacy
              and creativity tools.
            </li>
            <li>
              <strong>Women in Tech:</strong> Empowering young women in the digital
              space.
            </li>
          </ul>
        </section>

        {/* Announcements */}
        <section id="announcements" className="space-y-2">
          <h3 className="text-2xl font-semibold text-blue-700">Announcements</h3>
          <p>📢 New coding bootcamp starting next month!</p>
          <p>🌟 Women in Tech mentorship program open for registration.</p>
        </section>

        {/* Hosts */}
        <section id="hosts">
          <h3 className="text-2xl font-semibold text-blue-700">Our Hosts</h3>
          <p>
            <strong>Marko Magurusi</strong>
            <br />
            Founder & Educator based in Mwanza
          </p>
        </section>

        {/* Contact Form */}
        <section id="contact" className="space-y-3">
          <h3 className="text-2xl font-semibold text-blue-700">Get in Touch</h3>
          <form className="space-y-3 bg-white p-5 shadow rounded-2xl">
            <input className="w-full p-2 border rounded" placeholder="Full Name" />
            <input className="w-full p-2 border rounded" placeholder="Email Address" />
            <textarea
              className="w-full p-2 border rounded"
              placeholder="Your Message"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-700 text-white px-5 py-2 rounded hover:bg-blue-800"
            >
              Send Message
            </button>
          </form>
          <p>📞 Phone: +255 752 651 956</p>
          <p>📧 Email: magurusi72@gmail.com</p>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-lg mt-2">
            💖 Donate / Support
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-100 text-center py-6 mt-10">
        <p>© 2025 Digital Star Space</p>
        <p>Empowering young minds, shaping a digital future</p>
        <div className="mt-3 space-x-4">
          <a href="#" className="hover:text-yellow-400">YouTube</a>
          <a href="#" className="hover:text-yellow-400">TikTok</a>
          <a href="#" className="hover:text-yellow-400">Facebook</a>
          <a href="#" className="hover:text-yellow-400">Instagram</a>
        </div>
      </footer>
    </div>
  );
}