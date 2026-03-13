// --- 똥슐랭 가이드 Lite v6.0 Enhanced Review System ---

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
      { name: "된장찌개", level: "safe", reason: "저염 담백" },
      { name: "나물 비빔밥", level: "safe", reason: "식이섬유 풍부" },
      { name: "제육볶음", level: "caution", reason: "기름기 있음" }
    ],
    foodTags: {
      positive: [{ text: "저포드맵", count: 88 }, { text: "간이심심함", count: 42 }, { text: "소화잘됨", count: 56 }],
      negative: []
    },
    toiletTags: {
      positive: [{ text: "남녀분리", count: 42 }, { text: "매장내부", count: 31 }, { text: "청결도 우수", count: 28 }],
      negative: [{ text: "방음취약", count: 9 }]
    },
    aiSummary: "전체적으로 간이 심심하고 저포드맵 식재료 위주라 민감한 장에 아주 편안합니다. 화장실도 매장 내부 남녀 분리라 안심하고 방문 가능해요.",
    reviews: [
      { 
        id: 101, 
        user: "장민감", 
        type: "설사형", 
        date: "2025.08.12", 
        text: "여기 된장찌개는 먹고 나서 속이 정말 편해요. 화장실도 깨끗해서 단골입니다.",
        rating: { taste: 5.0, toilet: 4.0 },
        selectedTags: ["맛있어요", "속이편해요", "깨끗해요"]
      }
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
      { name: "마라탕 (3단계)", level: "warning", reason: "매우 자극적임", isCaveat: true },
      { name: "꿔바로우", level: "warning", reason: "기름진 당분", isCaveat: true },
      { name: "볶음밥 (순한맛)", level: "safe", reason: "그나마 안전한 대안", isAlternative: true }
    ],
    foodTags: {
      positive: [{ text: "가성비", count: 120 }],
      negative: [{ text: "자극적임", count: 95 }, { text: "기름기많음", count: 68 }, { text: "맵기조절주의", count: 42 }]
    },
    toiletTags: {
      positive: [{ text: "칸수 여유", count: 12 }],
      negative: [{ text: "남녀공용", count: 55 }, { text: "비누없음", count: 12 }, { text: "청결도 아쉽", count: 34 }]
    },
    aiSummary: "자극적인 향신료와 기름기가 많아 장 트러블 위험이 높습니다. 화장실도 공용인 점을 반드시 고려하세요.",
    reviews: [
      { 
        id: 201, 
        user: "마라러버", 
        type: "설사형", 
        date: "2025.07.20", 
        text: "맛있지만 다음날 화장실에서 살았습니다... 맵기 조절 필수예요.",
        rating: { taste: 4.0, toilet: 2.0 },
        selectedTags: ["자극적이에요", "기름져요", "공용화장실"]
      }
    ]
  },
  {
    id: 3,
    name: "쾌변 샐러드바",
    location: "서울 강남역 · 650m",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    safetyLevel: "safe",
    scores: { taste: 4.1, toilet: 4.9 },
    category: "샐러드",
    topMenus: [
      { name: "모둠 채소 포케", level: "safe", reason: "고식이섬유" },
      { name: "구운 두부 샐러드", level: "safe", reason: "식물성 단백질" },
      { name: "호두 당근 라페", level: "caution", reason: "견과류 알러지 주의" }
    ],
    foodTags: {
      positive: [{ text: "저포드맵", count: 42 }, { text: "청결도 우수", count: 88 }, { text: "섬유질 가득", count: 95 }],
      negative: []
    },
    toiletTags: {
      positive: [{ text: "청결도 우수", count: 92 }, { text: "핸드타올 비치", count: 45 }, { text: "여성용품 구비", count: 15 }],
      negative: []
    },
    aiSummary: "변비형 유저에게 강력 추천하는 고식이섬유 구성입니다. 화장실 청결도와 편의시설이 호텔급으로 우수합니다.",
    reviews: [
      { 
        id: 301, 
        user: "변비탈출", 
        type: "변비형", 
        date: "2025.09.01", 
        text: "여기 샐러드 먹고 드디어 광명을 찾았습니다. 화장실도 너무 깨끗해서 편해요.",
        rating: { taste: 5.0, toilet: 5.0 },
        selectedTags: ["신선해요", "쾌변도움", "완벽위생"]
      }
    ]
  },
  {
    id: 4,
    name: "슬로우 죽공방",
    location: "서울 연남동 · 520m",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800",
    safetyLevel: "safe",
    scores: { taste: 4.5, toilet: 4.2 },
    category: "한식/죽",
    topMenus: [
      { name: "흰죽/야채죽", level: "safe", reason: "가장 편안한 유동식" },
      { name: "단호박죽", level: "safe", reason: "식이섬유 부드러움" },
      { name: "낙지김치죽", level: "warning", reason: "매운맛 자극 주의" }
    ],
    foodTags: {
      positive: [{ text: "속편함", count: 56 }, { text: "간조절가능", count: 24 }],
      negative: []
    },
    toiletTags: {
      positive: [{ text: "남녀분리", count: 18 }, { text: "청결함", count: 22 }],
      negative: [{ text: "1인용대기", count: 15 }]
    },
    aiSummary: "장이 예민한 날 최고의 선택지입니다. 전 메뉴 간 조절이 가능하며, 화장실은 1인용이라 대기가 있을 수 있지만 관리가 매우 잘 되어 있습니다.",
    reviews: [
      { 
        id: 401, 
        user: "죽돌이", 
        type: "설사형", 
        date: "2025.09.10", 
        text: "배탈 났을 때 여기 죽 만한 게 없어요. 간도 조절해주셔서 좋습니다.",
        rating: { taste: 4.5, toilet: 4.0 },
        selectedTags: ["속편해요", "친절해요", "관리잘됨"]
      }
    ]
  },
  {
    id: 5,
    name: "바른 파스타 역삼점",
    location: "서울 역삼동 · 210m",
    image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=800",
    safetyLevel: "caution",
    scores: { taste: 4.3, toilet: 3.8 },
    category: "양식",
    topMenus: [
      { name: "알리오올리오", level: "safe", reason: "유제품 미포함" },
      { name: "까르보나라", level: "warning", reason: "고지방 유제품 주의" },
      { name: "토마토 리조또", level: "caution", reason: "마늘/양파 함량 높음" }
    ],
    foodTags: {
      positive: [{ text: "재료신선", count: 21 }],
      negative: [{ text: "마늘다수", count: 32 }, { text: "느끼함", count: 19 }]
    },
    toiletTags: {
      positive: [{ text: "건물공용", count: 45 }, { text: "핸드타올", count: 12 }],
      negative: [{ text: "남녀공용", count: 8 }]
    },
    aiSummary: "오일 베이스 파스타는 비교적 안전하나 크림/치즈류는 주의가 필요합니다. 화장실은 건물 공용이지만 도어락이 있어 외부인 출입이 제한됩니다.",
    reviews: [
      { 
        id: 501, 
        user: "파스타광", 
        type: "변비형", 
        date: "2025.10.05", 
        text: "알리오올리오가 참 깔끔해요. 화장실은 건물 공용이라 조금 걸어야 해요.",
        rating: { taste: 4.0, toilet: 3.5 },
        selectedTags: ["맛있어요", "깔끔해요", "건물화장실"]
      }
    ]
  },
  {
    id: 6,
    name: "불타는 청춘 곱창",
    location: "서울 성수동 · 900m",
    image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&q=80&w=800",
    safetyLevel: "warning",
    scores: { taste: 4.8, toilet: 2.5 },
    category: "한식/구이",
    topMenus: [
      { name: "소곱창 구이", level: "warning", reason: "고지방/기름기 과다" },
      { name: "곱창 전골", level: "warning", reason: "매운맛/고지방 복합" },
      { name: "볶음밥", level: "caution", reason: "기름기 조절 필요" }
    ],
    foodTags: {
      positive: [{ text: "맛있음", count: 92 }],
      negative: [{ text: "기름기폭발", count: 84 }, { text: "과식유발", count: 41 }]
    },
    toiletTags: {
      positive: [],
      negative: [{ text: "매장외부", count: 52 }, { text: "노후시설", count: 38 }, { text: "비누없음", count: 21 }]
    },
    aiSummary: "맛은 훌륭하지만 장 안심도는 최하위권입니다. 고지방과 기름진 성분이 설사를 유발할 수 있으며 화장실 시설이 열악해 응급 상황 대처가 어렵습니다.",
    reviews: [
      { 
        id: 601, 
        user: "곱창킬러", 
        type: "설사형", 
        date: "2025.10.12", 
        text: "맛있어서 포기 못하지만... 먹고 나면 항상 고생합니다. 화장실은 정말 비추예요.",
        rating: { taste: 5.0, toilet: 1.5 },
        selectedTags: ["존맛탱", "기름져요", "화장실최악"]
      }
    ]
  }
];

