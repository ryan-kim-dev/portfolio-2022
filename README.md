# my-portfolio-app

[배포 링크](https://my-portfolio-app-phi.vercel.app/)

## 소개

자기소개와 이력, 작업한 포트폴리오 내용을 소개하는 페이지와 깃허브 소셜 로그인을 통한 추천사 작성, 수정, 삭제기능을 가진 개인 웹 사이트를 제작하였습니다.

- **작업기간:** 22.08 ~ 22.12
- **기술스택**: `React`, `Typescript`, `Firebase`, `Styled Components`, `Redux`, `Three.js`

**기능:**

- 메인페이지 자동차 게임: 이동, 시점변환, 위치 리셋 등 인터렉션 가능
- 자기소개 페이지/포트폴리오 열람
- Github 소셜 로그인을 통한 추천사 CRUD
- 이메일 전송기능

## Update Logs

[작업기록](https://handsome-parcel-51e.notion.site/c231e8ed2c1e4a498facc655817bd159)

### Lighthouse performance 점수 변화

#### prototype

- 헤로쿠 → 버셀 배포 플랫폼 변경:
  - 데스크탑: 26점 → 34점
  - 모바일: 20점대 ( 변동없음 )
- 3d 모델링 React-Spline(네트워크 리소스 사용) → Three.js 직접 사용 으로 변경
  - 데스크탑: 38점 → 47점
  - 모바일: 2~30점 초반 ( 유의미한 변화 없음 )
- App.tsx 불필요한 지연로딩 (Suspense, React.Lazy) 제거
  - 데스크탑: 47점 → 84점
  - 모바일: 32점 ( 변화 없음 )

#### v1.0

- 메인페이지에 키보드로 조작 가능한 자동차 게임 구현 추가
  - Three.js 라이브러리: `@react-three/fiber`,`@react-three/drei`
  - 게임 물리: `@react-three/cannon`
- 하나의 페이지에서 주제별로 라우팅하도록 전체 레이아웃 구조 변경
  - 주/야간 테마 변경 로직 제거
  - ref값으로 해당 섹션으로 스크롤 이동 기능 제거
  - import React 문 전체 제거
  - 미사용 컴포넌트, 파일, 중복코드 일부
