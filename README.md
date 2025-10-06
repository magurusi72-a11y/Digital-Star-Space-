<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Digital Star Space</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Inter', sans-serif;
      margin: 0;
      padding: 0;
      line-height: 1.6;
      color: #333;
      background-color: #f9f9f9;
    }
    header {
      background-color: #4f46e5;
      color: white;
      padding: 20px 0;
      text-align: center;
    }
    header h1 {
      margin: 0;
      font-size: 2.2rem;
    }
    header p {
      margin: 5px 0 0;
      font-size: 1.1rem;
    }
    nav {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-top: 10px;
    }
    nav a {
      color: white;
      text-decoration: none;
      font-weight: 600;
    }
    section {
      padding: 60px 20px;
      max-width: 1000px;
      margin: 0 auto;
    }
    .projects, .announcements {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }
    .card {
      background: white;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      transition: transform 0.3s;
    }
    .card:hover {
      transform: translateY(-5px);
    }
    .card h3 {
      margin-top: 0;
    }
    button {
      background-color: #4f46e5;
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
      margin-top: 10px;
    }
    button:hover {
      background-color: #3730a3;
    }
    footer {
      background-color: #111827;
      color: white;
      padding: 30px 20px;
      text-align: center;
    }
    footer a {
      color: #facc15;
      text-decoration: none;
      margin: 0 10px;
    }
    form input, form textarea {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      border-radius: 6px;
      border: 1px solid #ccc;
      font-size: 1rem;
    }
  </style>
</head>
<body>

  <!-- Header -->
  <header>
    <h1>Digital Star Space</h1>
    <p>Empowering Young Minds to Create, Code, and Conquer the Digital World!</p>
    <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#announcements">Announcements</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <!-- About -->
  <section id="about">
    <h2>About Us</h2>
    <p>Based in Mwanza, Tanzania, Digital Star Space empowers young people to explore, innovate, and succeed in the digital world. Our youth-led team provides access to tools, mentorship, and opportunities for tomorrow’s leaders.</p>
  </section>

  <!-- Projects -->
  <section id="projects">
    <h2>Our Projects</h2>
    <div class="projects">
      <div class="card">
        <h3>Coding for Kids</h3>
        <p>Basic coding & problem-solving for primary learners.</p>
        <button>Enroll Now</button>
      </div>
      <div class="card">
        <h3>Digital Skills Bootcamp</h3>
        <p>Practical computer literacy and creativity tools.</p>
        <button>Enroll Now</button>
      </div>
      <div class="card">
        <h3>Women in Tech</h3>
        <p>Empowering young women in digital space.</p>
        <button>Register Here</button>
      </div>
    </div>
  </section>

  <!-- Announcements -->
  <section id="announcements">
    <h2>Announcements</h2>
    <div class="announcements">
      <div class="card">
        <p>📢 New coding bootcamp starting next month!</p>
        <button>Learn More</button>
      </div>
      <div class="card">
        <p>🌟 Women in Tech mentorship program open for registration.</p>
        <button>Register Here</button>
      </div>
    </div>
  </section>

  <!-- Our Hosts -->
  <section id="hosts">
    <h2>Our Host</h2>
    <div class="card">
      <h3>Marko Magurusi</h3>
      <p>Founder & Educator | Passionate about bridging youth with technology.</p>
    </div>
  </section>

  <!-- Media -->
  <section id="media">
    <h2>Media</h2>
    <div class="card">
      <button>▶ Watch Intro Video</button>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact">
    <h2>Get in Touch</h2>
    <form>
      <input type="text" placeholder="Full Name" required>
      <input type="email" placeholder="Email Address" required>
      <textarea placeholder="Your Message" rows="5" required></textarea>
      <button type="submit">Let’s Connect</button>
    </form>
    <p>📞 Phone: +255 752 651 956</p>
    <p>📧 Email: magurusi72@gmail.com</p>
    <button>💖 Donate / Support</button>
  </section>

  <!-- Footer -->
  <footer>
    <p>© 2025 Digital Star Space</p>
    <p>Empowering young minds, shaping a digital future</p>
    <div>
      <a href="https://www.youtube.com/@magurusi" target="_blank">YouTube</a>|
      <a href="https://www.tiktok.com/@magurusi" target="_blank">TikTok</a>|
      <a href="#" target="_blank">Facebook</a>|
      <a href="#" target="_blank">Instagram</a>
    </div>
  </footer>

</body>
</html>