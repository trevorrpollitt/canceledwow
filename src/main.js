import React from "react";
import { motion } from "framer-motion";
import { Shield, Swords, Users, Banknote, MessageSquare, Sparkles, ExternalLink, Download, ScrollText, Sword, AlarmClock, HeartHandshake, Scroll } from "lucide-react";

// =============================
// THEME & CONTENT SETTINGS
// Edit these objects to update the site quickly without touching markup
// =============================

const GUILD = {
  name: "Canceled",
  game: "World of Warcraft",
  tagline: "Semi-hardcore raiding. Zero‑toxicity. All vibe.",
  cta: {
    discordInvite: "https://discord.gg/canceledwow", // replace with your real invite
    applyUrl: "#apply", // link to your application form if separate
  },
  social: [
    { label: "Raider.io", href: "#", note: "Guild profile" },
    { label: "Warcraft Logs", href: "#", note: "Progress & parses" },
    { label: "Guilds of WoW", href: "#", note: "Roster & widgets" },
  ],
  art: {
    logoText: "CANCELED",
    // Drop a logo file in your app and swap this path, or leave blank for text logo
    logoUrl: "",
    heroImageUrl: "", // optional hero background image
  },
};

const RULES = [
  {
    icon: <Shield className="w-5 h-5" />, title: "Respect & Courtesy",
    text: "Harassment, discrimination, or toxic behavior is an instant exit. Treat all members with integrity.",
  },
  {
    icon: <Sparkles className="w-5 h-5" />, title: "Positive Atmosphere",
    text: "We maintain a supportive, engaging environment. No degrading or dehumanizing language.",
  },
  {
    icon: <MessageSquare className="w-5 h-5" />, title: "Communication",
    text: "Clarity and teamwork in raids, Mythic+, and casual chats. Keep conflicts out of public channels.",
  },
  {
    icon: <Banknote className="w-5 h-5" />, title: "Guild Bank Integrity",
    text: "Take what you need, follow policies, and report issues to leadership immediately.",
  },
  {
    icon: <Users className="w-5 h-5" />, title: "Brotherhood in Battle",
    text: "Assist guildmates with quests, dungeons, and gearing. No warrior left behind.",
  },
  {
    icon: <ScrollText className="w-5 h-5" />, title: "Leadership Decisions",
    text: "Leadership acts in the guild’s best interest. Constructive feedback is welcome.",
  },
  {
    icon: <HeartHandshake className="w-5 h-5" />, title: "Human Resources",
    text: "DM @Human Resources for mediation, burnout support, or resolving disputes—handled discreetly.",
  },
];

const TEAM_SECTIONS = [
  {
    label: "Semi‑Hardcore Mythic Teams",
    color: "from-red-600 to-red-800",
    teams: [
      {
        name: "Redacted",
        schedule: "Wed/Thu 8:30–11:30 PM EST",
        tag: "Semi‑Hardcore Mythic | CE‑driven",
        blurb: "High‑performance team focused on Cutting Edge and improving each tier.",
        contacts: ["@St. Chexterino", "@Windonks"],
      },
      {
        name: "Expunged",
        schedule: "Fri/Sat 8:15–11:15 PM EST",
        tag: "Semi‑Hardcore Mythic | Family‑like progression",
        blurb: "Balances competitive raiding with fun. Supportive, consistent environment.",
        contacts: ["@FilthyFew", "@kattrice"],
      },
      {
        name: "Omitted",
        schedule: "Sat/Sun 6:00–9:00 PM EST",
        tag: "Midcore Mythic | Not CE‑focused",
        blurb: "Weekend raiders who push limits while fostering teamwork. Structured and organized.",
        contacts: ["@Freyjà ❌❌❌", "@Skaði"],
      },
    ],
  },
  {
    label: "AOTC & Casual Teams",
    color: "from-slate-600 to-slate-800",
    teams: [
      {
        name: "Nullified",
        schedule: "Tues/Wed 7:30–10:30 PM EST",
        tag: "AOTC+ | 30‑somethings with style",
        blurb: "Bossing with fun, accountability, and growth. Casual Mythic possible for interested players.",
        contacts: ["@Couchee"],
      },
      {
        name: "Refreshed",
        schedule: "Wed/Thu 9:30–11:30 PM EST",
        tag: "Casual AOTC | Relaxed vibes",
        blurb: "Enjoyable raid experience with no pressure—just clean fun.",
        contacts: ["@Zesty Phresh"],
      },
      {
        name: "Censored",
        schedule: "Mon 9:00–10:30 PM EST",
        tag: "Casual AOTC | Super‑casual, non‑rostered",
        blurb: "Zero‑pressure team where learning is the priority.",
        contacts: ["@Auntie Plethy", "@Cuzdraven"]
      },
    ],
  },
];

