import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
     margin: 0;
     padding: 0px;
     box-sizing: border-box;
 }
body {
  /* width: 100vw;
  height: 100vh; */
  font-family: 'Noto Sans KR', sans-serif;
  display:flex;
  flex-direction: column;
  overflow-x: hidden;
  background-color: #202020;
  color: #e5e5e5;

  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
   
  }
}
`;

export default GlobalStyle;

// props로 값 받으면 해당 값 사용, 아니면 없음
// font-size clamp 설명: ex) 기본값: 6vw, 최소: 2.3rem, 최대: 4.5rem

//  /* 테블릿 세로 (해상도 768px ~ 1023px)*/
//  @media all and (min-width: 768px) and (max-width: 1023px) {
// }

// /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/
// @media all and (min-width: 480px) and (max-width: 767px) {
// }

// /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
// @media all and (max-width: 479px) {
// }

export const Layout = styled.main`
  border: 5px solid green;
  width: 100vw;
  height: ${({ about }) => (about ? 'max-content' : '100vh')};
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  /* max-width: 1330px; */
  margin: 0 auto;
  @media screen and (max-width: 479px) {
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: max-content;

  border: 3px solid blue;
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
  height: 100vh;
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

export const ModalView = styled.div.attrs(props => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  // * 모달창에서 attrs 메서드 사용하는 이유: 스크린 리더 상에서 태그 설명 등 웹 접근성
  role: 'dialog', // dialog -> 모달창임을 나타내는 role
}))`
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
