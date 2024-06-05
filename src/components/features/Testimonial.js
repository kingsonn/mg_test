import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import TeamIllustrationSrc from "images/team-illustration-2.svg";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import benefitpic from "../../images/benefitIllustration.svg";
import circle from "../../images/circleArrow.svg";
import arrow from "../../images/arrow.svg";
import bene from "../../images/bene2.svg"
import testi from "../../images/testimonial.svg"
const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col items-center  md:flex-row  md:justify-center max-w-screen-lg mx-auto py-8 sm:py-20 md:py-0`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)` flex-shrink-0 relative`;
const TextColumn = styled(Column)((props) => [
  tw`mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);
const Card = styled.div`
  ${tw` rounded-lg text-black sm:flex-row items-center border-0 border-black sm:items-start text-center sm:text-left h-full mx-4  pb-2`}
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
const Image = styled.img((props) => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const DecoratorBlob = styled(SvgDotPattern)((props) => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
]);

const TextContent = tw.div`lg:py-0 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 text-black text-left text-3xl sm:text-4xl lg:text-5xl  md:text-left`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;
export const Solution = tw.p`
bg-white rounded-full px-6 py-2 text-sm inline-flex border-2 border-blackLight mb-2

`;

export const PrimaryButton = tw.button`
  w-[60%] md:w-[40%] mb-0 sm:mb-12 mt-8 md:mt-6
   font-semibold py-2 bg-white text-black border-2 border-black shadow-shade
   hocus:bg-font hocus:text-gray-200 
  rounded-full my-4
`;
export default ({
  subheading = "Our Expertise",
  heading = <>A better price, easy to rise</>,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  primaryButtonText = "Learn More",
  primaryButtonUrl = "https://timerse.com",
  imageSrc = TeamIllustrationSrc,
  buttonRounded = true,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  imageCss = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container tw="bg-white">
      <TwoColumn tw="pt-8 pb-20 items-center">
        <Column textOnLeft={textOnLeft}>
          <Card tw="pt-12">
            <TextContent tw="py-8">
              <Solution>Let’s say goodbye to errors✌</Solution>
              <h2 tw="font-semibold text-black text-3xl sm:text-4xl">Those who live  </h2>
              <h2 tw="font-semibold text-black text-3xl sm:text-4xl ">easy, live as a</h2>
              <h2 tw="font-semibold text-black text-3xl sm:text-4xl">result of our efforts</h2>
              <div tw="pt-4">
              Please share your reviews with us at genius@inboxautomate.com, because the more you love, <p tw="hidden lg:block"></p>the more we build products for you to love.
              </div>
              <PrimaryButton
              
              >
                <div tw="flex items-center justify-center">
                    Learn more <img tw="pl-1" src={arrow}></img>
                  </div>
              </PrimaryButton>
            </TextContent>
          </Card>
        </Column>
        <Column tw="">
          <img tw="px-4 sm:px-0" src={testi} />
        </Column>
      </TwoColumn>
      
    </Container>
  );
};
