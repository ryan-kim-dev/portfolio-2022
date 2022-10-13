import React from 'react';
import * as S from './ProjectStyles';
import DetailLinks from './DetailLinks';

function Project({
  cover,
  title,
  description,
  role,
  deploy,
  youtube,
  github,
  notion,
}) {
  return (
    <div>
      <S.ProjectArticle>
        <S.CoverWrapper>
          <S.ProjectTitle>{title}</S.ProjectTitle>
          {youtube === '' ? (
            <S.ProjectCover>
              <S.CoverImg src={cover} />
            </S.ProjectCover>
          ) : (
            <S.YoutubeIframe
              src={youtube}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          )}
          <DetailLinks
            deploy={deploy}
            youtube={youtube}
            github={github}
            notion={notion}
          />
        </S.CoverWrapper>
        <S.DescWrapper>
          <S.Heading>설명</S.Heading>
          <S.DescText>{description}</S.DescText>
          <S.Heading>담당 작업</S.Heading>
          <S.DescText>{role}</S.DescText>
        </S.DescWrapper>
      </S.ProjectArticle>
    </div>
  );
}

export default Project;
