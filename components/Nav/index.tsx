import { useNavigate } from 'react-router-dom';
import * as S from './styles';

function Nav() {
  const navigate = useNavigate();
  return (
    <S.NavContainer>
      <S.NavLists className="reverse">
        <S.NavItem onClick={() => navigate('/')}>Home</S.NavItem>
        <S.NavItem onClick={() => navigate('/about')}>About</S.NavItem>
        <S.NavItem onClick={() => navigate('/works')}>Works</S.NavItem>
        <S.NavItem onClick={() => navigate('/testimonials')}>
          Testimonials
        </S.NavItem>
        <S.NavItem onClick={() => navigate('/contact')}>Contact</S.NavItem>
      </S.NavLists>
    </S.NavContainer>
  );
}

export default Nav;
