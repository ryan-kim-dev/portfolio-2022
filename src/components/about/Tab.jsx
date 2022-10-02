import React, { useState } from 'react';
import styled from 'styled-components';
function Tab() {
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    {
      name: 'React',
      imgUrl: 'https://www.svgrepo.com/show/327388/logo-react.svg',
      description: `
      리액트 함수 컴포넌트의 여러 훅을 사용하여,
      api 요청의 비동기 처리와 화면의 동작을 구현할 수 있습니다.
      redux toolkit을 사용한 전역 상태관리와 thunk를 사용하여
      api 요청과 응답 상태에 따른 동작을 처리 할 수 있습니다.
      `,
    },
    {
      name: 'JS',
      imgUrl: 'https://fontawesomeicons.com/lib/svg/logo-javascript.svg',
      description: `
      map, filter, reduce 메서드를 이해하고, 
      ES6 디스트럭쳐링 문법과 전개연산자를 사용하여
      서버로부터 받아온 데이터를 의도한 대로 화면에 렌더링 할 수 있습니다.
      promise에 대해 이해하고 then 체이닝 또는 try-catch 문법으로
      비동기 작업을 처리할 수 있습니다.
    `,
    },
    {
      name: 'CSS',
      imgUrl: 'https://cdn.worldvectorlogo.com/logos/css-4.svg',
      description: `
      Block 요소와 Inline 요소의 종류와 차이점, 여러 position 속성값의
      차이점을 인지하여 Flex layout을 통해 스타일링 할 수 있습니다.
    `,
    },
  ];

  const selectMenuHandler = index => {
    setCurrentTab(index);
  };
  return (
    <>
      <TabMenu>
        {menuArr.map((el, i) => (
          <li
            onClick={() => selectMenuHandler(i)}
            key={i}
            className={`${i === currentTab ? 'submenu focused' : 'submenu'}`}
          >
            {el.name}
          </li>
        ))}
      </TabMenu>
      <Desc className="text-dark">
        <Left>
          <img src={menuArr[currentTab].imgUrl} alt="stack" />
          <div>{menuArr[currentTab].name}</div>
        </Left>
        <Right>
          <pre>{menuArr[currentTab].description}</pre>
        </Right>
      </Desc>
    </>
  );
}

export default Tab;

const TabMenu = styled.ul`
  background-color: rgba(255, 255, 255, 0.2);
  color: rgba(73, 73, 73, 0.5);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  .submenu {
    cursor: pointer;
    flex-grow: 1;
    text-align: center;
  }

  .focused {
    background-color: #374999;
    color: #e5e5e5;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  }

  & div.desc {
    text-align: center;
  }
`;

const Desc = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  display: flex;
  padding: 1rem;
`;

const Left = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  row-gap: 0.5rem;

  img {
    background-color: transparent;
    width: 50px;
  }
`;

const Right = styled.div`
  width: 80%;
  height: 100%;
  font-size: 1rem;
`;
