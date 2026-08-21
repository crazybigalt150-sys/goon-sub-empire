// Goon Sub Empire - v4 (persistent louder drone + big features)

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
    {name:"r/rule34feet", url:"https://reddit.com/r/rule34feet"},
    {name:"r/HentaiFeet", url:"https://reddit.com/r/HentaiFeet"},
    {name:"r/Anime_Feet", url:"https://reddit.com/r/Anime_Feet"}
  ],
  booty: [
    {name:"r/AnimeAssOnly", url:"https://reddit.com/r/AnimeAssOnly"},
    {name:"r/AnimeBooty", url:"https://reddit.com/r/AnimeBooty"},
    {name:"r/BootyHentai", url:"https://reddit.com/r/BootyHentai"},
    {name:"r/ChurchofBooty", url:"https://reddit.com/r/ChurchofBooty"},
    {name:"r/RumpHentai", url:"https://reddit.com/r/RumpHentai"},
    {name:"r/thaps", url:"https://reddit.com/r/thaps"},
    {name:"r/thonghentai", url:"https://reddit.com/r/thonghentai"},
    {name:"r/AnimeAss", url:"https://reddit.com/r/AnimeAss"},
    {name:"r/hentaibutt", url:"https://reddit.com/r/hentaibutt"}
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
    {name:"r/traphentai", url:"https://reddit.com/r/traphentai"},
    {name:"r/femboyhentai", url:"https://reddit.com/r/femboyhentai"},
    {name:"r/TrapHentai", url:"https://reddit.com/r/TrapHentai"}
  ],
  futa: [
    {name:"r/futaandmore", url:"https://reddit.com/r/futaandmore"},
    {name:"r/futacaptions", url:"https://reddit.com/r/futacaptions"},
    {name:"r/futanari", url:"https://reddit.com/r/futanari"},
    {name:"r/FutanariFuta", url:"https://reddit.com/r/FutanariFuta"},
    {name:"r/FutanariGifs", url:"https://reddit.com/r/FutanariGifs"},
    {name:"r/FutaHentai", url:"https://reddit.com/r/FutaHentai"},
    {name:"r/futanari_hentai", url:"https://reddit.com/r/futanari_hentai"}
  ],
  goon: [
    {name:"r/CringeGoonTards", url:"https://reddit.com/r/CringeGoonTards"},
    {name:"r/CringeSexualGoonSlop", url:"https://reddit.com/r/CringeSexualGoonSlop"},
    {name:"r/GooningHentai", url:"https://reddit.com/r/GooningHentai"},
    {name:"r/HentaiiGooning", url:"https://reddit.com/r/HentaiiGooning"},
    {name:"r/cringe_porn", url:"https://reddit.com/r/cringe_porn"},
    {name:"r/HentaiGooning", url:"https://reddit.com/r/HentaiGooning"}
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
    {name:"r/GayFurryPorn1", url:"https://reddit.com/r/GayFurryPorn1"},
    {name:"r/HentaiSource", url:"https://reddit.com/r/HentaiSource"},
    {name:"r/wholesomehentai", url:"https://reddit.com/r/wholesomehentai"},
    {name:"r/HentaiManga", url:"https://reddit.com/r/HentaiManga"},
    {name:"r/Artistic_Hentai", url:"https://reddit.com/r/Artistic_Hentai"},
    {name:"r/3DHentai", url:"https://reddit.com/r/3DHentai"},
    {name:"r/MonsterGirl", url:"https://reddit.com/r/MonsterGirl"},
    {name:"r/yuri", url:"https://reddit.com/r/yuri"},
    {name:"r/yaoi", url:"https://reddit.com/r/yaoi"},
    {name:"r/netorare", url:"https://reddit.com/r/netorare"},
    {name:"r/ahegao", url:"https://reddit.com/r/ahegao"},
    {name:"r/hentaicaptions", url:"https://reddit.com/r/hentaicaptions"},
    {name:"r/HentaiPetplay", url:"https://reddit.com/r/HentaiPetplay"},
    {name:"r/helplesshentai", url:"https://reddit.com/r/helplesshentai"},
    {name:"r/public_hentai", url:"https://reddit.com/r/public_hentai"},
    {name:"r/HentaiSchoolgirl", url:"https://reddit.com/r/HentaiSchoolgirl"},
    {name:"r/milfhentai", url:"https://reddit.com/r/milfhentai"}
  ]
};

// ========== STATS ==========
let sessionCount = 0;
let tabsOpened = 0;

function loadStats() {
  try {
    sessionCount = parseInt(localStorage.getItem('goon_session') || '0', 10);
    tabsOpened = parseInt(localStorage.getItem('goon_tabs') || '0', 10);
  } catch(e) { sessionCount = 0; tabsOpened = 0; }
}
function saveStats() {
  try {
    localStorage.setItem('goon_session', sessionCount);
    localStorage.setItem('goon_tabs', tabsOpened);
  } catch(e) {}
}
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
    log(`BLOCKED: ${name} — allow popups!`);
  }
}

