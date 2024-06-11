import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import check from "../../images/blankcheck.svg";
import filter from "../../images/filter.svg"
import LogoImage from "images/footerLogo.svg";
import dash1 from "../../images/dash1.svg"
import dash2 from "../../images/dash2.svg"
import dash3 from "../../images/dash3.svg"
import dashlogo from "../../images/dashlogo.svg"
import sample from "../../images/sample.svg"
import back from "../../images/backarrow.svg"
import cross from "../../images/cross.svg"
import Header, {
  LogoLink,
  NavLinks,
  NavLink as NavLinkBase,
} from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`justify-between`}
  ${LogoLink} {
    ${tw`mr-8 pb-0`}
  }
`;

const NavLink = tw(NavLinkBase)`
  sm:text-sm sm:mx-6
`;

const Container = tw.div``;
const TwoColumn = tw.div`flex flex-col lg:flex-row bg-gray-100`;
const LeftColumn = tw.div`ml-8 w-full mr-8 xl:pl-10 py-8`;
const RightColumn = styled.div`
  background-image: url("https://images.unsplash.com/photo-1551918120-9739cb430c6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&width=1440&height=1024&q=75");
  ${tw`bg-green-500 bg-cover bg-center xl:ml-24 h-96 lg:h-auto lg:w-1/2 lg:flex-1`}
`;

const Content = tw.div`mt-24 lg:mt-24 lg:mb-24 flex flex-col sm:items-center lg:items-stretch`;
const Heading = tw.h3`text-3xl sm:text-5xl md:text-6xl lg:text-2xl font-black leading-none my-4 font-semibold`;
const Paragraph = tw.p`max-w-md my-8 lg:my-5 lg:my-8 sm:text-lg lg:text-base xl:text-lg leading-loose`;

const Actions = styled.div`
  ${tw`mb-8 lg:mb-0`}
  .action {
    ${tw`text-center inline-block w-full sm:w-48 py-4 font-semibold tracking-wide rounded hocus:outline-none focus:shadow-outline transition duration-300`}
  }
  .primaryAction {
    ${tw`bg-primary-500 text-gray-100 hover:bg-primary-700`}
  }
  .secondaryAction {
    ${tw`mt-4 sm:mt-0 sm:ml-4 bg-gray-300 text-gray-700 hover:bg-gray-400 hover:text-gray-800`}
  }
`;
const data = [
  { domainame: "tureais.com", users: ["Garvit", "Darsh"], domainstatus: "Active" , userscreated: "Completed", tag:"#BBG"},
  { domainame: "tureais.com", users: ["Garvit", "Darsh"], domainstatus: "Active" , userscreated: "Completed", tag:"#BBG"},
  { domainame: "tureais.com", users: ["Garvit", "Darsh"], domainstatus: "Active" , userscreated: "Completed", tag:"#BBG"},
];
export default ({
  navLinks = [
    <NavLinks key={1}>
      <NavLink href="#">About</NavLink>
      <NavLink href="#">Blog</NavLink>
      <NavLink href="#">Pricing</NavLink>
      <NavLink href="#">Login</NavLink>
    </NavLinks>,
  ],
  heading = (
    <>
      Find Perfect Hotels
      <wbr />
      <br />
      <span tw="text-primary-500">anywhere you go.</span>
    </>
  ),
  description = "We've been in the hotels business across the world for 5 years now. We assure you that you will always enjoy your stay with us.",
  primaryActionUrl = "#",
  primaryActionText = "Sign Up",
  secondaryActionUrl = "#",
  secondaryActionText = "Search Hotels",
}) => {
  return (
    <Container>
      {/* <TwoColumn>
        <LeftColumn>
          <StyledHeader tw="w-full" links={navLinks} collapseBreakpointClass="sm" /> 
          <Content>
            <Heading>{heading}</Heading>
            <Paragraph>{description}</Paragraph>
            <Actions>
              <a href={primaryActionUrl} className="action primaryAction">
                {primaryActionText}
              </a>
              <a href={secondaryActionUrl} className="action secondaryAction">
                {secondaryActionText}
              </a>
            </Actions>

          </Content>
          <div tw="w-full " className="App">
            <table tw="table-auto">
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.age}</td>
                            <td>{val.gender}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
        </LeftColumn>
      </TwoColumn> */}
      <div tw="flex items-center justify-between px-12 py-4 bg-[#FFE1CF] mb-12">
        <div>
<img src={dashlogo}></img>   
     </div>
        <div tw="flex">
          <img tw="pr-3" src={dash1}></img>
          <img tw="pr-3" src={dash2}></img>
          <div tw="flex pr-3 items-center">
            <div tw="pr-1">
              <img src={sample}></img>
            </div>
            <div>
                <h3 tw="font-semibold">Darsh Prasanna</h3>
                <p tw="font-light text-sm">Admin</p>
            </div>
          </div>
          <img tw="pr-3" src={dash3}></img>
      
        </div>
      </div>
      <div tw="flex items-center justify-between mx-16">
        <div tw="flex items-center mb-4">
          <div tw="border-2 border-blackLight p-2 px-4 mr-2 rounded-lg">
          <img  tw="" src={back}></img>
          </div>
          <Heading>Back</Heading>
        </div>
      </div>
      <div tw="mx-16 flex items-center">
        <div tw="justify-between flex mr-4 p-3 pl-4 border-2 rounded-lg border-blackLight w-full"> 
          <div tw="font-bold">
            Consultinggenious.com
          </div>
          <div tw="font-bold">
            $15
          </div>
        </div>
        <img src={cross}></img>
      </div>
      <div tw="mx-16 flex items-center">
        <div tw="justify-between flex mr-4  w-full"> 
          <div tw="font-medium">
          Subtotal (Annual Domain Price): $300
                   </div>
          <button tw="font-bold bg-[#4281FA] text-white p-2 px-3 rounded-lg">
             Next
          </button>
        </div>
        <img tw="invisible" src={cross}></img>
      </div>
    </Container>
  );
};
