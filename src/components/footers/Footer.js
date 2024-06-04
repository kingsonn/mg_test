import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import LogoImage from "images/footerLogo.svg";
import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "images/youtube-icon.svg";

const Container = tw.div`relative bg-gray-900 text-base text-black  -mb-8 px-8`;
const Content = tw.div`max-w-screen-xl mx-auto pt-12 pb-8`
const FiveColumns = tw.div`flex flex-wrap justify-between items-center`;

const Column = tw.div`w-1/2 md:w-1/3 mb-8 md:mb-0 text-sm sm:text-base text-center md:text-left`;
const CompanyColumn = tw.div`text-center md:text-left mb-16 lg:mb-0 w-full lg:w-1/3`;

const ColumnHeading = tw.h5`font-bold uppercase text-lg`;

const LinkList = tw.ul`mt-4 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 text-xs hocus:border-gray-100 pb-1 transition duration-300`;

const LogoContainer = tw.div`flex items-center justify-center lg:justify-start`;
const LogoImg = tw.img`w-[50%]`;
const LogoText = tw.h5`ml-2 text-xl font-black`;

const CompanyAddress = tw.p`mt-4 w-full font-medium text-black text-sm mx-auto lg:mx-0 lg:mr-4 leading-loose text-center lg:text-left`;

const SocialLinksContainer = tw.div`mt-4 text-center lg:text-left`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-500 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

const CopyrightAndCompanyInfoRow = tw.div`pb-0 text-sm font-normal flex flex-col sm:flex-row justify-between items-center`
const CopyrightNotice = tw.div``
const CompanyInfo = tw.div``

const Divider = tw.div`my-8 border-b-2 border-gray-800`
export default () => {
  return (
    <Container tw="bg-[#FAF9F5]">
      <Content>
        <FiveColumns>
          <CompanyColumn>
            <LogoContainer>
              <LogoImg src={LogoImage} />
              {/* <LogoText>Treact Inc.</LogoText> */}
            </LogoContainer>
            <CompanyAddress>
            Are you tired of spending endless hours crafting cold emails that yield little to no results? Say goodbye to the daunting task of manual outreach. Welcome to the future of email marketing with Inbox automate.
            </CompanyAddress>
            
          </CompanyColumn>
          {/* <Column>
            <ColumnHeading>Quick Links</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">Blog</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">FAQs</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Support</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">About Us</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Product</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">Log In</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Personal</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Business</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Team</Link>
              </LinkListItem>
            </LinkList>
          </Column> */}
          <div tw="flex justify-end">
          <Column tw="justify-self-end">
            <ColumnHeading>Links</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">LinkedIn</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Features</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Get early access</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Refund & cancellation policy</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column tw="justify-self-end">
            <ColumnHeading>Contact</ColumnHeading>
            <LinkList>
              <LinkListItem>
              <Link>Email</Link>           </LinkListItem>
              <LinkListItem>
                <Link href="#">Tureais</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Plot no 7/C,, Solan, Sector-2 Parwanoo, Kasauli, Solan- 173220, Himachal Pradesh</Link>
              </LinkListItem>
              
            </LinkList>
          </Column>
          </div>
        </FiveColumns>
        <Divider/>
        <CopyrightAndCompanyInfoRow tw="">
          <CopyrightNotice>&copy; Copyright@inboxautomate 2024</CopyrightNotice>
          <div tw="flex justify-end gap-3">
          <CompanyInfo>Privacy policy</CompanyInfo>
          <CompanyInfo>Terms of service</CompanyInfo>
          </div>
        </CopyrightAndCompanyInfoRow>
      </Content>
    </Container>
  );
};
