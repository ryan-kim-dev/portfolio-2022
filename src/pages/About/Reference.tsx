import React from 'react';
import Modal from './Modal';
import * as S from './RefStyles';

type ReferenceProps = {
  isOpen: boolean;
  handleOpenModal: () => void;
  scrollToSection: (elementRef: {
    current: {
      offsetTop: number | undefined;
    };
  }) => void;
  testimonials: { current: { offsetTop: number | undefined } };
};

function Reference({
  isOpen,
  handleOpenModal,
  scrollToSection,
  testimonials,
}: ReferenceProps) {
  return (
    <S.RefLayout>
      {!isOpen && (
        <S.RefCheckBtn type="button" onClick={handleOpenModal}>
          페어 리뷰
        </S.RefCheckBtn>
      )}
      {isOpen ? <Modal handleOpenModal={handleOpenModal} /> : null}
      {!isOpen && (
        <S.RefCheckBtn
          type="button"
          onClick={() => scrollToSection(testimonials)}
        >
          추천사 확인
        </S.RefCheckBtn>
      )}
    </S.RefLayout>
  );
}

export default Reference;
