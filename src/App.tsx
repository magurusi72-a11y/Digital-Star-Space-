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
  message: string;
}

interface Media {
  title: string;
  link: string;
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
    { message: "📢 New coding bootcamp starting next month!" },
    { message: "🌟 Women in Tech mentorship program open for registration." },
  ]);

  const [media] = useState<Media[]>([
    { title: "Intro Video", link: "https://youtu.be/KqygAfckRKQ?si=YAGZEQUNje2nu3XD" },
  ]);

  return (
    <div>
      {/* SEO Meta Tags */}
      <head>
        <title>Digital Star Space | Empowering Young Minds in Mwanza</title>
        <meta name="description" content="Digital Star Space is a youth-led initiative in Mwanza, Tanzania. We empower young people with coding, digital skills, and creativity for a better future." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Digital Star Space",
            "url": "https://digital-star-space.vercel.app/",
            "logo": "https://digital-star-space.vercel.app/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+255752651956",
              "contactType": "customer service",
              "email": "magurusi72@gmail.com"
            },
            "sameAs": [
              "https://www.youtube.com/@DigitalStarSpace",
              "https://www.tiktok.com/@digitalstarspace",
              "https://www.facebook.com/DigitalStarSpace",
              "https://www.instagram.com/DigitalStarSpace"
            ]
          })}
        </script>
      </head>

      {/* Header */}
      <header>
        <h1>Digital Star Space</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home">
        <h2>Empowering Young Minds</h2>
        <p>Inspiring and equipping young people with digital skills, creativity, and confidence for the future.</p>
      </section>

      {/* About */}
      <section id="about">
        <h2>About Us</h2>
        <p>Digital Star Space is a youth-led initiative based in Mwanza, Tanzania. Our mission is to connect young people with opportunities and tools to thrive in the digital era.</p>
      </section>

      {/* Projects */}
      <section id="projects">
        <h2>Our Projects</h2>
        {projects.map((p, i) => (
          <div key={i}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </section>

      {/* Announcements */}
      <section id="announcements">
        <h2>Announcements</h2>
        {announcements.map((a, i) => (
          <p key={i}>{a.message}</p>
        ))}
      </section>

      {/* Hosts */}
      <section id="hosts">
        <h2>Our Hosts</h2>
        {hosts.map((host, idx) => (
          <div key={idx}>
            <h3>{host.name}</h3>
            <p>{host.role} based in {host.location}</p>
          </div>
        ))}
      </section>

      {/* Media */}
      <section id="media">
        <h2>Media</h2>
        {media.map((m, idx) => (
          <div key={idx}>
            <a href={m.link} target="_blank" rel="noopener noreferrer">{m.title}</a>
          </div>
        ))}
      </section>

      {/* Contact */}
      <section id="contact">
        <h2>Get in Touch</h2>
        <form
          action="https://formspree.io/f/xyznpekn"
          method="POST"
        >
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" id="name" required />

          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" required />

          <label htmlFor="message">Your Message</label>
          <textarea name="message" id="message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
        <p>✅ Thank you! Your message has been received. We’ll respond soon.</p>
        <p>📞 Phone: +255 752 651 956</p>
        <p>📧 Email: magurusi72@gmail.com</p>
        <p>💖 <a href="#">Donate / Support</a></p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Digital Star Space</p>
        <p>Empowering young minds, shaping a digital future</p>
        <div>
          <a href="https://www.youtube.com/@DigitalStarSpace" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://www.tiktok.com/@digitalstarspace" target="_blank" rel="noopener noreferrer">TikTok</a>
          <a href="https://www.facebook.com/DigitalStarSpace" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com/DigitalStarSpace" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </footer>
    </div>
  );
}