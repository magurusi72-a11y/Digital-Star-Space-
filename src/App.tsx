import React from "react";

/**
 * Digital Star Space - Single-file main component
 * No external JSON imports, no runtime errors.
 */

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header / Nav */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-600 text-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Digital Star Space</h1>
            <p className="text-sm md:text-base">Empowering young minds, shaping a digital future</p>
          </div>
          <nav className="hidden md:flex space-x-6 text-sm">
            <a href="#home" className="hover:text-yellow-300">Home</a>
            <a href="#about" className="hover:text-yellow-300">About</a>
            <a href="#projects" className="hover:text-yellow-300">Projects</a>
            <a href="#media" className="hover:text-yellow-300">Media</a>
            <a href="#contact" className="hover:text-yellow-300">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">Empowering Young Minds</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Inspiring and equipping young people with digital skills, creativity, and confidence for the future.
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-blue-800 mb-4">About Us</h3>
          <p className="text-gray-700 leading-relaxed">
            Digital Star Space is a youth-led initiative based in Mwanza, Tanzania.
            Our mission is to connect young people with opportunities and tools to thrive in the digital era.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-blue-800 mb-6">Our Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <article className="p-6 rounded-xl border border-gray-100 shadow-sm bg-blue-50">
              <h4 className="text-xl font-semibold mb-2">Coding for Kids</h4>
              <p className="text-gray-700">Basic coding & problem-solving for primary learners.</p>
            </article>
            <article className="p-6 rounded-xl border border-gray-100 shadow-sm bg-blue-50">
              <h4 className="text-xl font-semibold mb-2">Digital Skills Bootcamp</h4>
              <p className="text-gray-700">Practical computer literacy and creativity tools.</p>
            </article>
            <article className="p-6 rounded-xl border border-gray-100 shadow-sm bg-blue-50">
              <h4 className="text-xl font-semibold mb-2">Women in Tech</h4>
              <p className="text-gray-700">Empowering young women in digital space.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="py-8 bg-yellow-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h4 className="text-2xl font-bold text-blue-800 mb-3">Announcements</h4>
          <div className="space-y-2 text-gray-700">
            <p>📢 New coding bootcamp starting next month!</p>
            <p>🌟 Women in Tech mentorship program open for registration.</p>
          </div>
        </div>
      </section>

      {/* Hosts */}
      <section id="hosts" className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-blue-800 mb-4">Our Hosts</h3>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h4 className="text-xl font-semibold">Marko Magurusi</h4>
            <p className="text-gray-700">Founder & educator based in Mwanza</p>
          </div>
        </div>
      </section>

      {/* Media */}
      <section id="media" className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-blue-800 mb-4">Media</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold">Intro Video</h4>
              <div className="mt-3 flex justify-center">
                <iframe
                  width="800"
                  height="450"
                  src="https://www.youtube.com/embed/KqygAfckRKQ"
                  title="Intro Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                <a
                  href="https://www.youtube.com/@DigitalStarSpace"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  Visit our YouTube channel
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 bg-blue-50">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-blue-800 mb-4">Get in Touch</h3>

          {/* Simple static form (works with Formspree by using action="/" if you add it) */}
          <form
            className="max-w-md space-y-3"
            action="https://formspree.io/f/xyznpekn"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full p-3 rounded border"
              required
            />
            <input
              type="email"
              name="_replyto"
              placeholder="Email Address"
              className="w-full p-3 rounded border"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-3 rounded border h-28"
              required
            />
            <button
              type="submit"
              className="bg-blue-700 text-white px-5 py-3 rounded hover:bg-blue-800"
            >
              Send Message
            </button>
          </form>

          <div className="mt-6 text-gray-700">
            <p>📞 Phone: +255 752 651 956</p>
            <p>📧 Email: magurusi72@gmail.com</p>
            <p className="mt-2">
              <a
                href="https://tiktok.com/@digitalstarspace"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                TikTok
              </a>{" "}
              •{" "}
              <a
                href="https://www.youtube.com/@DigitalStarSpace"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                YouTube
              </a>
            </p>
            <p className="mt-3">💖 Donate / Support</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-8 mt-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p>© 2025 Digital Star Space</p>
          <p className="text-sm">Empowering young minds, shaping a digital future</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://www.youtube.com/@DigitalStarSpace" target="_blank" rel="noreferrer">YouTube</a>
            <a href="https://tiktok.com/@digitalstarspace" target="_blank" rel="noreferrer">TikTok</a>
            <a href="#" target="_blank" rel="noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}