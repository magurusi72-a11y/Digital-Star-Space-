import { useState } from "react";

// Types
type Project = { title: string; description: string };
type MediaItem = { type: "image" | "video"; url: string };
type Host = { name: string; bio: string };
type Announcement = { text: string };

export default function App() {
  // State
  const [projects] = useState<Project[]>([
    { title: "Coding for Kids", description: "Basic coding & problem-solving for primary learners." },
    { title: "Digital Skills Bootcamp", description: "Practical computer literacy and creativity tools." },
    { title: "Women in Tech", description: "Empowering young women in digital space." },
  ]);

  const [media] = useState<MediaItem[]>([
    { type: "image", url: "https://via.placeholder.com/400x250" },
    { type: "video", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  ]);

  const [hosts] = useState<Host[]>([
    { name: "Marko Magurusi", bio: "Founder & educator based in Mwanza." },
  ]);

  const [announcements] = useState<Announcement[]>([
    { text: "New coding bootcamp starting next month!" },
    { text: "Women in Tech mentorship program open for registration." },
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
          Inspiring and equipping young people with digital skills, creativity, and confidence for the future.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="p-12 bg-white text-center">
        <h3 className="text-3xl font-bold mb-4 text-blue-700">About Us</h3>
        <p className="max-w-3xl mx-auto leading-relaxed">
          Digital Star Space is a youth-led initiative based in Mwanza, Tanzania. Our mission is to connect young people with opportunities and tools to thrive in the digital era.
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

      {/* Media Section */}
      <section className="p-12 bg-white text-center">
        <h3 className="text-3xl font-bold mb-8 text-blue-700">Media</h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {media.map((m, i) => (
            <div key={i}>
              {m.type === "image" ? (
                <img src={m.url} alt={`media-${i}`} className="rounded-lg shadow-md" />
              ) : (
                <iframe
                  className="w-full h-64 rounded-lg shadow-md"
                  src={m.url}
                  title={`video-${i}`}
                  allowFullScreen
                ></iframe>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Announcements */}
      <section className="p-12 bg-gray-50 text-center">
        <h3 className="text-3xl font-bold mb-4 text-blue-700">Announcements</h3>
        <ul className="max-w-3xl mx-auto space-y-2">
          {announcements.map((a, i) => (
            <li key={i} className="bg-yellow-100 p-4 rounded-lg shadow-sm">{a.text}</li>
          ))}
        </ul>
      </section>

      {/* Hosts Section */}
      <section className="p-12 bg-white text-center">
        <h3 className="text-3xl font-bold mb-4 text-blue-700">Our Hosts</h3>
        <div className="max-w-3xl mx-auto space-y-4">
          {hosts.map((h, i) => (
            <div key={i} className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold">{h.name}</h4>
              <p className="text-gray-600">{h.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-12 bg-white text-center">
        <h3 className="text-3xl font-bold mb-4 text-blue-700">Get in Touch</h3>
        <p className="mb-6">Send us a message or reach us at our contacts below.</p>
        <form
          action="https://formspree.io/f/xyznpekn"
          method="POST"
          className="max-w-md mx-auto space-y-4"
        >
          <input type="text" name="name" placeholder="Full Name" className="w-full p-3 rounded-lg border" required />
          <input type="email" name="email" placeholder="Email Address" className="w-full p-3 rounded-lg border" required />
          <textarea name="message" placeholder="Your Message" className="w-full p-3 rounded-lg border h-28" required></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition">Send Message</button>
        </form>
        <p className="mt-4 text-gray-600">Phone: +255 752 651 956 | Email: magurusi72@gmail.com</p>
        <p className="mt-2 text-blue-700"><a href="#" target="_blank" rel="noopener noreferrer">Donate / Support</a></p>
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