const CALLOUTS = [
  { icon: <Sword className="w-6 h-6" />, title: "Mythic Raiding", text: "Three semi‑hardcore teams progressing each tier." },
  { icon: <Swords className="w-6 h-6" />, title: "Keys & PvP", text: "Active Mythic+ and arenas with friendly coaching." },
  { icon: <AlarmClock className="w-6 h-6" />, title: "Adult Schedules", text: "Late‑evening EST raids for working professionals." },
];

// =============================
// UI PRIMITIVES
// =============================
const Container = ({ children, className = "" }) => (
  <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <div className="mb-10 text-center">
    {eyebrow && (
      <div className="inline-block rounded-full border border-red-500/40 bg-red-500/10 px-3 py-1 text-xs tracking-widest uppercase text-red-300">
        {eyebrow}
      </div>
    )}
    <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
      {title}
    </h2>
    {subtitle && <p className="mt-3 text-slate-300 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const GradientCard = ({ children, className = "" }) => (
  <div className={`rounded-2xl p-[1px] bg-gradient-to-br from-red-500/60 via-slate-700 to-slate-900 shadow-lg ${className}`}>
    <div className="rounded-2xl p-6 bg-slate-900/90 backdrop-blur">
      {children}
    </div>
  </div>
);

// =============================
// PAGE
// =============================

export default function GuildSite() {
  return (
    <div className="min-h-screen bg-[#0a0c12] text-slate-200 selection:bg-red-600/40">
      <header className="sticky top-0 z-40 backdrop-blur bg-[#0a0c12]/70 border-b border-white/5">
        <Container className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            {GUILD.art.logoUrl ? (
              <img src={GUILD.art.logoUrl} alt={GUILD.name} className="h-8 w-8 rounded" />
            ) : (
              <span className="text-xl font-black tracking-widest text-white">{GUILD.name}</span>
            )}
            <span className="hidden md:inline text-sm text-slate-400">{GUILD.game}</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#rules" className="hover:text-white/90 text-slate-300">Rules</a>
            <a href="#teams" className="hover:text-white/90 text-slate-300">Raid Teams</a>
            <a href="#links" className="hover:text-white/90 text-slate-300">Profiles</a>
            <a href="#join" className="hover:text-white/90 text-slate-300">Join</a>
          </nav>
          <a
            href={GUILD.cta.discordInvite}
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 px-4 py-2 text-sm font-semibold text-white shadow hover:from-red-500 hover:to-red-600"
          >
            Join Discord <ExternalLink className="w-4 h-4" />
          </a>
        </Container>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.25),rgba(10,12,18,0))]" />
        <Container className="py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid items-center gap-10 lg:grid-cols-2"
          >
            <div>
              <h1 className="text-4xl sm:text-6xl font-black leading-tight tracking-tight text-white">
                {GUILD.name} <span className="text-red-500">Rules</span> &
                <br className="hidden sm:block" /> Raid Teams
              </h1>
              <p className="mt-6 max-w-xl text-lg text-slate-300">{GUILD.tagline}</p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href={GUILD.cta.discordInvite} className="rounded-2xl bg-red-600 px-5 py-3 font-semibold text-white shadow hover:bg-red-500">Join the Discord</a>
                <a href="#teams" className="rounded-2xl border border-white/10 px-5 py-3 font-semibold text-white/90 hover:bg-white/5">See Teams</a>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {CALLOUTS.map((c) => (
                  <GradientCard key={c.title}>
                    <div className="flex items-start gap-3">
                      {c.icon}
                      <div>
                        <div className="font-semibold text-white">{c.title}</div>
                        <div className="text-sm text-slate-300">{c.text}</div>
                      </div>
                    </div>
                  </GradientCard>
                ))}
              </div>
            </div>

            <div className="lg:justify-self-end">
              <GradientCard className="max-w-md">
                <div className="flex items-center gap-4">
                  <Scroll className="w-10 h-10" />
                  <div>
                    <div className="text-white font-bold text-xl">Welcome to the {GUILD.name} Discord</div>
                    <div className="text-slate-300 text-sm">This is the beginning of this server.</div>
                  </div>
                </div>
                <div className="mt-4 rounded-xl bg-black/30 p-4 text-sm text-slate-300">
                  Tip: In your server, pin this site in the #rules channel description so new members always see it.
                </div>
              </GradientCard>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* RULES */}
      <section id="rules" className="py-16 sm:py-24">
        <Container>
          <SectionTitle eyebrow="Guild Rules & Expectations" title="Code of Conduct" subtitle="Short, clear expectations that keep our community safe and fun." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {RULES.map((r) => (
              <GradientCard key={r.title}>
                <div className="flex items-start gap-3">
                  <div className="text-red-400">{r.icon}</div>
                  <div>
                    <div className="font-semibold text-white">{r.title}</div>
                    <p className="text-sm text-slate-300 mt-1">{r.text}</p>
                  </div>
                </div>
              </GradientCard>
            ))}
          </div>
        </Container>
      </section>

      {/* TEAMS */}
      <section id="teams" className="py-16 sm:py-24 bg-gradient-to-b from-[#0a0c12] to-black/20">
        <Container>
          <SectionTitle eyebrow="Raid Teams & Progression" title="Find Your Squad" subtitle="Choose a schedule and culture that fits you. Apply or DM the contacts listed." />
          <div className="space-y-12">
            {TEAM_SECTIONS.map((sec) => (
              <div key={sec.label}>
                <div className={`inline-block rounded-full bg-gradient-to-r ${sec.color} px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/90 mb-6`}>{sec.label}</div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {sec.teams.map((t) => (
                    <GradientCard key={t.name}>
                      <div className="flex items-start gap-3">
                        <Shield className="w-6 h-6 text-red-400" />
                        <div>
                          <div className="text-white font-bold text-lg">{t.name}</div>
                          <div className="text-slate-300 text-sm">{t.tag}</div>
                          <div className="mt-2 text-sm text-slate-200 font-medium">{t.schedule}</div>
                          <p className="mt-2 text-sm text-slate-300">{t.blurb}</p>
                          <div className="mt-3 text-xs text-slate-400">Contact: {t.contacts.join(", ")}</div>
                        </div>
                      </div>
                    </GradientCard>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* LINKS */}
      <section id="links" className="py-16 sm:py-24">
        <Container>
          <SectionTitle eyebrow="Guild Profiles & Links" title="Follow Our Progress" subtitle="Official profiles and tools for tracking our raids and roster." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GUILD.social.map((s) => (
              <a key={s.label} href={s.href} className="group block">
                <GradientCard>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white">{s.label}</div>
                      <div className="text-sm text-slate-300">{s.note}</div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-white" />
                  </div>
                </GradientCard>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* JOIN CTA */}
      <section id="join" className="py-16 sm:py-24 bg-[radial-gradient(ellipse_at_bottom,rgba(220,38,38,0.25),rgba(10,12,18,0))]">
        <Container>
          <GradientCard>
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Ready to join {GUILD.name}?</h3>
                <p className="mt-2 text-slate-300">Hop into our Discord to chat with leadership, pick a raid team, and get the ball rolling. Keep screenshots of your logs handy.</p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a href={GUILD.cta.discordInvite} className="rounded-2xl bg-red-600 px-5 py-3 font-semibold text-white shadow hover:bg-red-500 inline-flex items-center gap-2">Join Discord <ExternalLink className="w-4 h-4" /></a>
                  <a href={GUILD.cta.applyUrl} className="rounded-2xl border border-white/10 px-5 py-3 font-semibold text-white/90 hover:bg-white/5 inline-flex items-center gap-2">Apply Now <Download className="w-4 h-4" /></a>
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/30 p-5 text-sm text-slate-300">
                <ul className="space-y-2 list-disc pl-5">
                  <li>Set your server nickname to your in‑game name.</li>
                  <li>Choose your roles/specs in <span className="font-semibold text-white">#channels-and-roles</span>.</li>
                  <li>Read <span className="font-semibold text-white">#rules</span> and say hi in <span className="font-semibold text-white">#general</span>.</li>
                </ul>
              </div>
            </div>
          </GradientCard>
        </Container>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-[#0a0c12]">
        <Container className="py-10 text-sm text-slate-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} {GUILD.name} — A {GUILD.game} Guild
          </div>
          <div className="flex gap-6">
            <a href="#rules" className="hover:text-white">Rules</a>
            <a href="#teams" className="hover:text-white">Raid Teams</a>
            <a href="#links" className="hover:text-white">Profiles</a>
            <a href={GUILD.cta.discordInvite} className="hover:text-white">Discord</a>
          </div>
        </Container>
      </footer>
    </div>
  );
}
