import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';
const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ScrollTopBtnWrapper>
      {showScrollTopButton && (
        <FontAwesomeIcon
          icon={faArrowAltCircleUp}
          onClick={scrollTop}
          className="scroll-btn"
        />
      )}
    </ScrollTopBtnWrapper>
  );
  // && 단축평가로 스크롤이 하단으로 이동한 경우에만 버튼 리턴
};
export default ScrollToTop;

const ScrollTopBtnWrapper = styled.i`
  position: fixed;
  bottom: 15px;
  right: 20px;
  .scroll-btn {
    height: 30px;
    width: 30px;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  :hover {
    color: salmon;
  }
  @media all and (min-width: 768px) and (max-width: 1023px) {
  }
  /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
  }
  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    display: none;
  }
`;
