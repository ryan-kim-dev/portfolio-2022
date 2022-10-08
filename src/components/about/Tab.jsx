import React, { useState } from 'react';
import * as S from './TabStyles';

function Tab() {
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    {
      name: 'React',
      imgUrl: 'https://www.svgrepo.com/show/327388/logo-react.svg',
      description: (
        <p>
          리액트 함수 컴포넌트의 여러 훅을 사용하여, <br />
          api 요청의 비동기 처리와 화면의 동작을 구현할 수 있습니다. <br />
          redux toolkit을 사용한 전역 상태관리와
          <br />
          thunk를 사용하여 api 요청과 응답 상태에 따른 동작을 처리 할 수
          있습니다.
        </p>
      ),
    },
    {
      name: 'JS',
      imgUrl: 'https://fontawesomeicons.com/lib/svg/logo-javascript.svg',
      description: (
        <p>
          map, filter, reduce 메서드를 이해하고 ES6 디스트럭쳐링 문법과
          전개연산자를 사용하여 <br />
          서버로부터 받아온 데이터를 의도한 대로 화면에 렌더링 할 수 있습니다.{' '}
          <br />
          promise에 대해 이해하고 then 체이닝 또는 try-catch 문법으로 비동기
          작업을 처리할 수 있습니다.
        </p>
      ),
    },
    {
      name: 'CSS',
      imgUrl: 'https://cdn.worldvectorlogo.com/logos/css-4.svg',
      description: (
        <p>
          Block 요소와 Inline 요소의 종류와 차이점, 여러 position 속성값의
          차이점을 인지하여 Flex layout을 통해 스타일링 할 수 있습니다.
        </p>
      ),
    },
  ];

  const selectMenuHandler = index => {
    setCurrentTab(index);
  };
  return (
    <S.TabLayout>
      <S.TabMenu>
        {menuArr.map((el, i) => (
          <li
            onClick={() => selectMenuHandler(i)}
            key={i}
            className={`${i === currentTab ? 'submenu focused' : 'submenu'}`}
          >
            {el.name}
          </li>
        ))}
      </S.TabMenu>
      <S.Desc className="text-dark">
        <S.Left>
          <img src={menuArr[currentTab].imgUrl} alt="stack" />
          <div>{menuArr[currentTab].name}</div>
        </S.Left>
        <S.Right>
          <p>{menuArr[currentTab].description}</p>
        </S.Right>
      </S.Desc>
    </S.TabLayout>
  );
}

export default Tab;
