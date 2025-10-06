import React from "react";

export default function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="bg-blue-800 text-white py-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Digital Star Space</h1>
          <ul className="flex space-x-6 text-sm md:text-base">
            <li><a href="#home" className="hover:text-yellow-300">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-300">About</a></li>
            <li><a href="#projects" className="hover:text-yellow-300">Projects</a></li>
            <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="text-center py-16 bg-gradient-to-r from-blue-100 to-white">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">
          Empowering Young Minds
        </h2>
        <p className="text-lg max-w-2xl mx-auto">
          Inspiring and equipping young people with digital skills, creativity,
          and confidence for the future.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">About Us</h2>
        <p className="text-gray-700 leading-relaxed">
          Digital Star Space is a youth-led initiative based in Mwanza, Tanzania.
          Our mission is to connect young people with opportunities and tools
          to thrive in the digital era.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Projects</h2>
          <ul className="grid md:grid-cols-3 gap-6 text-gray-700">
            <li className="bg-blue-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg">Coding for Kids</h3>
              <p>Basic coding & problem-solving for primary learners.</p>
            </li>
            <li className="bg-blue-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg">Digital Skills Bootcamp</h3>
              <p>Practical computer literacy and creativity tools.</p>
            </li>
            <li className="bg-blue-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg">Women in Tech</h3>
              <p>Empowering young women in digital space.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="bg-yellow-50 py-12 text-center">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Announcements</h2>
        <p>📢 New coding bootcamp starting next month!</p>
        <p className="mt-2">
          🌟 Women in Tech mentorship program open for registration.
        </p>
      </section>

      {/* Hosts Section */}
      <section className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Hosts</h2>
        <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold">Marko Magurusi</h3>
          <p>Founder & Educator based in Mwanza</p>
        </div>
      </section>

      {/* Media Section */}
      <section className="text-center py-12 bg-white">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Media</h2>
        <h3 className="text-xl font-semibold mb-