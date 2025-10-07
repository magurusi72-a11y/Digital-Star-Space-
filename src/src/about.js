import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-gray-50">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-4 text-center max-w-md text-gray-700">
          Digital Star Space is a youth-led initiative based in Mwanza, Tanzania. Our mission is to connect young people with opportunities and tools to thrive in the digital era.
        </p>
      </main>
      <Footer />
    </>
  )
}

projects.js
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-gray-50">
        <h1 className="text-3xl font-bold">Our Projects</h1>
        <p className="mt-4 text-center max-w-md text-gray-700">
          Explore our projects:
          <ul className="list-disc mt-2 ml-6">
            <li>Coding for Kids – Basic coding & problem-solving for primary learners.</li>
            <li>Digital Skills Bootcamp – Practical computer literacy and creativity tools.</li>
          </ul>
        </p>
      </main>
      <Footer />
    </>
  )
}

contact.js
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-gray-50">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-4 text-center max-w-md text-gray-700">
          You can reach us via email: <a href="mailto:info@digitalstarspace.com" className="text-blue-600 underline">info@digitalstarspace.com</a>
        </p>
      </main>
      <Footer />
    </>
  )
}