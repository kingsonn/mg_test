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
import deelete from "../../images/delete.svg"
import gg from "../../images/gg.svg"
import Header, {
  LogoLink,
  NavLinks,
  NavLink as NavLinkBase,
} from "../headers/light.js";
import { useState } from "react";
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
  { provider: "Google", Persona: "Bharat Arora", email: "bharat456@gmail.com" , domain: "meetgenius.com", price:"$15"},
  { provider: "Google", Persona: "Bharat Arora", email: "bharat456@gmail.com" , domain: "meetgenius.com", price:"$15"},
  { provider: "Google", Persona: "Bharat Arora", email: "bharat456@gmail.com" , domain: "meetgenius.com", price:"$15"},

];

const domains = ["hello.com", "bello.com", "mello.com"]
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
  const [dom, useDom] = useState([])
  const [fname, usefname] = useState()
  const [lname, uselname] = useState()
  const [mail, usemail] = useState()
  const [orderData, useOrder] = useState([])
  function addition(){
 console.log()
    // dom.forEach((element) => {
      let newObj = {provider: "Google", Persona: fname+" "+lname, email:mail, domain:dom[0], price: 15}
      useOrder(orderData=> [...orderData, newObj])
    // });
  
}
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
      <div tw="flex items-center justify-between mx-16">
        <div tw="flex items-center mb-4">
          <div tw="border-2 invisible border-blackLight p-2 px-4 mr-2 rounded-lg">
          <img  tw="" src={back}></img>
          </div>
          <div>

          <Heading>Order</Heading>
          <p tw="text-sm">Order new emails</p>
          </div>
        </div>
      </div>
      <div tw="mx-10">
<div tw="mx-24 w-auto border-2 px-6 py-4 rounded-lg shadow-lg mb-10">
  <Heading>Forwarding Domain:</Heading>
  <div tw="w-full bg-[#E7F0FF] p-2 mb-6">
  Https://www.consultinggenuies.com
  </div>
</div>
<div tw="mx-24 mb-10 grid grid-cols-6 justify-between gap-10 w-auto border-2 px-6 py-4 rounded-lg shadow-lg">
 <div tw="pt-4 col-span-3"> 
  <p tw="font-semibold pb-2">
    First name:
  </p>
  <input tw="w-[100%] p-3 rounded-lg  border-2 border-blackLight" onChange={(e)=>usefname(e.target.value)}></input>
 </div>
 <div tw="pt-4 col-span-3"> 
  <p tw="font-semibold pb-2">
    Last name:
  </p>
  <input tw="w-[100%] p-3 rounded-lg  border-2 border-blackLight" onChange={(e)=>uselname(e.target.value)}></input>
 </div>
 <div tw="pt-4 col-span-4"> 
  <p tw="font-semibold pb-2">
    Email:
  </p>
  <div tw="flex items-center border-2 border-blackLight rounded-lg">
  <input tw="w-[100%] p-3   " onChange={(e)=>usemail(e.target.value)}></input>
  <span tw="text-xl p-3 px-4 bg-[#E7F0FF] rounded-md">@</span>
  </div>
 </div>
 <div tw="pt-4 col-span-2"> 
  <p tw="invisible font-semibold pb-2">
    Last name:
  </p>
  <div tw="rounded-lg  border-2 border-blackLight">
  <select onChange={(e)=>useDom([e.target.value])} tw="w-[100%] font-semibold p-3 border-r-4 rounded-lg  border-2 border-transparent">
    <option tw="font-bold">All Domains</option>
      {domains.map((d, i)=>{
        return(
          <option value={d}>{d}</option>
        )
      })}
  </select>
  </div>
  <div tw="flex justify-end"><button tw="justify-self-end mt-3 p-2 bg-[#4281FA] rounded-lg text-white font-semibold text-lg px-4 " onClick={()=>addition()}>Add</button></div>
 </div>
 

</div>
<div tw="mx-24  border-2 rounded-md shadow-md">
        <table tw="table-auto w-full ">
          <tr tw="mx-8 bg-[#F2F2FC] text-[#808086] ">
          
            <th tw=" flex items-center mx-8 my-4 font-medium">Provider</th>
            <th tw="font-medium">Persona</th>
            <th tw="font-medium">Email</th>
            <th tw="font-medium">Domain</th>
            <th tw="font-medium">Action</th>
            <th tw="font-medium">Price</th>
          </tr>
          {orderData?<>{orderData.map((val, key) => {
            return (
              <tr key={key} tw="text-center border-b border-blackLight">
                <td tw=" flex items-center mx-8 my-6 font-semibold"><span tw="p-1 flex px-2 bg-white border border-blackLight  rounded-full font-semibold mx-1"><img tw="pr-3" src={gg}></img>{val.provider}</span></td>
                <td ><span tw="p-1 px-2 bg-white border border-blackLight  rounded-full font-semibold mx-1">{val.Persona}</span></td>
                <td><span tw="p-1 px-2 bg-white border border-blackLight  rounded-full font-semibold mx-1">{val.email}</span></td>
                <td><span tw="p-1 px-2 bg-white border border-blackLight  rounded-full font-semibold mx-1">{val.domain}</span></td>
                
                <td > <img tw="p-1 mx-auto border border-blackLight  rounded-full " src={deelete}></img></td>
                <td tw="font-semibold"><span tw="p-1 px-2 bg-white border border-blackLight  rounded-full font-semibold mx-1">{val.price}</span></td>
              </tr>

            );
          })}</>:<></>}
          
        </table>
        <div tw="text-end px-10 text-lg font-semibold py-3 border-t border-b border-blackLight">Sub total</div>
        <div tw="text-end px-10 text-lg font-semibold py-3 border-t border-b border-blackLight">Sub total</div>
        <div tw="text-end px-10 text-lg font-semibold py-3 border-t border-b border-blackLight">Sub total</div>
      </div>
<div tw="flex mx-24 my-10  justify-between items-center">
<div tw="text-sm text-gray-700">Please allow 24 to 72 hour for your emails to be set up as DNS propagation can take some time</div>
<div tw="p-2 bg-[#4281FA] rounded-lg text-white font-semibold text-lg px-4">Place order</div>
</div>
</div>

    </Container>
  );
};
