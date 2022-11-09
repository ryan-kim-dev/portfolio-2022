import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 25px;

  @media screen and (max-width: 479px) {
    flex-direction: column;
    row-gap: 25px;
    column-gap: 0;
  }
`;

export const IconBox = styled.div`
  width: 280px;
  height: 380px;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);

  @media screen and (max-width: 479px) {
    width: 100%;
  }
`;

export const IconLogoBox = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const IconImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  background-color: #fff;
`;

export const IconDescBox = styled.div`
  margin-left: 1.5rem;
  width: 80%;
  height: 60%;

  li {
    margin: 10px 0;
  }
`;

export const IconTitle = styled.h3``;
