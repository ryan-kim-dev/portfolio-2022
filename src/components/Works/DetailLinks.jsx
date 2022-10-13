import React from 'react';
import styled from 'styled-components';
import { SiNotion } from 'react-icons/si';
import { RiHome3Line } from 'react-icons/ri';
import { CgFileDocument } from 'react-icons/cg';
import { TbBrandGithub } from 'react-icons/tb';

function DetailLinks({ deploy, youtube, github, notion }) {
  return (
    <Container>
      <LinkBtn>
        <A href={deploy} target="_blank">
          <RiHome3Line />
        </A>
        배포 링크
      </LinkBtn>
      <LinkBtn>
        <A href={github} target="_blank">
          <TbBrandGithub />
        </A>
        깃허브
      </LinkBtn>
      <LinkBtn>
        <A href={notion} target="_blank">
          <CgFileDocument />
        </A>
        작업기록
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
`;

const A = styled.a`
  color: inherit;
  text-decoration: none;
`;
