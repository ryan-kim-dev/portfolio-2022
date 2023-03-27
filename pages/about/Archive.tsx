import * as S from './ArchStyles';
import { archives } from '../../data/archives';

function Archive() {
  return (
    <S.Wrapper>
      {archives.map((el) => {
        return (
          <a
            key={Math.random()}
            href={el.link}
            target="_blank"
            rel="noreferrer"
          >
            <S.IconBox key={el.id}>
              <S.IconLogoBox>
                <S.IconImg src={el.logo} alt="" />
                <S.IconTitle>{el.title}</S.IconTitle>
              </S.IconLogoBox>
              <S.IconDescBox>
                <ul>
                  {el.description.map((el) => {
                    return <li key={Math.random()}>{el}</li>;
                  })}
                </ul>
              </S.IconDescBox>
            </S.IconBox>
          </a>
        );
      })}
    </S.Wrapper>
  );
}

export default Archive;
