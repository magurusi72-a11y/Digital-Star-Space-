export default function HopeFamily() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="w-full flex justify-between items-center p-4 shadow-md bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-600">Hope Family</h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#join" className="hover:text-blue-600">Join Us</a>
          <a href="#gallery" className="hover:text-blue-600">Gallery</a>
          <a href="#events" className="hover:text-blue-600">Events</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="flex-1 flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-blue-700 text-white p-12">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Building a Family of Hope</h2>
        <p className="mb-6 max-w-2xl">Together we grow, support, and inspire one another. Join us in shaping a brighter future.</p>
        <a href="#join" className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">Join the Family</a>
      </section>

      {/* About Us */}
      <section id="about" className="p-12 bg-white text-center">
        <h3 className="text-3xl font-bold mb-4">About Us</h3>
        <p className="max-w-2xl mx-auto">Hope Family is a community built on unity, growth, and hope. We bring together people from all walks of life to inspire change, share opportunities, and spread love.</p>
      </section>

      {/* Events */}
      <section id="events" className="p-12 bg-gray-100 text-center">
        <h3 className="text-3xl font-bold mb-6">Upcoming Events</h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h4 className="text-xl font-semibold">Community Meeting</h4>
            <p className="text-gray-600">October 20, 2025</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h4 className="text-xl font-semibold">Hope Family Outreach</h4>
            <p className="text-gray-600">November 2, 2025</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="p-12 bg-white text-center">
        <h3 className="text-3xl font-bold mb-6">Gallery</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          <div className="bg-gray-200 h-40 rounded-xl"></div>
          <div className="bg-gray-200 h-40 rounded-xl"></div>
          <div className="bg-gray-200 h-40 rounded-xl"></div>
          <div className="bg-gray-200 h-40 rounded-xl"></div>
          <div className="bg-gray-200 h-40 rounded-xl"></div>
          <div className="bg-gray-200 h-40 rounded-xl"></div>
        </div>
      </section>

      {/* Join Us */}
      <section id="join" className="p-12 bg-gray-100 text-center">
        <h3 className="text-3xl font-bold mb-4">Join Us</h3>
        <p className="mb-6">Become a part of the Hope Family and grow with us.</p>
        <form className="max-w-md mx-auto space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-3 rounded-lg border" />
          <input type="email" placeholder="Email Address" className="w-full p-3 rounded-lg border" />
          <input type="tel" placeholder="Phone Number" className="w-full p-3 rounded-lg border" />
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition">Join Now</button>
        </form>
      </section>

      {/* Contact */}
      <footer id="contact" className="p-8 bg-blue-700 text-white text-center">
        <h3 className="text-2xl font-bold mb-2">Contact Us</h3>
        <p>Email: info@hopefamily.org | Phone: +255 752 651 956</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="hover:text-yellow-400">YouTube</a>
          <a href="#" className="hover:text-yellow-400">TikTok</a>
          <a href="#" className="hover:text-yellow-400">Facebook</a>
          <a href="#" className="hover:text-yellow-400">Instagram</a>
        </div>
        <p className="mt-6 text-sm">© 2025 Hope Family. All rights reserved.</p>
      </footer>
    </div>
  );
}