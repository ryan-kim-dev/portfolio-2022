import * as S from './Styles';
import Project from './Project';
import { personal, team } from '../../data/projects';

function Works() {
  return (
    <S.WorksLayout>
      <S.WorksContainer>
        <S.ProjectSection>
          <S.SubTitle>PERSONAL PROJECTS</S.SubTitle>
          {personal.map((project) => {
            return (
              <Project
                key={project.id}
                cover={project.coverURL}
                title={project.title}
                description={project.description}
                role={project.role}
                deploy={project.deployURL}
                youtube={project.youtubeURL}
                github={project.githubURL}
                notion={project.notionURL}
              />
            );
          })}
        </S.ProjectSection>
        <S.ProjectSection>
          <S.SubTitle>TEAM PROJECTS</S.SubTitle>
          {team.map((project) => {
            return (
              <Project
                key={project.id}
                cover={project.coverURL}
                title={project.title}
                description={project.description}
                role={project.role}
                deploy={project.deployURL}
                youtube={project.youtubeURL}
                github={project.githubURL}
                notion={project.notionURL}
              />
            );
          })}
        </S.ProjectSection>
      </S.WorksContainer>
    </S.WorksLayout>
  );
}

export default Works;
