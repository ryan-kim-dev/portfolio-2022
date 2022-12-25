import React from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
import * as S from './RefStyles';

type ReferenceProps = {
  isOpen: boolean;
  handleOpenModal: () => void;
};

function Reference({ isOpen, handleOpenModal }: ReferenceProps) {
  const navigate = useNavigate();

  return (
    <S.RefLayout>
      {!isOpen && (
        <S.RefCheckBtn type="button" onClick={handleOpenModal}>
          페어 리뷰
        </S.RefCheckBtn>
      )}
      {isOpen ? <Modal handleOpenModal={handleOpenModal} /> : null}
      {!isOpen && (
        <S.RefCheckBtn type="button" onClick={() => navigate('/testimonials')}>
          추천사 확인
        </S.RefCheckBtn>
      )}
    </S.RefLayout>
  );
}

export default Reference;
