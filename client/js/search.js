import { clearContents, getNode, insertLast } from "../lib/index.js";

const popularLists = getNode(".search__lists");

//# 실시간 인기 검색어 rendering
//$ header의 검색 버튼 부분을 클릭시 작동하기
const program = {
  product: "TAING",
  version: 1,
  releaseDate: "2023-07-29T00:00:00.000Z",
  recommend: [
    {
      name: "보물찾기",
      img: {
        src: "./image/main/desktop/img_frame.png",
        alt: "보물찾기",
      },
      index: 1,
      id: 1,
    },
    {
      name: "러브캐처 인 발리",
      img: {
        src: "./image/main/desktop/img_frame-1.png",
        alt: "러브캐처 인 발리",
      },
      index: 2,
      id: 2,
    },
    {
      name: "술꾼도시여자들2",
      img: {
        src: "./image/main/desktop/img_frame-2.png",
        alt: "술꾼도시여자들2",
      },
      index: 3,
      id: 3,
    },
    {
      name: "털사 킹",
      img: {
        src: "./image/main/desktop/img_frame-3.png",
        alt: "털사 킹",
      },
      index: 4,
      id: 4,
    },
    {
      name: "아무것도 하고 싶지 않아",
      img: {
        src: "./image/main/desktop/img_frame-4.png",
        alt: "아무것도 하고 싶지 않아",
      },
      index: 5,
      id: 5,
    },
    {
      name: "블랙독",
      img: {
        src: "./image/main/desktop/img_frame-5.png",
        alt: "블랙독",
      },
      index: 6,
      id: 6,
    },
    {
      name: "우리들의 블루스",
      img: {
        src: "./image/main/desktop/img_frame-6.png",
        alt: "우리들의 블루스",
      },
      index: 7,
      id: 7,
    },
    {
      name: "킬리만자로",
      img: {
        src: "./image/main/desktop/img_frame-7.png",
        alt: "킬리만자로",
      },
      index: 8,
      id: 8,
    },
  ],
  quickVOD: [
    {
      name: "JTBC 뉴스",
      img: {
        src: "./image/main/desktop/img_frame-8.png",
        alt: "JTBC 뉴스",
      },
      episode: "0화",
      index: 1,
      id: 9,
    },
    {
      name: "휴먼다큐 &lt;나는 살기로 했다&gt;",
      img: {
        src: "./image/main/desktop/img_frame-9.png",
        alt: "휴먼다큐 &lt;나는 살기로 했다&gt;",
      },
      episode: "10화",
      index: 2,
      id: 10,
    },
    {
      name: "건강 면세점",
      img: {
        src: "./image/main/desktop/img_frame-10.png",
        alt: "건강 면세점",
      },
      episode: "130화",
      index: 3,
      id: 11,
    },
    {
      name: "차이나는 클라스",
      img: {
        src: "./image/main/desktop/img_frame-11.png",
        alt: "차이나는 클라스",
      },
      episode: "254화",
      index: 4,
      id: 12,
    },
    {
      name: "알맹이",
      img: {
        src: "./image/main/desktop/img_frame-12.png",
        alt: "알맹이",
      },
      episode: "208화",
      index: 5,
      id: 13,
    },
    {
      name: "엄마의 봄날",
      img: {
        src: "./image/main/desktop/img_frame-13.png",
        alt: "엄마의 봄날",
      },
      episode: "380화",
      index: 6,
      id: 14,
    },
  ],
  realtime: [
    {
      name: "재벌집 막내아들",
      img: {
        src: "./image/main/desktop/img_frame-14.png",
        alt: "재벌집 막내아들",
      },
      rank: 1,
      id: 0,
    },
    {
      name: "술꾼도시여자들2",
      img: {
        src: "./image/main/desktop/img_frame-15.png",
        alt: "술꾼도시여자들2",
      },
      rank: 2,
      id: 0,
    },
    {
      name: "환혼",
      img: {
        src: "./image/main/desktop/img_frame-16.png",
        alt: "환혼",
      },
      rank: 3,
      id: 0,
    },
    {
      name: "캐나다 체크인",
      img: {
        src: "./image/main/desktop/img_frame-17.png",
        alt: "캐나다 체크인",
      },
      rank: 4,
      id: 0,
    },
    {
      name: "놀라운 토요일",
      img: {
        src: "./image/main/desktop/img_frame-18.png",
        alt: "놀라운 토요일",
      },
      rank: 5,
      id: 0,
    },
    {
      name: "쇼미더머니 11",
      img: {
        src: "./image/main/desktop/img_frame-19.png",
        alt: "쇼미더머니 11",
      },
      rank: 6,
      id: 0,
    },
    {
      name: "러브캐처",
      img: {
        src: "./image/main/desktop/img_frame-20.png",
        alt: "러브캐처",
      },
      rank: 7,
      id: 0,
    },
    {
      name: "알쓸인잡",
      img: {
        src: "./image/main/desktop/img_frame-21.png",
        alt: "알쓸인잡",
      },
      rank: 8,
      id: 0,
    },
  ],
  live: [
    {
      name: "JTBC 뉴스룸",
      img: {
        src: "./image/main/desktop/img_frame-22.png",
        alt: "전체관람가",
      },
      air: "JTBC",
      rating: "27.9%",
      index: 1,
      id: 0,
    },
    {
      name: "줄 서는 식당 43회",
      img: {
        src: "./image/main/desktop/img_frame-23.png",
        alt: "줄서는 식당",
      },
      air: "tvN",
      rating: "26.3%",
      index: 2,
      id: 0,
    },
    {
      name: "뉴스가 있는 저녁",
      img: {
        src: "./image/main/desktop/img_frame-24.png",
        alt: "뉴스가 있는 저녁",
      },
      air: "YTN",
      rating: "9%",
      index: 3,
      id: 0,
    },
    {
      name: "재벌집 막내아들 5화",
      img: {
        src: "./image/main/desktop/img_frame-25.png",
        alt: "재벌집 막내아들 5화",
      },
      air: "JTBC2",
      rating: "6.2%",
      index: 4,
      id: 0,
    },
    {
      name: "뉴스프라임",
      img: {
        src: "./image/main/desktop/img_frame-26.png",
        alt: "뉴스프라임",
      },
      air: "연합뉴스TV",
      rating: "4.6%",
      index: 5,
      id: 0,
    },
    {
      name: "명탐정 코난",
      img: {
        src: "./image/main/desktop/img_frame-27.png",
        alt: "명탐정 코난",
      },
      air: "aniMax",
      rating: "3%",
      index: 6,
      id: 0,
    },
  ],
  onlyTaing: [
    {
      name: "전체관람가",
      posterImg: {
        src: "./image/main/desktop/poster5.png",
        alt: "전체관람가",
      },
      index: 1,
      id: 0,
    },
    {
      name: "러브캐처",
      posterImg: {
        src: "./image/main/desktop/poster2.png",
        alt: "러브캐처",
      },
      index: 2,
      id: 0,
    },
    {
      name: "환승연애2",
      posterImg: {
        src: "./image/main/desktop/poster7.png",
        alt: "환승연애2",
      },
      index: 0,
      id: 3,
    },
    {
      name: "몸값",
      posterImg: {
        src: "./image/main/desktop/poster3.png",
        alt: "몸값",
      },
      index: 4,
      id: 0,
    },
    {
      name: "술꾼도시여자들",
      posterImg: {
        src: "./image/main/desktop/poster4.png",
        alt: "술꾼도시여자들",
      },
      index: 5,
      id: 0,
    },
    {
      name: "괴이",
      posterImg: {
        src: "./image/main/desktop/poster1.png",
        alt: "괴이",
      },
      index: 6,
      id: 0,
    },
    {
      name: "푸드 크로니클",
      posterImg: {
        src: "./image/main/desktop/poster6.png",
        alt: "푸드 크로니클",
      },
      index: 7,
      id: 0,
    },
  ],
  event: [
    {
      name: "신비아파트 개봉 이벤트",
      img: {
        src: "./image/main/desktop/img_frame-29.png",
        alt: "신비 아파트 이벤트",
      },
      index: 1,
      id: 0,
    },
    {
      name: "재벌집 막내아들 시청 이벤트",
      img: {
        src: "./image/main/desktop/img_frame-30.png",
        alt: "재벌집 막내아들 이벤트",
      },
      index: 2,
      id: 0,
    },
    {
      name: "환승연애2 시청 이벤트",
      img: {
        src: "./image/main/desktop/img_frame-31.png",
        alt: "환승연애2 이벤트",
      },
      index: 3,
      id: 0,
    },
    {
      name: "슈룹 시청 이벤트",
      img: {
        src: "./image/main/desktop/img_frame-32.png",
        alt: "슈룹 이벤트",
      },
      index: 4,
      id: 0,
    },
    {
      name: "디저트 메이커 이벤트",
      img: {
        src: "./image/main/desktop/img_frame-33.png",
        alt: "디저트 메이커 이벤트",
      },
      index: 5,
      id: 0,
    },
    {
      name: "렛미인 시청 이벤트",
      img: {
        src: "./image/main/desktop/img_frame-34.png",
        alt: "렛미인 이벤트",
      },
      index: 6,
      id: 0,
    },
  ],
};

