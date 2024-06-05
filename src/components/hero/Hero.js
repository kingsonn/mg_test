import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";

import Header from "../headers/light.js";

import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import DesignIllustration from "../../images/image.svg";
// import CustomersLogoStripImage from "../../images/customers-logo-strip.svg";
import Top1Customer from "../../images/top1_customer.svg"
import Top2Customer from "../../images/top2_customer.svg"
import Top3Customer from "../../images/top3_customer.svg"
import Top4Customer from "../../images/top4_customer.svg"
import Top5Customer from "../../images/top5_customer.svg"
import Top6Customer from "../../images/top6_customer.svg"
const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto pb-10 md:py-[4rem]`;
const LeftColumn = tw.div`relative lg:w-6/12 px-[3rem] text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = tw.h1`font-semibold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;
const PrimaryLink = tw.button`
  lg:mx-0
  px-8 font-semibold py-3  bg-white text-black border-2 border-black shadow-shade
  hocus:bg-font hocus:text-gray-200 
  rounded-full my-4
`;
const Solution = tw.p`
bg-white rounded-full text-xs px-3 py-3 inline-flex border-2 border-blackLight mb-2

`;
const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
  }
`;

const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

const CustomersLogoStrip = styled.div`
  ${tw`mt-12 px-4 lg:mt-0 sm:pl-[7rem] sm:pr-[5rem] sm:mt-0 pb-3 sm:pb-0`}
  p {
    ${tw`uppercase text-sm lg:text-xs tracking-wider font-bold text-black`}
  }
  div{
    ${tw` grid grid-cols-3 justify-items-center sm:grid-cols-6 sm:gap-3 sm:pb-12 items-center`}
  }
  img {
    ${tw`mt-4 sm:w-full w-[90%]  lg:pr-16 xl:pr-10`}
  }
`;

 const Hero= ({ roundedHeaderButton }) => {
  return (
    <div className="features" tw="bg-InboxAutomate  ">
      <Header roundedHeaderButton={roundedHeaderButton} />
      <hr tw="h-px my-4 bg-gray-200 border-0 dark:bg-blackLight"></hr>
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Solution tw="hidden sm:inline-flex">
            Build a scalable cold email infrastructure🧨
            </Solution>
            <Solution tw="sm:hidden">
            Scalable cold email infrastructure
            </Solution>
            <Heading>
              Focus on <span tw="text-font">sending emails </span> we do the rest
            </Heading>
            <Paragraph>
            Why did the email go to therapy? Because it had attachment issues! But in all seriousness, our reliable cold email infrastructure is designed to maximize your return on investment by ensuring your emails reach their intended recipients and generate positive responses.
            </Paragraph>
            <PrimaryLink href="/#">Get Started</PrimaryLink>

            
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img tw="min-w-0 w-full px-4 lg:px-0 xl:max-w-3xl" src={DesignIllustration} alt="Design Illustration" />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <CustomersLogoStrip>
              <p>Trusted by 100+ companies</p>
              <div>
              <img  src={Top1Customer} alt="Our Customers" />
              <img  src={Top2Customer} alt="Our Customers" />
              <img  src={Top3Customer} alt="Our Customers" />
              <img src={Top4Customer} alt="Our Customers" />
              <img  src={Top5Customer} alt="Our Customers" />
              <img src={Top6Customer} alt="Our Customers" />
              </div>
            </CustomersLogoStrip>
        <DecoratorBlob1 />
      </Container>
    </div>
  );
};
export default Hero