// --- State ---
let safetyFilters = new Set(['safe', 'caution', 'warning']); // 초기값: 전체 선택 상태
let conditionFilters = new Set();
let searchTerm = '';
let currentReviewFilter = 'all';
let activeRestaurant = null;
let currentStep = 1;
let showOnlyScrapped = false;

// --- Selectors ---
const grid = document.getElementById('restaurant-grid');
const search = document.getElementById('search-input');
const safetyChips = document.querySelectorAll('#filter-row-safety .chip');
const conditionChips = document.querySelectorAll('#filter-row-toilet .chip');
const modal = document.getElementById('modal-overlay');
const closeBtn = document.getElementById('modal-close-btn');

// --- Layout Logic ---
function render() {
  grid.innerHTML = '';
  const bookmarks = JSON.parse(localStorage.getItem('poopMichelinBookmarks')) || [];
  
  const listTitle = document.getElementById('list-title');
  if (showOnlyScrapped) {
    listTitle.innerHTML = '📌 내 스크랩';
  } else {
    listTitle.innerHTML = '📍 내 주변 안심 맛집';
  }

  const filtered = restaurants.filter(res => {
    // 장 안심도 필터 (다중 선택 OR 조건)
    const matchesSafety = safetyFilters.size === 0 || safetyFilters.has(res.safetyLevel);
    
    const matchesSearch = res.name.toLowerCase().includes(searchTerm) || res.location.toLowerCase().includes(searchTerm);
    
    // 화장실 조건 필터 (다중 선택 AND 조건)
    let matchesConditions = true;
    conditionFilters.forEach(cond => {
      const label = document.querySelector(`[data-filter="${cond}"]`).textContent.trim();
      if (!res.toiletTags.positive.some(tag => label.includes(tag.text))) {
        matchesConditions = false;
      }
    });

    // 스크랩 필터
    const matchesScrap = !showOnlyScrapped || bookmarks.includes(res.id);

    return matchesSafety && matchesSearch && matchesConditions && matchesScrap;
  });

  filtered.forEach(item => {
    const isBookmarked = bookmarks.includes(item.id);
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-thumb">
        <img src="${item.image}" alt="${item.name}">
        <div class="thumb-badge">${getBadge(item.safetyLevel)}</div>
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
          ${item.foodTags.positive.slice(0, 2).map(t => `<span class="nkw pos">#${t.text}</span>`).join('')}
        </div>
      </div>
    `;
    card.onclick = (e) => {
      if (e.target.closest('.bm-btn')) toggleBM(item.id);
      else openDetail(item);
    };
    grid.appendChild(card);
  });
}

function openDetail(item) {
  activeRestaurant = item;
  currentReviewFilter = 'all';
  const bookmarks = JSON.parse(localStorage.getItem('poopMichelinBookmarks')) || [];

  document.getElementById('modal-image').src = item.image;
  document.getElementById('modal-name').textContent = item.name;
  document.getElementById('modal-loc').textContent = `📍 ${item.location}`;
  
  // 화장실 경고 로직 (부정 키워드 2개 이상이거나 특정 키워드 포함 시)
  const toiletWarning = item.toiletTags.negative.length >= 2 ? '<span class="badge r" style="margin-left:8px;">🚨 화장실 주의</span>' : '';
  document.getElementById('modal-traffic-badge').innerHTML = getBadge(item.safetyLevel) + toiletWarning;

  document.getElementById('score-taste').textContent = item.scores.taste.toFixed(1);
  document.getElementById('score-toilet').textContent = item.scores.toilet.toFixed(1);

  renderTags('modal-food-keywords', item.foodTags);
  renderTags('modal-toilet-keywords', item.toiletTags);

  const menuTitle = document.getElementById('modal-menu-title');
  const menuList = document.getElementById('modal-menu-list');
  if (item.safetyLevel === 'warning') {
    menuTitle.innerHTML = '🚨 IBS 주의 메뉴 가이드';
    menuTitle.style.color = 'var(--sig-r-text)';
  } else {
    menuTitle.innerHTML = '🏆 IBS 추천 메뉴 TOP 3';
    menuTitle.style.color = 'var(--g700)';
  }
  menuList.innerHTML = item.topMenus.map((menu, i) => {
    let tip = '';
    // 설사형 유저를 위한 특수 팁 (식이섬유 관련)
    if (menu.reason.includes('식이섬유') || menu.name.includes('비빔밥') || menu.name.includes('나물')) {
      tip = '<p class="mb-warning" style="background:#FFF1F1; color:#D32F2F; padding:8px; border-radius:8px; margin-top:4px;">💡 설사형 유저는 과도한 식이섬유 섭취 시 장 자극이 올 수 있으니 양 조절에 유의하세요!</p>';
    }

    return `
      <li class="mb-item" style="flex-direction:column; align-items:flex-start;">
        <div style="display:flex; align-items:center; gap:8px; width:100%;">
          <span style="font-weight:900; color:var(--gold-dark);">${i+1}</span>
          <span class="mb-name">${menu.name}</span>
          <span class="mb-reason">${menu.reason}</span>
          <div style="margin-left:auto;">${getDot(menu.level)}</div>
        </div>
        ${menu.isCaveat ? `<p class="mb-warning">⚠️ 이 메뉴는 장 건강에 자극이 큽니다.</p>` : ''}
        ${menu.isAlternative ? `<p class="mb-warning" style="color:var(--sig-g-text);">✅ 대체 가능한 안심 메뉴입니다.</p>` : ''}
        ${tip}
      </li>
    `;
  }).join('');

  document.getElementById('modal-ai-summary').textContent = item.aiSummary;
  document.getElementById('modal-bookmark-btn').classList.toggle('active', bookmarks.includes(item.id));

  renderReviews();
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function renderTags(containerId, tags) {
  const container = document.getElementById(containerId);
  const pos = tags.positive.map(t => `<div class="kwt pos">#${t.text} <span>${t.count}</span></div>`).join('');
  const neg = tags.negative.map(t => `<div class="kwt neg">#${t.text} <span>${t.count}</span></div>`).join('');
  container.innerHTML = pos + neg;
}

function renderReviews() {
  const reviewsWrap = document.getElementById('modal-reviews');
  const filteredReviews = currentReviewFilter === 'all' ? activeRestaurant.reviews : activeRestaurant.reviews.filter(r => r.type === currentReviewFilter);

  if (filteredReviews.length > 0) {
    reviewsWrap.innerHTML = filteredReviews.map(rv => `
      <div class="rv-card">
        <div class="rv-top">
          <div class="rv-user">
            <span style="font-weight: 800; font-size: 15px; color: var(--g900);">${rv.user}</span>
            <span class="rv-type-tag">${rv.type}</span>
          </div>
          <span class="rv-date">${rv.date}</span>
        </div>

        <div class="rv-badge-wrap">
          <div class="rv-star-badge"><span>🍽</span> ${rv.rating ? rv.rating.taste.toFixed(1) : '5.0'}</div>
          <div class="rv-star-badge"><span>🚽</span> ${rv.rating ? rv.rating.toilet.toFixed(1) : '5.0'}</div>
        </div>

        <div class="kw-row">
          ${(rv.selectedTags || ['속이편해요', '깨끗해요']).map(tag => `
            <span class="nkw pos" style="font-size: 11px;">#${tag.replace('#','')}</span>
          `).join('')}
        </div>

        <p class="rv-txt">${rv.text}</p>
      </div>
    `).join('');
  } else {
    reviewsWrap.innerHTML = `<p style="text-align:center; padding:40px; color:var(--g400); font-size:13px;">해당 타입의 리뷰가 없습니다.</p>`;
  }
}

// --- Interaction Helpers ---
function getBadge(lv) {
  const map = { safe: ['장 안심', 'g'], caution: ['보통', 'a'], warning: ['주의', 'r'] };
  return `<div class="badge ${map[lv][1]}">${map[lv][0]}</div>`;
}
function getDot(lv) {
  const map = { safe: 'g', caution: 'a', warning: 'r' };
  return `<span class="badge-dot ${map[lv]}"></span>`;
}
function toggleBM(id) {
  let bms = JSON.parse(localStorage.getItem('poopMichelinBookmarks')) || [];
  if (bms.includes(id)) bms = bms.filter(i => i !== id);
  else bms.push(id);
  localStorage.setItem('poopMichelinBookmarks', JSON.stringify(bms));
  render();
}

const reviewOverlay = document.getElementById('review-modal-overlay');
const reviewSteps = document.getElementById('review-steps-container');

// --- Review Flow State ---
let reviewDraft = {
  menu: '',
  tasteRating: 0,
  toiletRating: 0,
  foodKeywords: new Set(),
  toiletKeywords: new Set(),
  text: ''
};

function openReview() {
  currentStep = 1;
  reviewDraft = {
    menu: '', tasteRating: 0, toiletRating: 0,
    foodKeywords: new Set(), toiletKeywords: new Set(), text: ''
  };
  renderStep();
  reviewOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function handleStarClick(type, val) {
  if (type === 'taste') reviewDraft.tasteRating = val;
  else reviewDraft.toiletRating = val;
  renderStep();
}

function toggleReviewKw(category, val) {
  const set = category === 'food' ? reviewDraft.foodKeywords : reviewDraft.toiletKeywords;
  if (set.has(val)) set.delete(val);
  else set.add(val);
  renderStep();
}

function renderStep() {
  const starsMarkup = (type, current) => `
    <div class="star-rating">
      ${[1, 2, 3, 4, 5].map(i => `
        <span class="${i <= current ? 'active' : ''}" onclick="handleStarClick('${type}', ${i})">★</span>
      `).join('')}
    </div>
  `;

  const kwMarkup = (category, list) => {
    const pos = list.filter(k => k.type === 'pos');
    const neg = list.filter(k => k.type === 'neg');
    
    const renderRow = (items) => items.map(kw => {
      const isActive = (category === 'food' ? reviewDraft.foodKeywords : reviewDraft.toiletKeywords).has(kw.text);
      return `<span class="nkw ${kw.type} ${isActive ? 'active' : ''}" onclick="toggleReviewKw('${category}', '${kw.text}')">#${kw.text}</span>`;
    }).join('');

    return `
      <div class="kw-row" style="flex-wrap: wrap; margin-bottom: 8px;">${renderRow(pos)}</div>
      <div class="kw-row" style="flex-wrap: wrap;">${renderRow(neg)}</div>
    `;
  };

  const steps = [
    {
      title: "Step 1. 음식 평가 🍽",
      desc: "어떤 메뉴를 드셨나요?",
      content: `
        <div class="search-wrap" style="margin-bottom:24px;">
          <input type="text" class="search-input" value="${reviewDraft.menu}" oninput="reviewDraft.menu = this.value" placeholder="메뉴를 입력하세요">
        </div>
        <p style="font-weight:700; font-size:14px; margin-bottom:12px;">맛 & 장 편암함 점수</p>
        ${starsMarkup('taste', reviewDraft.tasteRating)}
        <p style="font-weight:700; font-size:14px; margin-bottom:12px;">음식 키워드</p>
        ${kwMarkup('food', [
          {text: '저포드맵', type: 'pos'}, {text: '간이심심함', type: 'pos'}, 
          {text: '기름기많음', type: 'neg'}, {text: '속편함', type: 'pos'}
        ])}
      `
    },
    {
      title: "Step 2. 화장실 평가 🚽",
      desc: "화장실은 쾌적했나요?",
      content: `
        <p style="font-weight:700; font-size:14px; margin-bottom:12px;">쾌적도 점수</p>
        ${starsMarkup('toilet', reviewDraft.toiletRating)}
        <p style="font-weight:700; font-size:14px; margin-bottom:12px;">화장실 키워드</p>
        ${kwMarkup('toilet', [
          {text: '남녀분리', type: 'pos'}, {text: '청결도 우수', type: 'pos'}, 
          {text: '비누없음', type: 'neg'}, {text: '공용화장실', type: 'neg'}
        ])}
      `
    },
    {
      title: "Step 3. 상세 의견 💬",
      desc: "다른 유저를 위한 팁을 남겨주세요.",
      content: `
        <textarea style="width:100%; height:140px; border:1px solid var(--g200); border-radius:16px; padding:16px; resize:none; font-family:var(--font-main); font-size:14px;" 
          placeholder="예: 화장실이 좁지만 깨끗해요!"
          oninput="reviewDraft.text = this.value">${reviewDraft.text}</textarea>
      `
    },
    {
      title: "Step 4. 등록 완료! 🎉",
      desc: "리뷰가 성공적으로 제출되었습니다.",
      content: `
        <div style="text-align:center; padding:20px 0;">
          <p style="font-size:15px; margin-bottom:24px; color:var(--g700);">더 많은 혜택을 위해 가입하시겠어요?</p>
          <button class="fab" style="margin-bottom:12px; background:var(--gold); color:var(--g900); border:none;">🚀 💩슐랭 정회원 가입</button>
          <button class="chip" style="display:block; width:100%; height:54px; background:var(--bg-soft); color:var(--g700); border:1px solid var(--g200);">로그인하고 포인트 적립</button>
        </div>
      `
    }
  ];

  const current = steps[currentStep - 1];
  const progressPercent = (currentStep / 4) * 100;

  reviewSteps.innerHTML = `
    <div class="review-progress-bar">
      <div class="rp-fill" style="width: ${progressPercent}%"></div>
    </div>
    <div class="step-header">
      <h2 class="modal-name">${current.title}</h2>
      <span class="step-indicator" style="font-weight:800; color:var(--gold);">${currentStep} / 4</span>
    </div>
    <p style="font-size:13px; color:var(--g500); border:none; margin-bottom:28px;">${current.desc}</p>
    <div style="min-height:240px;">${current.content}</div>
    <div style="display:flex; gap:12px; margin-top:32px;">
      ${currentStep > 1 && currentStep < 4 ? `<button class="chip" style="flex:1;" onclick="prevStep()">이전</button>` : ''}
      <button class="fab" style="flex:2;" onclick="${currentStep === 4 ? 'submitReview()' : 'nextStep()'}">
        ${currentStep === 4 ? '닫기' : '다음 단계'}
      </button>
    </div>
  `;
}

window.nextStep = () => { currentStep++; renderStep(); };
window.prevStep = () => { currentStep--; renderStep(); };
window.closeReview = () => { 
  reviewOverlay.classList.remove('active');
  if (!modal.classList.contains('active')) {
    document.body.style.overflow = '';
  }
};
window.submitReview = () => {
  // 실제 제출 데이터는 reviewDraft에 있음
  closeReview();
};

function openMyPage() {
  const bookmarks = JSON.parse(localStorage.getItem('poopMichelinBookmarks')) || [];
  const container = document.getElementById('mypage-container');
  
  container.innerHTML = `
    <div class="profile-section">
      <div class="profile-img"></div>
      <div class="profile-info">
        <h3>장튼튼 님</h3>
        <p>평범한 직장인 | 설사형 유저</p>
      </div>
    </div>
    
    <div class="stats-grid">
      <div class="stat-item">
        <span class="stat-val">${bookmarks.length}</span>
        <span class="stat-lbl">저장한 장소</span>
      </div>
      <div class="stat-item">
        <span class="stat-val">${Math.floor(Math.random() * 5) + 3}</span>
        <span class="stat-lbl">작성한 리뷰</span>
      </div>
    </div>
    
    <div class="mypage-menu">
      <div class="mp-item">
        <span><span>🔔</span> 알림 설정</span>
        <span>></span>
      </div>
      <div class="mp-item">
        <span><span>📄</span> 공지사항</span>
        <span>></span>
      </div>
      <div class="mp-item">
        <span><span>📞</span> 고객센터</span>
        <span>></span>
      </div>
    </div>
  `;
  
  document.getElementById('mypage-modal-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMyPage() {
  document.getElementById('mypage-modal-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

// --- Event Listeners ---
document.getElementById('scrap-btn').onclick = function() {
  showOnlyScrapped = !showOnlyScrapped;
  this.classList.toggle('active', showOnlyScrapped);
  render();
};

document.getElementById('mypage-btn').onclick = openMyPage;
document.getElementById('mypage-close-btn').onclick = closeMyPage;
document.getElementById('mypage-modal-overlay').onclick = (e) => {
  if (e.target.id === 'mypage-modal-overlay') closeMyPage();
};

document.querySelector('.logo').onclick = () => {
  // 모든 상태 초기화
  safetyFilters = new Set(['safe', 'caution', 'warning']);
  conditionFilters = new Set();
  searchTerm = '';
  showOnlyScrapped = false;
  
  // UI 상태 업데이트
  search.value = '';
  safetyChips.forEach(c => c.classList.add('active'));
  conditionChips.forEach(c => c.classList.remove('active'));
  document.getElementById('scrap-btn').classList.remove('active');
  
  render();
};

search.oninput = (e) => { searchTerm = e.target.value.toLowerCase(); render(); };
safetyChips.forEach(c => c.onclick = () => {
  const filter = c.dataset.filter;
  if (safetyFilters.has(filter)) {
    safetyFilters.delete(filter);
    c.classList.remove('active');
  } else {
    safetyFilters.add(filter);
    c.classList.add('active');
  }
  render();
});
conditionChips.forEach(c => c.onclick = () => {
  const filter = c.dataset.filter;
  if (conditionFilters.has(filter)) {
    conditionFilters.delete(filter);
    c.classList.remove('active');
  } else {
    conditionFilters.add(filter);
    c.classList.add('active');
  }
  render();
});

closeBtn.onclick = () => { 
  modal.classList.remove('active'); 
  if (!reviewOverlay.classList.contains('active')) {
    document.body.style.overflow = ''; 
  }
};

// 모달 바깥쪽(오버레이) 클릭 시 닫기
modal.onclick = (e) => {
  if (e.target === modal) closeBtn.onclick();
};

reviewOverlay.onclick = (e) => {
  if (e.target === reviewOverlay) closeReview();
};

document.getElementById('review-filter-wrap').onclick = (e) => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  document.querySelectorAll('#review-filter-wrap .chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  currentReviewFilter = chip.dataset.type;
  renderReviews();
};

document.getElementById('open-review-modal-btn').onclick = openReview;
document.getElementById('review-close-btn').onclick = closeReview;

// --- Init ---
render();
