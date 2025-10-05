import React from "react";
import hostsData from "./data/hosts.json";

const hosts = hostsData;

function App() {
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
        <p>Digital Star Space is a youth-led initiative based in Mwanza, Tanzania. Our mission is to connect young people with opportunities and tools to thrive in the digital era.</p>
      </section>

      <section id="projects">
        <h2>Our Projects</h2>
        <ul>
          <li>
            <strong>Coding for Kids:</strong> Basic coding & problem-solving for primary learners.
          </li>
          <li>
            <strong>Digital Skills Bootcamp:</strong> Practical computer literacy and creativity tools.
          </li>
          <li>
            <strong>Women in Tech:</strong> Empowering young women in digital space.
          </li>
        </ul>
      </section>

      <section id="announcements">
        <h2>Announcements</h2>
        <p>📢 New coding bootcamp starting next month!</p>
        <p>🌟 Women in Tech mentorship program open for registration.</p>
      </section>

      <section id="hosts">
        <h2>Our Hosts</h2>
        {hosts.map((host: any, idx: number) => (
          <div key={idx}>
            <h3>{host.name}</h3>
            <p>{host.bio}</p>
          </div>
        ))}
      </section>

      <section id="media">
        <h2>Media</h2>
        <p>Intro Video</p>
        <a href="https://youtu.be/KqygAfckRKQ?si=YAGZEQUNje2nu3XD" target="_blank" rel="noopener noreferrer">
          Watch Here
        </a>
      </section>

      <section id="contact">
        <h2>Get in Touch</h2>
        <form>
          <label>
            Full Name
            <input type="text" name="name" />
          </label>
          <label>
            Email Address
            <input type="email" name="email" />
          </label>
          <label>
            Your Message
            <textarea name="message"></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>
        <p>✅ Thank you! Your message has been received. We’ll respond soon.</p>
        <p>📞 Phone: +255 752 651 956</p>
        <p>📧 Email: magurusi72@gmail.com</p>
        <p>💖 Donate / Support</p>
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