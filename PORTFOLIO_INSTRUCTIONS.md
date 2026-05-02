# Portfolio Website - Instructions for Future Changes

## Project Overview
This is a professional portfolio website built with Next.js, featuring a dark theme with amber accents. The site includes hero section, about, projects, learning, contact, and footer sections with smooth animations and scroll effects.

## Key Files
- **`app/page.tsx`** - Main portfolio page with all sections
- **`app/globals.css`** - All styling, variables, and responsive breakpoints
- **`app/layout.tsx`** - HTML metadata and page structure

## Color Scheme
- **Primary Background**: `--bg: #09090c` (dark)
- **Secondary Backgrounds**: `--bg2`, `--bg3`, `--bg4` (progressively lighter)
- **Accent Color**: `--amber: #f5a623` (amber/gold)
- **Text Color**: `--text: #eeecea` (light gray)
- **Muted Text**: `--muted: #7a7880` (medium gray)

## Typography
- **Display Font**: Syne (headings) - weights: 400, 600, 700, 800
- **Body Font**: DM Sans (paragraphs) - weights: 300, 400, 500
- **Mono Font**: JetBrains Mono (code/terminal) - weights: 300, 400, 600

## Responsive Design Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Media queries use `@media (max-width: XXXpx)` format.

## Common Customization Tasks

### 1. Update Personal Information
In `app/page.tsx`:
- Hero section: Change name, title, role, description
- About section: Update background, education, skills
- Projects: Update project details, icons, links
- Contact: Email and social links in footer
- Learning: Update learning goals and interests

### 2. Change Color Scheme
Edit `:root` variables in `app/globals.css`:
```css
--bg: #09090c;        /* Main background */
--amber: #f5a623;     /* Accent color - CHANGE THIS */
--text: #eeecea;      /* Main text color */
--muted: #7a7880;     /* Secondary text */
```

### 3. Modify Navigation
In `app/page.tsx` nav section - Update links and button positions.

### 4. Add New Projects
In `app/page.tsx` projects section:
- Duplicate a project card (`.p-card` div)
- Update project number, badge, title, description, features, tech stack, link
- Adjust grid class (`.pc`, `.pc2`, `.pc3`, `.pc4`) for layout

### 5. Update Resume Link
In `app/page.tsx`:
- Find the resume button in the navbar (`.nav-cta`)
- Change `href` to your resume URL

### 6. Responsive Adjustments
Responsive rules are at the bottom of `app/globals.css`:
- Adjust padding, font sizes, and grid layouts for mobile
- Use `@media (max-width: 640px)` for mobile-specific styles

## Animation Classes
- `.reveal` - Scroll-in animation (triggered by IntersectionObserver)
- `.in` - Applied when element comes into view
- Fade-in animations: `fadeUp`, `fadeIn`

## Interactive Elements
- **Custom Cursor**: Tracks mouse movement, enlarges on hover
- **Scroll Detection**: Nav bar gets background/blur on scroll
- **Hover Effects**: Cards have gradient lighting effect via `--mx` and `--my` CSS variables
- **Smooth Scroll**: HTML scroll-behavior is set to smooth

## Important Notes
- Remove `cursor: none` and custom cursor CSS if you prefer default cursor
- The dot grid and noise overlay in `body::before` and `body::after` can be removed for cleaner look
- Terminal in hero section is hardcoded - update content directly in JSX
- Contact form currently doesn't submit (add backend integration as needed)

## Deployment
- This portfolio is Next.js based and deploys easily to Vercel
- Update metadata in `app/layout.tsx` for SEO optimization
- Update favicon/icons in public folder

## Future Enhancements
- [ ] Add form submission backend (Supabase, EmailJS, etc.)
- [ ] Add dark/light mode toggle
- [ ] Add blog section with dynamic posts
- [ ] Integrate with CMS for content management
- [ ] Add email notification on form submission
