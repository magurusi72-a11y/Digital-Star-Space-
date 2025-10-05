import { useState } from "react";

interface Project {
  title: string;
  description: string;
}

interface Announcement {
  id: number;
  text: string;
}

interface Media {
  id: number;
  type: "image" | "video";
  url: string;
}

interface Host {
  id: number;
  name: string;
  role: string;
}

export default function App() {
  const [projects] = useState<Project[]>([
    { title: "Coding for Kids", description: "Basic coding & problem-solving for primary learners." },
    { title: "Digital Skills Bootcamp", description: "Practical computer literacy and creativity tools." },
    { title: "Women in Tech", description: "Empowering young women in digital space." },
  ]);

  const [announcements] = useState<Announcement[]>([
    { id: 1, text: "📢 New coding bootcamp starting next month!" },
    { id: 2, text: "🌟 Women in Tech mentorship program open for registration." },
  ]);

  const [media] = useState<Media[]>([
    { id: 1, type: "video", url: "https://youtu.be/KqygAfckRKQ?si=YAGZEQUNje2nu3XD" },
  ]);

  const [hosts] = useState<Host[]>([
    { id: 1, name: "Marko Magurusi", role: "Founder & educator based in Mwanza." },
  ]);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Message submitted:", formData);
  };

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

      {/* Hero */}
      <section id="home" className="flex-1 flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Empowering Young Minds</h2>
        <p className="mb-6 max-w-2xl text-lg">
          Inspiring and equipping young people with digital skills, creativity, and confidence for the future.
        </p>
      </section>

      {/* About */}
      <section id="about" className="p-12 bg-white text-center">
        <h3 className="text-3xl font-bold mb-4 text-blue-700">About Us</h3>
        <p className="max-w-3xl mx-auto leading-relaxed">
          Digital Star Space is a youth-led initiative based in Mwanza, Tanzania. Our mission is to connect young people with opportunities and tools to thrive in the digital era.
        </p>
      </section>

      {/* Projects */}
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

      {/* Announcements */}
      <section className="p-12 bg-white text-center">
        <h3 className="text-3xl font-bold mb-4 text-blue-700">Announcements</h3>
        <ul className="max-w-xl mx-auto space-y-2">
          {announcements.map(a => (
            <li key={a.id} className="text-gray-700">{a.text}</li>
          ))}
        </ul>
      </section>

      {/* Hosts */}
      <section className="p-12 bg-gray-100 text-center">
        <h3 className="text-3xl font-bold mb-4 text-blue-700">Our Hosts</h3>
        <div className="max-w-3xl mx-auto space-y-4">
          {hosts.map(h => (
            <div key={h.id} className="bg-white rounded-2xl shadow-md p-4">
              <h4 className="text-xl font-semibold">{h.name}</h4>
              <p>{h.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Media */}
      <section className="p-12 bg-white text-center">
        <h3 className="text-3xl font-bold mb-4 text-blue-700">Media</h3>
        <div className="max-w-4xl mx-auto space-y-4">
          {media.map(m => (
            m.type === "video" ? (
              <iframe
                key={m.id}
                width="100%"
                height="315"
                src={m.url.replace("watch?v=", "embed/")}
                title="Media Video"
                allowFullScreen
              ></iframe>
            ) : (
              <img key={m.id} src={m.url} alt="Media" className="mx-auto rounded-lg shadow-md" />
            )
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="p-12 bg-gray-100 text-center">
        <h3 className="text-3xl font-bold mb-4 text-blue-700">Get in Touch</h3>
        <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
            className="w-full p-3 rounded-lg border"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
            className="w-full p-3 rounded-lg border"
          />
          <textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={e => setFormData({...formData, message: e.target.value})}
            className="w-full p-3 rounded-lg border h-28"
          />
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
        {submitted && <p className="mt-4 text-green-600 font-semibold">✅ Thank you! Your message has been received. We’ll respond soon.</p>}
        <div className="mt-6 space-y-1">
          <p>📞 Phone: +255 752 651 956</p>
          <p>📧 Email: magurusi72@gmail.com</p>
          <p>💖 Donate / Support</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-8 bg-blue-800 text-white text-center">
        <p className="font-semibold text-lg">© 2025 Digital Star Space</p>
        <p className="text-sm mb-4">Empowering young minds, shaping a digital future</p>
        <div className="flex justify-center space-x-6">
          <a href="https://www.youtube.com/@DigitalStarSpace" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">YouTube</a>
          <a href="https://tiktok.com/@digitalstarspace" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">TikTok</a>
          <a href="#" className="hover:text-yellow-400">Facebook</a>
          <a href="#" className="hover:text-yellow-400">Instagram</a>
        </div>
      </footer>
    </div>
  );
}