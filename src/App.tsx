import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function App() {
  const [state, handleSubmit] = useForm("xyznpekn"); // Your Formspree form ID

  const [projects] = useState([
    { title: "Coding for Kids", desc: "Introducing primary school learners to basic coding and problem-solving." },
    { title: "Digital Skills Bootcamp", desc: "Helping youth gain practical knowledge in computer literacy and creativity tools." },
    { title: "Women in Tech", desc: "Empowering young women to join and thrive in the digital space." }
  ]);

  const [media] = useState([
    { type: "image", src: "/assets/sample1.jpg", alt: "Sample 1" },
    { type: "video", src: "/assets/sample2.mp4", alt: "Sample 2" }
  ]);

  const [announcements] = useState([
    "New Digital Skills Bootcamp starting soon!",
    "Register for Coding for Kids by end of month."
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">

      {/* Header */}
      <header className="w-full flex justify-between items-center p-4 shadow-md bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-600">Digital Star Space</h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="flex-1 flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Empowering Young Minds</h2>
        <p className="mb-6 max-w-2xl text-lg">
          At Digital Star Space, we inspire and equip young people with digital skills, creativity, and confidence for the future.
        </p>
        <a href="#projects" className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">
          Explore Projects
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="p-12 bg-white text-center">
        <h3 className="text-3xl font-bold mb-4 text-blue-700">About Us</h3>
        <p className="max-w-3xl mx-auto leading-relaxed">
          Digital Star Space is a youth-led initiative based in Mwanza, Tanzania.
          Our mission is to connect young people with the opportunities and tools
          they need to thrive in the digital era — through technology, innovation,
          and collaboration.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-12 bg-gray-100 text-center">
        <h3 className="text-3xl font-bold mb-8 text-blue-700">Our Projects</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-6">
              <h4 className="text-xl font-semibold mb-2">{p.title}</h4>
              <p className="text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Media Section */}
      <section className="p-12 bg-white text-center">
        <h3 className="text-3xl font-bold mb-8 text-blue-700">Media</h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {media.map((m, i) => m.type === "image" ? (
            <img key={i} src={m.src} alt={m.alt} className="rounded-xl shadow-md" />
          ) : (
            <video key={i} controls className="rounded-xl shadow-md">
              <source src={m.src} type="video/mp4" />
            </video>
          ))}
        </div>
      </section>

      {/* Announcements Section */}
      <section className="p-12 bg-gray-50 text-center">
        <h3 className="text-3xl font-bold mb-4 text-blue-700">Announcements</h3>
        <ul className="space-y-2">
          {announcements.map((a, i) => <li key={i} className="text-gray-700 font-medium">{a}</li>)}
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-12 bg-white text-center">
        <h3 className="text-3xl font-bold mb-4 text-blue-700">Get in Touch</h3>
        <p className="mb-6">
          We’d love to hear from you! Send us a message below.
        </p>
        {state.succeeded ? (
          <p className="text-green-600 font-semibold">Thanks! Your message has been received and will be processed.</p>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <input type="text" name="name" placeholder="Full Name" className="w-full p-3 rounded-lg border" required />
            <input type="email" name="email" placeholder="Email Address" className="w-full p-3 rounded-lg border" required />
            <textarea name="message" placeholder="Your Message" className="w-full p-3 rounded-lg border h-28" required />
            <button type="submit" disabled={state.submitting} className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        )}
      </section>

      {/* Footer */}
      <footer className="p-8 bg-blue-800 text-white text-center">
        <p className="font-semibold text-lg">© 2025 Digital Star Space</p>
        <p className="text-sm mb-4">Empowering young minds, shaping a digital future</p>
        <div className="flex justify-center space-x-6">
          <a href="https://www.youtube.com/@DigitalStarSpace" className="hover:text-yellow-400">YouTube</a>
          <a href="https://tiktok.com/@digitalstarspace" className="hover:text-yellow-400">TikTok</a>
          <a href="tel:+255712651956" className="hover:text-yellow-400">Call Us</a>
          <a href="mailto:magurusi72@gmail.com" className="hover:text-yellow-400">Email</a>
        </div>
      </footer>
    </div>
  );
}