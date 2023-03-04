import React from "react";
import styled from "styled-components";
import Logo from "../assets/Svgs/star_white_48dp.svg";
import { motion } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  position: relative;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 10vw;
    height: auto;
  }
  h3 {
    font-family: "Kaushan Script";
    font-size: ${(props) => props.theme.fontxxl};
    @media (max-width: 48em) {
      font-size: ${(props) => props.theme.fontxl};
    }
  }
`;
const FooterComponent = styled(motion.footer)`
  width: 80vw;
  @media (max-width: 48em) {
      width: 90vw;
    }
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};
    @media (max-width: 48em) {
      justify-content: center;
    }
  }
  li {
    padding: 2rem;
    font-size: ${(props) => props.theme.fontlg};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }
    @media (max-width: 48em) {
      padding: 1rem;
      font-size: ${(props) => props.theme.fontmd};
    }
  }
`;

const Bottom = styled.div`
  padding: 0.5rem 0;
  margin: 0 4em;
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: underline;
  }
  @media (max-width: 64em) {
    flex-direction: column;
    justify-content: center;
    span {

      transform: none !important;
    }
    margin: 0 2em;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};

  }
`;
const Footer = () => {
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <Section>
      <LogoContainer>
        <img src={Logo} alt="Learn To Code" data-Scroll data-scroll-speed="2" />
        <h3 data-Scroll data-scroll-speed="-1">
          {" "}
          Learn To Code
        </h3>
      </LogoContainer>
      <FooterComponent
        initial={{ y: "-400px" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 1.5,
        }}
      >
        <ul>
          <li onClick={() => handleScroll("#home")}>Home</li>
          <li onClick={() => handleScroll(".about")}>About</li>
          <li onClick={() => handleScroll("#shop")}>Shop</li>
          <li onClick={() => handleScroll("#new-arrival")}>New Arrival</li>
          <li>
            <a href="htttp://google.com" target="_blank" rel="noreferrer">
              Look book
            </a>
          </li>
          <li>
            <a href="htttp://google.com" target="_blank" rel="noreferrer">
              reviews
            </a>
          </li>
        </ul>
        <Bottom>
          <span
            data-Scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            &copy; {new Date().getFullYear()}. All Rights Reserved
          </span>
          <span
            data-Scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
          Made with &hearts; by &nbsp; Mudit
          </span>
        </Bottom>
      </FooterComponent>
    </Section>
  );
};

export default Footer;
