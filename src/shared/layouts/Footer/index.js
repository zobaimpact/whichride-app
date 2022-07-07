import React, {useEffect} from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Div data-aos="flip-up" data-aos-duration="3000">
      <Header>Sign up to our beta form</Header>
      <InnerContent>
        <Paragraph>
          Sign up to our mailing list to find out more information and keep up
          to date about our activities
        </Paragraph>
      </InnerContent>
      <form>
        <FormInnerDiv>
          <div className="input_wrapper">
            <Input placeholder="Email" className="custom_form-input" />
          </div>
          <div className="button-toolbar">
            <ButtonCta>Subscribe</ButtonCta>
          </div>
        </FormInnerDiv>
      </form>
      <FooterBottom>
        <FooterBottomInner>
          <Span>© 2020 Whichride - All rights reserved.</Span>
          <Span>
            <NavLink to={"#"} className="footer_links">
              Privacy Policy
            </NavLink>
            <NavLink to={"#"} className="footer_links">
              Terms and Conditions
            </NavLink>
          </Span>
        </FooterBottomInner>
      </FooterBottom>
    </Div>
  );
};

export default Footer;

const FormInnerDiv = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  height: 100px;
  width: 450px;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

const Span = styled.span`
  font-family: "Brown", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 9px;
  display: flex;
  align-items: center;
  color: #ffffff;
  width: 20%;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    width: 100%;
    display: flex;
  }
`;

const FooterBottomInner = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  height: 100%;
  width: 80%;
  margin: auto;

  @media screen and (max-width: 600px) {
    display: flex;
    width: 100%;
  }
`;
const FooterBottom = styled.div`
  display: flex;
  align-content: center;
  background: #deb63d;
  justify-content: space-between;
  height: 100px;
  width: 100%;
  margin-top: 10%;
`;

const Input = styled.input`
  background: transparent;
  border: 1px solid #ffffff;
  outline: none;
  margin-top: 1rem;
  padding: 1rem;
  ::placeholder {
    color: #ffffff;
    padding-left: 0.8rem;
  }
`;

const ButtonCta = styled(Button)`
  background: #2c3539 !important;
  margin-top: 0.9rem;
  color: #ffffff;
  font-family: "Brown", sans-serif;
  font-size: 1rem;
`;

const Div = styled.div`
  background: #f2c94c;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.div`
  font-family: "Cera Pro", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 114.5%;
  letter-spacing: -0.01em;
  color: #232c35;
  text-align: center;
  width: 100%;
  padding-top: 5rem;
`;

const InnerContent = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
`;

const Paragraph = styled.p`
  font-family: "Cera Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: #233533;
  width: 450px;
  margin: auto;
`;
