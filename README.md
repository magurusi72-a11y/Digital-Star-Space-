import React from "react";

// Home.jsx - Complete homepage for THE FRIENDS (Tailwind-ready) // Usage: place this file in your React app (e.g. src/pages/Home.jsx) and // make sure Tailwind CSS is configured. Replace /logo.png with the real // logo path.

export default function Home() { return ( <div className="min-h-screen bg-white text-slate-800 antialiased"> {/* Header / Nav */} <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100"> <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="flex items-center justify-between h-16"> <div className="flex items-center gap-3"> <img src="/logo.png" alt="The Friends logo" className="h-12 w-auto" /> <div> <h1 className="text-lg font-semibold text-slate-900">THE FRIENDS</h1> <p className="text-xs text-slate-500 -mt-0.5">Empowering education through friendship</p> </div> </div>

<nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          <a href="#about" className="hover:text-sky-600">About</a>
          <a href="#programs" className="hover:text-sky-600">Programs</a>
          <a href="#projects" className="hover:text-sky-600">Projects</a>
          <a href="#join" className="hover:text-sky-600">Join</a>
          <a href="#contact" className="text-sky-600 font-semibold hover:underline">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#join" className="hidden md:inline-block px-4 py-2 bg-sky-600 text-white rounded-lg text-sm font-medium shadow-sm hover:bg-sky-700">Become a Friend</a>
          <button className="md:hidden p-2 rounded-md bg-slate-100" aria-label="Open menu">
            {/* simple hamburger icon (non-functional placeholder) */}
            <svg className="h-5 w-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>

  {/* Hero */}
  <main>
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-slate-900">Empowering Education Through Friendship</h2>
            <p className="text-lg text-slate-600 max-w-xl">Together we support learning, build opportunities, and shape brighter futures. Join us in creating sustainable change in our communities through education and partnership.</p>

            <div className="flex items-center gap-3">
              <a href="#join" className="inline-flex items-center gap-2 px-5 py-3 bg-sky-600 text-white rounded-lg font-medium shadow hover:bg-sky-700">Join Us</a>
              <a href="#about" className="inline-flex items-center gap-2 px-5 py-3 border border-sky-600 text-sky-600 rounded-lg font-medium hover:bg-sky-50">Learn More</a>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-slate-500">
              <div className="px-3 py-2 bg-slate-50 rounded">📘 Education Support</div>
              <div className="px-3 py-2 bg-slate-50 rounded">👩‍🏫 Teacher Empowerment</div>
              <div className="px-3 py-2 bg-slate-50 rounded">🎒 Student Welfare</div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-sm bg-sky-50 rounded-2xl p-6 shadow">
              <img src="/logo.png" alt="The Friends logo large" className="mx-auto h-36 w-auto mb-4" />
              <p className="text-center text-sm text-slate-600">The Friends — supporting schools and students through partnerships and community action.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* About */}
    <section id="about" className="bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-slate-900">Who We Are</h3>
            <p className="mt-3 text-slate-600">THE FRIENDS is a community-driven organization built on the values of friendship, education and solidarity. We partner with schools, teachers, parents and local stakeholders to improve learning environments, provide materials, and run programs that give children the chance to thrive.</p>
          </div>

          <div className="space-y-3">
            <div className="p-4 bg-sky-50 rounded-lg">
              <h4 className="font-semibold text-slate-900">🤝 Partnerships</h4>
              <p className="text-sm text-slate-600 mt-1">We build long-term partnerships for sustainable local development.</p>
            </div>

            <div className="p-4 bg-sky-50 rounded-lg">
              <h4 className="font-semibold text-slate-900">📘 Learning Support</h4>
              <p className="text-sm text-slate-600 mt-1">We improve learning environments and provide materials.</p>
            </div>

            <div className="p-4 bg-sky-50 rounded-lg">
              <h4 className="font-semibold text-slate-900">🌱 Growth</h4>
              <p className="text-sm text-slate-600 mt-1">We empower communities and nurture long-term growth.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Programs */}
    <section id="programs" className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-2xl font-bold text-slate-900">What We Do</h3>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <h4 className="font-semibold text-slate-900">Education Support</h4>
            <p className="mt-2 text-slate-600 text-sm">Renovations, libraries and classroom materials for schools.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <h4 className="font-semibold text-slate-900">Teacher Empowerment</h4>
            <p className="mt-2 text-slate-600 text-sm">Workshops, training and incentives for teachers.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <h4 className="font-semibold text-slate-900">Student Welfare</h4>
            <p className="mt-2 text-slate-600 text-sm">Uniforms, materials and talent programs for learners.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <h4 className="font-semibold text-slate-900">Community Engagement</h4>
            <p className="mt-2 text-slate-600 text-sm">Involving parents and leaders for lasting change.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Projects */}
    <section id="projects" className="bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-2xl font-bold text-slate-900">Recent Projects</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="bg-sky-50 p-6 rounded-2xl shadow-sm">
            <h4 className="font-semibold">Classroom Renovation – 2025</h4>
            <p className="text-sm text-slate-600 mt-2">Renovated a classroom and provided new desks for 75 students.</p>
          </article>

          <article className="bg-sky-50 p-6 rounded-2xl shadow-sm">
            <h4 className="font-semibold">Learning Materials Distribution</h4>
            <p className="text-sm text-slate-600 mt-2">Distributed 500 textbooks to primary school students.</p>
          </article>

          <article className="bg-sky-50 p-6 rounded-2xl shadow-sm">
            <h4 className="font-semibold">Teachers Workshop</h4>
            <p className="text-sm text-slate-600 mt-2">A 2-day workshop on modern teaching methods.</p>
          </article>
        </div>
      </div>
    </section>

    {/* Impact counters */}
    <section className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-2xl font-bold text-slate-900">Our Impact in Numbers</h3>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-white rounded-lg">
            <div className="text-3xl font-extrabold text-sky-600">1,200+</div>
            <div className="text-sm text-slate-600 mt-1">Students Reached</div>
          </div>

          <div className="p-6 bg-white rounded-lg">
            <div className="text-3xl font-extrabold text-sky-600">75+</div>
            <div className="text-sm text-slate-600 mt-1">Teachers Supported</div>
          </div>

          <div className="p-6 bg-white rounded-lg">
            <div className="text-3xl font-extrabold text-sky-600">6</div>
            <div className="text-sm text-slate-600 mt-1">Schools Benefited</div>
          </div>

          <div className="p-6 bg-white rounded-lg">
            <div className="text-3xl font-extrabold text-sky-600">20+</div>
            <div className="text-sm text-slate-600 mt-1">Community Programs</div>
          </div>
        </div>
      </div>
    </section>

    {/* Join / CTA */}
    <section id="join" className="bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h3 className="text-2xl font-bold text-slate-900">Be Part of the Change</h3>
        <p className="mt-3 text-slate-600">Your partnership can transform lives. Support a school, volunteer, or help us with resources.</p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="#contact" className="px-6 py-3 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700">Contact Us</a>
          <a href="#" className="px-6 py-3 border border-sky-600 text-sky-600 rounded-lg font-medium hover:bg-sky-50">Donate</a>
        </div>
      </div>
    </section>

    {/* Contact */}
    <section id="contact" className="bg-slate-50 border-t border-slate-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-2xl font-bold text-slate-900">Contact Us</h3>
        <p className="text-sm text-slate-600 mt-2">Send us a message and we'll get back to you.</p>

        <form className="mt-6 grid grid-cols-1 gap-4" onSubmit={(e) => { e.preventDefault(); alert('Form submitted (demo)'); }}>
          <div className="grid sm:grid-cols-2 gap-4">
            <input required type="text" name="name" placeholder="Your name" className="px-4 py-3 rounded-lg border border-slate-200 bg-white" />
            <input required type="email" name="email" placeholder="Email address" className="px-4 py-3 rounded-lg border border-slate-200 bg-white" />
          </div>

          <input required type="text" name="subject" placeholder="Subject" className="px-4 py-3 rounded-lg border border-slate-200 bg-white" />

          <textarea required name="message" rows={5} placeholder="Your message" className="px-4 py-3 rounded-lg border border-slate-200 bg-white"></textarea>

          <div className="flex items-center justify-between gap-4">
            <button type="submit" className="px-6 py-3 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700">Send Message</button>
            <div className="text-sm text-slate-500">Or reach us at: <a href="mailto:info@thefriends.org" className="text-sky-600 underline">info@thefriends.org</a></div>
          </div>
        </form>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-white border-t border-slate-100 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="The Friends logo" className="h-10" />
          <div className="text-sm text-slate-600">© {new Date().getFullYear()} THE FRIENDS. All rights reserved.</div>
        </div>

        <div className="flex items-center gap-6 text-sm text-slate-600">
          <a href="#" className="hover:text-sky-600">Privacy</a>
          <a href="#" className="hover:text-sky-600">Terms</a>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="facebook" className="hover:text-sky-600">Facebook</a>
            <a href="#" aria-label="whatsapp" className="hover:text-sky-600">WhatsApp</a>
            <a href="#" aria-label="email" className="hover:text-sky-600">Email</a>
          </div>
        </div>
      </div>
    </footer>
  </main>
</div>

); }