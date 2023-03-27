import * as S from './ProjectStyles';
import DetailLinks from './DetailLinks';
import { ProjectProps } from '../../src/types';

function Project({
  cover,
  title,
  description,
  role,
  deploy,
  youtube,
  github,
  notion,
}: ProjectProps) {
  return (
    <div>
      <S.ProjectArticle>
        <S.CoverWrapper>
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
