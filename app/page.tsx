'use client';

import { useEffect, useState } from 'react';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import MobileNav from '@/components/mobile-nav';

export default function Home() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Check if device is mobile
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return; // Skip cursor animation on mobile

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      const cur = document.getElementById('cur');
      const curRing = document.getElementById('cur-ring');
      if (cur && curRing) {
        cur.style.left = e.clientX + 'px';
        cur.style.top = e.clientY + 'px';
        curRing.style.left = e.clientX + 'px';
        curRing.style.top = e.clientY + 'px';
      }
    };

    const handleScroll = () => {
      const nav = document.getElementById('nav');
      if (window.scrollY > 0) {
        nav?.classList.add('scrolled');
      } else {
        nav?.classList.remove('scrolled');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return; // Skip card hover effects on mobile

    const cards = document.querySelectorAll('.p-card');
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e: any) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        (card as HTMLElement).style.setProperty('--mx', `${x}%`);
        (card as HTMLElement).style.setProperty('--my', `${y}%`);
      });
    });
  }, []);

  return (
    <>
      <MobileNav />
      
      <div id="cur"></div>
      <div id="cur-ring"></div>

      {/* NAV */}
      <nav id="nav" className="hidden md:flex">
        <a href="#" className="nav-mark">
          <span className="dot"></span>
          <span>Muneer Ahmed</span>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#learning">Growth</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="nav-actions">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-cta nav-resume">
            Resume
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="pt-20 md:pt-0">
        <div className="hero-left">
          <div className="hero-tag">Python Developer · Web Developer</div>
          <h1 className="hero-name">
            <span className="first">Muneer</span>
            <span className="last">Ahmed.</span>
          </h1>
          <div className="hero-role">// python · flask · django · streamlit · sql</div>
          <p className="hero-desc">
            I build <strong>web applications, data tools, and full-stack systems</strong> using Python and its ecosystem. Currently scaling my backend architecture knowledge and shipping real-world projects.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-a">
              See my work →
            </a>
          </div>
          <div className="hero-bg-text">MA</div>
        </div>

        {/* Terminal card */}
        <div className="hero-right">
          <div className="terminal">
            <div className="terminal-bar">
              <div className="t-dot" style={{ background: '#ff5f57' }}></div>
              <div className="t-dot" style={{ background: '#febc2e' }}></div>
              <div className="t-dot" style={{ background: '#28c840' }}></div>
              <span className="t-title">muneer@dev ~ python</span>
            </div>
            <div className="terminal-body">
              <div className="t-line">
                <span className="t-prompt">»</span>
                <span className="t-comment"># Muneer Ahmed — Stack</span>
              </div>
              <div className="t-spacer"></div>
              <div className="t-line">
                <span className="t-prompt">»</span>
                <span className="t-cmd">from</span>&nbsp;<span className="t-str">skills</span>&nbsp;<span className="t-cmd">import</span>&nbsp;<span className="t-str">*</span>
              </div>
              <div className="t-spacer"></div>
              <div className="t-line">
                <span className="t-prompt">»</span>
                <span className="t-cmd">languages</span> = [<span className="t-str">&quot;Python&quot;</span>, <span className="t-str">&quot;SQL&quot;</span>, <span className="t-str">&quot;HTML/CSS&quot;</span>]
              </div>
              <div className="t-line">
                <span className="t-prompt">»</span>
                <span className="t-cmd">frameworks</span> = [<span className="t-str">&quot;Flask&quot;</span>, <span className="t-str">&quot;Django&quot;</span>, <span className="t-str">&quot;Streamlit&quot;</span>]
              </div>
              <div className="t-line">
                <span className="t-prompt">»</span>
                <span className="t-cmd">databases</span> = [<span className="t-str">&quot;PostgreSQL&quot;</span>, <span className="t-str">&quot;MongoDB&quot;</span>]
              </div>
              <div className="t-spacer"></div>
              <div className="t-line">
                <span className="t-prompt">»</span>
                <span className="t-cmd">tools</span> = [<span className="t-str">&quot;Git&quot;</span>, <span className="t-str">&quot;Docker&quot;</span>, <span className="t-str">&quot;AWS&quot;</span>]
              </div>
              <div className="t-spacer"></div>
              <div className="t-cursor-line">
                <span className="t-prompt">»</span>
                <span className="t-blink"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker-wrap">
        <div className="ticker-inner">
          <div className="t-item">Python</div>
          <div className="t-item">Flask</div>
          <div className="t-item">Django</div>
          <div className="t-item">PostgreSQL</div>
          <div className="t-item">MySQL</div>
          <div className="t-item">REST APIs</div>
          <div className="t-item">Github</div>
          <div className="t-item">Streamlit</div>
          <div className="t-item">Loveable</div>
          <div className="t-item">Claude</div>
          <div className="t-item">V0</div>
          <div className="t-item">Vercel</div>
          {/* <div className="t-item">Docker</div> */}
          {/* <div className="t-item">AWS</div> */}
          <div className="t-item">Python</div>
          <div className="t-item">Flask</div>
          <div className="t-item">Django</div>
          <div className="t-item">PostgreSQL</div>
          <div className="t-item">MySQL</div>
          <div className="t-item">REST APIs</div>
          <div className="t-item">Github</div>
          <div className="t-item">Streamlit</div>
          <div className="t-item">Replit</div>
          <div className="t-item">Loveable</div>
          <div className="t-item">Claude</div>
          <div className="t-item">V0</div>
          <div className="t-item">Vercel</div>
          {/* <div className="t-item">Docker</div> */}
          {/* <div className="t-item">AWS</div> */}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about">
        <div>
          <div className="section-eyebrow">About me</div>
          <h2 className="about-h">
            Passionate Python <em>developer</em> building scalable solutions
          </h2>
          <p className="about-p">
            With a strong foundation in Python programming and full-stack development, I specialize in building <strong>robust web applications and data-driven tools</strong>. My journey in tech has been driven by a passion for solving complex problems efficiently.
          </p>
          <p className="about-p">
            I excel at translating ideas into working products, whether it&apos;s building REST APIs with Flask, creating data dashboards with Streamlit, or developing complete full-stack applications with Django. <strong>Clean code, scalability, and user experience</strong> are at the heart of everything I build.
          </p>
        </div>

        {/* Skills */}
        <div className="skills-cols">
          <div>
            <div className="skills-group-title">Languages</div>
            <div className="skill-tags">
              <div className="s-tag">Python</div>
              <div className="s-tag">SQL</div>
              <div className="s-tag">HTML/CSS</div>
              {/* <div className="s-tag">JavaScript</div> */}
            </div>
          </div>

          <div>
            <div className="skills-group-title">Backend</div>
            <div className="skill-tags">
              <div className="s-tag">Flask</div>
              <div className="s-tag">Django</div>
              <div className="s-tag">REST APIs</div>
              <div className="s-tag">PostgreSQL</div>
              <div className="s-tag">Mysql</div>
            </div>
          </div>

          <div>
            <div className="skills-group-title">Tools & Services</div>
            <div className="skill-tags">
              <div className="s-tag">Git</div>
              {/* <div className="s-tag">Docker</div> */}
              {/* <div className="s-tag">AWS</div> */}
              <div className="s-tag">Github</div>
              <div className="s-tag">Streamlit</div>
              <div className="s-tag">Replit</div>
              <div className="s-tag">Loveable</div>
              <div className="s-tag">V0</div>
              <div className="s-tag">Vercel</div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education">
        <div className="section-eyebrow">My Journey</div>
        <h2 className="edu-heading">
          Education & <em>Certifications</em>
        </h2>
        <div className="edu-grid">
          <div className="edu-card">
            <div className="edu-number">01</div>
            <div className="edu-item">
              <div className="edu-school">BS Software Engineering Technology</div>
              <div className="edu-detail">Ziauddin University, Karachi</div>
              <div className="edu-year">2025 – Present</div>
            </div>
          </div>

          <div className="edu-card">
            <div className="edu-number">02</div>
            <div className="edu-item">
              <div className="edu-school">Diploma in Software Engineering</div>
              <div className="edu-detail">Aligarh Institute of Technology, Karachi</div>
              <div className="edu-year">June 2023 – Dec 2025</div>
              <div className="edu-achievements">
                <span className="ach-tag">Website Development</span>
                <span className="ach-tag">Full-Stack Development</span>
                <span className="ach-tag">Database Design</span>
              </div>
            </div>
          </div>

          <div className="edu-card">
            <div className="edu-number">03</div>
            <div className="edu-item">
              <div className="edu-school">Advance Python Programming</div>
              <div className="edu-detail">Aptech Institute, Karachi</div>
              <div className="edu-year">Sep 2025 – Dec 2025</div>
              <div className="edu-achievements">
                <span className="ach-tag">Python Programming</span>
                <span className="ach-tag">Django Development</span>
                <span className="ach-tag">RESTful APIs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="projects-head">
          <h2 className="proj-main-h">
            Featured <span>Projects</span>
          </h2>
        </div>

        <div className="bento">
          {/* Project 1 */}
          <div className="p-card pc reveal">
            <div className="p-num">01</div>
            <div className="p-badge">E-Commerce</div>
            <h3 className="p-title">Shoe Store Website</h3>
            <p className="p-desc">A responsive e-commerce site inspired by Adidas/Nike using modern web technologies. Designed for smooth navigation, product display, and a modern shopping experience.</p>
            <ul className="p-feats">
              <li>Responsive design</li>
              <li>Product showcase</li>
              <li>Modern UX</li>
            </ul>
            <div className="p-stack">
              <span className="p-pill">HTML</span>
              <span className="p-pill">CSS</span>
              <span className="p-pill">JavaScript</span>
              <span className="p-pill">PHP</span>
              <span className="p-pill">MySQL</span>
            </div>
            <a href="https://github.com/ZENOxELITE" target="_blank" rel="noopener noreferrer" className="p-link">
              View Project →
            </a>
          </div>

          {/* Project 2 */}
          <div className="p-card pc2 reveal">
            <div className="p-num">02</div>
            <div className="p-badge">Full-Stack</div>
            <h3 className="p-title">College Management System</h3>
            <p className="p-desc">A full-stack web application for managing college operations with role-based authentication, scheduling, and analytics. Includes user management, course tracking, and an interactive dashboard.</p>
            <ul className="p-feats">
              <li>Role-based auth</li>
              <li>Interactive dashboard</li>
              <li>Course tracking</li>
            </ul>
            <div className="p-stack">
              <span className="p-pill">Python</span>
              <span className="p-pill">Streamlit</span>
              <span className="p-pill">SQLAlchemy</span>
              <span className="p-pill">MySQL</span>
            </div>
            <a href="https://github.com/ZENOxELITE/CollegeManager" target="_blank" rel="noopener noreferrer" className="p-link">
              View Project →
            </a>
          </div>

          {/* Project 3 */}
          <div className="p-card pc3 reveal">
            <div className="p-num">03</div>
            <div className="p-badge">E-Commerce</div>
            <h3 className="p-title">The Formula Lab</h3>
            <p className="p-desc">A premium perfume e-commerce website for the Pakistani market featuring an elegant dark theme with gold accents, size variants, discounts, and WhatsApp-based ordering.</p>
            <ul className="p-feats">
              <li>Dark theme with gold accents</li>
              <li>Size variants</li>
              <li>WhatsApp integration</li>
            </ul>
            <div className="p-stack">
              <span className="p-pill">React</span>
              <span className="p-pill">TypeScript</span>
              <span className="p-pill">Tailwind CSS</span>
              <span className="p-pill">Supabase</span>
              <span className="p-pill">shadcn/ui</span>
            </div>
            <a href="https://theformulalab.store" target="_blank" rel="noopener noreferrer" className="p-link">
              View Project →
            </a>
          </div>

          {/* Project 4 */}
          <div className="p-card pc4 reveal">
            <div className="p-num">04</div>
            <div className="p-badge">Static Website</div>
            <h3 className="p-title">EV Motorbikes Website</h3>
            <p className="p-desc">A modern static website showcasing electric bikes with product listings, search and filter options, and interactive animations. Built with modern web standards and deployed on Netlify.</p>
            <ul className="p-feats">
              <li>Product listings</li>
              <li>Search & filters</li>
              <li>Interactive animations</li>
            </ul>
            <div className="p-stack">
              <span className="p-pill">HTML</span>
              <span className="p-pill">CSS</span>
              <span className="p-pill">JavaScript</span>
              <span className="p-pill">Netlify</span>
            </div>
            <a href="https://github.com/ZENOxELITE/ev-bike-web" target="_blank" rel="noopener noreferrer" className="p-link">
              View Project →
            </a>
          </div>
        </div>
      </section>

      {/* LEARNING */}
      <section id="learning">
        <div className="learning-inner">
          <div className="learning-left">
            <h2 className="learn-h">
              Currently <em>Learning</em>
            </h2>
            <p className="learn-p">
              I&apos;m passionate about continuous growth and staying updated with the latest technologies and best practices in software development.
            </p>
            <div className="learn-items">
              <div className="learn-item">
                <div className="learn-dot"></div>
                <div className="learn-text">Advanced System Design & Architecture</div>
              </div>
              <div className="learn-item">
                <div className="learn-dot"></div>
                <div className="learn-text">Fast API Development</div>
              </div>
              <div className="learn-item">
                <div className="learn-dot"></div>
                <div className="learn-text">Engineering For problem solving</div>
              </div>
              <div className="learn-item">
                <div className="learn-dot"></div>
                <div className="learn-text">Git and other Version Control Systems</div>
              </div>
            </div>
          </div>

          <div className="learning-right">
            <div className="also-label">Also Interested In</div>
            <div className="also-grid">
              <div className="also-card">
                <div className="also-icon"></div>
                <div className="also-title">Websites</div>
                <div className="also-sub">Building Websites</div>
              </div>
              <div className="also-card">
                <div className="also-icon"></div>
                <div className="also-title">Vibe coding</div>
                <div className="also-sub">For fast deployment</div>
              </div>
              <div className="also-card">
                <div className="also-icon"></div>
                <div className="also-title">Ui/UX</div>
                <div className="also-sub">For website design</div>
              </div>
              <div className="also-card">
                <div className="also-icon"></div>
                <div className="also-title">DSA</div>
                <div className="also-sub">In Python to solve Leetcode</div>
              </div>
              <div className="also-card">
                <div className="also-icon"></div>
                <div className="also-title">Security</div>
                <div className="also-sub">Secure development</div>
              </div>
            </div>

            <div className="also-label">Hobbies</div>
            <div className="also-grid">
              <div className="also-card">
                <div className="also-icon"></div>
                <div className="also-title">Learning New Technologies</div>
                <div className="also-sub">Exploring new tools, frameworks, and programming concepts.</div>
              </div>
              <div className="also-card">
                <div className="also-icon"></div>
                <div className="also-title">Building Side Projects</div>
                <div className="also-sub">Creating small web applications and experimenting with new ideas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="contact-inner">
          <div className="contact-header">
            <p className="contact-label">GET IN TOUCH</p>
            <h2 className="contact-h">
              Let&apos;s Work
              <span className="ghost">Together</span>
            </h2>
            <p className="contact-sub">
              Open to freelance projects, full-time roles, and interesting collaborations. If you have something in mind — let&apos;s talk.
            </p>
            
            <div className="avail-badge">
              <div className="avail-dot"></div>
              Available for opportunities
            </div>

            <div className="contact-buttons">
              <a href="mailto:muneerahmed.devx@gmail.com" className="contact-icon-btn email-btn">
                <FontAwesomeIcon icon={faEnvelope} />
                Email me
              </a>
              <a href="https://www.linkedin.com/in/muneer-ahmed-187a48314/" target="_blank" rel="noopener noreferrer" className="contact-icon-btn linkedin-btn">
                <FontAwesomeIcon icon={faLinkedin} />
                LinkedIn
              </a>
              <a href="https://github.com/ZENOxELITE" target="_blank" rel="noopener noreferrer" className="contact-icon-btn github-btn">
                <FontAwesomeIcon icon={faGithub} />
                GitHub
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="contact-icon-btn resume-btn">
                <FontAwesomeIcon icon={faFileArrowDown} />
                Resume
              </a>  
              <a href="https://leetcode.com/u/Muneer89/" target="_blank" rel="noopener noreferrer" className="contact-icon-btn">
                <FontAwesomeIcon icon={faCode} />
                LeetCode
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
