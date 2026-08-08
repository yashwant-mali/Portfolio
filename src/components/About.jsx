import { Award, GraduationCap } from "lucide-react";
import profile from "../data/profile.js";
import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="section-wrap">
        <Reveal>
          <p className="eyebrow mb-3">01 · About</p>
          <h2 className="section-title mb-10">Who I am</h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Reveal delay={80}>
            <p className="max-w-2xl text-base leading-relaxed text-mist-300 sm:text-lg">
              {profile.about}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {profile.stats.map((stat) => (
                <div key={stat.label} className="card px-5 py-4">
                  <p className="font-mono text-lg font-semibold text-aqua sm:text-xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-mist-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={160} className="flex flex-col gap-4">
            <div className="card p-6">
              <div className="mb-3 flex items-center gap-2 text-brand-light">
                <Award size={18} />
                <h3 className="font-display text-sm font-semibold uppercase tracking-wide">
                  Certifications
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-mist-300">
                {profile.certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-aqua" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6">
              <div className="mb-3 flex items-center gap-2 text-brand-light">
                <GraduationCap size={18} />
                <h3 className="font-display text-sm font-semibold uppercase tracking-wide">
                  Education
                </h3>
              </div>
              <p className="text-sm font-medium text-white">
                {profile.education.degree}
              </p>
              <p className="mt-0.5 text-sm text-mist-300">{profile.education.school}</p>
              <p className="mt-1 font-mono text-xs text-mist-400">
                {profile.education.detail}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
