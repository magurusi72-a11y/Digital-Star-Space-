import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

// Sample data for projects, announcements, hosts
const projectsData = [
  { title: "Coding for Kids", description: "Introducing primary school learners to basic coding and problem-solving." },
  { title: "Digital Skills Bootcamp", description: "Helping youth gain practical knowledge in computer literacy and creativity tools." },
  { title: "Women in Tech", description: "Empowering young women to join and thrive in the digital space." }
];

const announcementsData = [
  { text: "New Coding Bootcamp starting October 15, 2025." },
  { text: "Digital Art Contest submissions open till November 5, 2025." }
];

const hostsData = [
  { name: "Marko Magurusi", role: "Founder & Lead Trainer", cvLink: "#" },
  { name: "Jane Mwangi", role: "Community Manager", cvLink: "#" }
];

const mediaData = [
  { type: "image", src: "/assets/sample1.jpg" },
  { type: "image", src: "/assets/sample2.jpg" },
  { type: "video", src: "/assets/sample-video.mp4" }
];

export default function App() {
  const [projects] = useState(projectsData);
  const [announcements] = useState(announcementsData);
  const [hosts] = useState(hostsData);
  const [media] = useState(mediaData);

  const [formState, handleSubmit] = useForm("xyznpekn");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">

      {/* Header */}
      <header className="w-full flex justify-between items-center p-4 shadow-md bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-600">Digital Star Space</h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#announcements" className="hover:text-blue-600">Announcements</a>
          <a href="#hosts" className="hover:text-blue-600">Hosts</a>
          <a href="#media" className="hover:text-blue-600">Media</a>
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
              <p className="text-gray-600">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Announcements Section */}
      <section id="announcements" className="p-12 bg-white text-center">
        <h3 className="text-3xl font-bold mb-4 text-blue-700">Announcements</h3>
        <ul className="list-disc list-inside max-w-3xl mx-auto text-left">
          {announcements.map((a, i) => (
            <li key={i} className="mb-2">{a.text}</li>
          ))}
        </ul>
      </section>

      {/* Hosts Section */}
      <section id="hosts" className="p-12 bg-gray-100 text-center">
        <h3 className="text-3xl font-bold mb-8 text-blue-700">Hosts</h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {hosts.map((host, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md p-6">
              <h4 className="text-xl font-semibold mb-2">{host.name}</h4>
              <p className="text-gray-600 mb-2">{host.role}</p>
              <a href={host.cvLink} className="text-blue-600 hover:underline">View CV</a>
            </div>
          ))}
        </div>
      </section>

      {/* Media Section */}
      <section id="media" className="p-12 bg-white text-center">
        <h3 className="text-3xl font-bold mb-8 text-blue-700">Media Gallery</h3>
        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {media.map((m, i) =>
            m.type === "image" ? (
              <img key={i} src={m.src} alt={`media-${i}`} className="rounded-xl w-full h-48 object-cover" />
            ) : (
              <video key={i} controls className="rounded-xl w-full h-48 object-cover">
                <source src={m.src} type="video/mp4" />
              </video>
            )
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-12 bg-gray-100 text-center">
        <h3 className="text-3xl font-bold mb-4 text-blue-700">Contact Us</h3>
        <p className="mb-6">We’d love to hear from you! Send us a message below.</p>
        {formState.succeeded ? (
          <p className="text-green-600 font-semibold">Thank you! Your message has been received and will be processed.</p>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <input type="text" name="name" placeholder="Full Name" className="w-full p-3 rounded-lg border" required />
            <input type="email" name="email" placeholder="Email Address" className="w-full p-3 rounded-lg border" required />
            <textarea name="message" placeholder="Your Message" className="w-full p-3 rounded-lg border h-28" required></textarea>
            <button type="submit" disabled={formState.submitting} className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Submit
            </button>
          </form>
        )}
        <p className="mt-4">Phone: +255 752 651 956 | Email: info@digitalstarspace.org</p>
        <a href="#" className="text-yellow-500 hover:underline">Donate / Support</a>
      </section>

      {/* Footer */}
      <footer className="p-8 bg-blue-800 text-white text-center">
        <p className="font-semibold text-lg">© 2025 Digital Star Space</p>
        <p className="text-sm mb-4">Empowering young minds, shaping a digital future</p>
        <div className="flex justify-center space-x-6">
          <a href="https://www.youtube.com/@DigitalStarSpace" className="hover:text-yellow-400">YouTube</a>
          <a href="https://tiktok.com/@digitalstarspace" className="hover:text-yellow-400">TikTok</a>
          <a href="#" className="hover:text-yellow-400">Facebook</a>
          <a href="#" className="hover:text-yellow-400">Instagram</a>
        </div>
      </footer>

    </div>
  );
}