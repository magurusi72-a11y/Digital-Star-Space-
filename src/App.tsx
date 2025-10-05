import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

// Simple host password
const HOST_PASSWORD = "1234";

export default function App() {
  // --- State ---
  const [isHost, setIsHost] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");

  // Announcements
  const [announcements, setAnnouncements] = useState(() => {
    return JSON.parse(localStorage.getItem("announcements") || '["Welcome to Digital Star Space!"]');
  });

  // Projects / Lessons
  const [projects, setProjects] = useState(() => {
    return JSON.parse(localStorage.getItem("projects") || '[]');
  });

  // Media
  const [media, setMedia] = useState(() => {
    return JSON.parse(localStorage.getItem("media") || '[]');
  });

  // Host profiles
  const [hosts, setHosts] = useState(() => {
    return JSON.parse(localStorage.getItem("hosts") || '[]');
  });

  // Formspree
  const [state, handleSubmit] = useForm("xyznpekn");

  // --- Effects ---
  useEffect(() => {
    localStorage.setItem("announcements", JSON.stringify(announcements));
  }, [announcements]);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem("media", JSON.stringify(media));
  }, [media]);

  useEffect(() => {
    localStorage.setItem("hosts", JSON.stringify(hosts));
  }, [hosts]);

  // --- Handlers ---
  const handleLogin = () => {
    if (passwordInput === HOST_PASSWORD) setIsHost(true);
    else alert("Incorrect password!");
  };

  const addAnnouncement = () => {
    const text = prompt("Enter new announcement:");
    if (text) setAnnouncements([text, ...announcements]);
  };

  const addProject = () => {
    const text = prompt("Enter project/lesson title:");
    if (text) setProjects([text, ...projects]);
  };

  const addMedia = () => {
    const url = prompt("Enter media URL (image/video):");
    if (url) setMedia([url, ...media]);
  };

  const addHost = () => {
    const name = prompt("Host Name:");
    const bio = prompt("Bio:");
    const cv = prompt("CV Link:");
    if (name && bio && cv) setHosts([...hosts, { name, bio, cv }]);
  };

  // --- UI ---
  if (!isHost) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-4 text-blue-600">Host Login</h1>
        <input type="password" value={passwordInput} onChange={e => setPasswordInput(e.target.value)} placeholder="Enter password" className="p-3 border rounded mb-4"/>
        <button onClick={handleLogin} className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Login</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">

      {/* Dashboard */}
      <header className="w-full flex flex-col md:flex-row justify-between items-center p-4 shadow-md bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-600">Digital Star Space - Host Dashboard</h1>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <button onClick={addAnnouncement} className="px-4 py-2 bg-yellow-400 rounded hover:bg-yellow-500">Add Announcement</button>
          <button onClick={addProject} className="px-4 py-2 bg-green-400 rounded hover:bg-green-500">Add Project</button>
          <button onClick={addMedia} className="px-4 py-2 bg-purple-400 rounded hover:bg-purple-500">Add Media</button>
          <button onClick={addHost} className="px-4 py-2 bg-blue-400 rounded hover:bg-blue-500">Add Host</button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="flex-1 flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Empowering Young Minds</h2>
        <p className="mb-6 max-w-2xl text-lg">
          At Digital Star Space, we inspire and equip young people with digital skills, creativity, and confidence for the future.
        </p>

        {/* Latest Announcement Preview */}
        {announcements.length > 0 && (
          <div className="bg-yellow-400 text-black px-4 py-2 rounded mb-4 max-w-2xl">
            <strong>Latest Announcement:</strong> {announcements[0]}
          </div>
        )}

        <div className="flex space-x-4">
          <a href="#projects" className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">Explore Projects</a>
          <a href="https://www.paypal.com/donate/example" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition">Donate / Support</a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="p-12 bg-gray-100 text-center">
        <h3 className="text-3xl font-bold mb-8 text-blue-700">Our Projects</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.length > 0 ? projects.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-6">
              <h4 className="text-xl font-semibold mb-2">{p}</h4>
            </div>
          )) : <p>No projects added yet.</p>}
        </div>
      </section>

      {/* Media Gallery */}
      <section id="media" className="p-12 bg-white text-center">
        <h3 className="text-3xl font-bold mb-8 text-blue-700">Media Gallery</h3>
        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {media.length > 0 ? media.map((m, i) => (
            <div key={i} className="h-40 rounded-xl overflow-hidden bg-gray-200">
              <img src={m} alt={`media-${i}`} className="w-full h-full object-cover"/>
            </div>
          )) : <p>No media added yet.</p>}
        </div>
      </section>

      {/* Host Profiles */}
      <section id="hosts" className="p-12 bg-gray-100 text-center">
        <h3 className="text-3xl font-bold mb-8 text-blue-700">Meet Our Hosts</h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {hosts.length > 0 ? hosts.map((host, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-md">
              <h4 className="text-xl font-semibold mb-2">{host.name}</h4>
              <p className="text-gray-600 mb-2">{host.bio}</p>
              <a href={host.cv} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View CV</a>
            </div>
          )) : <p>No hosts added yet.</p>}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-12 bg-white text-center">
        <h3 className="text-3xl font-bold mb-4 text-blue-700">Get in Touch</h3>
        <p className="mb-6">We’d love to hear from you! Send us a message below.</p>
        {state.succeeded ? (
          <p className="text-green-600 font-semibold mb-4">Thanks! Your message has been received and will be processed.</p>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <input type="text" placeholder="Full Name" name="name" className="w-full p-3 rounded-lg border" required />
            <input type="email" placeholder="Email Address" name="email" className="w-full p-3 rounded-lg border" required />
            <textarea placeholder="Your Message" name="message" className="w-full p-3 rounded-lg border h-28" required></textarea>
            <button type="submit" disabled={state.submitting} className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition">Send Message</button>
          </form>
        )}
      </section>

      {/* Footer */}
      <footer className="p-8 bg-blue-800 text-white text-center">
        <p className="font-semibold text-lg">© 2025 Digital Star Space</p>
        <p className="text-sm mb-4">Empowering young minds, shaping a digital future</p>
        <div className="flex justify-center space-x-6">
          <a href="https://www.youtube.com/@DigitalStarSpace" className="hover:text-yellow-400">YouTube</a>
          <a href="https://tiktok.com/@digitalstarspace" className="hover:text-yellow-400">TikTok</a>
          <a href="#" className="hover:text-yellow-400">Facebook</a>
          <a href="#" className="hover:text-yellow-400">Instagram</a>
        </div>
      </footer>

    </div>
  );
}