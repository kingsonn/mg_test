import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
// import styled from "https://cdn.skypack.dev/styled-components@5.2.1";
import defaultCardImage from "images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";
import { useState } from "react";
import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";
import Logo from "../../images/logo.svg";
import Alert from "../../images/alert.svg";
import UpRocket from "../../images/upRocket.svg";
import downRocket from "../../images/downRocket.svg";
import check from "../../images/check1.svg";
import googleLogo from "../../images/googleLogo.svg";
import setupLogo from "../../images/setupLogo.svg";
import mailLogo from "../../images/mailLogo.svg";
import dot from "../../images/dot.svg";
import payred from "../../images/payred.svg";
import payblue from "../../images/payblue.svg";
import arrow from "../../images/arrow.svg";
const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-8 sm:py-20 md:pt-0 pb-4`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw.h2`w-[60%] mx-auto text-3xl md:text-4xl sm:text-5xl text-black font-semibold text-center tracking-tight`;
const Description = tw(SectionDescription)`w-full px-8 text-center mx-auto`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const Column = styled.div`
  ${tw`md:w-[50%]  `}
`;

const Card = styled.div`
  ${tw` rounded-lg text-black sm:flex-row items-center border-0 border-black sm:items-start text-center sm:text-left h-full md:mx-4  pb-2`}
  // .imageContainer {
  //   ${tw`border text-center rounded-full flex-shrink-0`}
  //   img {
  //     ${tw`w-6 h-6`}
  //   }
  // }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-0 font-light text-sm text-gray-800 leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;
export const PrimaryLink = tw.button`
  lg:mx-0 w-full mb-12
   font-semibold py-2 bg-white text-black border-2 border-black shadow-shade
   hocus:bg-font hocus:text-gray-200 
  rounded-full my-4
`;
export default ({
  cards = null,
  heading = "Amazing Features",
  subheading = "Features",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */
  const [value, setValue] = useState(10);
  const defaultCards = [
    {
      imageSrc: ShieldIconImage,
      title: "Secure",
      description:
        "We strictly only deal with vendors that provide top notch security.",
    },
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container id="pay" tw="bg-[#F4FCFF] py-4 sm:py-12">
      <ThreeColumnContainer>
        {/* {subheading && <Subheading>{subheading}</Subheading>} */}
        <Heading>{heading}</Heading>
        <Description>
          As your business grows, we grow with you. Ensure that you are able to
          scale at any time
        </Description>
        <VerticalSpacer />

        <Column>
          <Card tw="bg-[#FFF9E3]">
            <div tw="grid grid-cols-4 pt-1 px-4 sm:px-8">
              <div tw=" col-span-3 pt-8 justify-self-start">
                <p tw="text-lg sm:text-xl text-left">Genius</p>
                <span tw="font-semibold text-xl sm:text-2xl lg:text-4xl text-left">Per GSuite $5</span>
                <span tw="font-light text-sm text-[#858583]">/month</span>
              </div>

              <div tw="justify-self-end">
                <img src={payred} alt="" />
              </div>
            </div>
            <div tw="px-4 sm:px-8 justify-self-start">
              <p tw="pb-8 text-left" className="description">
                Including setup and google licence fee
              </p>

              <hr tw="h-px mb-10 bg-gray-200 border-0 dark:bg-blackLight"></hr>
            </div>

            <div tw=" pl-8">
              <div>
                <ul tw="font-medium sm:text-base text-sm">
                  <li tw="flex pb-6 items-center">
                    <img tw="pr-3" src={check}></img>
                    Auto DNS Adding{" "}
                  </li>
                  <li tw="flex pb-6 items-center">
                    <img tw="pr-3" src={check}></img>
                    Auto Domain Verification{" "}
                  </li>
                  <li tw="flex pb-6 items-center">
                    <img tw="pr-3" src={check}></img>
                    Auto User Create Per User{" "}
                  </li>
                  <li tw="flex items-center">
                    <img tw="pr-3" src={check}></img>
                    Smartlead Import With Auth 
                  </li>
                </ul>
              </div>
              <div tw="pr-8 pt-8">
                <PrimaryLink>
                  <div tw="flex items-center justify-center">
                    Book a meet <img tw="pl-1" src={arrow}></img>
                  </div>
                </PrimaryLink>
              </div>
            </div>
          </Card>
        </Column>
        <Column>
          <Card tw="bg-[#F5E6FF]">
            <div tw="grid grid-cols-4 pt-1 px-4 sm:px-8">
              <div tw=" col-span-3 pt-8 justify-self-start">
                <p tw="text-lg sm:text-xl text-left">Magician</p>
                <span tw="font-semibold text-xl sm:text-2xl lg:text-4xl text-left">Contact us</span>
              </div>

              <div tw="justify-self-end">
                <img src={payblue} alt="" />
              </div>
            </div>
            <div tw=" px-4 sm:px-8 justify-self-start">
              <p tw="pb-8 text-left" className="description">
                Need a Genius who can setup 1000+ users in few hours?
              </p>

              <hr tw="h-px mb-10 bg-gray-200 border-0 dark:bg-blackLight"></hr>
            </div>

            <div tw=" pl-8">
              <div>
                <ul tw="font-medium sm:text-base text-sm">
                  <li tw="flex pb-6  items-center">
                    <img tw="pr-3" src={check}></img>
                    Bulk Discount
                  </li>
                  <li tw="flex pb-6 items-center">
                    <img tw="pr-3" src={check}></img>
                    Within 24 Hous Setup
                  </li>
                  <li tw="flex pb-6 items-center">
                    <img tw="pr-3" src={check}></img>
                    Auth Importing
                  </li>
                  <li tw="flex items-center">
                    <img tw="pr-3" src={check}></img>
                    Dedicated Genius Manager
                  </li>
                </ul>
              </div>
              <div tw="pr-8 pt-8">
                <PrimaryLink>
                  <div tw="flex items-center justify-center">
                    Book a meet <img tw="pl-1" src={arrow}></img>
                  </div>
                </PrimaryLink>
              </div>
            </div>
          </Card>
        </Column>
      </ThreeColumnContainer>
    </Container>
  );
};
