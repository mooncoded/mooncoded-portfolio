import React from "react";
import background from "/public/static/assets/background.gif";
import {
  Container,
  Title,
  SubTitle,
  Letter,
  Wrapper,
  About,
  Background,
  ViewButton,
  ContactButton,
  HeroFooter,
  Main
} from "./styles";
import { Fade, Flip, Zoom } from "react-reveal";
import { BsEye, BsChat } from "../../styles/Icons";
import { useRouter } from "next/router";

function Hero() {
  const router = useRouter();

  return (
    <Container>
      <Background image={background} />
      <Wrapper>
        <Main>
          <Fade top>
            <Title>
              <Letter className="stretch">M</Letter>
              <Letter>O</Letter>
              <Letter>O</Letter>
              <Letter className="stretch">N</Letter>
            </Title>
          </Fade>
          <Fade top delay={100}>
            <SubTitle>
              <Letter>C</Letter>
              <Letter>O</Letter>
              <Letter>D</Letter>
              <Letter className="stretch">E</Letter>
              <Letter className="stretch">D</Letter>
            </SubTitle>
          </Fade>
          <Flip top delay={600}>
            <About>
              Front-end web <span>developer</span>, UI/UX Designer & artist ✍️
            </About>
          </Flip>
        </Main>
        <HeroFooter>
          <Fade left delay={800}>
            <ViewButton onClick={() => router.push("/about")}>
              <BsEye /> see more about me
            </ViewButton>
          </Fade>
          <Fade right delay={800}>
            <ContactButton onClick={() => router.push("/contact")}>
              <BsChat /> talk with me
            </ContactButton>
          </Fade>
        </HeroFooter>
      </Wrapper>
    </Container>
  );
}

export default Hero;
