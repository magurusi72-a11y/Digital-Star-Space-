import React from "react";
import hostsData from "./data/hosts.json";

interface Media {
  type: "video" | "image";
  url: string;
}

interface Host {
  name: string;
  role: string;
  location: string;
  bio: string;
  notes: string;
  media: Media[];
}

function App() {
  return (
    <div className="App">
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
          <li><strong>Coding for Kids:</strong> Basic coding & problem-solving for primary learners.</li>
          <li><strong>Digital Skills Bootcamp:</strong> Practical computer literacy and creativity tools.</li>
          <li><strong>Women in Tech:</strong> Empowering young women in digital space.</li>
        </ul>
      </section>

      <section id="announcements">
        <h2>Announcements</h2>
        <p>📢 New coding bootcamp starting next month!</p>
        <p>🌟 Women in Tech mentorship program open for registration.</p>
      </section>

      <section id="hosts">
        <h2>Our Hosts</h2>
        {hostsData.map((host: Host, idx: number) => (
          <div key={idx} className="host-card">
            <h3>{host.name}</h3>
            <p>{host.role}</p>
            <p>{host.location}</p>
            <p>{host.bio}</p>
            <p>{host.notes}</p>

            <div className="media">
              {host.media.map((m: Media, i: number) =>
                m.type === "video" ? (
                  <iframe
                    key={i}
                    width="300"
                    height="200"
                    src={m.url.replace("watch?v=", "embed/")}
                    title={`Video of ${host.name}`}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <img key={i} src={m.url} alt={`Media of ${host.name}`} width="300" />
                )
              )}
            </div>
          </div>
        ))}
      </section>

      <section id="contact">
        <h2>Get in Touch</h2>
        <form>
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email Address" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
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
        <div className="social">
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