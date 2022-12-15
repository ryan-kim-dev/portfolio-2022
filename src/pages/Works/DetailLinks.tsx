import React from 'react';
import styled from 'styled-components';
import { RiHome3Line } from 'react-icons/ri';
import { CgFileDocument } from 'react-icons/cg';
import { TbBrandGithub } from 'react-icons/tb';

type DetailLinkProps = {
  deploy: string;
  youtube?: string;
  github: string;
  notion: string;
};

function DetailLinks({ deploy, youtube, github, notion }: DetailLinkProps) {
  return (
    <Container>
      <LinkBtn>
        <A href={deploy} target="_blank">
          <RiHome3Line />
          배포 링크
        </A>
      </LinkBtn>
      <LinkBtn>
        <A href={github} target="_blank">
          <TbBrandGithub />
          깃허브
        </A>
      </LinkBtn>
      <LinkBtn>
        <A href={notion} target="_blank">
          <CgFileDocument />
          작업기록
        </A>
      </LinkBtn>
    </Container>
  );
}

export default DetailLinks;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  column-gap: 2rem;
  padding: 10px 0;
`;

const LinkBtn = styled.div`
  line-height: 1.5;
  font-family: 'Oswald', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const A = styled.a`
  color: inherit;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;
