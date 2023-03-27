import { useState } from 'react';
import * as S from './ModalStyles';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';
import { MdClose } from 'react-icons/md';

import { reviews } from '../../data';

type ModalProps = {
  handleOpenModal: () => void;
};

function Modal({ handleOpenModal }: ModalProps) {
  const [page, setPage] = useState(0);

  return (
    <S.ReviewLayout>
      <S.ReviewCloseBtn className="reverse" onClick={handleOpenModal}>
        <MdClose />
      </S.ReviewCloseBtn>
      <S.ReviewContent>
        <S.ReviewChangeBtn
          className="reverse"
          type="button"
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 0}
        >
          <IoIosArrowDropleftCircle />
        </S.ReviewChangeBtn>
        <img src={reviews[page]} alt="페어리뷰 1" id="1" />
        <S.ReviewChangeBtn
          className="reverse"
          type="button"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page === reviews.length - 1}
        >
          <IoIosArrowDroprightCircle />
        </S.ReviewChangeBtn>
      </S.ReviewContent>
    </S.ReviewLayout>
  );
}

export default Modal;
