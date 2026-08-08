import { Github, Linkedin, Twitter } from "lucide-react";
import profile from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="border-t border-ink-700 py-8">
      <div className="section-wrap flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-mist-400">
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-mist-400 transition-colors hover:text-white"
          >
            <Github size={17} />
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-mist-400 transition-colors hover:text-white"
          >
            <Linkedin size={17} />
          </a>
          <a
            href={profile.social.twitter}
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="text-mist-400 transition-colors hover:text-white"
          >
            <Twitter size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
