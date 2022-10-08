import React from 'react';
import styled from 'styled-components';
import { SiNotion } from 'react-icons/si';
import { RiHome3Line } from 'react-icons/ri';
import { CgFileDocument } from 'react-icons/cg';
import { TbBrandGithub } from 'react-icons/tb';

function ContactLinks() {
  return (
    <Container>
      <LinkBtn>
        <A href="https://github.com/ryan-kim-dev" target="_blank">
          <TbBrandGithub />
        </A>
        github
      </LinkBtn>
      <LinkBtn>
        <A href="https://https://ryan-kim-dev.tistory.com/" target="_blank">
          <RiHome3Line />
        </A>
        blog
      </LinkBtn>
      <LinkBtn>
        <A
          href="https://handsome-parcel-51e.notion.site/275ad8a7ba9540a2bfea2d1597c8b563"
          target="_blank"
        >
          <SiNotion />
        </A>
        notion
      </LinkBtn>
      <LinkBtn>
        <A href="#" target="_blank">
          <CgFileDocument />
        </A>
        resume
      </LinkBtn>
    </Container>
  );
}

export default ContactLinks;

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
