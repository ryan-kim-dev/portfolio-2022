import Modal from './Modal';
import * as S from './RefStyles';
import Link from 'next/link';

type ReferenceProps = {
  isOpen: boolean;
  handleOpenModal: () => void;
};

function Reference({ isOpen, handleOpenModal }: ReferenceProps) {
  return (
    <S.RefLayout>
      {!isOpen && (
        <S.RefCheckBtn type="button" onClick={handleOpenModal}>
          페어 리뷰
        </S.RefCheckBtn>
      )}
      {isOpen ? <Modal handleOpenModal={handleOpenModal} /> : null}
      {!isOpen && (
        <S.RefCheckBtn type="button">
          <Link href="/testimonials">추천사 확인</Link>
        </S.RefCheckBtn>
      )}
    </S.RefLayout>
  );
}

export default Reference;
