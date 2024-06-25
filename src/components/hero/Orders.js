import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import dash1 from "../../images/dash1.svg"
import dash2 from "../../images/dash2.svg"
import dash3 from "../../images/dash3.svg"
import dashlogo from "../../images/dashlogo.svg"
import sample from "../../images/sample.svg"
import back from "../../images/backarrow.svg"
import deelete from "../../images/delete.svg"
import gg from "../../images/gg.svg"
import { useLocation } from 'react-router-dom';

import { MultiSelect } from "react-multi-select-component";

import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Container = tw.div``;
const Heading = tw.h3`text-lg sm:text-lg md:text-2xl lg:text-3xl font-black leading-none my-4 font-semibold`;

export default () => {
  const [dom, useDom] = useState([])
  const [fname, usefname] = useState()
  const [lname, uselname] = useState()
  const [domainCheck, useDomainCheck] = useState({})
  const [mailCheck, useMailCheck] = useState({})
  const [mail, usemail] = useState()
  const [orderData, useOrder] = useState([])
  function addition(){

    selectedFlavors.forEach((element) => {
      const space=" "
      let newObj = {provider: "Google", Persona: `${fname} ${lname}`, email:`${mail}@${element.value}`, domain:element.value, price: 5}
      
      mailCheck[newObj.email] = (mailCheck[newObj.email] || 0) +1
      if(mailCheck[newObj.email]<=1){
        domainCheck[newObj.domain] = (domainCheck[newObj.domain]||0) + 1;
        if(domainCheck[newObj.domain]<=3){
          useOrder(orderData=> [...orderData, newObj])
        }else {
          console.log("Errrrrrrryyeyaar")
          domainCheck[newObj.domain]= 3
          showToastMessage("We recommend limiting 3 users per domain.")
        }
      }else {
        mailCheck[newObj.email]= 1
        showToastMessage("You cannot create same email ids.")
      }
    });  
    console.log(domainCheck)
    
}
const [selectedFlavors, setSelectedFlavors] = useState([]);
const [options, setOptions] = useState([])
const location = useLocation();
const {domains, select, fromDashboard} = location.state;

useEffect(() => {
  if(domains && select){
    const options = select.map(item => ({
      label: `${domains}${item}`,
      value: `${domains}${item}`
    }));
    setOptions(options)
  }else if(fromDashboard){
  const options = fromDashboard.map(item => ({
  label: `${item.domainame}`,
  value: `${item.domainame}`
  }))
  setOptions(options)
  fromDashboard.map((item, i)=>{
    
    item.users.map((user,i)=>{
      
      let newObj = {provider: "Google", Persona: user, email:`${user}@${item.domainame}`, domain:item.domainame, price: 5}

      
      mailCheck[newObj.email] = (mailCheck[newObj.email] || 0) +1
      if(mailCheck[newObj.email]<=1){
        domainCheck[newObj.domain] = (domainCheck[newObj.domain]||0) + 1;
        if(domainCheck[newObj.domain]<=3){
          useOrder(orderData=> [...orderData, newObj])
        }else {
          console.log("Errrrrrrryyeyaar")
          domainCheck[newObj.domain]= 3
        }
      }else {
        mailCheck[newObj.email]= 1
      }


    })
  })

  }
}, []);
// receivedData.select.forEach(element => {
//   useOptions(prev=>[...prev, element])
// });

// const options = [
//   { label: receivedData.domains+receivedData.select, value: "chocolate" },
//   { label: "Strawberry", value: "strawberry" },
//   { label: "Coconut", value: "coconut" },
//   { label: "Vanilla", value: "vanilla" },
//   { label: "Blueberry", value: "blueberry" },
//   { label: "Red Velvet", value: "velvet" }
// ];
  const showToastMessage = (message) => {
    toast.error(message);
  };

  return (
    <Container>
   
   <div tw="flex items-center justify-between px-2 sm:px-12 py-4 bg-[#FFE1CF] mb-12">
        <a href="/">
          <img src={dashlogo}></img>
        </a>
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
       
      <div tw="flex items-center justify-between mx-6 md:mx-16">
        <div tw="flex items-center mb-4">
          <div tw="border-2 border-blackLight p-2 px-4 mr-2 rounded-lg">
          <a href="/domains"><img  tw="" src={back}></img></a>
          </div>
          <Heading>Back</Heading>
        </div>
      </div>
      <div tw="flex items-center justify-between mx-6 md:mx-16">
        <div tw="flex items-center mb-4">
          <div tw="border-2 hidden md:flex md:invisible border-blackLight p-2 px-4 mr-2 rounded-lg">
          <img  tw="" src={back}></img>
          </div>
          <div>

          <Heading>Order</Heading>
          <p tw="text-sm font-medium">Order new emails</p>
          </div>
        </div>
      </div>
      <div tw="md:mx-10">
<div tw="mx-6 md:mx-24 w-auto border-2 px-6 py-4 rounded-lg shadow-lg mb-10">
  <Heading>Forwarding Domain:</Heading>
  <input value={'Https://www.consultinggenuies.com'} tw="overflow-scroll w-full bg-[#E7F0FF] p-2 mb-6">
  
  </input>
</div>
<div tw="mx-6 md:mx-24 mb-10 grid grid-cols-6 justify-between gap-10 w-auto border-2 px-6 py-4 rounded-lg shadow-lg">
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
 <div tw="pt-4 col-span-6 md:col-span-4"> 
  <p tw="font-semibold pb-2">
    Email:
  </p>
  <div tw="flex items-center border-2 border-blackLight rounded-lg">
  <input tw="w-[100%] p-2" onChange={(e)=>usemail(e.target.value)}></input>
  <span tw="text-xl p-2 px-4 bg-[#E7F0FF] rounded-md">@</span>
  </div>
 </div>
 <div tw="pt-4 col-span-6 md:col-span-2"> 
  <p tw="font-semibold pb-2">
   Select domains:
  </p>
  {/* <select onChange={(e)=>useDom([e.target.value])} tw="w-[100%] font-semibold p-3 border-r-4 rounded-lg  border-2 border-transparent">
    <option onSelect={()=>console.log("hbhjbhb")} tw="font-bold">All Domains</option>
      {domains.map((d, i)=>{
        return(
          <option value={d}>{d}</option>
        )
      })}
  </select> */}

   <MultiSelect
        value={selectedFlavors}
        options={options}
        onChange={setSelectedFlavors}
        tw="p-1"
      />

  <div tw="flex justify-end"><button tw="justify-self-end mt-3 p-2 bg-[#4281FA] rounded-lg text-white font-semibold text-lg px-4 " onClick={()=>{
    addition()
    }}>Add</button></div>
 </div>
 

</div>
<div tw="mx-6 md:mx-24  border-2 rounded-md shadow-md overflow-scroll">
        <table tw="table-auto w-full">
          <tr tw="mx-8 bg-[#F2F2FC] text-[#808086] ">
          
            <th tw=" flex items-center mx-8 my-4 font-medium">Provider</th>
            <th tw="font-medium">Persona</th>
            <th tw="font-medium">Email</th>
            <th tw="font-medium">Domain</th>
            <th tw="font-medium">Action</th>
            <th tw="font-medium mr-2">Price</th>
          </tr>
          {orderData?<>{orderData.map((val, key) => {
            return (
              <tr key={key} tw="text-center border-b border-blackLight">
                <td tw=" flex items-center md:mx-8 my-6 font-semibold"><span tw="p-1 flex px-2 bg-white border border-blackLight  rounded-full font-semibold mx-1"><img tw="pr-3" src={gg}></img>{val.provider}</span></td>
                <td tw="truncate overflow-scroll"><span tw="  w-full p-1 px-2 bg-white border flex-nowrap border-blackLight  rounded-full font-semibold mx-1">{val.Persona}</span></td>
                <td><span tw="p-1 px-2 bg-white border border-blackLight  rounded-full font-semibold mx-1">{val.email}</span></td>
                <td><span tw="p-1 px-2 bg-white border border-blackLight  rounded-full font-semibold mx-1">{val.domain}</span></td>
                
                <td > <img tw="cursor-pointer p-1 mx-auto border border-blackLight  rounded-full " onClick={()=>{
                  useOrder(prevArray => prevArray.filter(item => item !== val))
                  domainCheck[val.domain] = domainCheck[val.domain] - 1;
                  }}  src={deelete}></img></td>
                <td tw="font-semibold"><span tw="p-1 px-2 bg-white border border-blackLight  rounded-full font-semibold mx-1">${val.price}</span></td>
              </tr>

          
);
})}</>:<></>}
</table>
</div>
          <div tw="mx-6 md:mx-24 border border-blackLight rounded-lg shadow-md bg-white">
        <div tw="text-end px-10 text-sm md:text-lg font-semibold py-3 border-t border-b border-blackLight">Subtotal (Monthly Price): ${orderData.length*5}</div>
        <div tw="text-end px-10 text-sm md:text-lg font-semibold py-3 border-t border-b border-blackLight">Domain Annual Price: ${orderData.length*5}</div>
        <div tw="text-end px-10 text-sm md:text-lg font-semibold py-3 border-t border-b border-blackLight">Total Price: ${orderData.length*10}</div>
        </div>
<div tw="flex mx-6 md:mx-24 my-10  justify-between items-center">
<div tw="text-sm text-gray-700">Please allow 24 to 72 hour for your emails to be set up as DNS propagation can take some time</div>
<div tw="p-2 bg-[#4281FA] rounded-lg text-white font-semibold text-lg px-4">Place order</div>
</div>
</div>
<ToastContainer/>
    </Container>
  );
};
