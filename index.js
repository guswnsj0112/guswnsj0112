import { writeFileSync } from 'node:fs';
import Parser from "rss-parser";

/**
 * README.MD에 작성될 페이지 텍스트
 * @type {string}
 */
let text = `# Hi there 👋  

![header](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=280&section=header&text=Jang%20Hyeonjun&fontSize=75&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Backend%20Developer&descAlignY=58&descSize=22)

<p align="center">
    <a href="https://myhits.vercel.app">
        <img src="https://myhits.vercel.app/api/hit/https%3A%2F%2Fgithub.com%2Fguswnsj0112%2Fguswnsj0112?color=blue&label=hits&size=small" alt="hits" />
    </a>
</p>

- I'm **Jang Hyeonjun (장현준)**, a student developer learning how ideas turn into real products.  
    - Currently studying **Java**, **Spring**, and software design fundamentals.

---

## 🚀 Activities & Experience

- **SOPT 38기 Server YB**
<code>2026.03 ~</code>

- **명지대학교 멋쟁이사자처럼 백엔드 운영진 총무**
<code>2026.02 ~</code>

- **명지대학교 교내 IT 프로젝트 동아리 DEPTH**
<code>2023.03 ~ 2024.01 · FE</code>

---

## 💻 Tech Stack & Workflow ✍🏼

### 🛠 Development Tools

<p>
  <img src="https://img.shields.io/badge/VS%20Code-007ACC.svg?style=flat-square&logo=visualstudiocode&logoColor=white"/>
  <img src="https://img.shields.io/badge/IntelliJ%20IDEA-000000.svg?style=flat-square&logo=intellijidea&logoColor=white"/>
  <img src="https://img.shields.io/badge/github-black.svg?style=flat-square&logo=github&logoColor=white"/> 
  <img src="https://img.shields.io/badge/notion-black.svg?style=flat-square&logo=notion&logoColor=white"/>
</p>

### 🧑‍💻 Languages

<p>
  <img src="https://img.shields.io/badge/python-3670A0?style=flat-square&logo=python&logoColor=ffdd54"/>
  <img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=flat-square&logo=openjdk&logoColor=white"/>
</p>

### 🌱 Frameworks / Libraries

<p>
  <img src="https://img.shields.io/badge/spring-%236DB33F.svg?style=flat-square&logo=spring&logoColor=white"/>
</p>

### 🪪 Certification

- SQLD (한국데이터산업진흥원 / 2024.11.17)

### 🤝 Collaboration & Management

- GitHub Flow 기반 브랜치 전략
- Notion을 통한 일정 및 아이디어 관리

### 🧭 Working Style

- 에러를 해결하며 원리를 이해하는 과정을 즐깁니다.
- 기능 단위로 커밋하며 코드 구조를 점진적으로 개선합니다.
- 작은 프로젝트라도 실제 서비스처럼 설계하고 운영하려 합니다.

---


## 📊 GitHub Stats

<a href="https://github.com/guswnsj0112">
  <img height="180em" src="https://github-readme-stats.vercel.app/api?username=guswnsj0112&show_icons=true&theme=transparent&hide_border=true&locale=en&cache_seconds=21600&custom_title=Hyeonjun%27s%20GitHub%20Stats" alt="Hyeonjun's GitHub stats" />
</a>
<a href="https://github.com/guswnsj0112">
  <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=guswnsj0112&layout=compact&theme=transparent&hide_border=true&locale=en&cache_seconds=21600&custom_title=Most%20Used%20Languages" alt="Top Languages" />
</a>

---

## 📕 Latest Blog Posts

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

    // 최신 10개의 글의 제목과 링크를 가져온 후 text에 추가
    for (let i = 0; i < 10; i++) {
        const {title, link} = feed.items[i];
        console.log(`${i + 1}번째 게시물`);
        console.log(`추가될 제목: ${title}`);
        console.log(`추가될 링크: ${link}`);
        text += `<li><a href='${link}' target='_blank'>${title}</a></li>`;
    }

    text += `</ul>`;

// README.md 파일 생성
writeFileSync('README.md', text, 'utf8');
console.log('업데이트 완료');
})();

