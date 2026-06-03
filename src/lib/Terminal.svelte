<script>
  // Direction 2 — Terminal / Nerd.
  // Dark, monospace. Interactive activity log color-coded by topic + filter chips.
  import { VP_DATA as D } from './data.js';

  // topic -> color
  /** @type {Record<string, string>} */
  const C = {
    lightning: '#f7b955',
    rust: '#ff7a3c',
    jvm: '#b48ef0',
    flutter: '#56c2e6',
    academia: '#6fcf7f',
    talk: '#ff7eb6',
    linux: '#6aa6ff'
  };

  /** @type {string | null} */
  let topic = $state(null);

  const topics = Object.keys(D.tagLabels).filter((t) => D.log.some((l) => l.topic === t));

  const shown = $derived(D.log.filter((l) => !topic || l.topic === topic));
  /** @param {string} t */
  const padTopic = (t) => `[${t.padEnd(9, ' ')}]`;
</script>

<div class="d2">
  <div class="d2-bar">
    <span class="d2-bar-name">vincenzo.palazzo</span>
    <span class="d2-bar-meta">⚡ {D.node}</span>
  </div>

  <div class="d2-term">
    <div class="d2-chrome">
      <span class="d2-tl" style="background:#ff5f57"></span>
      <span class="d2-tl" style="background:#febc2e"></span>
      <span class="d2-tl" style="background:#28c840"></span>
      <span class="d2-title">— zsh — vincenzo@palazzo —</span>
    </div>

    <div class="d2-screen">
      <div class="d2-prompt">
        <span class="d2-user">vincenzo@palazzo</span>
        <span class="d2-sep">:</span>
        <span class="d2-path">~</span>
        <span class="d2-dollar">$</span>
        <span class="d2-cmd">whoami</span>
      </div>
      <div class="d2-out d2-who">
        <div class="d2-bigname">Vincenzo Palazzo</div>
        <div class="d2-tag">{D.role} · {D.tagline}</div>
        <p class="d2-bio">{D.intro}</p>
      </div>

      <div class="d2-prompt">
        <span class="d2-user">vincenzo@palazzo</span>
        <span class="d2-sep">:</span>
        <span class="d2-path">~</span>
        <span class="d2-dollar">$</span>
        <span class="d2-cmd">cat ~/activity.log{topic ? `  --grep ${topic}` : '  --color'}</span>
      </div>

      <div class="d2-filter">
        <span class="d2-flabel"># filter:</span>
        <button class="d2-chip" class:on={!topic} onclick={() => (topic = null)}>all</button>
        {#each topics as t}
          <button
            class="d2-chip"
            class:on={topic === t}
            style={topic === t ? `color:${C[t]}; border-color:${C[t]}` : `--c:${C[t]}`}
            onclick={() => (topic = topic === t ? null : t)}
          >
            <span class="d2-chip-dot" style="background:{C[t]}"></span>
            {D.tagLabels[t]}
          </button>
        {/each}
      </div>

      <div class="d2-log">
        {#each shown as l}
          <div class="d2-line">
            <span class="d2-date">{l.date}</span>
            <span class="d2-topic" style="color:{C[l.topic]}">{padTopic(l.topic)}</span>
            <span class="d2-msg">{l.msg}</span>
          </div>
        {/each}
        <div class="d2-line d2-cursorline">
          <span class="d2-date">{shown.length} entries</span>
          <span class="d2-cursor"></span>
        </div>
      </div>
    </div>
  </div>

  <!-- TUI panes -->
  <div class="d2-grid">
    <div class="d2-pane d2-span2">
      <div class="d2-pane-h">~/projects <span>{D.projects.length} repos</span></div>
      <div class="d2-proj">
        {#each D.projects as p}
          <a class="d2-proj-row" href={p.href} target="_blank" rel="noreferrer">
            <span class="d2-proj-dot" style="background:{C[p.tag] || '#888'}"></span>
            <span class="d2-proj-name">{p.name}</span>
            <span class="d2-proj-role">{p.role}</span>
            <span class="d2-proj-meta">{p.meta}</span>
            <span class="d2-proj-desc">{p.desc}</span>
          </a>
        {/each}
      </div>
    </div>

    <div class="d2-pane">
      <div class="d2-pane-h">~/talks</div>
      {#each D.talks as t}
        <a class="d2-item" href={t.href} target="_blank" rel="noreferrer">
          <span class="d2-item-y">{t.year}</span>
          <span class="d2-item-t" style="color:{C[t.tag]}">{t.title}</span>
          <span class="d2-item-v">{t.venue}</span>
        </a>
      {/each}
      <div class="d2-pane-h" style="margin-top:22px">~/papers</div>
      {#each D.publications as p}
        <a class="d2-item" href={p.href} target="_blank" rel="noreferrer">
          <span class="d2-item-y">{p.year}</span>
          <span class="d2-item-t">{p.title}</span>
          <span class="d2-item-v">{p.venue}</span>
        </a>
      {/each}
      <div class="d2-pane-h" style="margin-top:22px">~/theses</div>
      {#each D.theses as p}
        <a class="d2-item" href={p.href} target="_blank" rel="noreferrer">
          <span class="d2-item-y">{p.year}</span>
          <span class="d2-item-t">{p.title}</span>
          <span class="d2-item-v">{p.degree}</span>
        </a>
      {/each}
    </div>
  </div>

  <div class="d2-pane">
    <div class="d2-pane-h">~/links --json</div>
    <div class="d2-links">
      {#each D.links as l}
        <a class="d2-link" href={l.href} target="_blank" rel="noreferrer">
          <span class="d2-link-k">{l.label.toLowerCase()}</span>
          <span class="d2-link-v">{l.handle}</span>
        </a>
      {/each}
    </div>
  </div>

  <div class="d2-footer">
    <div class="d2-prompt">
      <span class="d2-user">vincenzo@palazzo</span>
      <span class="d2-sep">:</span>
      <span class="d2-path">~</span>
      <span class="d2-dollar">$</span>
      <span class="d2-cmd"></span>
    </div>
    <span class="d2-cursor"></span>
  </div>
</div>

<style>
  .d2{ background:#0c0d10; color:#c9d1d9; font-family:"JetBrains Mono",ui-monospace,monospace;
       font-size:13.5px; line-height:1.6; padding:30px 34px 40px; font-variant-ligatures:none; }
  .d2 *{ box-sizing:border-box; }
  .d2-bar{ display:flex; justify-content:space-between; align-items:center; padding-bottom:20px;
       border-bottom:1px solid #1d2026; margin-bottom:26px; padding-right:158px; }
  .d2-bar-name{ color:#e8edf2; letter-spacing:.02em; }
  .d2-bar-meta{ color:#f7b955; font-size:12px; white-space:nowrap; }
  .d2-term{ border:1px solid #20242c; border-radius:10px; overflow:hidden; background:#0a0b0e;
       box-shadow:0 30px 70px -40px #000; }
  .d2-chrome{ display:flex; align-items:center; gap:8px; padding:11px 14px; background:#15171c;
       border-bottom:1px solid #20242c; }
  .d2-tl{ width:12px; height:12px; border-radius:50%; }
  .d2-title{ flex:1; text-align:center; color:#5a626d; font-size:12px; margin-right:48px; }
  .d2-screen{ padding:22px 24px 26px; }
  .d2-prompt{ display:flex; gap:7px; flex-wrap:wrap; margin:18px 0 6px; white-space:nowrap; }
  .d2-prompt:first-child{ margin-top:0; }
  .d2-user{ color:#6fcf7f; } .d2-sep{ color:#5a626d; } .d2-path{ color:#6aa6ff; }
  .d2-dollar{ color:#5a626d; } .d2-cmd{ color:#e8edf2; }
  .d2-out{ margin:2px 0 6px; }
  .d2-bigname{ font-size:30px; color:#fff; letter-spacing:-.01em; line-height:1.1; }
  .d2-tag{ color:#f7b955; margin:4px 0 12px; }
  .d2-bio{ color:#9aa4b1; max-width:74ch; margin:0; line-height:1.65; text-wrap:pretty; }
  .d2-filter{ display:flex; flex-wrap:wrap; gap:8px; align-items:center; margin:10px 0 16px; }
  .d2-flabel{ color:#5a626d; }
  .d2-chip{ display:inline-flex; align-items:center; gap:7px; background:transparent; cursor:pointer;
       border:1px solid #2a2f38; color:#9aa4b1; border-radius:6px; padding:5px 10px; white-space:nowrap;
       font-family:inherit; font-size:12px; transition:all .15s ease; }
  .d2-chip:hover{ border-color:var(--c,#3a4150); color:#e8edf2; }
  .d2-chip.on{ background:#15171c; }
  .d2-chip-dot{ width:7px; height:7px; border-radius:2px; }
  .d2-log{ border-left:2px solid #1d2026; padding-left:16px; }
  .d2-line{ display:grid; grid-template-columns:64px 118px 1fr; gap:14px; align-items:baseline;
       padding:3px 0; }
  .d2-date{ color:#5a626d; font-size:12px; }
  .d2-topic{ font-size:12.5px; white-space:pre; }
  .d2-msg{ color:#c9d1d9; text-wrap:pretty; }
  .d2-cursorline{ margin-top:6px; }
  .d2-cursor{ display:inline-block; width:9px; height:16px; background:#6fcf7f; vertical-align:middle; }
  @media (prefers-reduced-motion: no-preference) {
    .d2-cursor{ animation:d2blink 1.1s steps(2) infinite; }
  }
  @keyframes d2blink{ 0%,50%{opacity:1;} 50.01%,100%{opacity:0;} }
  .d2-grid{ display:grid; grid-template-columns:1.4fr 1fr; gap:18px; margin-top:18px; }
  .d2-pane{ border:1px solid #20242c; border-radius:10px; padding:18px 20px; background:#0a0b0e; margin-top:18px; }
  .d2-grid .d2-pane{ margin-top:0; }
  .d2-pane-h{ color:#f7b955; font-size:12px; letter-spacing:.04em; text-transform:lowercase;
       border-bottom:1px dashed #20242c; padding-bottom:9px; margin-bottom:13px; display:flex; justify-content:space-between; }
  .d2-pane-h span{ color:#5a626d; }
  .d2-proj{ display:flex; flex-direction:column; }
  .d2-proj-row{ display:grid; grid-template-columns:14px 1fr auto; gap:5px 10px; align-items:baseline;
       padding:12px 0; border-top:1px solid #15171c; text-decoration:none; color:inherit; }
  .d2-proj-row:first-child{ border-top:none; }
  .d2-proj-row:hover{ background:#101216; }
  .d2-proj-dot{ width:9px; height:9px; border-radius:2px; align-self:center; }
  .d2-proj-name{ color:#e8edf2; font-size:14.5px; }
  .d2-proj-row:hover .d2-proj-name{ text-decoration:underline; }
  .d2-proj-role{ color:#6aa6ff; font-size:11.5px; grid-column:3; }
  .d2-proj-meta{ grid-column:3; color:#5a626d; font-size:11px; text-align:right; }
  .d2-proj-desc{ grid-column:2 / 4; color:#8b95a3; font-size:12.5px; line-height:1.55; text-wrap:pretty; }
  .d2-item{ display:block; padding:9px 0; border-top:1px solid #15171c; text-decoration:none; color:inherit; }
  .d2-item:first-of-type{ border-top:none; }
  .d2-item-y{ color:#5a626d; font-size:11px; }
  .d2-item-t{ display:block; color:#e8edf2; font-size:13px; margin:2px 0; }
  .d2-item:hover .d2-item-t{ text-decoration:underline; }
  .d2-item-v{ color:#8b95a3; font-size:11.5px; }
  .d2-links{ display:grid; grid-template-columns:repeat(3,1fr); gap:2px; }
  .d2-link{ display:flex; flex-direction:column; padding:10px 12px; border:1px solid #15171c;
       text-decoration:none; color:inherit; border-radius:6px; }
  .d2-link:hover{ border-color:#2a2f38; background:#101216; }
  .d2-link-k{ color:#6fcf7f; font-size:12px; }
  .d2-link-v{ color:#8b95a3; font-size:11px; margin-top:2px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
  .d2-footer{ display:flex; align-items:center; gap:7px; margin-top:24px; }

  @media (max-width: 720px) {
    .d2{ padding:24px 16px 32px; }
    .d2-bar{ padding-right:96px; }
    .d2-screen{ padding:18px 16px 20px; }
    .d2-grid{ grid-template-columns:1fr; }
    .d2-line{ grid-template-columns:56px 110px 1fr; gap:8px; }
    .d2-links{ grid-template-columns:1fr 1fr; }
  }
</style>
