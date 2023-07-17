import React, { useState, useEffect } from "react";
import {
  Container,
  ProjectWrapper,
  AppDetails,
  Thumbnail,
  DateContainer,
  ThumbnailWrapper,
  Projects
} from "../../styles/pages/Projects";
import PageTitle from "../../components/PageTitle";
import { useRouter } from "next/router";

function projects() {
  const router = useRouter();

  return (
    <Container>
      <PageTitle
        title="projects"
        stretchedLetter="r"
        overlayTitle="Contributions | Freelances"
      />

      <Projects>
        <ProjectWrapper onClick={() => window.open("https://dribbble.com/shots/22022766-Marketplace", "_blank")}>
          <ThumbnailWrapper>
            <AppDetails>
              <DateContainer>
                <div className="line"></div>
                <span>APRIL, 2023</span>
                <div className="line"></div>
              </DateContainer>
              <h1>COINZZ</h1>
              <h2>Marketplace with integrated checkout customization.</h2>
            </AppDetails>
            <Thumbnail
              src="/static/projects/coinzz.png"
              className="thumb"
            />
          </ThumbnailWrapper>
        </ProjectWrapper>

        <ProjectWrapper onClick={() => window.open("https://n-project-pi.vercel.app", "_blank")}>
          <ThumbnailWrapper>
            <AppDetails>
              <DateContainer>
                <div className="line"></div>
                <span>MAY, 2023</span>
                <div className="line"></div>
              </DateContainer>
              <h1>N Soluções</h1>
              <h2>Site de divulgação para empresa de tecnologia.</h2>
            </AppDetails>
            <Thumbnail
              src="/static/projects/nproject.gif"
              className="thumb"
            />
          </ThumbnailWrapper>
        </ProjectWrapper>

        <ProjectWrapper onClick={() => window.open("https://www.soujunior.tech", "_blank")}>
          <ThumbnailWrapper>
            <AppDetails>
              <DateContainer>
                <div className="line"></div>
                <span>JULY, 2023</span>
                <div className="line"></div>
              </DateContainer>
              <h1>SouJunior</h1>
              <h2>Contribui para a plataforma de vagas.</h2>
            </AppDetails>
            <Thumbnail
              src="/static/projects/soujunior.jpeg"
              className="thumb"
            />
          </ThumbnailWrapper>
        </ProjectWrapper>

        <ProjectWrapper onClick={() => window.open("https://cartuchosonline.netlify.app", "_blank")}>
          <ThumbnailWrapper>
            <AppDetails>
              <DateContainer>
                <div className="line"></div>
                <span>NOVEMBER, 2022</span>
                <div className="line"></div>
              </DateContainer>
              <h1>CARTUCHOS ONLINE</h1>
              <h2>Landing page para comércio.</h2>
            </AppDetails>
            <Thumbnail
              src="/static/projects/cartuchos.jpeg"
              className="thumb"
            />
          </ThumbnailWrapper>
        </ProjectWrapper>

        <ProjectWrapper onClick={() => window.open("https://app.logzz.com.br", "_blank")}>
          <ThumbnailWrapper>
            <AppDetails>
              <DateContainer>
                <div className="line"></div>
                <span>FEBRUARY, 2023</span>
                <div className="line"></div>
              </DateContainer>
              <h1>LOGZZ</h1>
              <h2>Login Screen Design and Another Contributions.</h2>
            </AppDetails>
            <Thumbnail
              src="/static/projects/logzz.jpeg"
              className="thumb"
            />
          </ThumbnailWrapper>
        </ProjectWrapper>

        
      </Projects>
    </Container>
  );
}

export default projects;
