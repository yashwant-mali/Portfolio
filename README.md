# Yashwant Mali — Portfolio

Personal portfolio built with React 19, Vite, and Tailwind CSS.

## Stack

- **React 19** + **Vite** — app shell and dev server
- **Tailwind CSS** — utility-first styling, custom theme in `tailwind.config.js`
- **lucide-react** — icon set
- No UI kit dependency (MUI removed) — every component is hand-built and lightweight

## Structure

```
src/
├── App.jsx                 # page composition
├── components/              # Navbar, Hero, About, Skills, Experience, Projects, Contact, Footer
├── data/                    # profile.js, skills.js, experience.js, projects.js — edit these to update content
├── hooks/                    # useReveal (scroll-in animation), useActiveSection (nav highlighting)
└── index.css                 # Tailwind layers + design tokens
```

To update your info (bio, skills, experience, projects, links), edit the files in `src/data/` — the components read from there, no JSX changes needed.

## Getting started

```bash
npm install
npm run dev       # start dev server
npm run build     # production build
npm run preview   # preview the production build
```

## Deploy

Deploys as a static Vite build — works out of the box on Vercel (build command `vite build`, output dir `dist`).
