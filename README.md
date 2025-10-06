<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Star Space - Empowering Young Minds</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        :root {
            --primary: #4a00e0;
            --secondary: #8e2de2;
            --accent: #00c6ff;
            --light: #f8f9fa;
            --dark: #212529;
            --success: #28a745;
        }

        body {
            background-color: #f5f5f5;
            color: var(--dark);
            line-height: 1.6;
        }

        .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Header Styles */
        header {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            padding: 1rem 0;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: 700;
            display: flex;
            align-items: center;
        }

        .logo i {
            margin-right: 10px;
            color: var(--accent);
        }

        nav ul {
            display: flex;
            list-style: none;
        }

        nav ul li {
            margin-left: 1.5rem;
        }

        nav ul li a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
            padding: 5px 0;
            position: relative;
        }

        nav ul li a:hover {
            color: var(--accent);
        }

        nav ul li a::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: var(--accent);
            transition: width 0.3s;
        }

        nav ul li a:hover::after {
            width: 100%;
        }

        .mobile-menu {
            display: none;
            font-size: 1.5rem;
            cursor: pointer;
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(rgba(74, 0, 224, 0.8), rgba(142, 45, 226, 0.8)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80');
            background-size: cover;
            background-position: center;
            color: white;
            padding: 6rem 0;
            text-align: center;
        }

        .hero h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .hero p {
            font-size: 1.2rem;
            max-width: 700px;
            margin: 0 auto 2rem;
        }

        .btn {
            display: inline-block;
            background: var(--accent);
            color: white;
            padding: 12px 30px;
            border-radius: 30px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s;
            border: none;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(0, 198, 255, 0.3);
        }

        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(0, 198, 255, 0.4);
        }

        /* Section Styles */
        section {
            padding: 5rem 0;
        }

        .section-title {
            text-align: center;
            margin-bottom: 3rem;
        }

        .section-title h2 {
            font-size: 2.5rem;
            color: var(--primary);
            margin-bottom: 1rem;
            position: relative;
            display: inline-block;
        }

        .section-title h2::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: linear-gradient(to right, var(--primary), var(--accent));
            border-radius: 2px;
        }

        .section-title p {
            color: #666;
            max-width: 700px;
            margin: 0 auto;
        }

        /* About Section */
        .about-content {
            display: flex;
            align-items: center;
            gap: 3rem;
        }

        .about-text {
            flex: 1;
        }

        .about-image {
            flex: 1;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .about-image img {
            width: 100%;
            height: auto;
            display: block;
        }

        /* Projects Section */
        .projects {
            background-color: var(--light);
        }

        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .project-card {
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s, box-shadow 0.3s;
        }

        .project-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }

        .project-icon {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
        }

        .project-content {
            padding: 1.5rem;
        }

        .project-content h3 {
            margin-bottom: 1rem;
            color: var(--primary);
        }

        /* Announcements Section */
        .announcements-container {
            max-width: 800px;
            margin: 0 auto;
        }

        .announcement {
            background: white;
            border-left: 5px solid var(--accent);
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            border-radius: 5px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            display: flex;
            align-items: flex-start;
        }

        .announcement i {
            font-size: 1.5rem;
            color: var(--accent);
            margin-right: 1rem;
            margin-top: 5px;
        }

        /* Hosts Section */
        .hosts {
            background-color: var(--light);
        }

        .host-card {
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            text-align: center;
            max-width: 300px;
            margin: 0 auto;
        }

        .host-image {
            height: 200px;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 4rem;
        }

        .host-info {
            padding: 1.5rem;
        }

        .host-info h3 {
            margin-bottom: 0.5rem;
            color: var(--primary);
        }

        .host-info p {
            color: #666;
            font-style: italic;
        }

        /* Media Section */
        .media-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
        }

        .video-placeholder {
            width: 100%;
            max-width: 700px;
            height: 400px;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            transition: transform 0.3s;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .video-placeholder:hover {
            transform: scale(1.02);
        }

        .video-placeholder i {
            margin-right: 10px;
        }

        /* Contact Section */
        .contact {
            background-color: var(--light);
        }

        .contact-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 3rem;
        }

        .contact-form {
            background: white;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
        }

        .form-control {
            width: 100%;
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 1rem;
            transition: border 0.3s;
        }

        .form-control:focus {
            border-color: var(--accent);
            outline: none;
        }

        textarea.form-control {
            min-height: 150px;
            resize: vertical;
        }

        .contact-info {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        .contact-item {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
        }

        .contact-item i {
            font-size: 1.5rem;
            color: var(--primary);
            margin-top: 5px;
        }

        .social-links {
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
        }

        .social-links a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background: var(--primary);
            color: white;
            border-radius: 50%;
            text-decoration: none;
            transition: all 0.3s;
        }

        .social-links a:hover {
            background: var(--accent);
            transform: translateY(-3px);
        }

        /* Footer */
        footer {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            padding: 3rem 0 1.5rem;
        }

        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
        }

        .footer-column h3 {
            margin-bottom: 1.5rem;
            font-size: 1.3rem;
            position: relative;
            display: inline-block;
        }

        .footer-column h3::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 0;
            width: 40px;
            height: 3px;
            background-color: var(--accent);
        }

        .footer-links {
            list-style: none;
        }

        .footer-links li {
            margin-bottom: 0.8rem;
        }

        .footer-links a {
            color: #ddd;
            text-decoration: none;
            transition: color 0.3s;
        }

        .footer-links a:hover {
            color: var(--accent);
        }

        .copyright {
            text-align: center;
            padding-top: 1.5rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            font-size: 0.9rem;
            color: #ddd;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
            .header-container {
                flex-direction: column;
                align-items: flex-start;
            }

            nav {
                width: 100%;
                margin-top: 1rem;
                display: none;
            }

            nav.active {
                display: block;
            }

            nav ul {
                flex-direction: column;
            }

            nav ul li {
                margin: 0;
                margin-bottom: 0.5rem;
            }

            .mobile-menu {
                display: block;
                position: absolute;
                top: 1rem;
                right: 1rem;
            }

            .hero h1 {
                font-size: 2.2rem;
            }

            .about-content {
                flex-direction: column;
            }

            .section-title h2 {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <div class="container header-container">
            <div class="logo">
                <i class="fas fa-star"></i>
                Digital Star Space
            </div>
            <div class="mobile-menu">
                <i class="fas fa-bars"></i>
            </div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#announcements">Announcements</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="container">
            <h1>Empowering Young Minds</h1>
            <p>Inspiring and equipping young people with digital skills, creativity, and confidence for the future.</p>
            <a href="#projects" class="btn">Explore Our Programs</a>
        </div>
    </section>

    <!-- About Section -->
    <section id="about">
        <div class="container">
            <div class="section-title">
                <h2>About Us</h2>
                <p>Learn about our mission and vision for the youth of Tanzania</p>
            </div>
            <div class="about-content">
                <div class="about-text">
                    <p>Digital Star Space is a youth-led initiative based in Mwanza, Tanzania. Our mission is to connect young people with opportunities and tools to thrive in the digital era.</p>
                    <p>We believe that every young person deserves access to digital education and the chance to develop skills that will prepare them for the future workforce.</p>
                    <p>Through our programs, we aim to bridge the digital divide and create a generation of digitally literate, innovative, and confident young leaders.</p>
                </div>
                <div class="about-image">
                    <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Students learning digital skills">
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section class="projects" id="projects">
        <div class="container">
            <div class="section-title">
                <h2>Our Projects</h2>
                <p>Explore our initiatives designed to empower youth with digital skills</p>
            </div>
            <div class="projects-grid">
                <div class="project-card">
                    <div class="project-icon">
                        <i class="fas fa-laptop-code"></i>
                    </div>
                    <div class="project-content">
                        <h3>Coding for Kids</h3>
                        <p>Basic coding & problem-solving for primary learners. We introduce children to the fundamentals of programming through fun, interactive activities.</p>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-icon">
                        <i class="fas fa-desktop"></i>
                    </div>
                    <div class="project-content">
                        <h3>Digital Skills Bootcamp</h3>
                        <p>Practical computer literacy and creativity tools. Our bootcamp covers everything from basic computer skills to advanced digital tools.</p>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-icon">
                        <i class="fas fa-female"></i>
                    </div>
                    <div class="project-content">
                        <h3>Women in Tech</h3>
                        <p>Empowering young women in digital space. We provide mentorship, training, and support to help young women excel in technology fields.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Announcements Section -->
    <section id="announcements">
        <div class="container">
            <div class="section-title">
                <h2>Announcements</h2>
                <p>Stay updated with our latest news and opportunities</p>
            </div>
            <div class="announcements-container">
                <div class="announcement">
                    <i class="fas fa-bullhorn"></i>
                    <div>
                        <h3>New Coding Bootcamp Starting Next Month!</h3>
                        <p>We're excited to announce our new coding bootcamp for beginners. Registration is now open for youth aged 15-25. Limited spots available!</p>
                    </div>
                </div>
                <div class="announcement">
                    <i class="fas fa-star"></i>
                    <div>
                        <h3>Women in Tech Mentorship Program</h3>
                        <p>Our Women in Tech mentorship program is now open for registration. Connect with experienced professionals in the tech industry.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Hosts Section -->
    <section class="hosts">
        <div class="container">
            <div class="section-title">
                <h2>Our Hosts</h2>
                <p>Meet the dedicated team behind Digital Star Space</p>
            </div>
            <div class="host-card">
                <div class="host-image">
                    <i class="fas fa-user"></i>
                </div>
                <div class="host-info">
                    <h3>Marko Magurusi</h3>
                    <p>Founder & Educator based in Mwanza</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Media Section -->
    <section>
        <div class="container">
            <div class="section-title">
                <h2>Media</h2>
                <p>Watch our introduction video to learn more about our mission</p>
            </div>
            <div class="media-container">
                <div class="video-placeholder">
                    <i class="fas fa-play-circle"></i>
                    Intro Video - Watch Here
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="contact" id="contact">
        <div class="container">
            <div class="section-title">
                <h2>Get in Touch</h2>
                <p>Reach out to us for more information or to get involved</p>
            </div>
            <div class="contact-container">
                <div class="contact-form">
                    <form>
                        <div class="form-group">
                            <label for="name">Full Name</label>
                            <input type="text" id="name" class="form-control" placeholder="Your full name">
                        </div>
                        <div class="form-group">
                            <label for="email">Email Address</label>
                            <input type="email" id="email" class="form-control" placeholder="Your email address">
                        </div>
                        <div class="form-group">
                            <label for="message">Your Message</label>
                            <textarea id="message" class="form-control" placeholder="Your message"></textarea>
                        </div>
                        <button type="submit" class="btn">Send Message</button>
                    </form>
                </div>
                <div class="contact-info">
                    <div class="contact-item">
                        <i class="fas fa-phone"></i>
                        <div>
                            <h3>Phone</h3>
                            <p>+255 752 651 956</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <div>
                            <h3>Email</h3>
                            <p>magurusi72@gmail.com</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-heart"></i>
                        <div>
                            <h3>Support Our Mission</h3>
                            <p>Help us empower more young minds by donating to our cause.</p>
                            <a href="#" class="btn" style="margin-top: 10px;">Donate / Support</a>
                        </div>
                    </div>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-youtube"></i></a>
                        <a href="#"><i class="fab fa-tiktok"></i></a>
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-column">
                    <h3>Digital Star Space</h3>
                    <p>Empowering young minds, shaping a digital future in Mwanza, Tanzania.</p>
                </div>
                <div class="footer-column">
                    <h3>Quick Links</h3>
                    <ul class="footer-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#projects">Our Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Programs</h3>
                    <ul class="footer-links">
                        <li><a href="#">Coding for Kids</a></li>
                        <li><a href="#">Digital Skills Bootcamp</a></li>
                        <li><a href="#">Women in Tech</a></li>
                        <li><a href="#">Upcoming Events</a></li>
                    </ul>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; 2025 Digital Star Space. All rights reserved.</p>
                <p>Empowering young minds, shaping a digital future</p>
            </div>
        </div>
    </footer>

    <script>
        // Mobile menu toggle
        document.querySelector('.mobile-menu').addEventListener('click', function() {
            document.querySelector('nav').classList.toggle('active');
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu after clicking a link
                if (window.innerWidth <= 768) {
                    document.querySelector('nav').classList.remove('active');
                }
            });
        });
    </script>
</body>
</html>