import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("https://formspree.io/f/xyznpekn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("✅ Thank you! Your message has been received. We’ll respond soon.");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("❌ Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Navigation */}
      <header className="bg-blue-700 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Digital Star Space</h1>
          <nav className="space-x-6">
            <a href="#home" className="hover:text-yellow-300">Home</a>
            <a href="#about" className="hover:text-yellow-300">About</a>
            <a href="#projects" className="hover:text-yellow-300">Projects</a>
            <a href="#contact" className="hover:text-yellow-300">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="text-center py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <h2 className="text-4xl font-bold mb-4">Empowering Young Minds</h2>
        <p className="max-w-xl mx-auto text-lg">
          Inspiring and equipping young people with digital skills, creativity, and confidence for the future.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white text-center">
        <h3 className="text-3xl font-semibold mb-4">About Us</h3>
        <p className="max-w-3xl mx-auto text-gray-700">
          Digital Star Space is a youth-led initiative based in Mwanza, Tanzania.
          Our mission is to connect young people with opportunities and tools to thrive in the digital era.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-100 text-center">
        <h3 className="text-3xl font-semibold mb-8">Our Projects</h3>
        <div className="grid md:grid-cols-3 gap-8 px-6">
          {[
            { title: "Coding for Kids", desc: "Basic coding & problem-solving for primary learners." },
            { title: "Digital Skills Bootcamp", desc: "Practical computer literacy and creativity tools." },
            { title: "Women in Tech", desc: "Empowering young women in digital space." },
          ].map((p, i) => (
            <div key={i} className="bg-white p-6 shadow rounded-xl">
              <h4 className="font-bold text-xl mb-2">{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Announcements */}
      <section className="py-12 bg-white text-center">
        <h3 className="text-2xl font-semibold mb-4">Announcements</h3>
        <ul className="text-gray-700 space-y-2">
          <li>📢 New coding bootcamp starting next month!</li>
          <li>🌟 Women in Tech mentorship program open for registration.</li>
        </ul>
      </section>

      {/* Hosts Section */}
      <section className="py-12 bg-gray-50 text-center">
        <h3 className="text-2xl font-semibold mb-6">Our Hosts</h3>
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-white p-6 shadow-md rounded-xl max-w-sm">
            <h4 className="font-bold text-xl">Marko Magurusi</h4>
            <p>Founder & educator based in Mwanza.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100 text-center">
        <h3 className="text-3xl font-semibold mb-6">Get in Touch</h3>
        <p className="text-gray-700 mb-8">
          Send us a message or reach us at our contacts below.
        </p>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full p-3 border rounded-md"
          />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full p-3 border rounded-md"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full p-3 border rounded-md"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-green-600">{status}</p>}
        <div className="mt-8 text-gray-700">
          <p>📞 Phone: +255 752 651 956</p>
          <p>📧 Email: magurusi72@gmail.com</p>
          <a
            href="https://donate.example.com"
            className="inline-block mt-4 text-blue-700 underline hover:text-blue-900"
          >
            💖 Donate / Support
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white py-6 text-center">
        <p>© 2025 Digital Star Space</p>
        <p className="text-sm">Empowering young minds, shaping a digital future</p>
        <div className="space-x-4 mt-2">
          <a href="https://www.youtube.com/@magurusi" target="_blank">YouTube</a>
          <a href="https://tiktok.com/@magurusi" target="_blank">TikTok</a>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
        </div>
      </footer>
    </div>
  );
}