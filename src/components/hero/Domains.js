import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import dash1 from "../../images/dash1.svg"
import dash2 from "../../images/dash2.svg"
import dash3 from "../../images/dash3.svg"
import dashlogo from "../../images/dashlogo.svg"
import sample from "../../images/sample.svg"
import back from "../../images/backarrow.svg"
import cross from "../../images/cross.svg"
import { useNavigate } from 'react-router-dom';

const Container = tw.div``;
const Heading = tw.h3`text-lg sm:text-lg md:text-2xl lg:text-3xl font-black leading-none my-4 font-semibold`;


const data = [
  ".com", ".co.in", ".tech" , ".in", ".ai"
];
export default () => {
  const [selected, isSelected] = useState([])
  const [domain, setDomain] = useState()
  const navigate = useNavigate();
  return (
    <Container>
   
   <div tw="flex items-center justify-between px-2 sm:px-12 py-4 bg-[#FFE1CF] mb-12">
        <div>
          <img src={dashlogo}></img>
        </div>
        <div tw="flex">
          <img tw="pr-3 hidden sm:flex" src={dash1}></img>
          <img tw="pr-3 hidden sm:flex" src={dash2}></img>
          <div tw="flex pr-3 items-center">
            <div tw="pr-1">
              <img src={sample}></img>
            </div>
            <div>
              <h3 tw="font-semibold hidden sm:flex">Darsh Prasanna</h3>
              <p tw="font-light text-sm hidden sm:flex">Admin</p>
            </div>
          </div>
          <img tw="pr-3" src={dash3}></img>
        </div>
      </div>
       
      <div tw="flex items-center justify-between mx-6 md:mx-16 lg:mx-[14rem]">
        <div tw="flex items-center mb-4">
          <div tw="border-2 border-blackLight p-2 px-4 mr-2 rounded-lg">
         <a href="/dashboard"> <img  tw="" src={back}></img></a>
          </div>
          <Heading>Back</Heading>
        </div>
      </div>
      <div tw="mx-6 md:mx-16 lg:mx-[14rem]">
        <input value={domain} onChange={(e)=>{
          setDomain(e.target.value)
          isSelected([])
          }} type="text" tw="w-full border border-blackLight py-2 rounded-lg px-3" placeholder="Type your domain name to start"></input>
      </div>
      <div tw="flex mx-6 md:mx-16 lg:mx-[14rem] my-3">
        {domain?<><div tw="font-bold pr-3 w-auto">
          Suggested: 
        </div></>:<></>}
        
        <div tw="w-auto flex flex-wrap ">
          {data.map((d,i)=>{
            return (
              <> {domain?<>{selected.includes(d)?<><div onClick={()=>isSelected(prevArray => prevArray.filter(item => item !== d))} tw=" cursor-pointer py-1 px-3 border border-black bg-[#FFE1CF] mx-1 my-1 rounded-md">{domain+d} <span>𐤕</span></div>       
              </>:<><div onClick={()=>isSelected(prevArray => [...prevArray, d])} tw="py-1 px-3 border cursor-pointer border-blackLight mx-1 my-1 rounded-md">{domain+d} <span>✓</span></div>       
              </>}</>:<></>}</>
            )
          })}
         
          
                       
        </div>
      </div>
    
        {selected?<>{
          selected.map((d,i)=>{
            return(
              <>
                <div tw="mx-6 md:mx-16 lg:mx-[14rem] flex mb-2 items-center">
        <div tw="justify-between flex mr-4 p-3 pl-4 border-2 rounded-lg border-blackLight w-full"> 
              <div key={i} tw="font-bold">
            {domain+d}
            </div>
            <div tw="font-bold">
              $15
            </div>
            </div>
        <img tw="cursor-pointer" onClick={()=>isSelected(prevArray => prevArray.filter(item => item !== d))}  src={cross}></img>
      </div>
              </>
            )
          })
        }</>:<></>}
          
    {selected.length>0?<>  <div tw="mx-6 md:mx-16 lg:mx-[14rem] my-8 flex items-center">
        <div tw="justify-between flex items-center  w-full"> 
          <div tw="font-medium">
          Subtotal (Annual Domain Price): ${selected.length*15}
                   </div>
          <a  onClick={()=>navigate('/order', { state: {domains: domain, select: selected}})} tw="font-bold bg-[#4281FA] text-white p-2 px-3 rounded-lg cursor-pointer">
             Next
          </a>
        </div>
      </div></>:<></>}
    
    </Container>
  );
};
