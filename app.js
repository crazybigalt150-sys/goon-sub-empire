// Goon Sub Empire - interactive logic (fixed)

const allSubs = {
  feet: [
    {name:"r/AnimeFeet", url:"https://reddit.com/r/AnimeFeet"},
    {name:"r/AnimeFeets", url:"https://reddit.com/r/AnimeFeets"},
    {name:"r/AnimeFootFetish", url:"https://reddit.com/r/AnimeFootFetish"},
    {name:"r/BestHentaiFeet", url:"https://reddit.com/r/BestHentaiFeet"},
    {name:"r/FeetArchiveX", url:"https://reddit.com/r/FeetArchiveX"},
    {name:"r/feeth_e_n_t_a_i", url:"https://reddit.com/r/feeth_e_n_t_a_i"},
    {name:"r/hentaifeetlover", url:"https://reddit.com/r/hentaifeetlover"},
    {name:"r/hentaifeetlovers9", url:"https://reddit.com/r/hentaifeetlovers9"},
    {name:"r/rule34feet", url:"https://reddit.com/r/rule34feet"}
  ],
  booty: [
    {name:"r/AnimeAssOnly", url:"https://reddit.com/r/AnimeAssOnly"},
    {name:"r/AnimeBooty", url:"https://reddit.com/r/AnimeBooty"},
    {name:"r/BootyHentai", url:"https://reddit.com/r/BootyHentai"},
    {name:"r/ChurchofBooty", url:"https://reddit.com/r/ChurchofBooty"},
    {name:"r/RumpHentai", url:"https://reddit.com/r/RumpHentai"},
    {name:"r/thaps", url:"https://reddit.com/r/thaps"},
    {name:"r/thonghentai", url:"https://reddit.com/r/thonghentai"}
  ],
  femboy: [
    {name:"r/DominantFemboys", url:"https://reddit.com/r/DominantFemboys"},
    {name:"r/FemboyandFutaHentai", url:"https://reddit.com/r/FemboyandFutaHentai"},
    {name:"r/Femboycumhentaii", url:"https://reddit.com/r/Femboycumhentaii"},
    {name:"r/FemboyHentai", url:"https://reddit.com/r/FemboyHentai"},
    {name:"r/FemboyHentai_GIFs", url:"https://reddit.com/r/FemboyHentai_GIFs"},
    {name:"r/FemboyHentai_TR", url:"https://reddit.com/r/FemboyHentai_TR"},
    {name:"r/FemboyRape", url:"https://reddit.com/r/FemboyRape"},
    {name:"r/FemboyRPHentai", url:"https://reddit.com/r/FemboyRPHentai"},
    {name:"r/femboysforyou", url:"https://reddit.com/r/femboysforyou"},
    {name:"r/FemMenHentai", url:"https://reddit.com/r/FemMenHentai"},
    {name:"r/FurryFemboy", url:"https://reddit.com/r/FurryFemboy"},
    {name:"r/hentaiFemboysbr", url:"https://reddit.com/r/hentaiFemboysbr"},
    {name:"r/hungfemboys", url:"https://reddit.com/r/hungfemboys"},
    {name:"r/SissyHentai", url:"https://reddit.com/r/SissyHentai"},
    {name:"r/sissyhentai2", url:"https://reddit.com/r/sissyhentai2"},
    {name:"r/SpicyFemboys", url:"https://reddit.com/r/SpicyFemboys"},
    {name:"r/straightfemboyhentai", url:"https://reddit.com/r/straightfemboyhentai"},
    {name:"r/ThiccFemboiss", url:"https://reddit.com/r/ThiccFemboiss"},
    {name:"r/traphentai", url:"https://reddit.com/r/traphentai"}
  ],
  futa: [
    {name:"r/futaandmore", url:"https://reddit.com/r/futaandmore"},
    {name:"r/futacaptions", url:"https://reddit.com/r/futacaptions"},
    {name:"r/futanari", url:"https://reddit.com/r/futanari"},
    {name:"r/FutanariFuta", url:"https://reddit.com/r/FutanariFuta"},
    {name:"r/FutanariGifs", url:"https://reddit.com/r/FutanariGifs"}
  ],
  goon: [
    {name:"r/CringeGoonTards", url:"https://reddit.com/r/CringeGoonTards"},
    {name:"r/CringeSexualGoonSlop", url:"https://reddit.com/r/CringeSexualGoonSlop"},
    {name:"r/GooningHentai", url:"https://reddit.com/r/GooningHentai"},
    {name:"r/HentaiiGooning", url:"https://reddit.com/r/HentaiiGooning"},
    {name:"r/cringe_porn", url:"https://reddit.com/r/cringe_porn"}
  ],
  general: [
    {name:"r/anime_hentai", url:"https://reddit.com/r/anime_hentai"},
    {name:"r/ConfidentHentai", url:"https://reddit.com/r/ConfidentHentai"},
    {name:"r/CuteandFunnyArt", url:"https://reddit.com/r/CuteandFunnyArt"},
    {name:"r/ecchi", url:"https://reddit.com/r/ecchi"},
    {name:"r/GrabbingHentai", url:"https://reddit.com/r/GrabbingHentai"},
    {name:"r/hentai", url:"https://reddit.com/r/hentai"},
    {name:"r/HENTAI_GIF", url:"https://reddit.com/r/HENTAI_GIF"},
    {name:"r/Hentai_petite_", url:"https://reddit.com/r/Hentai_petite_"},
    {name:"r/HentaiButtholes", url:"https://reddit.com/r/HentaiButtholes"},
    {name:"r/HentaiLimitless", url:"https://reddit.com/r/HentaiLimitless"},
    {name:"r/HentaiTrade_N_Feed", url:"https://reddit.com/r/HentaiTrade_N_Feed"},
    {name:"r/jerkbudsHentai", url:"https://reddit.com/r/jerkbudsHentai"},
    {name:"r/NunHentai", url:"https://reddit.com/r/NunHentai"},
    {name:"r/quick_hentai", url:"https://reddit.com/r/quick_hentai"},
    {name:"r/Roleplayhentai_dark", url:"https://reddit.com/r/Roleplayhentai_dark"},
    {name:"r/rule34gay", url:"https://reddit.com/r/rule34gay"},
    {name:"r/Rule34LoL", url:"https://reddit.com/r/Rule34LoL"},
    {name:"r/Short_Hentai", url:"https://reddit.com/r/Short_Hentai"},
    {name:"r/SmallBreastHentai", url:"https://reddit.com/r/SmallBreastHentai"},
    {name:"r/thick_hentai", url:"https://reddit.com/r/thick_hentai"},
    {name:"r/GayFurryPorn1", url:"https://reddit.com/r/GayFurryPorn1"}
  ]
};

