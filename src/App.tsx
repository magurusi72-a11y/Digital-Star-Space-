import { useState } from "react";

interface Project {
  title: string;
  description: string;
}

interface MediaItem {
  title: string;
  url: string;
}

interface Host {
  name: string;
  role: string;
  location: string;
}

interface Announcement {
  message: string;
}

export default function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const projects: Project[] = [
    { title: "Coding for Kids", description: "Basic coding & problem-solving for primary learners." },
    { title: "Digital Skills Bootcamp", description: "Practical computer literacy and creativity tools." },
    { title: "Women in Tech", description: "Empowering young women in digital space." },
  ];

  const media: MediaItem[] = [
    { title: "Intro Video", url: "https://www.youtube.com/embed/KqygAfckRKQ" },
  ];

  const hosts: Host[] = [
    { name: "Marko Magurusi", role: "Founder & educator", location: "Mwanza" },
  ];

  const announcements: Announcement[] = [
    { message: "📢 New coding bootcamp starting next month!" },
    { message: "🌟 Women in Tech mentorship program open for registration." },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="scroll-smooth font-sans">
      {/* Header */}
      <header className="p-6 bg-blue-600 text-white flex justify-between items-center">
        <h1 className="text-2xl font-bold">Digital Star Space</h1>
        <nav className="space-x-4">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="text-center p-10 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Empowering Young Minds</h2>
        <p>Inspiring and equipping young people with digital skills, creativity, and confidence for the future.</p>
      </section>

      {/* About */}
      <section id="about" className="p-10">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p>Digital Star Space is a youth-led initiative based in Mwanza, Tanzania. Our mission is to connect young people with opportunities and tools to thrive in the digital era.</p>
      </section>

      {/* Projects */}
      <section id="projects" className="p-10 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="p-4 border rounded shadow">
              <h3 className="font-bold">{p.title}</h3>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Announcements */}
      <section className="p-10">
        <h2 className="text-2xl font-bold mb-4">Announcements</h2>
        <ul className="list-disc pl-5 space-y-2">
          {announcements.map((a, i) => (
            <li key={i}>{a.message}</li>
          ))}
        </ul>
      </section>

      {/* Hosts */}
      <section className="p-10 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Our Hosts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hosts.map((host, i) => (
            <div key={i} className="p-4 border rounded shadow">
              <h3 className="font-bold">{host.name}</h3>
              <p>{host.role} based in {host.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Media */}
      <section className="p-10">
        <h2 className="text-2xl font-bold mb-4">Media</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {media.map((m, i) => (
            <div key={i}>
              <h3 className="font-bold mb-2">{m.title}</h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={m.url}
                  title={m.title}
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-64 md:h-80"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="p-10 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <div>
            <label>Full Name</label>
            <input type="text" required className="w-full border p-2 rounded"/>
          </div>
          <div>
            <label>Email Address</label>
            <input type="email" required className="w-full border p-2 rounded"/>
          </div>
          <div>
            <label>Your Message</label>
            <textarea required className="w-full border p-2 rounded"/>
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Send Message</button>
          {formSubmitted && <p className="text-green-600 font-bold">✅ Thank you! Your message has been received. We’ll respond soon.</p>}
        </form>

        <div className="mt-6">
          <p>📞 Phone: +255 752 651 956</p>
          <p>📧 Email: magurusi72@gmail.com</p>
          <p>💖 <a href="https://www.paypal.com/donate" target="_blank" rel="noreferrer">Donate / Support</a></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center bg-blue-600 text-white">
        <p>© 2025 Digital Star Space</p>
        <p>Empowering young minds, shaping a digital future</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://www.youtube.com/@DigitalStarSpace" target="_blank" rel="noreferrer">YouTube</a>
          <a href="https://www.tiktok.com/@digitalstarspace" target="_blank" rel="noreferrer">TikTok</a>
          <a href="#" target="_blank" rel="noreferrer">Facebook</a>
          <a href="#" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </footer>
    </div>
  );
}