const realtime = program["realtime"];

realtime.forEach((program) => {
  const { name, rank, ...restOptions } = program;

  const templatePopularList = /*html*/ `
  <li class="search__list">
    <a href="./" class="search__link">
      <span
        class="search__rank inline-block w-[1.875rem] text-red_login"
        >${rank}</span
      ><span class="hover:text-white">${name}</span>
    </a>
  </li>
`;

  insertLast(popularLists, templatePopularList);
});

//# 실시간 날짜 정보 받기
const time = getNode("time");

function getNow() {
  const now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();
  let hours = now.getHours();
  let noon = "";
  let minutes = now.getMinutes();

  if (hours >= 12) {
    hours -= hours;
    noon = "오후";
  } else {
    noon = "오전";
  }
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;

  const time = `${year}.${month}.${date} ${noon} ${hours}:${minutes} 기준`;
  // console.log(now, time);
  return time;
}

insertLast(time, getNow());

//# 검색어 처리
const btnClick = getNode("#appendText");

btnClick.addEventListener("click", () => {
  // e.defaultPrevent();

  const ulNode = getNode("#searchRecent");
  const liNode = getNode("p");
  const btn = document.createElement("button");

  clearContents(liNode);
  liNode.textContent = getNode("#search").value;
  ulNode.appendChild(liNode).classList.add("search__history");
  liNode.appendChild(btn).classList.add("search__erase");

  var none = getNode("#searchNone");
  let eraseAll = getNode("#eraseAll");

  if (none.style.display == "") {
    none.style.display = "none";
  }
  if (eraseAll.style.display == "") {
    eraseAll.style.display = "block";
  }
});