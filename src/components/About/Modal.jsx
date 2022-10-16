import React, { useState } from 'react';
import * as S from './ModalStyles';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';
import { MdClose } from 'react-icons/md';

import review1 from '../../assets/review1.png';
import review2 from '../../assets/review2.png';
import review3 from '../../assets/review3.png';
import review4 from '../../assets/review4.png';
import review5 from '../../assets/review5.png';
import review6 from '../../assets/review6.png';
import review7 from '../../assets/review7.png';
import review8 from '../../assets/review8.png';
import review9 from '../../assets/review9.png';
import review10 from '../../assets/review10.png';
import review11 from '../../assets/review11.png';
import review12 from '../../assets/review12.png';
import review13 from '../../assets/review13.png';
import review14 from '../../assets/review14.png';
import review15 from '../../assets/review15.png';
import review16 from '../../assets/review16.png';
import review17 from '../../assets/review17.png';
import review18 from '../../assets/review18.png';
import review19 from '../../assets/review19.png';
import review20 from '../../assets/review20.png';

function Modal({ handleOpenModal }) {
  const reviews = [
    review1,
    review2,
    review3,
    review4,
    review5,
    review6,
    review7,
    review8,
    review9,
    review10,
    review11,
    review12,
    review13,
    review14,
    review15,
    review16,
    review17,
    review18,
    review19,
    review20,
  ];
  const [page, setPage] = useState(0);

  return (
    <S.ReviewLayout>
      <S.ReviewBackDrop>
        <S.ReviewCloseBtn className="reverse" onClick={handleOpenModal}>
          <MdClose />
        </S.ReviewCloseBtn>
        <S.ReviewContent>
          <S.ReviewChangeBtn
            className="reverse"
            type="button"
            onClick={() => setPage(prev => prev - 1)}
            disabled={page === 0}
          >
            <IoIosArrowDropleftCircle />
          </S.ReviewChangeBtn>
          <img src={reviews[page]} alt="페어리뷰 1" id="1" />
          <S.ReviewChangeBtn
            className="reverse"
            type="button"
            onClick={() => setPage(prev => prev + 1)}
            disabled={page === reviews.length - 1}
          >
            <IoIosArrowDroprightCircle />
          </S.ReviewChangeBtn>
        </S.ReviewContent>
      </S.ReviewBackDrop>
    </S.ReviewLayout>
  );
}

export default Modal;
