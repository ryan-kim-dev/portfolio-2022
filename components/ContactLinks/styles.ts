import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  column-gap: 2rem;
  padding: 10px 0;
`;

export const LinkBtn = styled.div`
  line-height: 1.5;
  font-family: 'Oswald', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
    /* transition: 0.25s; */
  }
`;

export const A = styled.a`
  color: inherit;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.25s;

  :hover {
    color: #374999;
    scale: 2;
  }
`;
