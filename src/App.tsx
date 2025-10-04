import React from "react";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100 text-gray-800 font-sans">
      
      {/* ===== Header ===== */}
      <header className="bg-indigo-700 text-white py-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-extrabold tracking-wide">
            DIGITAL STAR SPACE
          </h1>
          <nav className="space-x-6 font-medium">
            <a href="#about" className="hover:text-yellow-300">About</a>
            <a href="#programs" className="hover:text-yellow-300">Programs</a>
            <a href="#contact" className="hover:text-yellow-300">Contact</a>
          </nav>
        </div>
      </header>

      {/* ===== Hero Section ===== */}
      <section
        className="relative bg-cover bg-center h-[80vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1500&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 px-6">
          <h2 className="text-5xl font-extrabold mb-4">
            Empowering Young Minds
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Shaping a digital future through innovation, creativity, and
            education.
          </p>
          <a
            href="#programs"
            className="bg-yellow-400 text-indigo-900 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-yellow-500"
          >
            Explore Programs
          </a>
        </div>
      </section>

      {/* ===== About Section ===== */}
      <section id="about" className="py-20 bg-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h3 className="text-3xl font-bold text-indigo-700 mb-6">About Us</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            At <strong>DIGITAL STAR SPACE</strong>, we believe in nurturing
            talent, building digital skills, and preparing the next generation
            for a future driven by technology. Through innovation, creativity,
            and mentorship, we help young minds discover their true potential.
          </p>
        </div>
      </section>

      {/* ===== Programs Section ===== */}
      <section id="programs" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-indigo-700 mb-12">
            Our Programs
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-4">Coding for Kids</h4>
              <p className="text-gray-600">
                Introducing programming through fun, interactive, and creative
                projects that inspire curiosity.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-4">Digital Creativity</h4>
              <p className="text-gray-600">
                Exploring digital art, design, and content creation to unlock
                imagination and storytelling.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-4">Future Leaders</h4>
              <p className="text-gray-600">
                Building critical thinking, teamwork, and leadership skills for
                tomorrow’s innovators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Contact Section ===== */}
      <section id="contact" className="py-20 bg-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h3 className="text-3xl font-bold text-indigo-700 mb-6">
            Get in Touch
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Want to collaborate, volunteer, or learn more? Reach out and join us
            in shaping the digital future.
          </p>
          <a
            href="mailto:magurusi72@gmail.com"
            className="bg-indigo-700 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-indigo-800"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
        <div className="container mx-auto text-center">
          <p className="mb-2">
            © {new Date().getFullYear()} DIGITAL STAR SPACE. All rights reserved.
          </p>
          <div className="space-x-6">
            <a
              href="https://www.youtube.com/@DigitalStarSpace"
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
            <a
              href="https://tiktok.com/@digitalstarspace"
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
