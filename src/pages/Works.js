import React from 'react';
import styled from 'styled-components';
// import SectionTitle from '../components/common/SectionTitle';
import { Container } from '../GlobalStyle';
import Row from '../components/works/Row';

const Works = () => {
  return (
    <WorksLayout>
      <WorksContainer>
        <Row title={'TEAM PROJECTS'}></Row>
        <Row title={'PERSONAL PROJECTS'}></Row>
      </WorksContainer>
    </WorksLayout>
  );
};

export default Works;

const WorksLayout = styled(Container)``;

const WorksContainer = styled.div``;

// const Row = styled.div``;
