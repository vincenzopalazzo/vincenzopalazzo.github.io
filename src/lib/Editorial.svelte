<script>
  // Direction 3 — Editorial / Research Journal.
  // Warm cream, Newsreader serif display + mono meta. Magazine rhythm, numbered.
  import { VP_DATA as D } from './data.js';

  const year = new Date().getFullYear();
</script>

<div class="d3">
  <header class="d3-mast">
    <div class="d3-mast-top">
      <span>VINCENZO PALAZZO</span>
      <span>OPEN SOURCE · EST. 2019</span>
      <span>{D.location.toUpperCase()}</span>
    </div>
    <h1 class="d3-display">
      Engineer of open<br /><em>infrastructure.</em>
    </h1>
    <div class="d3-lede-wrap">
      <p class="d3-lede"><span class="d3-drop">I</span>{D.intro.slice(1)}</p>
      <ul class="d3-facts">
        {#each D.blurbs as b}
          <li>{b}</li>
        {/each}
      </ul>
    </div>
  </header>

  <section class="d3-sec">
    <div class="d3-head">
      <span class="d3-num">I</span>
      <div>
        <h2 class="d3-h2">Selected open source</h2>
        <span class="d3-kicker">Maintainer &amp; contributor</span>
      </div>
    </div>
    <div class="d3-cols">
      {#each D.projects as p}
        <a class="d3-card" href={p.href} target="_blank" rel="noreferrer">
          <span class="d3-card-meta">{p.role} — {p.meta}</span>
          <h3 class="d3-card-t">{p.name}</h3>
          <p class="d3-card-d">{p.desc}</p>
        </a>
      {/each}
    </div>
  </section>

  <section class="d3-sec">
    <div class="d3-head">
      <span class="d3-num">II</span>
      <div>
        <h2 class="d3-h2">Writing &amp; talks</h2>
        <span class="d3-kicker">Conferences and longform</span>
      </div>
    </div>
    <div class="d3-list">
      {#each D.talks as t}
        <a class="d3-le" href={t.href} target="_blank" rel="noreferrer">
          <span class="d3-le-y">{t.year}</span>
          <span class="d3-le-t">{t.title}</span>
          <span class="d3-le-v">{t.venue}</span>
        </a>
      {/each}
    </div>
  </section>

  <section class="d3-sec">
    <div class="d3-head">
      <span class="d3-num">III</span>
      <div>
        <h2 class="d3-h2">Research</h2>
        <span class="d3-kicker">Papers &amp; theses</span>
      </div>
    </div>
    <div class="d3-list">
      {#each D.publications as p}
        <a class="d3-le" href={p.href} target="_blank" rel="noreferrer">
          <span class="d3-le-y">{p.year}</span>
          <span class="d3-le-t">{p.title}</span>
          <span class="d3-le-v">{p.venue}</span>
        </a>
      {/each}
      {#each D.theses as p}
        <a class="d3-le" href={p.href} target="_blank" rel="noreferrer">
          <span class="d3-le-y">{p.year}</span>
          <span class="d3-le-t">{p.title}</span>
          <span class="d3-le-v">{p.degree}</span>
        </a>
      {/each}
    </div>
  </section>

  <section class="d3-sec d3-contact">
    <div class="d3-head">
      <span class="d3-num">IV</span>
      <div>
        <h2 class="d3-h2">Correspondence</h2>
        <span class="d3-kicker">Find me elsewhere</span>
      </div>
    </div>
    <div class="d3-links">
      {#each D.links as l}
        <a class="d3-link" href={l.href} target="_blank" rel="noreferrer">
          <span class="d3-link-l">{l.label}</span>
          <span class="d3-link-h">{l.handle}</span>
        </a>
      {/each}
    </div>
  </section>

  <footer class="d3-foot">
    <span>© {year} Vincenzo Palazzo — set in Newsreader &amp; JetBrains Mono</span>
    <span>⚡ {D.node}</span>
  </footer>
</div>

<style>
  .d3{ background:#f2ede2; color:#211d17; font-family:"Newsreader",Georgia,serif; padding:0 0 0; }
  .d3 *{ box-sizing:border-box; }
  .d3-mast{ padding:64px 80px 50px; border-bottom:2px solid #211d17; }
  .d3-mast-top{ display:flex; justify-content:space-between; font-family:"JetBrains Mono",monospace;
       font-size:11.5px; letter-spacing:.12em; color:#6b6354; padding-bottom:40px; padding-right:168px; }
  .d3-display{ font-size:96px; line-height:.95; font-weight:500; letter-spacing:-.02em; margin:0; }
  .d3-display em{ font-style:italic; color:#8a4b2a; }
  .d3-lede-wrap{ display:grid; grid-template-columns:1.7fr 1fr; gap:54px; margin-top:42px; align-items:start; }
  .d3-lede{ font-size:21px; line-height:1.6; margin:0; color:#332d24; text-wrap:pretty; }
  .d3-drop{ float:left; font-size:74px; line-height:.72; font-weight:600; padding:6px 10px 0 0; color:#8a4b2a; }
  .d3-facts{ list-style:none; margin:0; padding:18px 0 0 22px; border-top:2px solid #211d17;
       font-family:"JetBrains Mono",monospace; font-size:12.5px; line-height:1.5; color:#4a4337; }
  .d3-facts li{ position:relative; margin-bottom:14px; }
  .d3-facts li::before{ content:"→"; position:absolute; left:-22px; color:#8a4b2a; }
  .d3-sec{ padding:50px 80px; border-bottom:1px solid #d6cdba; }
  .d3-head{ display:flex; gap:22px; align-items:baseline; margin-bottom:34px; }
  .d3-num{ font-family:"JetBrains Mono",monospace; font-size:14px; color:#8a4b2a; font-weight:600;
       border:1.5px solid #8a4b2a; border-radius:50%; width:38px; height:38px; display:flex;
       align-items:center; justify-content:center; flex:none; }
  .d3-h2{ font-size:34px; font-weight:500; letter-spacing:-.015em; margin:0; }
  .d3-kicker{ font-family:"JetBrains Mono",monospace; font-size:11.5px; letter-spacing:.08em;
       text-transform:uppercase; color:#6b6354; }
  .d3-cols{ columns:2; column-gap:46px; }
  .d3-card{ display:block; break-inside:avoid; padding:0 0 26px; margin-bottom:26px;
       border-bottom:1px solid #d6cdba; text-decoration:none; color:inherit; }
  .d3-card-meta{ font-family:"JetBrains Mono",monospace; font-size:11px; letter-spacing:.04em;
       text-transform:uppercase; color:#8a4b2a; }
  .d3-card-t{ font-size:26px; font-weight:500; letter-spacing:-.01em; margin:6px 0 8px; }
  .d3-card:hover .d3-card-t{ text-decoration:underline; text-underline-offset:3px; }
  .d3-card-d{ font-size:16.5px; line-height:1.55; color:#4a4337; margin:0; text-wrap:pretty; }
  .d3-list{ display:flex; flex-direction:column; }
  .d3-le{ display:grid; grid-template-columns:90px 1fr 280px; gap:24px; align-items:baseline;
       padding:18px 0; border-top:1px solid #d6cdba; text-decoration:none; color:inherit; }
  .d3-le:first-child{ border-top:none; }
  .d3-le:hover{ background:#ebe4d4; }
  .d3-le-y{ font-family:"JetBrains Mono",monospace; font-size:12px; color:#8a4b2a; }
  .d3-le-t{ font-size:21px; font-weight:500; letter-spacing:-.01em; text-wrap:pretty; }
  .d3-le:hover .d3-le-t{ text-decoration:underline; text-underline-offset:3px; }
  .d3-le-v{ font-family:"JetBrains Mono",monospace; font-size:12px; color:#6b6354; line-height:1.5; }
  .d3-links{ display:grid; grid-template-columns:repeat(3,1fr); gap:0 40px; }
  .d3-link{ display:flex; justify-content:space-between; align-items:baseline; padding:14px 0;
       border-top:1px solid #d6cdba; text-decoration:none; color:inherit; }
  .d3-link:hover .d3-link-l{ color:#8a4b2a; }
  .d3-link-l{ font-size:18px; font-weight:500; }
  .d3-link-h{ font-family:"JetBrains Mono",monospace; font-size:11.5px; color:#6b6354; }
  .d3-foot{ display:flex; justify-content:space-between; padding:30px 80px;
       font-family:"JetBrains Mono",monospace; font-size:11.5px; color:#6b6354; }

  @media (max-width: 720px) {
    .d3-mast{ padding:54px 22px 36px; }
    .d3-mast-top{ flex-wrap:wrap; gap:6px 18px; padding-bottom:28px; padding-right:96px; }
    .d3-display{ font-size:52px; }
    .d3-lede-wrap{ grid-template-columns:1fr; gap:28px; }
    .d3-lede{ font-size:18px; }
    .d3-sec{ padding:38px 22px; }
    .d3-cols{ columns:1; }
    .d3-le{ grid-template-columns:60px 1fr; gap:4px 16px; }
    .d3-le-v{ grid-column:2; }
    .d3-links{ grid-template-columns:1fr; gap:0; }
    .d3-foot{ flex-direction:column; gap:8px; padding:24px 22px; }
  }
</style>