function updateStats() {
  const s = document.getElementById('stat-session');
  const t = document.getElementById('stat-tabs');
  if (s) s.textContent = sessionCount;
  if (t) t.textContent = tabsOpened;
}

function resetStats() {
  sessionCount = 0;
  tabsOpened = 0;
  saveStats();
  updateStats();
  log('Counters reset');
}

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function openRandom(category) {
  let pool = category === 'all' ? [].concat(...Object.values(allSubs)) : (allSubs[category] || []);
  if (!pool.length) return;
  const pick = randomFrom(pool);
  openSub(pick.url, pick.name);
}

function openMultiple(category, count) {
  let pool = category === 'all' ? [].concat(...Object.values(allSubs)) : (allSubs[category] || []);
  pool = [...pool].sort(() => Math.random() - 0.5);
  const picks = pool.slice(0, Math.min(count, pool.length));
  log(`Launching ${picks.length} tabs... Allow popups!`);
  picks.forEach((p, i) => setTimeout(() => openSub(p.url, p.name), i * 450));
}

// Big curated deep-dive sets
function emergencyDeepDive() {
  const heavy = [
    ...allSubs.goon,
    ...allSubs.femboy.slice(0, 6),
    ...allSubs.general.filter(s => /netorare|ahegao|helpless|petplay|captions/i.test(s.name))
  ];
  const picks = [...heavy].sort(() => Math.random() - 0.5).slice(0, 8);
  log('EMERGENCY DEEP DIVE — 8 heavy tabs incoming');
  picks.forEach((p, i) => setTimeout(() => openSub(p.url, p.name), i * 400));
}

function softLoop() {
  const soft = [...allSubs.feet, ...allSubs.booty, ...allSubs.general.filter(s => /wholesome|petite|ecchi|Cute/i.test(s.name))];
  const picks = [...soft].sort(() => Math.random() - 0.5).slice(0, 6);
  log('Soft loop — 6 easy tabs');
  picks.forEach((p, i) => setTimeout(() => openSub(p.url, p.name), i * 400));
}

function femboyFocus() {
  openMultiple('femboy', 7);
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
    text = `=== ${category.toUpperCase()} ===\n\n`;
    (allSubs[category] || []).forEach(s => text += s.url + '\n');
  }
  text += '\n\nGenerated by Goon Sub Empire';
  const blob = new Blob([text], {type: 'text/plain'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `goon-subs-${category}.txt`;
  a.click();
  log(`Downloaded ${category}`);
}

// ========== PERSISTENT LOUDER DRONE ==========
let audioCtx = null;
let oscillator = null;
let gainNode = null;
let isPlaying = false;
let currentVolume = 0.28; // much louder default

function loadDronePrefs() {
  try {
    const vol = localStorage.getItem('goon_drone_vol');
    if (vol) currentVolume = parseFloat(vol);
    const wantOn = localStorage.getItem('goon_drone_on') === '1';
    if (wantOn) {
      // slight delay so page is ready
      setTimeout(() => { if (!isPlaying) toggleAudio(true); }, 400);
    }
  } catch(e) {}
}

function saveDronePrefs() {
  try {
    localStorage.setItem('goon_drone_vol', currentVolume);
    localStorage.setItem('goon_drone_on', isPlaying ? '1' : '0');
  } catch(e) {}
}

function toggleAudio(forceOn) {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    oscillator = audioCtx.createOscillator();
    gainNode = audioCtx.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.value = 48;
    gainNode.gain.value = currentVolume;
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator.start();
    isPlaying = true;
  } else {
    if (isPlaying && !forceOn) {
      gainNode.gain.value = 0;
      isPlaying = false;
    } else {
      gainNode.gain.value = currentVolume;
      isPlaying = true;
    }
  }
  const btn = document.getElementById('audio-btn');
  if (btn) btn.textContent = isPlaying ? 'Stop Ambient Drone' : 'Start Ambient Drone';
  saveDronePrefs();
  log(isPlaying ? 'Drone ON (persistent + loud)' : 'Drone muted');
}

function setDroneVolume(val) {
  currentVolume = parseFloat(val);
  if (gainNode && isPlaying) gainNode.gain.value = currentVolume;
  saveDronePrefs();
  const label = document.getElementById('vol-label');
  if (label) label.textContent = Math.round(currentVolume * 100) + '%';
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
                     <div class="desc">Click to open</div>`;
    container.appendChild(div);
  });
}

// Session timer
let sessionStart = parseInt(localStorage.getItem('goon_start') || Date.now(), 10);
function updateTimer() {
  const el = document.getElementById('session-timer');
  if (!el) return;
  const mins = Math.floor((Date.now() - sessionStart) / 60000);
  el.textContent = mins + ' min';
}
function resetTimer() {
  sessionStart = Date.now();
  localStorage.setItem('goon_start', sessionStart);
  updateTimer();
  log('Session timer reset');
}

document.addEventListener('DOMContentLoaded', () => {
  loadStats();
  updateStats();
  loadDronePrefs();
  updateTimer();
  setInterval(updateTimer, 30000);
});