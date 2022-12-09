import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
     margin: 0;
     padding: 0px;
     box-sizing: border-box;

     a {
      text-decoration: none;
      color: #000000;
     }
 }
body {
  /* width: 100vw;
  height: 100vh; */
  font-family: 'Noto Sans KR', sans-serif;
  display:flex;
  flex-direction: column;
  overflow-x: hidden;

  #light {
    background-color: #ededed;
    color: #414141;
  }
  #dark {
    background-color: #202020;
    color: #e5e5e5;
  }

  #light .text {
    color: #414141;
  }

  #light .reverse {
    color: #000000;
  }

  #dark .reverse {
    color: #e5e5e5;
  }
}
`;

export default GlobalStyle;

type LayoutProps = {
  about?: string;
  max?: string;
  children?: React.ReactNode;
  ref?: React.MutableRefObject<HTMLDivElement>;
};

export const Layout = styled.main<LayoutProps>`
  width: 100%;
  height: ${({ max }) => (max ? 'max-content' : '100vh')};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  /* max-width: 1330px; */
  margin: 30px 0;
  @media screen and (max-width: 479px) {
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: max-content;
  max-width: 1330px;

  color: black;
  padding: 0 160px;
  @media screen and (max-width: 479px) {
    padding: 0;
  }
`;

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vh;
  height: 100vw;
`;

// * 모달 팝업 뒷배경
export const ModalBackdrop = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBtn = styled.button`
  background-color: #4000c7;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

export const ModalView = styled.div`
  position: relative;
  width: max-content;
  height: max-content;
  background-color: #fff;
  text-align: center;
  border-radius: 7px;
  font-size: 14px;

  > .closingBtn {
    position: absolute; // 추가
    top: 1px; // 추가
    right: 1px; // 추가
    border: none; // 추가
    background-color: transparent; // 추가
    cursor: pointer; // 추가
  }
`;
