export default function App() {
  // Sample data (replace with actual if needed)
  const projects = [
    {
      title: "Coding for Kids",
      description: "Introducing primary school learners to basic coding and problem-solving.",
    },
    {
      title: "Digital Skills Bootcamp",
      description: "Helping youth gain practical knowledge in computer literacy and creativity tools.",
    },
    {
      title: "Women in Tech",
      description: "Empowering young women to join and thrive in the digital space.",
    },
  ];

  const announcements = [
    "New Digital Skills Bootcamp starting October 20, 2025",
    "Coding for Kids registration open now",
  ];

  const media = [
    { type: "image", src: "/assets/sample1.jpg" },
    { type: "video", src: "/assets/sample2.mp4" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="w-full flex justify-between items-center p-4 shadow-md bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-600">Digital Star Space</h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="flex-1 flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Empowering Young Minds</h2>
        <p className="mb-6 max-w-2xl text-lg">
          At Digital Star Space, we inspire and equip young people with digital skills, creativity, and confidence for the future.
        </p>
        <a href="#projects" className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">
          Explore Projects
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="p-12 bg-white text-center">
        <h3 className="text-3xl font-bold mb-4 text-blue-700">About Us</h3>
        <p className="max-w-3xl mx-auto leading-relaxed">
          Digital Star Space is a youth-led initiative based in Mwanza, Tanzania.
          Our mission is to connect young people with the opportunities and tools
          they need to thrive in the digital era — through technology, innovation,
          and collaboration.
        </p>
      </section>

      {/* Announcements Section */}
      <section id="announcements" className="p-12 bg-gray-100 text-center">
        <h3 className="text-3xl font-bold mb-6 text-blue-700">Announcements</h3>
        <ul className="max-w-3xl mx-auto space-y-2">
          {announcements.map((ann, idx) => (
            <li key={idx} className="bg-white p-4 rounded-xl shadow-md">
              {ann}
            </li>
          ))}
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-12 bg-white text-center">
        <h3 className="text-3xl font-bold mb-8 text-blue-700">Our Projects</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((p, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl shadow-md p-6">
              <h4 className="text-xl font-semibold mb-2">{p.title}</h4>
              <p className="text-gray-600">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Media Section */}
      <section id="media" className="p-12 bg-gray-100 text-center">
        <h3 className="text-3xl font-bold mb-6 text-blue-700">Media</h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {media.map((m, idx) => (
            m.type === "image" ? (
              <img key={idx} src={m.src} alt="media" className="rounded-xl shadow-md" />
            ) : (
              <video key={idx} src={m.src} controls className="rounded-xl shadow-md" />
            )
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-12 bg-white text-center">
        <h3 className="text-3xl font-bold mb-4 text-blue-700">Get in Touch</h3>
        <p className="mb-6">Send us a message or donate to support our work.</p>
        <form action="https://formspree.io/f/xyznpekn" method="POST" className="max-w-md mx-auto space-y-4">
          <input type="text" name="name" placeholder="Full Name" className="w-full p-3 rounded-lg border" required />
          <input type="email" name="email" placeholder="Email Address" className="w-full p-3 rounded-lg border" required />
          <textarea name="message" placeholder="Your Message" className="w-full p-3 rounded-lg border h-28" required></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
        <p className="mt-4">
          <a href="https://digital-star-space.vercel.app/donate" className="text-blue-600 hover:underline">Donate / Support Us</a>
        </p>
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