import { useEffect, useState } from "react";
import { useForm } from "@formspree/react";

interface Host {
  name: string;
  bio: string;
  cv: string;
}

interface Announcement {
  title: string;
  date: string;
  description: string;
}

export default function App() {
  const [isHost, setIsHost] = useState(false);
  const [projects, setProjects] = useState<string[]>([
    "Coding for Kids",
    "Digital Skills Bootcamp",
    "Women in Tech",
  ]);
  const [media, setMedia] = useState<string[]>([
    "/assets/sample1.jpg",
    "/assets/sample2.jpg",
    "/assets/sample3.jpg",
  ]);
  const [hosts, setHosts] = useState<Host[]>([
    { name: "Marko Magurusi", bio: "Founder", cv: "link-to-cv" },
  ]);
  const [announcements, setAnnouncements] = useState<Announcement[]>([
    { title: "New Bootcamp Starting", date: "Oct 10, 2025", description: "Join our digital skills bootcamp for beginners!" },
  ]);

  const [formState, handleSubmit] = useForm("xyznpekn"); // replace with your Formspree ID

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("host") === "1") setIsHost(true);
  }, []);

  // Handlers for host dashboard editing
  const addProject = () => setProjects([...projects, "New Project"]);
  const removeProject = (idx: number) => setProjects(projects.filter((_, i) => i !== idx));
  const addMedia = () => setMedia([...media, "/assets/sample-new.jpg"]);
  const removeMedia = (idx: number) => setMedia(media.filter((_, i) => i !== idx));
  const addHost = () => setHosts([...hosts, { name: "New Host", bio: "", cv: "" }]);
  const removeHost = (idx: number) => setHosts(hosts.filter((_, i) => i !== idx));
  const addAnnouncement = () => setAnnouncements([...announcements, { title: "New Announcement", date: "Date", description: "Details..." }]);
  const removeAnnouncement = (idx: number) => setAnnouncements(announcements.filter((_, i) => i !== idx));

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="w-full flex justify-between items-center p-4 shadow-md bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-600">Digital Star Space</h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#media" className="hover:text-blue-600">Media</a>
          <a href="#hosts" className="hover:text-blue-600">Hosts</a>
          <a href="#announcements" className="hover:text-blue-600">News</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="flex-1 flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Empowering Young Minds</h2>
        <p className="mb-6 max-w-2xl text-lg">
          At Digital Star Space, we inspire and equip young people with digital skills, creativity, and confidence for the future.
        </p>
        <a href="#projects" className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">
          Explore Projects
        </a>
      </section>

      {/* About */}
      <section id="about" className="p-12 bg-white text-center">
        <h3 className="text-3xl font-bold mb-4 text-blue-700">About Us</h3>
        <p className="max-w-3xl mx-auto leading-relaxed">
          Digital Star Space is a youth-led initiative based in Mwanza, Tanzania.
          Our mission is to connect young people with the opportunities and tools
          they need to thrive in the digital era — through technology, innovation,
          and collaboration.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="p-12 bg-gray-100 text-center">
        <h3 className="text-3xl font-bold mb-6 text-blue-700">Our Projects</h3>
        {isHost && <button onClick={addProject} className="mb-4 bg-green-500 text-white px-4 py-2 rounded">Add Project</button>}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((p: string, i: number) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-6">
              <h4 className="text-xl font-semibold mb-2">{p}</h4>
              <p className="text-gray-600">Description for {p}</p>
              {isHost && <button onClick={() => removeProject(i)} className="mt-2 text-red-600 underline">Remove</button>}
            </div>
          ))}
        </div>
      </section>

      {/* Media */}
      <section id="media" className="p-12 bg-white text-center">
        <h3 className="text-3xl font-bold mb-6 text-blue-700">Media</h3>
        {isHost && <button onClick={addMedia} className="mb-4 bg-green-500 text-white px-4 py-2 rounded">Add Media</button>}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {media.map((m: string, i: number) => (
            <div key={i} className="h-40 rounded-xl overflow-hidden relative">
              <img src={m} alt={`Media ${i}`} className="w-full h-full object-cover" />
              {isHost && <button onClick={() => removeMedia(i)} className="absolute top-1 right-1 text-red-600 font-bold">X</button>}
            </div>
          ))}
        </div>
      </section>

      {/* Hosts */}
      <section id="hosts" className="p-12 bg-gray-100 text-center">
        <h3 className="text-3xl font-bold mb-6 text-blue-700">Hosts</h3>
        {isHost && <button onClick={addHost} className="mb-4 bg-green-500 text-white px-4 py-2 rounded">Add Host</button>}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {hosts.map((host: Host, idx: number) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md p-6 text-left relative">
              <h4 className="text-xl font-semibold">{host.name}</h4>
              <p className="text-gray-600 mb-2">{host.bio}</p>
              <a href={host.cv} className="text-blue-600 underline">View CV</a>
              {isHost && <button onClick={() => removeHost(idx)} className="absolute top-2 right-2 text-red-600 font-bold">X</button>}
            </div>
          ))}
        </div>
      </section>

      {/* Announcements */}
      <section id="announcements" className="p-12 bg-white text-center">
        <h3 className="text-3xl font-bold mb-6 text-blue-700">Announcements</h3>
        {isHost && <button onClick={addAnnouncement} className="mb-4 bg-green-500 text-white px-4 py-2 rounded">Add Announcement</button>}
        <div className="max-w-4xl mx-auto space-y-4">
          {announcements.map((a: Announcement, i: number) => (
            <div key={i} className="bg-gray-100 p-4 rounded shadow-md relative">
              <h4 className="text-lg font-semibold">{a.title}</h4>
              <p className="text-sm text-gray-500">{a.date}</p>
              <p className="text-gray-600">{a.description}</p>
              {isHost && <button onClick={() => removeAnnouncement(i)} className="absolute top-2 right-2 text-red-600 font-bold">X</button>}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="p-12 bg-gray-100 text-center">
        <h3 className="text-3xl font-bold mb-4 text-blue-700">Get in Touch</h3>
        {formState.succeeded ? (
          <p className="text-green-600 font-semibold">Thanks! Your message has been received.</p>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <input type="text" name="name" placeholder="Full Name" className="w-full