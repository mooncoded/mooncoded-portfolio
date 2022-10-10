import GlobalStyle from "../styles/global";
import "../styles/dracula.css";
import Header from "../components/Header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import nookies from "nookies";
import CustomCursor from "../components/CustomCursor";
import styled from "styled-components";
import * as THREE from "three";

import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
  BrightnessContrast,
} from "@react-three/postprocessing";
import { Canvas } from "@react-three/fiber";
import Scene from "../components/Scene";
import { OrbitControls } from "@react-three/drei";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState(light);

  useEffect(() => {
    const { theme } = nookies.get("theme");

    if (theme) {
      nookies.set(
        {},
        "theme",
        JSON.stringify(theme === `"dark"` ? "light" : "dark")
      );
    } else {
      nookies.set(
        { maxAge: 30 * 24 * 60 * 60 },
        "theme",
        JSON.stringify("dark")
      );
    }

    setTheme(theme === `"dark"` ? light : dark);
  }, theme);

  const toggleTheme = () => {
    const { theme } = nookies.get("theme");

    if (theme) {
      nookies.set(
        {},
        "theme",
        JSON.stringify(theme === `"dark"` ? "light" : "dark")
      );
    } else {
      nookies.set(
        { maxAge: 30 * 24 * 60 * 60 },
        "theme",
        JSON.stringify("dark")
      );
    }

    setTheme(theme === `"dark"` ? light : dark);
  };

  useEffect(() => {
    let timer;

    const handleStart = () => {
      timer = setTimeout(() => {
        setLoading(true);
      }, 300);
    };

    const handleComplete = () => {
      if (timer) {
        clearTimeout(timer);
      }

      setTimeout(() => {
        if (loading) {
          setLoading(false);
        }
      }, 1000);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);

      if (timer) {
        clearTimeout(timer);
      }

      setTimeout(() => {
        if (loading) {
          setLoading(false);
        }
      }, 1000);
    };
  });

  return (
    <ThemeProvider theme={theme}>
      {theme === dark ? (
        <>
          <CanvasContainer>
            <Canvas
              camera={{ fov: 70, position: [0, 0, 30] }}
              onCreated={({ gl, size, camera }) => {
                if (size.width < 600) {
                  camera.position.z = 45;
                }
              }}
            >
              <OrbitControls
                enableZoom={false}
                autoRotate={true}
                autoRotateSpeed={0.5}
                rotateSpeed={0.1}
              ></OrbitControls>
              <Scene />
            </Canvas>
          </CanvasContainer>
          <Background />
        </>
      ) : (
        <></>
      )}

      <CustomCursor />
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export const CanvasContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  visibility: visible;
  background: transparent;
  opacity: 0.2;
  z-index: -1;
`;

export const Background = styled.div`
  position: fixed;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  width: 200%;
  height: 200vh;
  background: transparent
    url("http://assets.iceable.com/img/noise-transparent.png") repeat 0 0;
  background-repeat: repeat;
  animation: noise 1s infinite;
  opacity: 2;
  visibility: visible;
  z-index: -1;

  @keyframes noise {
    0% {
      transform: translate(0, 0);
    }
    10% {
      transform: translate(-5%, -5%);
    }
    20% {
      transform: translate(-10%, 5%);
    }
    30% {
      transform: translate(5%, -10%);
    }
    40% {
      transform: translate(-5%, 15%);
    }
    50% {
      transform: translate(-10%, 5%);
    }
    60% {
      transform: translate(15%, 0);
    }
    70% {
      transform: translate(0, 10%);
    }
    80% {
      transform: translate(-15%, 0);
    }
    90% {
      transform: translate(10%, 5%);
    }
    100% {
      transform: translate(5%, 0);
    }
  }
`;

export default MyApp;
