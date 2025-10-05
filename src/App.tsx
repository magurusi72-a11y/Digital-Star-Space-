import { useState } from "react";
import hostsData from "./data/hosts.json";

interface Host {
  name: string;
  role: string;
  location: string;
  bio: string;
  notes: string;
  media: { type: "video" | "image"; url: string }[];
}

export default function App() {
  const [message, setMessage] = useState("");

  return (
    <div>
      {/* Navbar */}
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero */}
      <section>
        <h1>Empowering Young Minds</h1>
        <p>Inspiring and equipping young people with digital skills, creativity, and confidence for the future.</p>
      </section>

      {/* About */}
      <section>
        <h2>About Us</h2>
        <p>
          Digital Star Space is a youth-led initiative based in Mwanza, Tanzania. Our mission is to connect young people with opportunities and tools to thrive in the digital era.
        </p>
      </section>

      {/* Projects */}
      <section>
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

      {/* Announcements */}
      <section>
        <h2>Announcements</h2>
        <ul>
          <li>📢 New coding bootcamp starting next month!</li>
          <li>🌟 Women in Tech mentorship program open for registration.</li>
        </ul>
      </section>

      {/* Hosts */}
      <section>
        <h2>Our Hosts</h2>
        {hostsData.map((host: Host, idx: number) => (
          <div key={idx}>
            <h3>{host.name}</h3>
            <p>{host.role} - {host.location}</p>
            <p>{host.bio}</p>
            <p>{host.notes}</p>
            <div>
              {host.media.map((m, i) => (
                m.type === "video" ? (
                  <iframe
                    key={i}
                    width="300"
                    height="169"
                    src={m.url.replace("watch?v=", "embed/")}
                    title={host.name}
                    allowFullScreen
                  ></iframe>
                ) : (
                  <img key={i} src={m.url} alt={host.name} width="300" />
                )
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Contact Form */}
      <section>
        <h2>Get in Touch</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setMessage("✅ Thank you! Your message has been received. We’ll respond soon.");
          }}
        >
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        {message && <p>{message}</p>}
        <p>📞 Phone: +255 752 651 956</p>
        <p>📧 Email: magurusi72@gmail.com</p>
      </section>

      {/* Donate */}
      <section>
        <h2>💖 Donate / Support</h2>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Digital Star Space</p>
        <p>Empowering young minds, shaping a digital future</p>
        <div>
          YouTube TikTok Facebook Instagram
        </div>
      </footer>
    </div>
  );
}