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
            position: relative;
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

        nav {
            max-height: 999px;
            overflow: hidden;
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

        nav ul li a:hover,
        nav ul li a.active {
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

        nav ul li a:hover::after,
        nav ul li a.active::after {
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
            min-height: 350px;
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

        .hosts-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
        }

        .host-card {
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            text-align: center;
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
                max-height: 0;
                transition: max-height 0.3s ease;
            }

            nav.active {
                max-height: 500px;
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

            .about-text {
                text-align: center;
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
                    <li><a href="#home" class="active">Home</a></li>
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
                <p>Stay updated with our latest news and opportunities