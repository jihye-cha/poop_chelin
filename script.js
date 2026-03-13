// --- 똥슐랭 가이드 Lite v5.6 Refined Logic ---

const restaurants = [
  {
    id: 1,
    name: "오가네 한식뷔페",
    location: "서울 성수동 · 380m",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=800",
    safetyLevel: "safe",
    scores: { taste: 4.7, toilet: 4.5 },
    category: "한식",
    topMenus: [
      { name: "된장찌개", level: "safe", reason: "담백함" },
      { name: "두부김치", level: "safe", reason: "저자극" },
      { name: "비빔밥", level: "caution", reason: "고추장 주의" }
    ],
    foodTags: {
      positive: [{ text: "저포드맵", count: 38 }, { text: "간이심심함", count: 29 }],
      negative: []
    },
    toiletTags: {
      positive: [{ text: "남녀분리", count: 42 }, { text: "매장내부", count: 31 }],
      negative: [{ text: "방음취약", count: 9 }]
    },
    aiSummary: "외부 리뷰 분석 결과, 화장실이 남녀 분리되어 있을 가능성이 매우 높고 메뉴 중 자극적인 평이 적어 설사형 유저에게 비교적 안전한 환경입니다.",
    reviews: [
      { id: 101, user: "배아픈조아", type: "설사형", date: "2025.06.12", text: "화장실이 1층 안에 있어서 급할 때 진짜 살았어요! 메뉴도 자극적이지 않고 속이 편했습니다." }
    ]
  },
  {
    id: 2,
    name: "홍대 마라탕 본점",
    location: "서울 홍대입구 · 1.2km",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=800",
    safetyLevel: "warning",
    scores: { taste: 4.2, toilet: 3.1 },
    category: "중식",
    topMenus: [
      { name: "마라탕 (1단계)", level: "caution", reason: "입문용" },
      { name: "꿔바로우", level: "safe", reason: "달콤바삭" },
      { name: "마라탕 (3단계)", level: "warning", reason: "매우 자극적" }
    ],
    foodTags: {
      positive: [{ text: "가성비", count: 120 }],
      negative: [{ text: "자극적임", count: 71 }, { text: "기름기많음", count: 42 }]
    },
    toiletTags: {
      positive: [],
      negative: [{ text: "남녀공용", count: 55 }, { text: "비누없음", count: 12 }]
    },
    aiSummary: "매운 맛과 강한 향신료로 인해 장에 큰 무리가 갈 수 있으며, 화장실 위생 상태가 좋지 않아 주의가 필요합니다.",
    reviews: []
  },
  {
    id: 3,
    name: "그린볼 샐러드바",
    location: "서울 강남역 · 650m",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    safetyLevel: "safe",
    scores: { taste: 3.9, toilet: 4.8 },
    category: "샐러드",
    topMenus: [
      { name: "연어 포케", level: "safe", reason: "신선함" },
      { name: "수비드 닭가슴살", level: "safe", reason: "단백질" },
      { name: "오리엔탈 드레싱", level: "caution", reason: "산도주의" }
    ],
    foodTags: {
      positive: [{ text: "저포드맵", count: 52 }, { text: "채소신선", count: 65 }],
      negative: []
    },
    toiletTags: {
      positive: [{ text: "매장내부", count: 24 }, { text: "청결도우수", count: 77 }],
      negative: []
    },
    aiSummary: "화장실 프라이버시가 매우 우수하며, 저포드맵 옵션이 풍부하여 아주 안전한 선택입니다.",
    reviews: []
  }
];

// --- State ---
let currentSafetyFilter = 'all';
let currentSearchTerm = '';
let currentRestaurant = null;
let currentReviewFilter = 'all';
let reviewStep = 1;

// --- Selectors ---
const gridContainer = document.getElementById('restaurant-grid');
const searchInput = document.getElementById('search-input');
const filterChips = document.querySelectorAll('.filter-bar .chip');
const modalOverlay = document.getElementById('modal-overlay');

// --- Helper Functions ---
function getBadgeHTML(level) {
  const labels = { safe: '장 안심', caution: '보통', warning: '주의' };
  const codes = { safe: 'g', caution: 'a', warning: 'r' };
  return `<div class="badge ${codes[level]}">${labels[level]}</div>`;
}

function getDotHTML(level) {
  const codes = { safe: 'g', caution: 'a', warning: 'r' };
  return `<span class="badge-dot ${codes[level]}"></span>`;
}

