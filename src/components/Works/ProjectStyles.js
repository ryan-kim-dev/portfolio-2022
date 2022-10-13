import styled from 'styled-components';
import Iframe from 'react-iframe';

export const ProjectArticle = styled.article`
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 479px) {
  }
`;

export const CoverWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const YoutubeIframe = styled(Iframe)`
  width: 100%;
  height: 550px;

  @media screen and (max-width: 479px) {
  }
`;

export const ProjectCover = styled.div`
  width: 100%;
  height: 100%;
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

export const DescWrapper = styled.div`
  width: 50%;
`;

export const Heading = styled.h4`
  margin-bottom: 5px;
`;

export const DescText = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  margin-right: 20px;
`;
