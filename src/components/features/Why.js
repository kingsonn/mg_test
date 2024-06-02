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
import ReactModalAdapter from "../../helpers/ReactModalAdapter.js";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

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
import arrow from "../../images/arrow.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-12 md:pb-16`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw.h2`w-[60%] text-4xl sm:text-5xl text-black font-semibold text-center tracking-tight`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`;
const Slider = styled.input.attrs({ type: "range" })`
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  height: 0.4rem;
  border-radius: 40px;
  background: ${(props) =>
    `linear-gradient(to right, #008ED4 0%, #008ED4 ${
      (props.value / 50) * 100
    }%, #fff ${(props.value / 50) * 100}%, #fff 100%);`};

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 1.2rem;
    height: 1.2rem;
    background-image: radial-gradient(circle, #f7f7fc 40%, #ff9800 45%);
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
  }

  ::-moz-range-thumb {
    width: 24px;
    height: 24px;
    -moz-appearance: none;
    background-image: radial-gradient(circle, #f7f7fc 40%, #ff9800 45%);
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
  }
`;
const StyledModal = styled(ReactModalAdapter)`
  &.mainHeroModal__overlay {
    ${tw`fixed inset-0 z-50`}
  }
  &.mainHeroModal__content {
    ${tw`xl:mx-auto m-4 sm:m-16 max-w-screen-sm absolute inset-0 flex-col justify-center items-center rounded-lg bg-gray-200 outline-none`}
  }
  .content {
    ${tw`w-full lg:p-16`}
  }
`;
const CloseModalButton = tw.button`absolute top-0 right-0 mt-8 mr-8 hocus:text-primary-500`;
const Column = styled.div`
  ${tw`md:w-[50%]  `}
`;

const Card = styled.div`
  ${tw` rounded-lg text-black sm:flex-row items-center border-0 border-black sm:items-start text-center sm:text-left h-full mx-4 pt-10 pb-2`}
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
    ${tw`mt-1 sm:mt-4 font-medium text-black leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;
const PrimaryLink = tw.button`
  lg:mx-0 w-full mb-12
   font-semibold text-lg py-2 bg-white text-black border-2 border-black shadow-shade
   hocus:bg-font hocus:text-gray-200 
  rounded-full my-4
`;
const Why= ({heading}) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */
  const [value, setValue] = useState(10);
  const [domain, setDomain] = useState(17);
  const [open, setOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);


  return (
    <Container id="why">
      <ThreeColumnContainer>
        {/* {subheading && <Subheading>{subheading}</Subheading>} */}
        <Heading>{heading}</Heading>
        {/* {description && <Description>{description}</Description>} */}
        <VerticalSpacer />
        <Column>
          <Card tw="bg-calBg">
            <div tw="flex items-center gap-1 px-8">
              <span tw="font-bold text-2xl">With InboxAutomate</span>
              <span className="imageContainer">
                <img src={Logo} alt="" />
              </span>
            </div>
            <div tw="pt-2 px-8">
              <p tw="pb-8" className="description">
                How many emails will you send a month
              </p>
              <Slider
                tw="w-full"
                value={value}
                max={50}
                min={0}
                step={10}
                onChange={(e) => {
                  setValue(e.target.value);
                  e.target.value == 0
                    ? setDomain(7)
                    : e.target.value == 10
                    ? setDomain(17)
                    : e.target.value == 20
                    ? setDomain(35)
                    : e.target.value == 30
                    ? setDomain(70)
                    : e.target.value == 40
                    ? setDomain(175)
                    : setDomain(350) & toggleModal();
                }}
              />
              <div tw=" pb-8 flex justify-between font-medium">
                <span>10k</span>
                <span tw="pl-3">25k</span>
                <span tw="pl-3">50k</span>
                <span tw="pl-3">100k</span>
                <span tw="pl-2">250k</span>
                <span>500k</span>
              </div>
              <div tw="grid grid-cols-2 items-center	">
                <span tw="font-semibold py-6">Total domains</span>
                <div tw="flex justify-end">
                  <input
                    value={domain}
                    type="number"
                    tw="w-[40%] text-xl mx-4 border-2 justify-items-center	pl-2 "
                  ></input>
                  <button tw="underline text-[#0038FF]">Edit</button>
                </div>
                <span tw="font-semibold">Total users</span>
                <div tw="flex justify-end">
                  <input
                    value={domain * 3}
                    type="number"
                    tw="w-[40%] text-xl mx-4 border-2 justify-items-center	pl-2 "
                  ></input>
                  <button tw="underline text-[#0038FF]">Edit</button>
                </div>
              </div>
              <hr tw="h-px my-4 bg-gray-200 border-0 dark:bg-blackLight"></hr>
            </div>
            <div tw="grid grid-cols-3 items-center my-6 px-8">
              <div tw="col-span-2">
                <p tw="text-2xl font-medium">Total monthly cost</p>
              </div>
              <div tw="font-medium text-2xl flex justify-end	items-center">
                ${domain * 15}
                <span tw="font-light text-sm text-[#858583]">/month</span>
              </div>
            </div>
            <div tw="flex items-center text-[#858583] col-span-2 px-8 pb-2">
              <img tw="pr-2" src={Alert}></img>
              <p>Including licence fee</p>
            </div>
            <div tw="flex items-center text-[#858583] col-span-2 px-8">
              <img tw="pr-2" src={Alert}></img>
              <p>Excluding domain setup cost</p>
            </div>
            <hr tw="h-px mt-8 mb-6 mx-8 bg-gray-200 border-0 dark:bg-blackLight"></hr>
            <div tw="grid grid-cols-2 pl-8">
              <div>
                <p tw="text-xl pb-6 font-semibold">List's Features</p>
                <ul tw="font-medium">
                  <li tw="flex pb-4">
                    <img tw="pr-3" src={check}></img>
                    Better open rates
                  </li>
                  <li tw="flex pb-4">
                    <img tw="pr-3" src={check}></img>
                    Better inbox ratio
                  </li>
                  <li tw="flex">
                    <img tw="pr-3" src={check}></img>
                    Better reply rate
                  </li>
                </ul>
              </div>
              <div tw="flex justify-end">
                <img src={UpRocket}></img>
              </div>
            </div>
          </Card>
        </Column>
        <StyledModal
          closeTimeoutMS={300}
          className="mainHeroModal"
          isOpen={modalIsOpen}
          onRequestClose={toggleModal}
          shouldCloseOnOverlayClick={true}
        >
          <CloseModalButton onClick={toggleModal}>
            <CloseIcon tw="w-6 h-6" />
          </CloseModalButton>
          <div className="content">
            <div tw="w-full pb-[76%] relative">
              <iframe
                src="https://giphy.com/embed/MDJ9IbxxvDUQM"
                tw="w-full h-[100%] absolute"
              ></iframe>
            </div>
          <PrimaryLink>
            <div tw="flex items-center justify-center">
              Get started now <img tw="pl-1" src={arrow}></img>
            </div>
          </PrimaryLink>
          </div>
        </StyledModal>
        <Column>
          <Card tw="bg-calBg2">
            <div tw="flex items-center gap-1 px-8">
              <span tw="font-bold text-2xl">With Others</span>
              <span tw="invisible" className="imageContainer">
                <img src={Logo} alt="" />
              </span>
            </div>
            <div tw="grid grid-cols-3 items-center mt-6 mb-8 px-8">
              <div tw="col-span-2 flex">
                <img tw="pr-4" src={googleLogo}></img>
                <p tw="text-lg font-medium">Google licence fee</p>
              </div>
              <div tw="font-medium text-2xl flex justify-end	items-center">
                ${domain * 24}
              </div>
            </div>
            <div tw="grid grid-cols-3 items-center mt-6 mb-8  px-8">
              <div tw="col-span-2 flex">
                <img tw="pr-4" src={setupLogo}></img>
                <p tw="text-lg font-medium">Setup costs</p>
              </div>
              <div tw="font-medium text-2xl flex justify-end	items-center">
                ${domain * 10}
                <span tw="font-light text-sm text-[#858583]">/month</span>
              </div>
            </div>
            <div tw="grid grid-cols-3 items-center mt-6 mb-8 px-8">
              <div tw="col-span-2 flex">
                <img tw="pr-4" src={mailLogo}></img>
                <p tw="text-lg font-medium">Mailbox maintainance</p>
              </div>
              <div tw="font-medium text-2xl flex justify-end	items-center">
                ${domain * 6}
                <span tw="font-light text-sm text-[#858583]">/month</span>
              </div>
            </div>
            <hr tw="h-px mt-4 mb-0 mx-8 bg-gray-200 border-0 dark:bg-blackLight"></hr>
            <div tw="grid grid-cols-3 items-center mb-6 mt-6 px-8">
              <div tw="col-span-2 pb-4">
                <p tw="text-2xl font-medium">Set up cost</p>
              </div>
              <div tw="font-medium text-2xl flex justify-end	items-center pb-4">
                ${domain * 10}
                {/* <span tw="font-light text-sm text-[#858583]">/month</span> */}
              </div>
              <div tw="col-span-2">
                <p tw="text-2xl font-medium">Recurring cost</p>
              </div>
              <div tw="font-medium text-2xl flex justify-end	items-center">
                ${domain * 24 + domain * 6}
                <span tw="font-light text-sm text-[#858583]">/month</span>
              </div>
              {/* <div tw="flex items-center text-[#858583] col-span-2">
                <p tw="px-[2px] pt-1">Excluding one time setup</p>
              </div> */}
            </div>
            <div tw="px-8 mb-3">
              <ul tw="font-medium px-[2px]">
                <li tw="flex pb-4">
                  <img tw="pr-3" src={dot}></img>
                  Low open rates
                </li>
                <li tw="flex pb-4">
                  <img tw="pr-3" src={dot}></img>
                  Low reply ratio
                </li>
                <li tw="flex">
                  <img tw="pr-3" src={dot}></img>
                  Low ROI
                </li>
              </ul>
            </div>
            <div tw="flex justify-end">
              <img src={downRocket}></img>
            </div>
          </Card>
        </Column>
      </ThreeColumnContainer>
    </Container>
  );
};
export default Why