// --- List Logic ---
function renderGrid() {
  gridContainer.innerHTML = '';
  const bookmarks = JSON.parse(localStorage.getItem('poopMichelinBookmarks')) || [];

  const filtered = restaurants.filter(item => {
    const matchesSafety = currentSafetyFilter === 'all' || item.safetyLevel === currentSafetyFilter;
    const matchesSearch = item.name.toLowerCase().includes(currentSearchTerm) || 
                         item.location.toLowerCase().includes(currentSearchTerm);
    return matchesSafety && matchesSearch;
  });

  filtered.forEach((item, index) => {
    const isBookmarked = bookmarks.includes(item.id);
    const card = document.createElement('div');
    card.className = 'card';
    
    // 리스트 카드에서는 foodTags 중 상단 2개만 노출
    const displayTags = item.foodTags.positive.slice(0, 1).concat(item.foodTags.negative.slice(0, 1));

    card.innerHTML = `
      <div class="card-thumb">
        <img src="${item.image}" alt="${item.name}">
        <div class="thumb-badge">${getBadgeHTML(item.safetyLevel)}</div>
        <button class="bm-btn ${isBookmarked ? 'active' : ''}" data-id="${item.id}">
          <svg viewBox="0 0 24 24"><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/></svg>
        </button>
      </div>
      <div class="card-body">
        <h3 class="card-name">${item.name}</h3>
        <p class="card-meta"><span>${item.category}</span> · <span>${item.location}</span></p>
        <div class="card-scores">
          <span>🍽 ${item.scores.taste.toFixed(1)}</span>
          <span class="sdot"></span>
          <span>🚽 ${item.scores.toilet.toFixed(1)}</span>
        </div>
        <div class="kw-row">
          ${item.foodTags.positive.slice(0, 1).map(tag => `<span class="nkw pos">#${tag.text}</span>`).join('')}
          ${item.foodTags.negative.slice(0, 1).map(tag => `<span class="nkw neg">#${tag.text}</span>`).join('')}
        </div>
      </div>
    `;
    
    card.addEventListener('click', (e) => {
      if (e.target.closest('.bm-btn')) {
        toggleBookmark(item.id);
      } else {
        showModal(item);
      }
    });
    gridContainer.appendChild(card);
  });
}

// --- Modal Logic ---
function showModal(item) {
  currentRestaurant = item;
  currentReviewFilter = 'all';
  const bookmarks = JSON.parse(localStorage.getItem('poopMichelinBookmarks')) || [];
  const isBookmarked = bookmarks.includes(item.id);

  document.getElementById('modal-image').src = item.image;
  document.getElementById('modal-traffic-badge').innerHTML = getBadgeHTML(item.safetyLevel);
  document.getElementById('modal-name').textContent = item.name;
  document.getElementById('modal-loc').textContent = `📍 ${item.location}`;

  // 섹션 타이틀 동적 변경
  const menuTitle = document.querySelector('#detail-bsheet .section-title:nth-of-type(1)');
  if (item.safetyLevel === 'warning') {
    menuTitle.innerHTML = '🚨 IBS 주의 가이드';
    menuTitle.style.color = 'var(--sig-r-text)';
  } else {
    menuTitle.innerHTML = '🏆 IBS 추천 메뉴 TOP 3';
    menuTitle.style.color = 'var(--g900)';
  }

  // 스코어
  document.getElementById('score-taste').textContent = item.scores.taste.toFixed(1);
  document.getElementById('score-toilet').textContent = item.scores.toilet.toFixed(1);

  // TOP 3 메뉴 (도트 + 이유 태그)
  const menuList = document.getElementById('modal-menu-list');
  menuList.innerHTML = item.topMenus.map((menu, i) => `
    <li class="mb-item">
      <span style="font-weight:800; color:var(--gold-dark); width:24px;">${i+1}</span>
      <div style="flex:1;">
        <span class="mb-name">${menu.name}</span>
        <span style="font-size:11px; color:var(--g500); margin-left:8px; background:var(--bg-soft); padding:2px 6px; border-radius:4px;">${menu.reason}</span>
      </div>
      ${getDotHTML(menu.level)}
    </li>
  `).join('');

  // 화장실 키워드 (Toilet tags만!)
  const keywordWrap = document.getElementById('modal-keywords');
  const posChips = item.toiletTags.positive.map(tag => `<div class="kwt pos">#${tag.text} <span>${tag.count}</span></div>`).join('');
  const negChips = item.toiletTags.negative.map(tag => `<div class="kwt neg">#${tag.text} <span>${tag.count}</span></div>`).join('');
  keywordWrap.innerHTML = posChips + negChips;

  // AI 요약
  document.getElementById('modal-ai-summary').textContent = item.aiSummary;

  // 북마크 활성화 상태
  const modalBookmarkBtn = document.getElementById('modal-bookmark-btn');
  modalBookmarkBtn.dataset.id = item.id;
  modalBookmarkBtn.classList.toggle('active', isBookmarked);

  renderReviews();

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  modalBookmarkBtn.onclick = () => toggleBookmark(item.id);
}

function renderReviews() {
  const reviewsWrap = document.getElementById('modal-reviews');
  const filteredReviews = currentReviewFilter === 'all' 
    ? currentRestaurant.reviews 
    : currentRestaurant.reviews.filter(r => r.type === currentReviewFilter);

  if (filteredReviews.length > 0) {
    reviewsWrap.innerHTML = filteredReviews.map(rv => `
      <div class="rv-card">
        <div class="rv-top">
          <span class="rv-user">${rv.user} <span style="font-weight:400; font-size:12px; color:var(--gold-dark); background:var(--gold-light); padding:2px 6px; border-radius:4px; margin-left:4px;">${rv.type}</span></span>
          <span class="rv-date">${rv.date}</span>
        </div>
        <p class="rv-txt">${rv.text}</p>
      </div>
    `).join('');
  } else {
    reviewsWrap.innerHTML = `<p style="color:var(--g400); font-size: 14px; text-align: center; padding: 40px 20px;">해당 타입의 리뷰가 아직 없습니다.</p>`;
  }
}

// --- Feature Logic ---
function toggleBookmark(id) {
  let bookmarks = JSON.parse(localStorage.getItem('poopMichelinBookmarks')) || [];
  const isNow = !bookmarks.includes(id);
  if (!isNow) bookmarks = bookmarks.filter(bid => bid !== id);
  else bookmarks.push(id);
  localStorage.setItem('poopMichelinBookmarks', JSON.stringify(bookmarks));
  
  renderGrid();
  
  const modalBookmarkBtn = document.getElementById('modal-bookmark-btn');
  if (modalOverlay.classList.contains('active') && parseInt(modalBookmarkBtn.dataset.id) === id) {
    modalBookmarkBtn.classList.toggle('active', isNow);
  }
}

// --- Review Step Logic (Mockup) ---
function openReviewFlow() {
  reviewStep = 1;
  renderReviewStep();
  document.getElementById('review-modal-overlay').classList.add('active');
}

function renderReviewStep() {
  const container = document.getElementById('review-steps-container');
  const steps = [
    { title: "Step 1. 메뉴 선택", content: `<div class="search-wrap" style="margin-bottom:20px;"><input type="text" class="search-input" placeholder="메뉴 검색 (예: 된장찌개)"></div><div class="kw-cloud"><div class="chip active">#된장찌개</div><div class="chip">#두부김치</div></div>` },
    { title: "Step 2. 신호등 & 점수", content: `<div style="display:flex; gap:10px; margin-bottom:20px;">${getBadgeHTML('safe')} ${getBadgeHTML('caution')} ${getBadgeHTML('warning')}</div><p style="font-size:14px; margin-bottom:10px;">🍽 맛 점수: ★★★★☆</p><p style="font-size:14px;">🚽 화장실 점수: ★★★★★</p>` },
    { title: "Step 3. 키워드 선택", content: `<p style="font-size:12px; color:var(--g500); margin-bottom:10px;">음식 키워드</p><div class="kw-row" style="margin-bottom:20px;"><span class="nkw pos">#저포드맵</span><span class="nkw pos">#간이심심함</span></div><p style="font-size:12px; color:var(--g500); margin-bottom:10px;">화장실 키워드</p><div class="kw-row"><span class="nkw pos">#남녀분리</span><span class="nkw neg">#방음취약</span></div>` },
    { title: "Step 4. 의견 작성", content: `<textarea style="width:100%; height:120px; border:1px solid var(--g200); border-radius:12px; padding:12px; font-family:inherit; resize:none;" placeholder="자유로운 의견을 남겨주세요..."></textarea>` }
  ];

  const current = steps[reviewStep - 1];
  container.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">
      <h2 class="modal-name">${current.title}</h2>
      <span style="font-size:14px; font-weight:700; color:var(--gold-dark);">${reviewStep} / 4</span>
    </div>
    <div style="min-height:200px;">${current.content}</div>
    <div style="display:flex; gap:12px; margin-top:32px;">
      ${reviewStep > 1 ? `<button class="chip" style="flex:1;" onclick="goToStep(${reviewStep - 1})">이전</button>` : ''}
      <button class="fab" style="flex:2;" onclick="${reviewStep === 4 ? 'closeReviewModal()' : `goToStep(${reviewStep + 1})`}">${reviewStep === 4 ? '등록하기 💩' : '다음 단계로'}</button>
    </div>
  `;
}

window.goToStep = (step) => {
  reviewStep = step;
  renderReviewStep();
};

window.closeReviewModal = () => {
  document.getElementById('review-modal-overlay').classList.remove('active');
};

// --- Events ---
document.getElementById('modal-close-btn').onclick = () => {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
};

modalOverlay.onclick = (e) => {
  if (e.target === modalOverlay) document.getElementById('modal-close-btn').onclick();
};

searchInput.addEventListener('input', (e) => {
  currentSearchTerm = e.target.value.trim().toLowerCase();
  renderGrid();
});

filterChips.forEach(chip => {
  chip.onclick = () => {
    filterChips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    currentSafetyFilter = chip.dataset.filter === 'all' ? 'all' : chip.dataset.filter;
    renderGrid();
  };
});

document.getElementById('review-filter-wrap').addEventListener('click', (e) => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  document.querySelectorAll('#review-filter-wrap .chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  currentReviewFilter = chip.dataset.type;
  renderReviews();
});

document.getElementById('open-review-modal-btn').onclick = openReviewFlow;

// --- Init ---
renderGrid();
