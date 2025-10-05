// App.tsx
import { useState } from "react";

type Project = {
  title: string;
  description: string;
};

type Host = {
  name: string;
  role: string;
};

type Announcement = {
  message: string;
};

type Media = {
  title: string;
  url: string;
};

function App() {
  const [projects] = useState<Project[]>([
    { title: "Coding for Kids", description: "Basic coding & problem-solving for primary learners." },
    { title: "Digital Skills Bootcamp", description: "Practical computer literacy and creativity tools." },
    { title: "Women in Tech", description: "Empowering young women in digital space." },
  ]);

  const [hosts] = useState<Host[]>([
    { name: "Marko Magurusi", role: "Founder & educator based in Mwanza" },
  ]);

  const [announcements] = useState<Announcement[]>([
    { message: "📢 New coding bootcamp starting next month!" },
    { message: "🌟 Women in Tech mentorship program open for registration." },
  ]);

  const [media] = useState<Media[]>([
    { title: "Intro Video", url: "https://youtu.be/KqygAfckRKQ?si=YAGZEQUNje2nu3XD" },
  ]);

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div>
      <header>
        <h1>Digital Star Space</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home">
        <h2>Empowering Young Minds</h2>
        <p>Inspiring and equipping young people with digital skills, creativity, and confidence for the future.</p>
      </section>

      <section id="about">
        <h2>About Us</h2>
        <p>
          Digital Star Space is a youth-led initiative based in Mwanza, Tanzania. Our mission is to connect young people
          with opportunities and tools to thrive in the digital era.
        </p>
      </section>

      <section id="projects">
        <h2>Our Projects</h2>
        {projects.map((p, i) => (
          <div key={i}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </section>

      <section id="announcements">
        <h2>Announcements</h2>
        {announcements.map((a, i) => (
          <p key={i}>{a.message}</p>
        ))}
      </section>

      <section id="hosts">
        <h2>Our Hosts</h2>
        {hosts.map((h, i) => (
          <div key={i}>
            <h3>{h.name}</h3>
            <p>{h.role}</p>
          </div>
        ))}
      </section>

      <section id="media">
        <h2>Media</h2>
        {media.map((m, i) => (
          <div key={i}>
            <h3>{m.title}</h3>
            <a href={m.url} target="_blank" rel="noopener noreferrer">
              Watch Here
            </a>
          </div>
        ))}
      </section>

      <section id="contact">
        <h2>Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email Address" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        {formSubmitted && <p>✅ Thank you! Your message has been received. We’ll respond soon.</p>}
        <p>📞 Phone: +255 752 651 956</p>
        <p>📧 Email: magurusi72@gmail.com</p>
        <p>💖 <a href="#">Donate / Support</a></p>
      </section>

      <footer>
        <p>© 2025 Digital Star Space</p>
        <p>Empowering young minds, shaping a digital future</p>
        <div>
          <a href="https://www.youtube.com/@DigitalStarSpace" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://www.tiktok.com/@digitalstarspace" target="_blank" rel="noopener noreferrer">TikTok</a>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

export default App;