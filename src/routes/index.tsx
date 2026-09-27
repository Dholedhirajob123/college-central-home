import { createFileRoute } from "@tanstack/react-router";
import {
  GraduationCap,
  IndianRupee,
  CalendarDays,
  Users,
  Trophy,
  LibraryBig,
  FlaskConical,
  Dumbbell,
  BedDouble,
  Building2,
  Briefcase,
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronDown,
  Megaphone,
} from "lucide-react";

import {
  college,
  heroStats,
  notices,
  courses,
  feeTable,
  admissionSteps,
  faculty,
  facilities,
  placementStats,
  testimonials,
  faqs,
} from "@/lib/college-data";
import heroCampus from "@/assets/hero-campus.jpg";
import campusLibrary from "@/assets/campus-library.jpg";
import campusSports from "@/assets/campus-sports.jpg";
import campusFest from "@/assets/campus-fest.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meridian College — Courses, Fees, Admissions & Campus" },
      {
        name: "description",
        content:
          "Everything about Meridian College on one page: courses and seats, complete fee structure, admission timeline, faculty, campus life, placements and contact details.",
      },
      { property: "og:title", content: "Meridian College — Courses, Fees, Admissions & Campus" },
      {
        property: "og:description",
        content:
          "Courses and seats, complete fee structure, admission timeline, faculty, campus life and placements — all in one place.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Fees", href: "#fees" },
  { label: "Admissions", href: "#admissions" },
  { label: "Faculty", href: "#faculty" },
  { label: "Campus", href: "#campus" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-lg bg-primary font-display text-lg text-primary-foreground">
            M
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[17px] font-semibold tracking-tight">
              {college.name}
            </span>
            <span className="block text-[11px] text-muted-foreground">
              Estd. 1965 · NAAC A+
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground lg:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#admissions"
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Apply Now
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:pt-20">
        <div>
          <p className="kicker">Admissions open · Session 2026–27</p>
          <h1 className="display mt-4 text-balance text-5xl leading-[1.04] tracking-tight md:text-6xl">
            Everything about your college,{" "}
            <span className="italic text-accent">in one place.</span>
          </h1>
          <p className="mt-5 max-w-[52ch] text-pretty text-lg text-muted-foreground">
            Courses and seats, complete fee structure, admission dates, faculty, campus
            life and placements — gathered on a single page so students and parents
            never have to hunt for information.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#fees"
              className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View Fee Structure
            </a>
            <a
              href="#courses"
              className="rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold transition-colors hover:border-accent"
            >
              Browse Courses
            </a>
          </div>
          <div className="mt-10 grid max-w-lg grid-cols-2 gap-6 sm:grid-cols-4">
            {heroStats.map((s) => (
              <div key={s.label}>
                <div className="display text-3xl font-semibold text-primary">{s.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-3 -rotate-1 rounded-2xl bg-secondary" />
          <img
            src={heroCampus}
            alt="Meridian College heritage building at golden hour"
            width={1600}
            height={1008}
            className="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-[0_28px_60px_-30px_oklch(0.235_0.032_158/0.6)]"
          />
        </div>
      </div>
    </section>
  );
}

function Notices() {
  return (
    <section className="border-y border-border bg-secondary/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center">
        <span className="flex shrink-0 items-center gap-2 text-sm font-semibold text-primary">
          <Megaphone className="size-4" /> Notice Board
        </span>
        <div className="flex flex-wrap gap-x-8 gap-y-1 text-sm text-muted-foreground">
          {notices.map((n) => (
            <span key={n.text}>
              <span className="font-semibold text-accent">{n.date}</span> — {n.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHead({
  kicker,
  title,
  intro,
}: {
  kicker: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="kicker">{kicker}</p>
      <h2 className="display mt-2 text-balance text-3xl tracking-tight md:text-4xl">{title}</h2>
      {intro && <p className="mt-3 text-pretty text-muted-foreground">{intro}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHead
            kicker="Our heritage"
            title="Six decades of teaching, built on trust"
          />
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Founded in 1965, {college.fullName} began as a small arts college with two
            classrooms and 90 students. Today it is a NAAC A+ accredited, university-
            affiliated institution spread over a 12-acre campus, offering 23 programmes
            across Science, Commerce and Humanities — with a faculty-to-student ratio
            of 1:14 and a library of 42,000 volumes.
          </p>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Our motto stays the same as day one: honest education, transparent fees,
            and every student known by name.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="surface-card p-4">
              <div className="text-sm font-semibold">NAAC A+ Accredited</div>
              <div className="mt-1 text-xs text-muted-foreground">Valid through 2029</div>
            </div>
            <div className="surface-card p-4">
              <div className="text-sm font-semibold">University Affiliated</div>
              <div className="mt-1 text-xs text-muted-foreground">State University, UGC recognised</div>
            </div>
          </div>
        </div>
        <img
          src={campusLibrary}
          alt="Students studying in the Meridian College library"
          width={1024}
          height={768}
          loading="lazy"
          className="aspect-[4/3] w-full rounded-2xl border border-border object-cover"
        />
      </div>
    </section>
  );
}

function Courses() {
  return (
    <section id="courses" className="scroll-mt-20 bg-secondary/50 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          kicker="Academics"
          title="Courses, seats & eligibility"
          intro="Eight programmes across three streams. Every course lists its intake, eligibility and annual fee up front."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((c) => (
            <article key={c.degree + c.title} className="surface-card flex flex-col p-6">
              <span className="w-fit rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
                {c.degree}
              </span>
              <h3 className="display mt-3 text-xl leading-snug">{c.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{c.eligibility}</p>
              <div className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="size-3.5 text-accent" /> {c.duration}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="size-3.5 text-accent" /> {c.seats} seats
                </div>
              </div>
              <div className="mt-auto pt-4">
                <div className="border-t border-border pt-3">
                  <span className="display text-xl font-semibold text-primary">{c.feePerYear}</span>
                  <span className="ml-1 text-xs text-muted-foreground">/ year</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Fees() {
  return (
    <section id="fees" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
      <SectionHead
        kicker="Transparency"
        title="Fee structure"
        intro="One annual fee covers everything academic — no hidden charges at any point from admission to convocation. Payable in two instalments."
      />
      <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div className="surface-card overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary/10 text-left">
                <th className="px-6 py-3.5 font-semibold">Component (per year)</th>
                {feeTable.columns.map((col) => (
                  <th key={col} className="px-6 py-3.5 text-right font-semibold">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {feeTable.rows.map((row) => (
                <tr key={row.component}>
                  <td className="px-6 py-3.5">{row.component}</td>
                  {row.values.map((v, i) => (
                    <td key={i} className="px-6 py-3.5 text-right tabular-nums">
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="bg-primary text-primary-foreground">
                <td className="px-6 py-4 font-semibold">Total per year</td>
                {feeTable.totals.map((t, i) => (
                  <td key={i} className="display px-6 py-4 text-right text-base font-semibold tabular-nums">
                    {t}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="space-y-5">
          <div className="surface-card p-6">
            <h3 className="flex items-center gap-2 font-semibold">
              <IndianRupee className="size-4 text-accent" /> Additional charges
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {feeTable.extras.map((e) => (
                <li key={e.item} className="flex items-center justify-between gap-4">
                  <span className="text-muted-foreground">{e.item}</span>
                  <span className="font-semibold tabular-nums">{e.fee}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-accent/40 bg-accent/10 p-6">
            <h3 className="font-semibold text-accent-foreground">Scholarships</h3>
            <p className="mt-2 text-sm leading-relaxed text-accent-foreground/80">
              85%+ in 10+2 → 50% tuition waiver. Government scholarships (EBC, OBC,
              SC/ST, minority) facilitated through the college office.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Admissions() {
  return (
    <section id="admissions" className="scroll-mt-20 bg-secondary/50 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          kicker="Admissions 2026–27"
          title="How to join, step by step"
          intro="Four simple steps from application to enrolment. Original documents are verified in person at the college office."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {admissionSteps.map((s, i) => (
            <article key={s.phase} className="surface-card relative p-6">
              <span className="display absolute -top-4 right-5 text-5xl font-semibold text-accent/25">
                {i + 1}
              </span>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                {s.phase}
              </p>
              <h3 className="display mt-2 text-lg">{s.title}</h3>
              <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-primary">
                <CalendarDays className="size-3.5" /> {s.date}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faculty() {
  return (
    <section id="faculty" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
      <SectionHead
        kicker="Faculty"
        title="Heads of departments"
        intro="148 full-time faculty members, led by department heads who teach first-year classes themselves."
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {faculty.map((f) => (
          <article key={f.name} className="surface-card p-6">
            <div className="display grid size-14 place-items-center rounded-full bg-primary/10 text-xl font-semibold text-primary">
              {f.initials}
            </div>
            <h3 className="mt-4 font-semibold">{f.name}</h3>
            <p className="text-sm text-accent">{f.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Campus() {
  return (
    <section id="campus" className="scroll-mt-20 bg-secondary/50 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          kicker="Campus life"
          title="Life beyond the classroom"
          intro="A 12-acre green campus with 18 clubs and societies — there is something here for every student."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { img: campusLibrary, alt: "The college library reading room", label: "Central library" },
            { img: campusSports, alt: "Students playing cricket on the campus ground", label: "Sports grounds" },
            { img: campusFest, alt: "Cultural fest performance on the main stage", label: "Srijan cultural fest" },
          ].map((g) => (
            <figure key={g.label} className="group overflow-hidden rounded-2xl border border-border">
              <img
                src={g.img}
                alt={g.alt}
                width={1024}
                height={768}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="bg-card px-5 py-3 text-sm font-medium">{g.label}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f) => (
            <div key={f.title} className="surface-card flex gap-4 p-5">
              <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                {f.title === "Library" && <LibraryBig className="size-5" />}
                {f.title === "Science labs" && <FlaskConical className="size-5" />}
                {f.title === "Sports complex" && <Dumbbell className="size-5" />}
                {f.title === "Hostel" && <BedDouble className="size-5" />}
                {f.title === "Auditorium" && <Building2 className="size-5" />}
                {f.title === "Placement cell" && <Briefcase className="size-5" />}
              </div>
              <div>
                <h3 className="text-sm font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Placements() {
  return (
    <section id="placements" className="bg-primary py-20 text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
              Placements
            </p>
            <h2 className="display mt-2 text-balance text-3xl tracking-tight md:text-4xl">
              Where our students go
            </h2>
          </div>
          <p className="max-w-[42ch] text-sm leading-relaxed text-primary-foreground/70">
            The placement cell runs aptitude training, mock interviews and résumé
            clinics from the second year onwards. Recruitment drives happen every
            January and February.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {placementStats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-6"
            >
              <div className="display text-4xl font-semibold text-accent">{s.value}</div>
              <div className="mt-2 text-sm text-primary-foreground/70">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-6"
            >
              <p className="text-sm leading-relaxed text-primary-foreground/85">“{t.quote}”</p>
              <footer className="mt-4 text-sm">
                <span className="font-semibold">{t.name}</span>
                <span className="block text-xs text-primary-foreground/60">{t.batch}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-5 py-20">
      <SectionHead
        kicker="Common questions"
        title="Frequently asked questions"
      />
      <div className="mt-8 space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="surface-card group p-5 open:bg-card">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
              {f.q}
              <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border bg-secondary/50 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2">
        <div>
          <SectionHead
            kicker="Visit or call us"
            title="Admissions office"
            intro="Walk in with your documents any working day — no appointment needed."
          />
          <ul className="mt-8 space-y-5 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>{college.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>{college.phone}</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>{college.email}</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>{college.hours}</span>
            </li>
          </ul>
        </div>
        <div className="surface-card overflow-hidden p-0">
          <img
            src={campusFest}
            alt="The Srijan cultural fest main stage at night"
            width={1024}
            height={768}
            loading="lazy"
            className="aspect-[16/10] w-full object-cover"
          />
          <div className="p-6">
            <h3 className="flex items-center gap-2 font-semibold">
              <GraduationCap className="size-4 text-accent" /> Admission helpdesk
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              For any question about courses, fees or documents, call the helpdesk on{" "}
              <span className="font-semibold text-foreground">{college.phone}</span> between 9 AM
              and 5 PM, Monday to Saturday.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground py-12 text-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-lg bg-background/10 font-display text-lg">
            M
          </span>
          <div className="leading-tight">
            <div className="font-display font-semibold">{college.fullName}</div>
            <div className="text-xs opacity-60">{college.tagline}</div>
          </div>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm opacity-80">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="transition-opacity hover:opacity-100">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-6xl border-t border-background/15 px-5 pt-6 text-center text-xs opacity-60">
        © 2026 {college.fullName}. All rights reserved.
      </p>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Notices />
        <About />
        <Courses />
        <Fees />
        <Admissions />
        <Faculty />
        <Campus />
        <Placements />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
