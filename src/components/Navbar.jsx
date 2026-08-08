import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import profile from "../data/profile.js";
import useActiveSection from "../hooks/useActiveSection.js";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(LINKS.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-ink-950/80 backdrop-blur-md border-b border-ink-700"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="section-wrap flex h-16 items-center justify-between">
        <a
          href="#top"
          onClick={(e) => handleNav(e, "top")}
          className="font-display text-lg font-semibold tracking-tight text-mist-100"
        >
          Yashwant<span className="text-brand-light">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleNav(e, link.id)}
                className={`relative px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                  active === link.id
                    ? "text-white"
                    : "text-mist-300 hover:text-white"
                }`}
              >
                {link.label}
                {active === link.id && (
                  <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-brand to-aqua" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href={profile.resumeUrl}
            download
            className="btn-secondary !py-2 !px-4 text-xs"
          >
            <Download size={14} />
            Resume
          </a>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-mist-200 hover:text-white"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-ink-700 bg-ink-950/95 backdrop-blur-md">
          <ul className="section-wrap flex flex-col py-3">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNav(e, link.id)}
                  className={`block rounded-md px-3 py-2.5 text-sm font-medium ${
                    active === link.id
                      ? "text-white bg-ink-800"
                      : "text-mist-300"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href={profile.resumeUrl}
                download
                className="btn-secondary w-full !py-2.5"
              >
                <Download size={14} />
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
