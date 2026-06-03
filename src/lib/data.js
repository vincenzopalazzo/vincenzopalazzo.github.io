/* Shared content for Vincenzo Palazzo's site — single source of truth.
   Both design directions (Editorial + Terminal) render the same facts. */

const links = [
  { label: 'GitHub',   handle: '@vincenzopalazzo',     href: 'https://github.com/vincenzopalazzo' },
  { label: 'X',        handle: '@PalazzoVincenzo',      href: 'https://twitter.com/PalazzoVincenzo' },
  { label: 'LinkedIn', handle: 'in/vincenzo-palazzo',   href: 'https://www.linkedin.com/in/vincenzo-palazzo-a23330110' },
  { label: 'Blog',     handle: 'blog.hedwig.dev',       href: 'https://blog.hedwig.dev/' },
  { label: 'Medium',   handle: '@vincenzopalazzo',      href: 'https://vincenzopalazzo.medium.com' },
  { label: 'dev.to',   handle: '@vincenzopalazzo',      href: 'https://dev.to/vincenzopalazzo' },
  { label: 'Twitch',   handle: 'vincenzopalazzodev',    href: 'https://www.twitch.tv/vincenzopalazzodev' },
  { label: 'Nostr',    handle: 'npub1wg2m9ku…sd7dzaw',  href: 'https://njump.me/npub1wg2m9ku823y5l5699dlj6294dc3cvwu4g34ldrtelxq20t27clxsd7dzaw' },
  { label: 'Matrix',   handle: '@vincenzopalazzo',      href: 'https://matrix.to/#/@vincenzopalazzo:matrix.org' },
  { label: 'Keybase',  handle: 'vincenzopalazzo',       href: 'https://keybase.io/vincenzopalazzo' },
  { label: 'Email',    handle: 'vincenzopalazzodev@gmail.com', href: 'mailto:vincenzopalazzodev@gmail.com' }
];

// Projects / open-source work. tag drives color coding.
const projects = [
  { name: 'Core Lightning', tag: 'lightning', role: 'Contributor',
    desc: 'Spec-compliant Lightning Network node in C. Contributor since 2022, focused on CLI, build system and developer docs.',
    href: 'https://github.com/ElementsProject/lightning', meta: 'C · ElementsProject' },
  { name: 'LNMetrics', tag: 'lightning', role: 'Creator',
    desc: 'Open-source framework collecting reliability metrics across the Lightning Network. Basis of my MSc thesis.',
    href: 'https://github.com/LNOpenMetrics', meta: 'Rust · Go · LNOpenMetrics' },
  { name: 'clightning4j / btcli4j', tag: 'jvm', role: 'Author',
    desc: 'JVM framework for Core Lightning: RPC wrapper, plugin SDK, and a resilient bitcoin-backend plugin with REST fallback.',
    href: 'https://github.com/clightning4j', meta: 'Java · Kotlin' },
  { name: 'rustc · wg-macros', tag: 'rust', role: 'Contributor / Lead',
    desc: 'Contributor to the Rust compiler and lead of the macros working group. Increasingly working on Rust for Linux.',
    href: 'https://github.com/rust-lang/rust', meta: 'Rust · rust-lang' },
  { name: 'Material-UI-Swing', tag: 'jvm', role: 'Maintainer',
    desc: "Modern Material Design look-and-feel for Java Swing. ~2k downloads/month; used by NASA's JMARS at Arizona State.",
    href: 'https://github.com/material-ui-swing/MaterialUISwing', meta: 'Java · 2k+/mo' },
  { name: 'opentelemetry-log', tag: 'rust', role: 'Author',
    desc: 'Lightweight OpenTelemetry log adapter for Rust — exports logs to an OTel collector with minimal ceremony.',
    href: 'https://github.com/vincenzopalazzo/opentelemetry-log', meta: 'Rust' },
  { name: 'graphql-flutter', tag: 'flutter', role: 'Maintainer',
    desc: 'A full-featured GraphQL client for Flutter, bringing modern GraphQL tooling to Dart.',
    href: 'https://github.com/zino-hofmann/graphql-flutter', meta: 'Dart · Flutter' }
];

