import * as S from './styles';
import Link from 'next/link';

function Nav() {
  return (
    <S.NavContainer>
      <S.NavLists className="reverse">
        <S.NavItem>
          <Link href="/">Home</Link>
        </S.NavItem>
        <S.NavItem>
          <Link href="/about">About</Link>
        </S.NavItem>
        <S.NavItem>
          <Link href="/works">Works</Link>
        </S.NavItem>
        <S.NavItem>
          <Link href="/testimonials">Testimonials</Link>
        </S.NavItem>
        <S.NavItem>
          <Link href="/contact">Contact</Link>
        </S.NavItem>
      </S.NavLists>
    </S.NavContainer>
  );
}

export default Nav;
