/* Shared components: header, footer, cards */

function hcHeader(active){
  const items = [["index.html","Home"],["episodes.html","Episodes"],["map.html","The Map"],["figures.html","The Figures"],["visit.html","Plan Your Visit"],["about.html","About"]];
  return `
  <div class="proto-note">PROTOTYPE PREVIEW — built from the HC brand guidelines · not yet live</div>
  <header class="site"><div class="bar">
    <a href="index.html" style="text-decoration:none"><div class="wordmark">
      <div class="wm-title">Historical Conversations</div>
      <div class="wm-rule"></div>
      <div class="wm-sub">Cape Cod</div>
    </div></a>
    <button class="hamburger" onclick="document.querySelector('nav.main').classList.toggle('open')">☰</button>
    <nav class="main">${items.map(([h,l])=>`<a href="${h}" class="${l===active?'active':''}">${l}</a>`).join("")}</nav>
  </div></header>`;
}

function hcFooter(){
  return `
  <footer class="site">
    <div class="cols">
      <div>
        <h4>Historical Conversations</h4>
        <p>AI-voiced dramatized interviews with the historical figures of Cape Cod. The figures speak for themselves — in character, in their own voice, from the world they knew.</p>
        <p style="margin-top:12px;font-style:italic;color:#C4A882;font-family:'Playfair Display',serif">The past has things to say.</p>
      </div>
      <div>
        <h4>Listen</h4>
        <p><a href="episodes.html">All episodes</a><br>
        <a href="#">Spotify</a><br><a href="#">Apple Podcasts</a><br><a href="#">Amazon Music</a></p>
      </div>
      <div>
        <h4>Explore</h4>
        <p><a href="map.html">The Map</a><br><a href="figures.html">The Figures</a><br>
        <a href="visit.html">Plan Your Visit</a><br><a href="about.html">About & AI transparency</a></p>
      </div>
    </div>
    <div class="fine">© 2026 Historical Conversations · Brewster, MA · Voices are AI-dramatized interpretations grounded in historical research. <a href="about.html">How we make this show →</a></div>
  </footer>`;
}

function statusLabel(s){
  return {"published":"Published","in-production":"In production","planned":"Planned","tentative":"Planned","coming-soon":"Coming","deferred":"In consultation"}[s]||s;
}

function epCard(ep){
  const e = HC.episodes[ep.ep]||{};
  const thumb = e.image ? `<div class="thumb"><img src="${e.image}" alt="${e.title}"></div>`
                        : `<div class="thumb ph">${(ep.ep||"·").replace("EP-","")}</div>`;
  const title = e.title || ep.name;
  const meta = e.meta || `${ep.town} · ${ep.dates}`;
  const ex = e.showNotes ? e.showNotes[0].slice(0,150)+"…" : ep.hook;
  const link = e.slug ? `episode.html?ep=${ep.ep}` : "figures.html";
  return `<div class="card">${thumb}<div class="body">
    <span class="badge ${ep.status}">${statusLabel(ep.status)}</span>
    <h3>${title}</h3><div class="meta">${meta}</div>
    <p class="excerpt">${ex}</p>
    ${e.slug?`<a class="listen" href="${link}">Listen →</a>`:""}
  </div></div>`;
}

function figCard(f){
  const epLink = f.ep && HC.episodes[f.ep] ? `<a href="episode.html?ep=${f.ep}">Listen to ${f.ep} →</a>` : "";
  return `<div class="fig-card">
    <div class="row"><span class="pill cat">${f.category}</span><span class="badge ${f.status}">${statusLabel(f.status)}</span></div>
    <h3>${f.name}</h3>
    <div class="dates">${f.dates}</div>
    <div class="town">${f.town}</div>
    <p class="hook">${f.hook}</p>
    ${epLink}
  </div>`;
}

document.addEventListener("DOMContentLoaded",()=>{
  const h = document.getElementById("hc-header");
  if(h) h.outerHTML = hcHeader(h.dataset.active||"");
  const f = document.getElementById("hc-footer");
  if(f) f.outerHTML = hcFooter();
});

