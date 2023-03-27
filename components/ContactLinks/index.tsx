import * as S from './styles';
import { SiNotion } from 'react-icons/si';
import { RiHome3Line } from 'react-icons/ri';
import { CgFileDocument } from 'react-icons/cg';
import { TbBrandGithub } from 'react-icons/tb';

function ContactLinks() {
  return (
    <S.Container>
      <S.LinkBtn>
        <S.A href="https://github.com/ryan-kim-dev" target="_blank">
          <TbBrandGithub />
          github
        </S.A>
      </S.LinkBtn>
      <S.LinkBtn>
        <S.A href="https://ryan-kim-dev.tistory.com/" target="_blank">
          <RiHome3Line />
          blog
        </S.A>
      </S.LinkBtn>
      <S.LinkBtn>
        <S.A
          href="https://handsome-parcel-51e.notion.site/275ad8a7ba9540a2bfea2d1597c8b563"
          target="_blank"
        >
          <SiNotion />
          notion
        </S.A>
      </S.LinkBtn>
      <S.LinkBtn>
        <S.A
          href="https://handsome-parcel-51e.notion.site/_-ca4eb3c74384442bbcc39c71fe7acc85"
          target="_blank"
        >
          <CgFileDocument />
          resume
        </S.A>
      </S.LinkBtn>
    </S.Container>
  );
}

export default ContactLinks;
