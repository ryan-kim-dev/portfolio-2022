import React from 'react';
import styled from 'styled-components';
// import WorkModal from './WorkModal';

function Row({ title, isLargeRow, projects }) {
  return (
    <Section>
      <ProjectTitle>{title}</ProjectTitle>
      <SliderArea className="slider">
        <Slider className="slider__arrow-left">
          <Arrow className="arrow">{'<'}</Arrow>
        </Slider>

        {/* {projects[0].name !== '' ? (
          <div className="row__projects">
            {projects.map(project => (
              <img
                key={project.id}
                className={`row__poster ${isLargeRow && 'row__enlarged'}`}
                src={project.photoURL}
                alt={project.name}
              />
            ))}
          </div>
        ) : (
          <div>No Data</div>
        )} */}
        <Projects>
          <Project></Project>
        </Projects>
        <Slider className="slider__arrow-right">
          <Arrow className="arrow">{'>'}</Arrow>
        </Slider>
      </SliderArea>
    </Section>
  );
}

export default Row;

const Section = styled.section``;

const ProjectTitle = styled.h2`
  padding-left: 20px;
`;

const SliderArea = styled.div`
  position: relative;
  &:hover {
    transition: 400ms all ease-in-out;
    visibility: visible;
  }
`;

const Slider = styled.div`
  padding: 20px 0;
  background-clip: content-box;
  box-sizing: border-box;
  transition: 400ms all ease-in-out;
  cursor: pointer;
  width: 80px;
  z-index: 1000;
  position: absolute;
  height: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;

  &:hover {
    background: rgba(20, 20, 20, 0.5);
    transition: 400ms all ease-in-out;
  }

  .slider__arrow-left {
    left: 0;
  }
  .slider__arrow-right {
    right: 0;
  }
`;

const Arrow = styled.span`
  transition: 400ms all ease-in-out;

  &:hover {
    transition: 400ms all ease-in-out;
    transform: scale(1.5);
  }
`;

const Projects = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px 0 20px 20px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Project = styled.div`
  object-fit: contain;
  width: 100%;
  max-height: 144px;
  margin-right: 10px;
  transition: transform 450ms;
  border-radius: 4px;

  &:hover {
    transform: scale(1.08);
  }

  .row__enLarged {
    max-height: 320px;
  }
`;
