import styled from 'styled-components';

export const ProjectArticle = styled.article`
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);

  :hover {
  }
`;

export const Left = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProjectCover = styled.div`
  width: 80%;
  height: 80%;
  padding: 5px 5px 0 5px;
`;

export const CoverImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProjectTitle = styled.h3`
  margin: 3px;
`;

export const Right = styled.div`
  width: 60%;
`;

export const Heading = styled.h4``;

export const DescText = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  margin-right: 10px;
`;
