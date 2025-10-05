import { useState } from "react";

interface Project {
  title: string;
  description: string;
}

interface Host {
  name: string;
  role: string;
  location: string;
}

interface Announcement {
  text: string;
}

interface MediaItem {
  title: string;
  url: string;
}

export default function App() {
  const [projects] = useState<Project[]>([
    { title: "Coding for Kids", description: "Basic coding & problem-solving for primary learners." },
    { title: "Digital Skills Bootcamp", description: "Practical computer literacy and creativity tools." },
    { title: "Women in Tech", description: "Empowering young women in digital space." },
  ]);

  const [hosts] = useState<Host[]>([
    { name: "Marko Magurusi", role: "Founder & educator", location: "Mwanza" },
  ]);

  const [announcements] = useState<Announcement[]>([
    { text: "📢 New coding bootcamp starting next month!" },
    { text: "🌟 Women in Tech mentorship program open for registration." },
  ]);

  const [media] = useState<MediaItem[]>([
    { title: "Intro Video", url: "https://youtu.be/KqygAfckRKQ?si=YAGZEQUNje2nu3XD" },
  ]);

  return (
    <div className="app font-sans text-gray-900">
      {/* Meta/SEO */}
      <head>
        <title>Digital Star Space - Empowering Young Minds</title>
        <meta name="description" content="Digital Star Space empowers young people in Mwanza, Tanzania, with digital skills, creativity, and confidence." />
        <meta name="keywords" content="Digital Skills, Coding, Youth, Tanzania, Bootcamp, Women in Tech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Digital Star Space" />
        <meta property="og:description" content="Empowering young people with digital skills and creativity." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://digital-star-space.vercel.app/" />
      </head>

      {/* Header / Nav */}
      <header className="bg-blue-600 text-white p-4 flex justify-between">
        <h1 className="text-xl font-bold">Digital Star Space</h1>
        <nav className="space-x-4">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="text-center py-12 bg-gray-100">
        <h2 className="text-3xl font-bold">Empowering Young Minds</h2>
        <p className="mt-4 text-lg">
          Inspiring and equipping young people with digital skills, creativity, and confidence for the future.
        </p>
      </section>

      {/* About */}
      <section id="about" className="py-8 px-4 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-2">About Us</h3>
        <p>
          Digital Star Space is a youth-led initiative based in Mwanza, Tanzania. Our mission is to connect young people with opportunities and tools to thrive in the digital era.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="py-8 px-4 max-w-4xl mx-auto bg-gray-50">
        <h3 className="text-2xl font-semibold mb-4">Our Projects</h3>
        <div className="space-y-4">
          {projects.map((p, i) => (
            <div key={i} className="p-4 border rounded">
              <h4 className="font-bold">{p.title}</h4>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Announcements */}
      <section id="announcements" className="py-8 px-4 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Announcements</h3>
        <ul className="space-y-2">
          {announcements.map((a, i) => (
            <li key={i}>{a.text}</li>
          ))}
        </ul>
      </section>

      {/* Hosts */}
      <section id="hosts" className="py-8 px-4 max-w-4xl mx-auto bg-gray-50">
        <h3 className="text-2xl font-semibold mb-4">Our Hosts</h3>
        <div className="space-y-4">
          {hosts.map((host, i) => (
            <div key={i} className="p-4 border rounded">
              <h4 className="font-bold">{host.name}</h4>
              <p>{host.role} based in {host.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Media */}
      <section id="media" className="py-8 px-4 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Media</h3>
        {media.map((m, i) => (
          <div key={i} className="mb-4">
            <h4 className="font-bold">{m.title}</h4>
            <iframe
              width="560"
              height="315"
              src={m.url.replace("watch?v=", "embed/")}
              title={m.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </section>

      {/* Contact */}
      <section id="contact" className="py-8 px-4 max-w-4xl mx-auto bg-gray-100">
        <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
        <form action="https://formspree.io/f/xyznpekn" method="POST" className="space-y-4">
          <div>
            <label className="block mb-1">Full Name</label>
            <input type="text" name="name" required className="w-full p-2 border rounded"/>
          </div>
          <div>
            <label className="block mb-1">Email Address</label>
            <input type="email" name="email" required className="w-full p-2 border rounded"/>
          </div>
          <div>
            <label className="block mb-1">Your Message</label>
            <textarea name="message" required className="w-full p-2 border rounded"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send Message</button>
          <p className="mt-2 text-green-700">✅ Thank you! Your message has been received. We’ll respond soon.</p>
        </form>
        <p className="mt-4">📞 Phone: +255 752 651 956</p>
        <p>📧 Email: magurusi72@gmail.com</p>
        <p>💖 <a href="#" className="text-blue-600 underline">Donate / Support</a></p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center mt-8">
        <p>© 2025 Digital Star Space</p>
        <p>Empowering young minds, shaping a digital future</p>
        <div className="space-x-4 mt-2">
          <a href="https://www.youtube.com/@DigitalStarSpace" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://www.tiktok.com/@digitalstarspace" target="_blank" rel="noopener noreferrer">TikTok</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </footer>
    </div>
  );
}