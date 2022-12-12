import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

type ToggleThemeProps = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  switchTheme: () => void;
};

function ToggleTheme({ theme, setTheme, switchTheme }: ToggleThemeProps) {
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    // TODO : isOn의 상태를 변경하는 메소드를 구현합니다.
    setisOn(!isOn);
    const theme = isOn ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
    return switchTheme();
  };

  return (
    <>
      <ToggleContainer onClick={toggleHandler}>
        <div
          className={`toggle-container ${
            isOn || localStorage.theme === 'dark' ? 'toggle--checked' : ''
          }`}
        />
        <div
          className={`toggle-circle ${
            isOn || localStorage.theme === 'dark' ? 'toggle--checked' : ''
          }`}
        />
      </ToggleContainer>
      <Desc className={isOn ? 'toggle-on' : 'toggle-off'}>
        <span>{isOn ? 'Toggle Switch ON' : 'Toggle Switch OFF'}</span>
      </Desc>
    </>
  );
}

export default ToggleTheme;

const ToggleContainer = styled.div`
  position: fixed;
  margin-top: 8rem;
  top: 100px;
  right: 50px;
  cursor: pointer;

  > .toggle-container {
    border: 1px solid gray;
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background: linear-gradient(to left, skyblue, blue);
    // TODO : .toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현합니다.

    &.toggle--checked {
      background: linear-gradient(to right, navy, gray);
    }
  }

  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #ffffff;
    // 추가: 트랜지션(property(필수), duration(필수), timing-function(옵셔널), delay(옵셔널))
    transition: left 0.3s;
    // TODO : .toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현합니다.
    &.toggle--checked {
      left: 27px;
    }
  }
`;

const Desc = styled.div`
  // TODO : 설명 부분의 CSS를 구현합니다.
  margin-left: 20px;

  &.toggle-on {
    color: #202020;
  }
  &.toggle-off {
    color: #ededed;
  }

  span {
    color: transparent;
  }
`;
