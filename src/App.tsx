import { useState } from "react";
import hostsData from "./data/hosts.json";

function App() {
  const [messageSent, setMessageSent] = useState(false);

  const hosts = hostsData;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate sending message
    setMessageSent(true);
  };

  return (
    <div>
      <header>
        <h1>Digital Star Space</h1>
        <nav>Home | About | Projects | Contact</nav>
      </header>

      <section id="hero">
        <h2>Empowering Young Minds</h2>
        <p>Inspiring and equipping young people with digital skills, creativity, and confidence for the future.</p>
      </section>

      <section id="about">
        <h2>About Us</h2>
        <p>Digital Star Space is a youth-led initiative based in Mwanza, Tanzania. Our mission is to connect young people with opportunities and tools to thrive in the digital era.</p>
      </section>

      <section id="projects">
        <h2>Our Projects</h2>
        <ul>
          <li><strong>Coding for Kids:</strong> Basic coding & problem-solving for primary learners.</li>
          <li><strong>Digital Skills Bootcamp:</strong> Practical computer literacy and creativity tools.</li>
          <li><strong>Women in Tech:</strong> Empowering young women in digital space.</li>
        </ul>
      </section>

      <section id="announcements">
        <h2>Announcements</h2>
        <ul>
          <li>📢 New coding bootcamp starting next month!</li>
          <li>🌟 Women in Tech mentorship program open for registration.</li>
        </ul>
      </section>

      <section id="hosts">
        <h2>Our Hosts</h2>
        {hosts.map((host) => (
          <div key={host.name}>
            <h3>{host.name}</h3>
            <p>{host.bio}</p>
          </div>
        ))}
      </section>

      <section id="media">
        <h2>Media</h2>
        <video controls>
          <source src="/assets/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <section id="contact">
        <h2>Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        {messageSent && <p>✅ Thank you! Your message has been received. We’ll respond soon.</p>}
        <p>📞 Phone: +255 752 651 956</p>
        <p>📧 Email: magurusi72@gmail.com</p>
        <p>💖 Donate / Support</p>
      </section>

      <footer>
        <p>© 2025 Digital Star Space</p>
        <p>Empowering young minds, shaping a digital future</p>
        <div>
          <a href="https://www.youtube.com/@DigitalStarSpace">YouTube</a>
          <a href="https://www.tiktok.com/@digitalstarspace">TikTok</a>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

export default App;