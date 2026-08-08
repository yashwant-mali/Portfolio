import { ArrowUpRight, Download, Github, Linkedin, Twitter } from "lucide-react";
import profile from "../data/profile.js";
import profilePhoto from "../assets/ProfilePhoto.png";

export default function Hero() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28"
    >
      {/* decorative blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-brand/20 blur-3xl animate-blob" />
        <div className="absolute top-32 right-0 h-72 w-72 rounded-full bg-aqua/10 blur-3xl animate-blob [animation-delay:4s]" />
      </div>

      <div className="section-wrap grid grid-cols-1 items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        {/* text */}
        <div className="order-2 md:order-1">
          <p className="eyebrow mb-5 animate-fade-up">
            Hi, I&apos;m Yashwant — welcome to my portfolio
          </p>

          <h1
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            Frontend Engineer
            <br />
            building <span className="bg-gradient-to-r from-brand-light to-aqua bg-clip-text text-transparent">fast, accessible</span>
            <br />
            React interfaces.
          </h1>

          <p
            className="mt-6 max-w-lg text-base leading-relaxed text-mist-300 sm:text-lg animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            {profile.heroSubline}
          </p>

          <div
            className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, "projects")}
              className="btn-primary"
            >
              View Projects
              <ArrowUpRight size={16} />
            </a>
            <a href={profile.resumeUrl} download className="btn-secondary">
              <Download size={16} />
              Download Resume
            </a>
          </div>

          <div
            className="mt-8 flex items-center gap-4 animate-fade-up"
            style={{ animationDelay: "320ms" }}
          >
            <span className="text-xs uppercase tracking-widest text-mist-400">
              Find me on
            </span>
            <div className="flex items-center gap-2">
              <SocialIcon href={profile.social.github} label="GitHub">
                <Github size={17} />
              </SocialIcon>
              <SocialIcon href={profile.social.linkedin} label="LinkedIn">
                <Linkedin size={17} />
              </SocialIcon>
              <SocialIcon href={profile.social.twitter} label="Twitter">
                <Twitter size={17} />
              </SocialIcon>
            </div>
          </div>
        </div>

        {/* photo */}
        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div className="relative animate-fade-up" style={{ animationDelay: "120ms" }}>
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand/40 via-aqua/20 to-transparent blur-2xl" />
            <div className="relative h-64 w-64 overflow-hidden rounded-[2rem] border border-ink-600 bg-ink-850 shadow-glow sm:h-80 sm:w-80">
              <img
                src={profilePhoto}
                alt="Portrait of Yashwant Mali"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-xl border border-ink-600 bg-ink-900/90 px-4 py-2.5 shadow-card backdrop-blur">
              <p className="font-mono text-[11px] text-mist-400">Currently at</p>
              <p className="text-sm font-semibold text-white">Infosys · Home Depot</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-ink-600 bg-ink-850/60 text-mist-300 transition-colors hover:border-brand/60 hover:text-white"
    >
      {children}
    </a>
  );
}
