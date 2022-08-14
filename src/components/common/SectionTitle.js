import React from 'react';
import styled from 'styled-components';
function SectionTitle({ title }) {
  return (
    <SectionTitleWrapper>
      <SectionTitleText>{title}</SectionTitleText>
    </SectionTitleWrapper>
  );
}

export default SectionTitle;

const SectionTitleWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionTitleText = styled.h2`
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  letter-spacing: 0.5rem;
  font-size: 5rem;
  text-transform: uppercase;
  @media (max-width: 768px) {
    transform: none;
    font-size: 2.5rem;
  }
`;
