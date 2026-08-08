import { ArrowUpRight, Download, Mail, Phone } from "lucide-react";
import profile from "../data/profile.js";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="section-wrap">
        <Reveal>
          <div className="card relative overflow-hidden px-6 py-14 text-center sm:px-16">
            <div className="pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand/20 blur-3xl" />

            <p className="eyebrow mb-4 justify-center">05 · Contact</p>
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Let&apos;s build something great.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-mist-300">
              Open to frontend engineering roles and freelance React/Next.js
              work. Reach out and I&apos;ll get back to you within a day.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href={`mailto:${profile.email}`} className="btn-primary">
                <Mail size={16} />
                {profile.email}
              </a>
              <a href={`tel:${profile.phoneHref}`} className="btn-secondary">
                <Phone size={16} />
                {profile.phone}
              </a>
            </div>

            <a
              href={profile.resumeUrl}
              download
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-mist-300 transition-colors hover:text-white"
            >
              <Download size={14} />
              Download resume
              <ArrowUpRight size={14} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
