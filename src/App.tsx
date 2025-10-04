import React from "react";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-800">
      {/* Header */}
      <header className="w-full py-4 bg-gray-900 text-white shadow-md text-center">
        <h1 className="text-2xl font-bold tracking-wide">🌟 Digital Star Space</h1>
        <p className="text-sm opacity-80">Empowering Hope & Innovation</p>
      </header>

      {/* Main Section */}
      <main className="flex flex-col items-center justify-center flex-1 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Welcome to Hope Family</h2>
        <p className="max-w-md leading-relaxed text-gray-600">
          Together we build dreams, share skills, and create digital impact for a brighter future. 
          Stay connected with our vision of growth and hope.
        </p>
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition-all">
          Join the Movement
        </button>
      </main>

      {/* Footer */}
      <footer className="w-full py-3 bg-gray-900 text-gray-200 text-center text-sm">
        © {new Date().getFullYear()} Hope Family | Designed by Magurusi
      </footer>
    </div>
  );
}

export default App;