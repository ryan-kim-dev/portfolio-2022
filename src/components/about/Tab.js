import React, { useState } from 'react';
import styled from 'styled-components';
function Tab() {
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    {
      name: 'React',
      imgUrl: 'https://www.svgrepo.com/show/327388/logo-react.svg',
      description: `
        저 리액트 잘합니다.
        띄어쓰기도 잘된다.
      `,
    },
    {
      name: 'JS',
      imgUrl: 'https://fontawesomeicons.com/lib/svg/logo-javascript.svg',
      description: `
        자바스크립트도 잘합니다.
        pre태그 좋다.
    `,
    },
    {
      name: 'CSS',
      imgUrl: 'https://cdn.worldvectorlogo.com/logos/css-4.svg',
      description: `
        CSS도 잘합니다.
        pre태그 좋다.
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
