import { writeFileSync } from 'node:fs';
import Parser from "rss-parser";

/**
 * README.MD에 작성될 페이지 텍스트
 * @type {string}
 */
let text = `# 장현준 | Backend Developer

Java와 Spring Boot를 중심으로 서비스의 서버를 개발하는 백엔드 개발자입니다.<br>
SOPT 프로젝트에서 서버 개발을 맡았고, 문제 해결 과정과 설계 의도를 [기술 블로그](https://joon0112.tistory.com)에 기록합니다.

- 🏆 **B-side** — SOPT 38기 솝커톤 Web 부문 대상 · Server
- 🚀 **Nearby** — SOPT 38기 AppJam · Server
- 🤝 **SOPT 38기 Server YB · 39기 Server OB**

---

## 🚀 Featured Projects

| 프로젝트 | 역할 | 서비스 / 결과 | 기간 |
| --- | :---: | --- | :---: |
| **[Nearby](https://github.com/TEAM-Nearby/nearby-server)** | Server | 혼자 여행자를 위한 실시간 식사 동행 서비스 · [병합 PR 43건](https://github.com/TEAM-Nearby/nearby-server/pulls?q=is%3Apr+author%3Aguswnsj0112+is%3Amerged) | \`2026.06 ~\` |
| **[B-side](https://www.sopt.org/project/287)** | Server | 사소한 성취를 나누는 익명 커뮤니티 · **Web 부문 대상** 🏆 | \`2026.05\` |
| **[이:음](https://ieum.vercel.app/)** | Frontend | 감정을 나누는 랜덤 익명 편지 서비스 · DEPTH | \`2023\` |

---

## 🛠 Tech Stack

### Backend

<p>
  <img src="https://img.shields.io/badge/Java-%23ED8B00.svg?style=flat-square&logo=openjdk&logoColor=white" alt="Java"/>
  <img src="https://img.shields.io/badge/Spring%20Boot-%236DB33F.svg?style=flat-square&logo=springboot&logoColor=white" alt="Spring Boot"/>
  <img src="https://img.shields.io/badge/Spring%20Security-6DB33F.svg?style=flat-square&logo=springsecurity&logoColor=white" alt="Spring Security"/>
</p>

### Database & Infrastructure

<p>
  <img src="https://img.shields.io/badge/MySQL-4479A1.svg?style=flat-square&logo=mysql&logoColor=white" alt="MySQL"/>
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=flat-square&logo=postgresql&logoColor=white" alt="PostgreSQL"/>
  <img src="https://img.shields.io/badge/Docker-2496ED.svg?style=flat-square&logo=docker&logoColor=white" alt="Docker"/>
</p>

### Additional Experience

<p>
  <img src="https://img.shields.io/badge/Python-3670A0?style=flat-square&logo=python&logoColor=ffdd54" alt="Python"/>
  <img src="https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/React-%2361DAFB.svg?style=flat-square&logo=react&logoColor=black" alt="React"/>
  <img src="https://img.shields.io/badge/HTML5-%23E34F26.svg?style=flat-square&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-%231572B6.svg?style=flat-square&logo=css3&logoColor=white" alt="CSS3"/>
</p>

---

## 🧭 Experience & Activities

| 기간 | 활동 |
| :---: | --- |
| \`2026.09 ~\` | **SOPT 39기 Server OB** |
| \`2026.08\` | **2026 차세대 반도체 컨소시엄 AI 활용 테크니컬 라이팅 실무 교육 수료** |
| \`2026.03 ~ 2026.07\` | **SOPT 38기 Server YB** |
| \`2026.02 ~\` | **명지대학교 멋쟁이사자처럼 백엔드 운영진 · 총무** |
| \`2023.03 ~ 2024.01\` | **명지대학교 교내 IT 프로젝트 동아리 DEPTH** · Frontend |

## 🪪 Certification

- **SQLD** · 한국데이터산업진흥원 · \`2024.11.17\`

---

## ✍️ Recent Writing

[기술 블로그 전체 글 보기 →](https://joon0112.tistory.com)

`;

// rss-parser 생성
const parser = new Parser({
    headers: {
        Accept: 'application/rss+xml, application/xml, text/xml; q=0.1',
    }});

(async () => {

    // 피드 목록
    const feed = await parser.parseURL('https://joon0112.tistory.com/rss'); // 본인의 블로그 주소

    text += `<ul>`;

    // 최신 3개의 글의 제목과 링크를 가져온 후 text에 추가
    for (let i = 0; i < 3; i++) {
        const {title, link} = feed.items[i];
        console.log(`${i + 1}번째 게시물`);
        console.log(`추가될 제목: ${title}`);
        console.log(`추가될 링크: ${link}`);
        text += `<li><a href='${link}' target='_blank'>${title}</a></li>`;
    }

    text += `</ul>

---

## 📊 GitHub Activity

<a href="https://github.com/guswnsj0112">
  <img height="180em" src="https://github-stats-extended.vercel.app/api?username=guswnsj0112&amp;show_icons=true&amp;theme=transparent&amp;hide_border=true&amp;locale=en&amp;cache_seconds=21600&amp;custom_title=Hyeonjun%27s%20GitHub%20Stats" alt="Hyeonjun's GitHub stats" />
</a>
<a href="https://github.com/guswnsj0112">
  <img height="180em" src="https://github-stats-extended.vercel.app/api/top-langs/?username=guswnsj0112&amp;layout=compact&amp;theme=transparent&amp;hide_border=true&amp;locale=en&amp;cache_seconds=21600&amp;custom_title=Most%20Used%20Languages" alt="Top Languages" />
</a>
`;

// README.md 파일 생성
writeFileSync('README.md', text, 'utf8');
console.log('업데이트 완료');
})();