// Persist counters across pages
function loadStats() {
  try {
    sessionCount = parseInt(localStorage.getItem('goon_session') || '0', 10);
    tabsOpened = parseInt(localStorage.getItem('goon_tabs') || '0', 10);
  } catch(e) {
    sessionCount = 0;
    tabsOpened = 0;
  }
}

function saveStats() {
  try {
    localStorage.setItem('goon_session', sessionCount);
    localStorage.setItem('goon_tabs', tabsOpened);
  } catch(e) {}
}

let sessionCount = 0;
let tabsOpened = 0;
loadStats();

function log(msg) {
  const el = document.getElementById('log');
  if (!el) return;
  const time = new Date().toLocaleTimeString();
  el.innerHTML = `[${time}] ${msg}<br>` + el.innerHTML;
}

function openSub(url, name) {
  const w = window.open(url, '_blank');
  if (w) {
    tabsOpened++;
    sessionCount++;
    saveStats();
    updateStats();
    log(`Opened ${name}`);
  } else {
    log(`BLOCKED: ${name} — allow popups for this site!`);
  }
}

function updateStats() {
  const s = document.getElementById('stat-session');
  const t = document.getElementById('stat-tabs');
  if (s) s.textContent = sessionCount;
  if (t) t.textContent = tabsOpened;
}

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function openRandom(category) {
  let pool = [];
  if (category === 'all') {
    Object.values(allSubs).forEach(list => pool = pool.concat(list));
  } else {
    pool = allSubs[category] || [];
  }
  if (pool.length === 0) return;
  const pick = randomFrom(pool);
  openSub(pick.url, pick.name);
}

// Staggered opens to reduce popup blocker issues
function openMultiple(category, count) {
  let pool = category === 'all' 
    ? [].concat(...Object.values(allSubs))
    : (allSubs[category] || []);
  pool = [...pool].sort(() => Math.random() - 0.5);
  const picks = pool.slice(0, Math.min(count, pool.length));

  log(`Launching ${picks.length} tabs (staggered)... Allow popups if asked!`);

  picks.forEach((p, i) => {
    setTimeout(() => {
      openSub(p.url, p.name);
    }, i * 400); // 400ms between each open
  });
}

function downloadList(category) {
  let text = '';
  if (category === 'all') {
    text = '=== FULL GOON SUB EMPIRE LIST ===\n\n';
    for (const [cat, list] of Object.entries(allSubs)) {
      text += `\n## ${cat.toUpperCase()}\n`;
      list.forEach(s => text += s.url + '\n');
    }
  } else {
    text = `=== ${category.toUpperCase()} SUBREDDITS ===\n\n`;
    (allSubs[category] || []).forEach(s => text += s.url + '\n');
  }
  text += '\n\nGenerated by Goon Sub Empire\nKeep the session going.';

  const blob = new Blob([text], {type: 'text/plain'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `goon-subs-${category}.txt`;
  a.click();
  log(`Downloaded ${category} list`);
}

// Simple ambient drone using Web Audio API
let audioCtx = null;
let oscillator = null;
let gainNode = null;
let isPlaying = false;

function toggleAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    oscillator = audioCtx.createOscillator();
    gainNode = audioCtx.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.value = 55;
    gainNode.gain.value = 0.03;
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator.start();
    isPlaying = true;
    const btn = document.getElementById('audio-btn');
    if (btn) btn.textContent = 'Stop Ambient Drone';
    log('Ambient drone started (very quiet low tone)');
  } else {
    if (isPlaying) {
      gainNode.gain.value = 0;
      isPlaying = false;
      const btn = document.getElementById('audio-btn');
      if (btn) btn.textContent = 'Start Ambient Drone';
      log('Ambient drone muted');
    } else {
      gainNode.gain.value = 0.03;
      isPlaying = true;
      const btn = document.getElementById('audio-btn');
      if (btn) btn.textContent = 'Stop Ambient Drone';
      log('Ambient drone resumed');
    }
  }
}

function renderCards(category, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const list = allSubs[category] || [];
  container.innerHTML = '';
  list.forEach(sub => {
    const div = document.createElement('div');
    div.className = 'sub-card';
    div.onclick = () => openSub(sub.url, sub.name);
    div.innerHTML = `<a href="${sub.url}" target="_blank" onclick="event.stopPropagation()">${sub.name}</a>
                     <div class="desc">Click card or link to open</div>`;
    container.appendChild(div);
  });
}

// On every page load, refresh the visible counters
document.addEventListener('DOMContentLoaded', () => {
  loadStats();
  updateStats();
});