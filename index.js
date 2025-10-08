import { writeFileSync } from 'node:fs';
import Parser from "rss-parser";

/**
 * README.MD에 작성될 페이지 텍스트
 * @type {string}
 */
let text = `# Hi there 👋  
I'm **Jang HyunJun (장현준)**, a student developer learning how ideas turn into real products.  
Currently studying **Java**, **React**, and software design fundamentals.

---

## 💻 이런 환경에 익숙해요 ✍🏼
- **개발 툴:** VS Code, GitHub, Notion  
- **언어:** Java, JavaScript  
- **프레임워크 / 라이브러리:** React, TailwindCSS  
- **협업 및 관리:** Git Flow 기반 브랜치 전략, Notion을 통한 일정/아이디어 관리  
- **작업 스타일:**  
  - 에러를 해결하며 원리를 이해하는 과정을 즐깁니다.  
  - 기능 단위로 커밋하며 코드 구조를 점진적으로 개선합니다.  
  - 작은 프로젝트라도 실제 서비스처럼 설계하고 운영하려 합니다.  

---

<p>
  <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=flat-square&logo=html5&logoColor=white"/> 
  <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=flat-square&logo=css3&logoColor=white"/> 
  <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=flat-square&logo=javascript&logoColor=%23F7DF1E"/>
  <img src= "https://img.shields.io/badge/TypeScript-black?logo=typescript&logoColor=blue"/>
  <img src="https://img.shields.io/badge/python-3670A0?style=flat-square&logo=python&logoColor=ffdd54"/> 
  <img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=flat-square&logo=openjdk&logoColor=white"/>
</p>

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
    writeFileSync('README.md', text, 'utf8', (e) => {
        console.log(e);
    })
    console.log('업데이트 완료');
})();