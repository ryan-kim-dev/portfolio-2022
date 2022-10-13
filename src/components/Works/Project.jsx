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
        <S.Left>
          <S.ProjectTitle>{title}</S.ProjectTitle>
          <S.ProjectCover>
            <S.CoverImg src={cover} />
          </S.ProjectCover>
          <DetailLinks
            deploy={deploy}
            youtube={youtube}
            github={github}
            notion={notion}
          />
        </S.Left>
        <S.Right>
          <S.Heading>설명</S.Heading>
          <S.DescText>{description}</S.DescText>
          <S.Heading>담당 작업</S.Heading>
          <S.DescText>{role}</S.DescText>
        </S.Right>
      </S.ProjectArticle>
    </div>
  );
}

export default Project;
