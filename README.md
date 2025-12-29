import React from "react";

// Home.jsx – LearnFreeDigital
// Make sure Tailwind CSS is configured

export default function Home() {
  return (
    <>
      {/* Header / Nav */}
      <header className="bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="LearnFreeDigital logo" className="h-10" />
            <div>
              <div className="font-bold text-slate-900">LearnFreeDigital</div>
              <div className="text-xs text-slate-500">
                Free & Digital Learning for All
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#about" className="hover:text-sky-600">About</a>
            <a href="#programs" className="hover:text-sky-600">Programs</a>
            <a href="#projects" className="hover:text-sky-600">Projects</a>
            <a href="#contact" className="hover:text-sky-600">Contact</a>
          </nav>

          <a
            href="#join"
            className="hidden md:inline-block px-4 py-2 bg-sky-600 text-white rounded-lg text-sm font-medium hover:bg-sky-700"
          >
            Join the Community
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900">
              Learn. Grow. Go Digital.
            </h1>
            <p className="mt-4 text-slate-600">
              LearnFreeDigital is a community-driven platform empowering people
              with free digital skills, online learning resources, and practical
              knowledge for the modern world.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#join"
                className="px-6 py-3 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700"
              >
                Start Learning
              </a>
              <a
                href="#about"
                className="px-6 py-3 border border-sky-600 text-sky-600 rounded-lg font-medium hover:bg-sky-50"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-sm bg-white rounded-2xl p-6 shadow">
              <img
                src="/logo.png"
                alt="LearnFreeDigital"
                className="mx-auto h-36 mb-4"
              />
              <p className="text-center text-sm text-slate-600">
                LearnFreeDigital — empowering individuals with digital knowledge
                and free learning opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-slate-900">
            About LearnFreeDigital
          </h2>
          <p className="mt-3 text-slate-600 max-w-3xl">
            LearnFreeDigital is focused on providing free, accessible, and
            practical digital education. We support students, youth, and
            entrepreneurs with skills in technology, online work, and digital
            innovation.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-slate-900">Our Programs</h2>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-semibold">Digital Skills</h3>
              <p className="text-sm text-slate-600 mt-2">
                Web, freelancing, AI tools, and online work skills.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-semibold">Free Learning</h3>
              <p className="text-sm text-slate-600 mt-2">
                Open resources and guided self-learning paths.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-semibold">Youth Empowerment</h3>
              <p className="text-sm text-slate-600 mt-2">
                Supporting youth with practical digital knowledge.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-semibold">Community Projects</h3>
              <p className="text-sm text-slate-600 mt-2">
                Real projects and mentorship for learners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join */}
      <section id="join" className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            Join LearnFreeDigital
          </h2>
          <p className="mt-3 text-slate-600">
            Learn for free, build digital skills, and grow your future.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-slate-900">Contact Us</h2>

          <form
            className="mt-6 grid gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent (demo)");
            }}
          >
            <input
              required
              placeholder="Your name"
              className="px-4 py-3 rounded-lg border"
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="px-4 py-3 rounded-lg border"
            />
            <textarea
              required
              rows={4}
              placeholder="Message"
              className="px-4 py-3 rounded-lg border"
            />
            <button className="px-6 py-3 bg-sky-600 text-white rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-slate-600 text-center">
          © {new Date().getFullYear()} LearnFreeDigital. All rights reserved. <br />
          Contact:{" "}
          <a
            href="mailto:info@learnfreedigital.com"
            className="text-sky-600 underline"
          >
            info@learnfreedigital.com
          </a>
        </div>
      </footer>
    </>
  );
}