const publications = [
  { title: 'Modernized Graphical User Interface for the JMARS Application',
    venue: 'Lunar & Planetary Science Conference · Arizona State University', year: '2021',
    href: 'https://www.hou.usra.edu/meetings/lpsc2021/pdf/2696.pdf' },
  { title: 'Improving JMARS Data Analysis and Visualization with a Modernized & Enhanced UI',
    venue: 'Lunar & Planetary Science Conference · Arizona State University', year: '2023',
    href: 'https://www.hou.usra.edu/meetings/lpsc2021/pdf/2696.pdf' }
];

const theses = [
  { title: 'LNMetrics: an Open-Source Framework to Collect Metrics on the Lightning Network',
    degree: 'MSc · University of Pisa', year: '2023',
    href: 'https://github.com/LNOpenMetrics/thesis/releases/tag/v1.0.0' },
  { title: 'Estrazione di Informazioni dalla Blockchain di Bitcoin',
    degree: 'BSc · University of Basilicata', year: '2019',
    href: 'https://github.com/vincenzopalazzo/SpyCBlockThesis/releases/tag/v0.2.5' }
];

const talks = [
  { title: 'Bitcoin & Lightning', venue: 'Brink Internal Tech Talk', year: 'Oct 2022', tag: 'lightning',
    href: 'https://brink-october2022-techtalk-8e6f0188j-vincenzopalazzo.vercel.app' },
  { title: 'Write an async runtime for Rust 🦀', venue: 'PisaDev', year: 'Jan 2023', tag: 'rust',
    href: 'https://pisadev-write-async-runtime-rust.vercel.app' }
];

// Color-coded activity log for the "terminal" direction. Newest last.
const log = [
  { date: '2019-07', topic: 'academia', msg: 'BSc thesis — Extracting Information from the Bitcoin Blockchain (SpyCBlock) @ University of Basilicata' },
  { date: '2020-03', topic: 'jvm',      msg: 'Released clightning4j / jrpclightning — Java RPC wrapper for Core Lightning' },
  { date: '2020-09', topic: 'jvm',      msg: "Maintaining Material-UI-Swing — adopted by NASA's JMARS at Arizona State" },
  { date: '2021-02', topic: 'academia', msg: 'Co-authored JMARS modernized-GUI paper, LPSC / Arizona State University' },
  { date: '2021-06', topic: 'lightning',msg: 'Shipped btcli4j — resilient bitcoin backend plugin for Core Lightning (REST fallback + retry)' },
  { date: '2022-09', topic: 'lightning',msg: 'Joined Brink full-time → Core Lightning contributor (CLI, build system, docs)' },
  { date: '2022-10', topic: 'talk',     msg: 'Talk: Bitcoin & Lightning — Brink Internal Tech Talk' },
  { date: '2023-01', topic: 'talk',     msg: 'Talk: Write an async runtime for Rust 🦀 — PisaDev' },
  { date: '2023-05', topic: 'academia', msg: 'MSc thesis — LNMetrics @ University of Pisa' },
  { date: '2023-08', topic: 'rust',     msg: 'Rust compiler contributor; leading the wg-macros working group' },
  { date: '2024-04', topic: 'rust',     msg: 'Published opentelemetry-log — lightweight OTel log adapter for Rust' },
  { date: '2025-01', topic: 'linux',    msg: 'Hacking on Rust for Linux / the Linux kernel' }
];

// tag → human label
/** @type {Record<string, string>} */
const tagLabels = {
  lightning: 'Bitcoin · Lightning',
  rust: 'Rust',
  jvm: 'JVM',
  flutter: 'Flutter',
  academia: 'Research',
  talk: 'Talks',
  linux: 'Linux'
};

export const VP_DATA = {
  name: 'Vincenzo Palazzo',
  role: 'Open-source software engineer',
  tagline: 'Bitcoin, Lightning & Rust.',
  location: 'Italy · remote',
  intro: 'I build open-source infrastructure for the things I believe in — the Lightning Network, the Rust compiler, and the developer tools around them. Brink grantee, Core Lightning contributor, and FSF member.',
  blurbs: [
    'Brink-funded, full-time on the Bitcoin & Lightning ecosystem.',
    'Core Lightning contributor; Rust compiler & wg-macros lead.',
    'Now hacking on Rust for Linux.'
  ],
  links, projects, publications, theses, talks, log, tagLabels,
  gpg: 'DDE3 16C1 0965 F23D CCDD 0420 8B6D C2B8 70B8 0D5F',
  node: 'bruce.lnmetrics.info'
};
