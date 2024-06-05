import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line
import illustration from "images/login-illustration.svg";
import logo from "images/logo.svg";
import googleIconImageSrc from "images/google-icon.png";
import twitterIconImageSrc from "images/twitter-icon.png";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";
import loginIllustration from "../images/loginIllustration.svg"
import check from "../images/logincheck.svg"
const Container = tw(ContainerBase)`min-h-screen bg-primary-900 text-white font-medium flex justify-center `;
const Content = tw.div` bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-6/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl pb-8 font-semibold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const SocialButtonsContainer = tw.div`flex flex-col items-center`;
const SocialButton = styled.a`
  ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
  .iconContainer {
    ${tw`bg-white p-2 rounded-full`}
  }
  .icon {
    ${tw`w-4`}
  }
  .text {
    ${tw`ml-4`}
  }
`;

const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-black text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
export const PrimaryButton = tw.button`
w-full mb-2 sm:mb-12 mt-8 md:mt-6
   font-semibold py-2 bg-[#0182FF] text-black 
    items-center
  rounded my-4 text-white
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${props => `background-image: url("${props.imageSrc}");`}
  ${tw`  w-full  bg-contain bg-center bg-no-repeat`}
`;

export default ({
  logoLinkUrl = "#",
  illustrationImageSrc = illustration,
  headingText = "Sign In To Treact",
  socialButtons = [
    {
      iconImageSrc: googleIconImageSrc,
      text: "Sign In With Google",
      url: "https://google.com"
    },
    {
      iconImageSrc: twitterIconImageSrc,
      text: "Sign In With Twitter",
      url: "https://twitter.com"
    }
  ],
  submitButtonText = "Login",
  SubmitButtonIcon = LoginIcon,
  forgotPasswordUrl = "#",
  signupUrl = "#",

}) => (
  <AnimationRevealPage>
    <Container>
      <Content>
        <MainContainer tw="justify-self-start">
          <LogoLink href={logoLinkUrl}>
            <LogoImage src={logo} />
          </LogoLink>
          <MainContent >
            <Heading >Login</Heading>
            <p>Welcome back, Please enter your details</p>
            <FormContainer>
             
              <Form>
                <p>Email:</p>
                <Input tw="mb-8" type="email" placeholder="Enter Your Email" />
                <p>Password:</p>
                <Input type="password" placeholder="Enter Your Password" />

                <button tw=" w-full mb-2 sm:mb-12 mt-8 md:mt-6
   font-semibold py-2 bg-[#0182FF] text-black 
    items-center
  rounded my-4 text-white"  type="submit">
                 
                  <span className="text">{submitButtonText}</span>
                </button>
              </Form>
              <p tw="mt-6 text-xs text-gray-600 text-center">
                <a href={forgotPasswordUrl} tw="border-b border-gray-500 border-dotted">
                  Forgot Password ?
                </a>
              </p>
              <p tw="mt-8 text-sm text-gray-600 text-center">
                Dont have an account?{" "}
                <a href={signupUrl} tw="border-b border-gray-500 border-dotted">
                  Sign Up
                </a>
              </p>
            </FormContainer>
          </MainContent>
        </MainContainer>
        <div tw="hidden lg:flex">
          <img src={loginIllustration} />
        </div>
      </Content>
    </Container>
  </AnimationRevealPage>
);
