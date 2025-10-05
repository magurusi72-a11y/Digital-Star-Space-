// src/App.tsx
import { useState } from "react";
import hostsData from "./data/hosts.json";

function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const hosts = hostsData;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hapa unaweza kuongeza Formspree API call au email sending
    console.log({ fullName, email, message });
    setSubmitted(true);
  };

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
        <h1>Digital Star Space</h1>
        <p>Empowering Young Minds</p>
        <p>Inspiring and equipping young people with digital skills, creativity, and confidence for the future.</p>
      </header>

      <section id="about">
        <h2>About Us</h2>
        <p>Digital Star Space is a youth-led initiative based in Mwanza, Tanzania. Our mission is to connect young people with opportunities and tools to thrive in the digital era.</p>
      </section>

      <section id="projects">
        <h2>Our Projects</h2>
        <ul>
          <li>
            <h3>Coding for Kids</h3>
            <p>Basic coding & problem-solving for primary learners.</p>
          </li>
          <li>
            <h3>Digital Skills Bootcamp</h3>
            <p>Practical computer literacy and creativity tools.</p>
          </li>
          <li>
            <h3>Women in Tech</h3>
            <p>Empowering young women in digital space.</p>
          </li>
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
        <ul>
          {hosts.map((host, idx) => (
            <li key={idx}>
              <h3>{host.name}</h3>
              <p>{host.bio}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="media">
        <h2>Media</h2>
        <p>Intro Video</p>
      </section>

      <section id="contact">
        <h2>Get in Touch</h2>
        {submitted ? (
          <p>✅ Thank you! Your message has been received. We’ll respond soon.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              Full Name
              <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            </label>
            <label>
              Email Address
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
              Your Message
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
            </label>
            <button type="submit">Send Message</button>
          </form>
        )}
        <p>📞 Phone: +255 752 651 956</p>
        <p>📧 Email: magurusi72@gmail.com</p>
        <p>💖 Donate / Support</p>
      </section>

      <footer>
        <p>© 2025 Digital Star Space</p>
        <p>Empowering young minds, shaping a digital future</p>
        <div>
          <span>YouTube</span>
          <span>TikTok</span>
          <span>Facebook</span>
          <span>Instagram</span>
        </div>
      </footer>
    </div>
  );
}

export default App;