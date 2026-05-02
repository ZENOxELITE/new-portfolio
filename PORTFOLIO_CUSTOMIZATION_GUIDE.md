# Portfolio Customization & Scaling Guide

This guide helps you customize and scale your portfolio website with ease. Make changes following the sections below.

---

## 📋 Quick Navigation

- [Personal Information](#personal-information)
- [Branding & Colors](#branding--colors)
- [Navigation & Links](#navigation--links)
- [Hero Section](#hero-section)
- [About Section](#about-section)
- [Education](#education)
- [Skills & Technologies](#skills--technologies)
- [Projects Section](#projects-section)
- [Growth & Learning](#growth--learning)
- [Contact Section](#contact-section)
- [Footer](#footer)
- [Responsive Design](#responsive-design)

---

## 👤 Personal Information

### Update Your Name
**File:** `app/page.tsx`

```tsx
// Line 85: Navigation branding
<span>Muneer Ahmed</span>

// Change to:
<span>Your Name</span>
```

### Update Your Title/Role
**File:** `app/page.tsx` (Hero Section)

```tsx
// Around line 120
<h1 className="hero-name">Full-Stack Python Developer</h1>

// Change to:
<h1 className="hero-name">Your Title/Role</h1>
```

### Update Email & Contact Info
**File:** `app/page.tsx` (Contact Section)

```tsx
// Line 449: Email link
<a href="mailto:hello@muneer.dev" className="contact-icon-btn email-btn">

// Change to:
<a href="mailto:your-email@example.com" className="contact-icon-btn email-btn">
```

---

## 🎨 Branding & Colors

### Primary Color (Amber/Gold)
**File:** `app/globals.css`

```css
/* Line 10-15: Root color variables */
--amber: #ffc107;
--amber-dim: rgba(255, 193, 7, 0.1);
--amber-dark: rgba(255, 193, 7, 0.3);

/* Change to your brand colors:
--primary: #your-color;
--primary-dim: rgba(your-r, your-g, your-b, 0.1);
--primary-dark: rgba(your-r, your-g, your-b, 0.3);
*/
```

### Background & Text Colors
```css
/* Dark theme variables */
--bg: #09090c;        /* Main background */
--bg2: #0f0f14;       /* Secondary background */
--bg3: #1a1a23;       /* Tertiary background */
--text: #ffffff;      /* Main text */
--muted: #999999;     /* Muted text */
```

### Applying Color Changes
After updating CSS variables, all components using `var(--amber)`, `var(--text)`, etc. will automatically use the new colors.

---

## 🔗 Navigation & Links

### Add/Remove Navigation Links
**File:** `app/page.tsx` (Lines 87-99)

```tsx
<ul className="nav-links">
  <li><a href="#about">About</a></li>
  <li><a href="#projects">Projects</a></li>
  <li><a href="#learning">Growth</a></li>
  <li><a href="#contact">Contact</a></li>
  <!-- Add new link: -->
  <li><a href="#blog">Blog</a></li>
</ul>
```

### Update Resume Link
**File:** `app/page.tsx` (Line 103)

```tsx
<a href="https://example.com/resume.pdf" target="_blank">

// Change to:
<a href="https://your-domain.com/resume.pdf" target="_blank">
```

---

## 🦸 Hero Section

### Update Main Heading
**File:** `app/page.tsx` (Around line 120)

```tsx
<h1 className="hero-name">Full-Stack Python Developer</h1>

// Change to your title
```

### Update Hero Description
**File:** `app/page.tsx` (Around line 122)

```tsx
<p className="hero-desc">
  Building scalable web applications, data tools, and automation solutions with Python & JavaScript.
</p>

// Change to your description
```

### Update Tech Stack Display
**File:** `app/page.tsx` (Lines 125-131)

```tsx
<div className="hero-actions">
  <a href="#projects" className="btn-a">See my work</a>
  <a href="#contact" className="btn-a outline">Get in touch</a>
</div>
```

---

## 👨‍💼 About Section

### Update About Content
**File:** `app/page.tsx` (Around line 155)

```tsx
<p className="about-sub">
  I&apos;m a passionate developer...
</p>

// Update with your background
```

---

## 🎓 Education

### Update Education Information
**File:** `app/page.tsx` (Lines 210-236)

You have three education entries that you can customize:

```tsx
<div className="edu-card">
  <div className="edu-label">Education</div>
  
  {/* First Education Entry */}
  <div className="edu-item">
    <div className="edu-school">BS Software Engineering Technology</div>
    <div className="edu-detail">Ziauddin University, Karachi</div>
    <div className="edu-year">2025 – Present</div>
  </div>

  {/* Second Education Entry with Achievements */}
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

  {/* Third Education Entry */}
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
```

### Modify Education Entries
- **School Name:** Change `edu-school` text
- **Institution:** Update `edu-detail` text
- **Duration:** Update `edu-year` dates
- **Achievements:** Add or remove `ach-tag` spans for skills learned

---

### Add/Update Skills
**File:** `app/page.tsx` (Lines 165-210)

```tsx
<div className="skill-cat">
  <h4>Languages</h4>
  <ul>
    <li>Python</li>
    <li>JavaScript</li>
    <li>HTML/CSS</li>
  </ul>
</div>

// Add more skill categories as needed
```

---

## 📁 Projects Section

### Adding New Projects
**File:** `app/page.tsx` (Lines 265-378)

#### Update Existing Project:
```tsx
<div className="p-card pc reveal">
  <div className="p-num">01</div>
  <div className="p-badge">E-Commerce</div>
  <h3 className="p-title">Shoe Store Website</h3>
  <p className="p-desc">Description...</p>
  <ul className="p-feats">
    <li>Feature 1</li>
    <li>Feature 2</li>
  </ul>
  <div className="p-stack">
    <span className="p-pill">Tech 1</span>
    <span className="p-pill">Tech 2</span>
  </div>
  <a href="https://github.com/..." target="_blank">View Project →</a>
</div>
```

#### Add New Project:
1. Duplicate a project card
2. Update `p-num` (01, 02, 03, etc.)
3. Change project details
4. Update links to your repository/demo
5. Update the grid class (`pc`, `pc2`, `pc3`, `pc4`) for layout

---

## 🛠️ Skills & Technologies

### Update Tech Stack Display
**File:** `app/page.tsx` (Various locations)

In about section:
```tsx
<li>Python</li>
<li>React</li>
<li>TypeScript</li>
```

In project cards:
```tsx
<span className="p-pill">React</span>
<span className="p-pill">TypeScript</span>
```

---

## 📚 Growth & Learning Section

### Update Learning Items
**File:** `app/page.tsx` (Around line 380)

```tsx
<div className="learn-inner">
  <div className="learn-left">
    <div className="learn-item">
      <h4>Advanced React Patterns</h4>
      <p>Status: In Progress</p>
    </div>
    <!-- Add more learning items -->
  </div>
  <div className="learn-right">
    <div className="also-card">
      <span className="also-label">Interests</span>
      <p>Web3, Cloud Architecture</p>
    </div>
  </div>
</div>
```

---

## 📞 Contact Section

### Update Contact Links
**File:** `app/page.tsx` (Lines 440-454)

```tsx
// Email
<a href="mailto:your-email@example.com" className="contact-icon-btn email-btn">

// LinkedIn
<a href="https://linkedin.com/in/your-profile" target="_blank">

// GitHub
<a href="https://github.com/your-username" target="_blank">

// Resume
<a href="https://your-domain.com/resume.pdf" target="_blank">
```

### Customize Contact Description
**File:** `app/page.tsx` (Around line 425)

```tsx
<p className="contact-sub">
  Open to freelance projects, full-time roles, and interesting collaborations...
</p>

// Update to your message
```

---

## 🔗 Footer

### Update Footer Text
**File:** `app/page.tsx` (Lines 468-470)

```tsx
<footer>
  <div className="f-left">
    © 2025 Muneer Ahmed. All rights reserved.
  </div>
</footer>

// Change to:
© 2025 Your Name. All rights reserved.
```

---

## 📱 Responsive Design

### Mobile Breakpoints
**File:** `app/globals.css`

Three main breakpoints are configured:
- **Tablet:** `@media (max-width: 960px)`
- **Mobile:** `@media (max-width: 640px)`

### Adjusting Responsive Behavior

```css
/* Tablet view adjustments */
@media (max-width: 960px) {
  nav {
    padding: 16px 24px;
  }
  #hero {
    grid-template-columns: 1fr;
    padding: 120px 24px 80px;
  }
}

/* Mobile view adjustments */
@media (max-width: 640px) {
  nav {
    padding: 12px 16px;
  }
  .hero-name {
    font-size: clamp(36px, 8.5vw, 58px);
  }
}
```

### Common Mobile Adjustments:
1. **Font sizes:** Use `clamp()` for fluid typography
2. **Padding/Margins:** Reduce for mobile (16px-24px typical)
3. **Grid layouts:** Change from multi-column to single column
4. **Spacing:** Reduce gap sizes on mobile

---

## 🔤 Typography

### Available Fonts
**File:** `app/layout.tsx`

```tsx
// Header font
--display: 'Syne', sans-serif;

// Body font
--body: 'DM Sans', sans-serif;

// Monospace font
--mono: 'JetBrains Mono', monospace;
```

### Changing Fonts
1. Import new fonts in `app/layout.tsx`
2. Update CSS variables in `app/globals.css`
3. Update layout classes with `font-sans`, `font-mono`, `font-serif`

---

## 🚀 Deployment

### Before Deploying:
1. Update all personal information (email, links, resume)
2. Update project links (GitHub URLs, demo URLs)
3. Update social media links (LinkedIn, GitHub)
4. Check all links are working
5. Test responsive design on mobile

### Deploy to Vercel:
```bash
# Connect your GitHub repository
git push origin main

# Vercel will automatically deploy
```

---

## 📝 Meta Information

### Update Page Metadata
**File:** `app/layout.tsx`

```tsx
export const metadata: Metadata = {
  title: 'Muneer Ahmed — Python Developer',
  description: 'Full-stack Python developer building web applications, data tools, and scalable systems.',
}

// Update to:
title: 'Your Name — Your Title',
description: 'Your professional description',
```

---

## 📱 Mobile Navigation

### Mobile Nav Component
**File:** `components/mobile-nav.tsx`

The mobile navigation is a bottom sheet menu that appears on screens ≤ 768px width.

#### Features:
- **Top Bar**: Custom menu icon only (no branding text, aligns right)
- **Custom Icon**: 3-line hamburger with middle line shorter and amber colored
- **Bottom Sheet**: Slides up from bottom with spring animation (Framer Motion)
- **Header Section**: Subtitle "Full Stack Developer - Web Developer" + large "Muneer" heading
- **Navigation Links**: 4 links (About, Projects, Growth, Contact) with amber numbered badges
- **Active State**: Subtle amber background tint for active link
- **Footer Section**: Email on left, CV pill button on right
- **Backdrop**: Semi-transparent overlay (rgba(0,0,0,0.6))
- **Drag Handle**: Visual indicator at the top of the sheet

#### Styling:
- Top bar background: `#09090c` (pure dark)
- Sheet background: `#0f0f14` (surface)
- Accent: `#f5a623` (amber)
- Border radius: `24px` on top corners
- Icon: 3 lines with middle line (width: 12px) in amber

#### Update Navigation Links
To modify the nav links, edit the `navLinks` array in `components/mobile-nav.tsx`:

```tsx
const navLinks = [
  { label: 'About', href: '#about', number: '01' },
  { label: 'Projects', href: '#projects', number: '02' },
  { label: 'Growth', href: '#learning', number: '03' },
  { label: 'Contact', href: '#contact', number: '04' },
];
```

- **label**: Display text for the link
- **href**: Section ID to scroll to
- **number**: Badge number displayed on the right

#### Update Email & CV Link
Located at the bottom of the mobile sheet:

```tsx
<a href="mailto:hello@muneer.dev" className="font-mono text-xs text-[#666]">
  muneerahmed.dev@gmail.com
</a>
<a href="https://example.com/resume.pdf" target="_blank" className="px-4 py-2 bg-[#f5a623]">
  CV
</a>
```

Update the email and resume URLs to match your information.

---


### Cursor Animation (Disabled on Mobile)
The custom cursor animation automatically disables on mobile devices (screens ≤ 768px width). This is handled in `app/page.tsx`:

```tsx
// Line 11-14: Mobile check
const isMobile = window.matchMedia('(max-width: 768px)').matches;
if (isMobile) return; // Skip cursor animation on mobile
```

**This affects:**
- Custom cursor dot and ring animation
- Project card hover effects with gradient tracking

### Test Responsive Design
1. Open your portfolio in a browser
2. Use DevTools (F12) → Toggle device toolbar (Ctrl+Shift+M)
3. Test breakpoints:
   - Mobile: 320px - 640px
   - Tablet: 640px - 960px
   - Desktop: 960px+

---

## 🎯 SEO Optimization

### Keywords to Update
- Replace "Python Developer" with your specialties
- Include relevant technologies in descriptions
- Keep descriptions concise (150-160 characters)

### Performance Tips:
1. Optimize images (use WebP format)
2. Minimize CSS/JS bundles
3. Use Next.js Image component for images
4. Enable Vercel Analytics

---

## 💾 Backup & Version Control

### Recommended Workflow:
```bash
# Create a new branch for changes
git checkout -b feature/update-content

# Make your changes, then commit
git add .
git commit -m "Update: [describe change]"

# Push and create pull request
git push origin feature/update-content
```

---

## 🆘 Troubleshooting

### Common Issues:

**Styling not updating:**
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh the page (Ctrl+Shift+R)
- Rebuild the project: `pnpm dev`

**Links not working:**
- Verify email format: `mailto:email@example.com`
- Ensure GitHub links are correct: `https://github.com/username`
- Check resume URL is accessible

**Mobile layout broken:**
- Check responsive breakpoints in globals.css
- Use browser DevTools to debug (F12)
- Test on real mobile devices

---

## 📞 Need Help?

For specific customization questions:
1. Check this guide's relevant section
2. Search the codebase for similar implementations
3. Refer to Next.js documentation: https://nextjs.org
4. Check Tailwind CSS docs: https://tailwindcss.com

---

**Last Updated:** 2025
**Portfolio Version:** 2.0
