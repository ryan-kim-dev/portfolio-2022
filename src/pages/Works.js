import React from 'react';
import styled from 'styled-components';
// import SectionTitle from '../components/common/SectionTitle';
import { Container } from '../GlobalStyle';
import Row from '../components/works/Row';

const Works = () => {
  // const [projects, setProjects] = useState([
  //   // 더미데이터. 추후 파이어베이스 db 연동으로 변경예정
  //   {
  //     name: '',
  //     id: '',
  //     photoURL: '',
  //   },
  // ]);
  // console.log(setProjects);
  return (
    <Container>
      <WorksWrapper>
        {/* <SectionTitle title={'works'} projects={projects} /> */}
        <Row title="TEAM PROJECTS"></Row>
        <Row title="PERSONAL PROJECTS"></Row>
      </WorksWrapper>
    </Container>
  );
};

export default Works;

const WorksWrapper = styled.div`
  width: 100%;
  height: max-content;
  padding: 10rem;
`;
