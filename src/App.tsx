import { useForm } from "@formspree/react";

export default function App() {
  const [state, handleSubmit] = useForm("xyznpekn"); // replace with your Formspree form ID

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
        <p className="mb-6 max-w-2xl text-lg">At Digital Star Space, we inspire and equip young people with digital skills, creativity, and confidence for the future.</p>
        <a href="#projects" className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">Explore Projects</a>
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

      {/* Projects Section */}
      <section id="projects" className="p-12 bg-gray-100 text-center">
        <h3 className="text-3xl font-bold mb-8 text-blue-700">Our Projects</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h4 className="text-xl font-semibold mb-2">Coding for Kids</h4>
            <p className="text-gray-600">Introducing primary school learners to basic coding and problem-solving.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h4 className="text-xl font-semibold mb-2">Digital Skills Bootcamp</h4>
            <p className="text-gray-600">Helping youth gain practical knowledge in computer literacy and creativity tools.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h4 className="text-xl font-semibold mb-2">Women in Tech</h4>
            <p className="text-gray-600">Empowering young women to join and thrive in the digital space.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-12 bg-white text-center">
        <h3 className="text-3xl font-bold mb-4 text-blue-700">Get in Touch</h3>
        {state.succeeded ? (
          <p className="text-green-600 font-semibold">Thanks! Your message has been received.</p>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <input type="text" placeholder="Full Name" name="name" className="w-full p-3 rounded-lg border" required />
            <input type="email" placeholder="Email Address" name="email" className="w-full p-3 rounded-lg border" required />
            <textarea placeholder="Your Message" name="message" className="w-full p-3 rounded-lg border h-28" required></textarea>
            <button type="submit" disabled={state.submitting} className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Send Message
            </button>
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