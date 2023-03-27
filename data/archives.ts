import GithubLogo from '../public/logos/ghlogo.png';
import NotionLogo from '../public/logos/notionlogo.png';
import TistoryLogo from '../public/logos/tilogo.png';

export const archives = [
  {
    id: 1,
    link: 'https://github.com/ryan-kim-dev',
    logo: GithubLogo,
    title: '깃허브',
    description: [
      '학습한 내용과 진행한 프로젝트의 소스코드를 저장합니다.',
      '단순한 잔디심기가 아닌 컨벤션을 준수하고 작업단위를 설명할 수 있는 커밋로그를 남기고자 노력합니다.',
    ],
  },
  {
    id: 2,
    link: 'https://fe-ryan-kim.notion.site/275ad8a7ba9540a2bfea2d1597c8b563',
    logo: NotionLogo,
    title: '노션',
    description: [
      '모든 학습내용과 진행한 프로젝트 작업기록을 리스트업합니다.',
      '기술블로그 포스팅 전 글을 검수하고 블로그 글의 백업본 역할을 겸합니다.',
    ],
  },
  {
    id: 3,
    link: 'https://ryan-kim-dev.tistory.com/',
    logo: TistoryLogo,
    title: '블로그',
    description: [
      '개발공부를 처음 시작한 때 부터 부트캠프 기간의 기록과 현재의 진행상황을 Til 위주로 작성해온 블로그입니다.',
      '부트캠프 기간의 학습내용과 프로젝트 작업일지를 상세히 기록하였습니다.',
    ],
  },
];
