# my-portfolio-app

[배포 링크](https://my-portfolio-app-phi.vercel.app/)

## 소개
자기소개와 포트폴리오를 담은 웹사이트입니다.

## Update Logs
[작업기록](https://handsome-parcel-51e.notion.site/c231e8ed2c1e4a498facc655817bd159)

### Lighthouse performance 점수 변화

- 헤로쿠 → 버셀 배포 플랫폼 변경:
    - 데스크탑: 26점 → 34점
    - 모바일: 20점대 ( 변동없음 )
- 3d 모델링 React-Spline(네트워크 리소스 사용) → Three.js 직접 사용 으로 변경
    - 데스크탑: 38점 → 47점
    - 모바일: 2~30점 초반 ( 유의미한 변화 없음 )
- App.tsx 불필요한 지연로딩 (Suspense, React.Lazy) 제거
    - 데스크탑: 47점 → 84점
    - 모바일: 32점 ( 변화 없음 )
- 불필요한 중복 컴포넌트 제거, atoms/modules 정의 및 재사용(진행중)
- Firebase 사용 코드 리팩토링(예정)
- 상태관리 라이브러리 변경(예정)
