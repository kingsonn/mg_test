import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import filter from "../../images/filter.svg";
import dash1 from "../../images/dash1.svg";
import dash2 from "../../images/dash2.svg";
import dash3 from "../../images/dash3.svg";
import dashlogo from "../../images/dashlogo.svg";
import sample from "../../images/sample.svg";
import { useState, useEffect, useMemo, useRef } from "react";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { MultiSelect } from "react-multi-select-component";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Checkbox = styled.input.attrs({ type: "checkbox" })`
  -webkit-appearance: none;
  appearance: none;

  width: 1.6rem;
  height: 1.6rem;
  border-radius: 0.15em;
  margin-right: 0.5em;
  border: 0.15em solid rgba(0, 0, 0, 0.2);
  outline: none;
  cursor: pointer;
  &:checked {
    background-color: #FFE1CF;
    position: relative;
  }
  &:checked::before {
    content: "✓";
    font-size: 1.5em;
    color: black;
    position: absolute;
    right: 1px;
    top: -7px;
  }
`;
const Container = tw.div``;
const Heading = tw.h3`text-lg sm:text-lg md:text-2xl lg:text-3xl font-black leading-none my-4 font-semibold`;

const dataTags = [{label:"#BBG", value:"#BBG"}, {label:"#GGB", value:"#GGB"}, {label:"#HHB", value:"#HHB"}];
const dataDomain = [{label:"tureais.com", value:"tureais.com"}, {label:"tureais33.com", value:"tureais33.com"}, {label:"tureais44.com", value:"tureais44.com"}];
const dataUsers = [{label: "Garvit", value: "Garvit"}, {label: "Darsh", value: "Darsh"}, {label: "Nikhil", value: "Nikhil"}];
const data= [
  {
    domainame: "tureais.com",
    users: ["Garvit", "Darsh"],
    domainstatus: "Active",
    userscreated: "Completed",
    tag: "#BBG",
  },
  {
    domainame: "tureais33.com",
    users: ["Garvit", "Darsh", "Nikhil"],
    domainstatus: "Inactive",
    userscreated: "Completed",
    tag: "#GGB",
  },
  {
    domainame: "tureais44.com",
    users: ["Garvit", "Darsh"],
    domainstatus: "Active",
    userscreated: "Completed",
    tag: "#HHB",
  },
];
export default () => {
  const [toggle, useToggle] = useState(false);
  const [toggleFilt, useToggleFilt] = useState(false);
  const [selected, setSelected] = useState([]);
  const [selectAll, setSelectAll] = useState(false); 
  const [dataFilter, setDataFilter] = useState([])
  const [domainFilter, setDomainFilter] = useState([])
  const [tagFilter, setTagFilter] = useState([])
  const [dashboardData, setDashboardData] = useState(data)
  const [searchTerm, setSearchTerm] = useState('');
  const searchTermRef = useRef(searchTerm); // Use a ref to store the searchTerm
  const showToastMessage = (message) => {
    toast.error(message);
  };
  const navigate = useNavigate();

  // const filteredData = useMemo(() => {
  //   const filteredByCategory = domainFilter.length === 0
  //     ? data 
  //     : data.filter(item => domainFilter.some(filter => filter.value === item.domainame));

  //   return tagFilter.length === 0
  //     ? filteredByCategory 
  //     : filteredByCategory.filter(item => tagFilter.some(filter => filter.value === item.tag));
  // }, [data, domainFilter, tagFilter]);
  const filteredData = useMemo(() => {
    return data.filter(item => {
      const domainMatch = domainFilter.length === 0 ||
                           domainFilter.some(filter => filter.value === item.domainame);

      const tagMatch = tagFilter.length === 0 ||
                       tagFilter.some(filter => filter.value === item.tag);

      const userMatch = dataFilter.length === 0 || 
                         item.users.some(user => dataFilter.some(filter => filter.value === user));

      return domainMatch && tagMatch && userMatch; 
    });
  }, [data, domainFilter, tagFilter, dataFilter]);

  useEffect(() => {
    if (selectAll) {
      setSelected(dashboardData); // Select all options
    } else if (dashboardData.length>0 && selected.length === dashboardData.length) {
      setSelectAll(true); // If all selected, check "Select All"
    } else {
      setSelectAll(false); // If not all selected, uncheck "Select All"
    }
  }, [selectAll, selected, dashboardData]);
  useEffect(() => {
    const newFilteredData = data.filter(item => {
      const columnValue = item['domainame'];
      if (!columnValue) return false; 

      // Check if searchTerm is empty before filtering
      if (searchTerm.trim() === '') {
        return true;
      }
      return String(columnValue).toLowerCase().includes(searchTerm.toLowerCase()); 
    });
    
    setDashboardData(newFilteredData); // Always update filteredData 
  }, [data, searchTerm]); 
  // useEffect(() => {
  //   const newFilteredData = data.filter(item => {
  //     const columnValue = item['domainame'];

  //     // If searchTerm is empty or columnValue is nullish, show all data
  //     if (searchTerm.trim() === '' || !columnValue) { 
  //       return true;
  //     }

  //     return String(columnValue).toLowerCase().includes(searchTerm.toLowerCase());
  //   });
    
  //   setDashboardData(newFilteredData);
  // }, [dashboardData, searchTerm]); 

  // useEffect(() => {
  //   const newFilteredData = data.filter(item => {
  //     const columnValue = item['domainame'];
  //     if (!columnValue) return false; 

  //     // Check if searchTerm is empty before filtering
  //     if (searchTerm.trim() === '') {
  //       return true;
  //     }

  //     return String(columnValue).toLowerCase().includes(searchTerm.toLowerCase()); 
  //   });
    
  //   // This conditional statement ensures setFilteredData
  //   // is only called when the filtered data has actually changed.
  //   if (JSON.stringify(newFilteredData) !== JSON.stringify(filteredData)) {
  //     setDashboardData(newFilteredData); 
  //   }
  // }, [dashboardData, searchTerm]);
  // useEffect(() => {
  //   searchTermRef.current = searchTerm; // Update the ref on every render
  // }, [searchTerm]); // Make the effect depend on searchTerm

  // useEffect(() => {
  //   const newFilteredData = data.filter(item => {
  //     const columnValue = item['domainame'];
  //     if (!columnValue) return false; 

  //     // Use the value from the ref for comparison
  //     if (searchTermRef.current.trim() === '') {
  //       return true;
  //     }

  //     return String(columnValue).toLowerCase().includes(searchTermRef.current.toLowerCase()); 
  //   });

  //   setDashboardData(newFilteredData);
  // }, [dashboardData, searchTerm]); 
  // useEffect(() => {
  //   const newFilteredData = dashboardData.filter(item => {
  //     const columnValue = item['domainame'];
  //     if (!columnValue) return false; // Handle cases where column value is null/undefined

  //     // If searchTerm is empty, show all data
  //     if (searchTerm.trim() === '') {
  //       return true; 
  //     }

  //     return String(columnValue).toLowerCase().includes(searchTerm.toLowerCase());
  //   });

  //   setDashboardData(newFilteredData);
  // }, [data, searchTerm]); 

  // useEffect(() => {
  //   const newFilteredData = dashboardData.filter(item => {
  //     const columnValue = item['domainame']; // Get the value of the selected column
  //     return String(columnValue).toLowerCase().includes(searchTerm.toLowerCase());
  //   });
  //   setDashboardData(newFilteredData);
  // }, [dashboardData, searchTerm]); 
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
      <div tw="flex items-center justify-between mx-2 md:mx-16">
        <div>
          <Heading>Dashboard</Heading>
        </div>
        <div tw="flex justify-end hidden sm:flex">
          <span
            tw="cursor-pointer p-2 bg-[#E1DCFF] rounded-full md:px-2 lg:px-4 flex mr-2 text-sm font-semibold "
            onClick={() => useToggleFilt(true)}
          >
            <img tw="md:w-[30%] lg:w-full pr-1" src={filter}></img>Filters
          </span>
          <input
            tw="border-2 w-[20%] md:w-[30%] lg:w-auto rounded-md mr-2 px-2"
            placeholder="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
          <a
          onClick={()=>{
            if(selected.length>0){

              navigate('/order', { state: {fromDashboard: selected}})
            }else{
              showToastMessage("Select domains to add users")
            }
          
          }}
            // href="/domains"
            tw="cursor-pointer p-2 bg-[#9DFFD0] rounded-full md:px-2 flex mr-2 font-semibold lg:px-4"
          >
            Create Users
          </a>
          <a
            href="/domains"
            tw="p-2 bg-[#6F57F5] rounded-full text-white md:px-2 lg:px-4 flex mr-2 font-semibold"
          >
            Add Domains
          </a>
        </div>
        {toggleFilt ? (
          <>
            <div tw="fixed w-[80%] sm:w-[40%] z-10 top-[20%] p-2 px-4 md:right-[10%] right-[5%] rounded-2xl border  border-blackLight bg-white">
              <div tw="flex justify-end mb-2">
                <CloseIcon tw="cursor-pointer" onClick={() => useToggleFilt(false)}></CloseIcon>
              </div>
              <div tw="flex justify-between items-center">
                <div tw="text-2xl font-bold ">Filters</div>
                <div onClick={()=>{
                  setDataFilter([])
                  setDomainFilter([])
                  setTagFilter([])
                }} tw="cursor-pointer text-[#6F57F1] font-semibold">Clear all</div>
              </div>
              <hr tw="my-4"></hr>
              <div tw="grid grid-cols-1">
                <p tw="font-semibold pb-1">User Search</p>
                <div tw="border-blackLight border rounded-md mb-4">
                 
                  <MultiSelect
                  value={dataFilter}
                  options={dataUsers}
                  onChange={setDataFilter}
                  />               
                </div>
                <p tw="font-semibold pb-1">Domain Search</p>
                <div tw="border-blackLight border rounded-md mb-4">
                <MultiSelect
                value={domainFilter}
                options={dataDomain}
                onChange={setDomainFilter}
                />
                </div>
                <p tw="font-semibold pb-1">Tag Search</p>
                <div tw="border-blackLight border rounded-md mb-4">
                <MultiSelect
                value={tagFilter}
                options={dataTags}
                onChange={setTagFilter}
                />
                </div>
              </div>
              <div tw="flex justify-end mb-2">
                <button onClick={()=>{
                  setDashboardData(data)
                  setDataFilter([])
                  setDomainFilter([])
                  setTagFilter([])
                  useToggleFilt(false)
                }} tw="bg-[#F6FAFF] p-2 px-6 text-black rounded-md font-semibold">Cancel</button>
                <button onClick={()=>{              
                  setDashboardData(filteredData)
                }} tw="bg-[#6F57F5] p-2 px-6 text-white rounded-md ml-3 font-semibold">Apply</button>
              </div>
            </div>
          </>
        ) : (
          <div tw="hidden"></div>
        )}
        {toggle ? (
          <>
            <div tw=" fixed sm:hidden right-0 mx-2 mt-32 bg-[#FFE1CF] p-3 rounded-lg">
              <div tw="flex justify-end mb-2">
                <CloseIcon onClick={() => useToggle(false)}></CloseIcon>
              </div>
              <span
                tw="p-2 mb-2 bg-[#E1DCFF] rounded-full md:px-2 lg:px-4 flex mr-2 text-sm font-semibold "
                onClick={() => useToggleFilt(true)}
              >
                <img tw="md:w-[30%] lg:w-full pr-1" src={filter}></img>Filters
              </span>
              <input
                tw="border-2 mb-2 md:w-[30%] py-2 lg:w-auto rounded-md mr-2 px-2 sm:w-full"
                placeholder="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              ></input>
              <a
          onClick={()=>navigate('/order', { state: {fromDashboard: selected}})}
          tw="p-2 bg-[#9DFFD0] mb-2 rounded-full md:px-2 flex mr-2 font-semibold lg:px-4"
              >
                Create Users
              </a>
              <a
                href="/domains"
                tw="p-2 bg-[#6F57F5] mb-2 rounded-full text-white md:px-2 lg:px-4 flex mr-2 font-semibold"
              >
                Add Domains
              </a>
            </div>
          </>
        ) : (
          <>
            {" "}
            <MenuIcon tw="sm:hidden" onClick={() => useToggle(true)}></MenuIcon>
          </>
        )}
      </div>
      <div tw="mx-2 md:mx-16 border-blackLight border-2 rounded-md overflow-scroll">
        <table tw="table-auto w-full ">
          <tr tw="mx-8 bg-[#F2F2FC] text-[#808086] ">
            <th tw=" flex items-center ml-8 my-4 font-semibold">
              <Checkbox checked={selectAll}  onChange={(e)=>{
               setSelectAll(e.target.checked)
                
               setSelected(e.target.checked ? dashboardData : [])          
              }}></Checkbox>Domain name
            </th>
            <th tw="font-medium">Users</th>
            <th tw="font-medium">Domain status</th>
            <th tw="font-medium">Users created</th>
            <th tw="font-medium ">Tag</th>
          </tr>
          {dashboardData.map((val, key) => {
            return (
              <tr key={key} tw="text-center border-b border-blackLight">
                <td tw=" flex items-center mx-8 my-6 font-semibold">
                  <Checkbox checked={selected.includes(val)} onChange={(e)=>{
                    console.log(e.target.value, val, e.target.checked)
                    const value = val;
                    const isChecked = e.target.checked;
                
                    setSelected(prevOptions => {
                      if (isChecked) {
                        return [...prevOptions, value];
                      } else {
                        setSelectAll(false)
                        return prevOptions.filter(option => option !== value);
                      }
                    });
                    // if(e.target.checked){
                    //   setSelected(domain=> [...domain, val])
                    //   console.log(selected)
                    // }else{
                    //   prevArray => prevArray.filter(item => item !== val)
                    // }
                    // e.target.checked? setSelected(prevArray => prevArray.filter(item => item !== val)):setSelected(domain=> [...domain, val])
                    }
                  
                    }></Checkbox>
                  {val.domainame}
                </td>
                <td tw="">
                  {val.users.map((user, key) => {
                    return (
                      <span
                        tw="p-1 px-2 bg-[#EAEAFF]  rounded-full font-semibold mx-1"
                        key={key}
                      >
                        {user}
                      </span>
                    );
                  })}
                </td>
                <td>
                  {val.domainstatus == "Active" ? (
                    <span tw="p-1 px-2 bg-[#3EFF68]  rounded-full font-semibold mx-1">
                      {val.domainstatus}
                    </span>
                  ) : (
                    <span tw="p-1 px-2 bg-[#FF000F] text-white  rounded-full font-semibold mx-1">
                      {val.domainstatus}
                    </span>
                  )}
                </td>

                <td>
                  {val.userscreated == "Completed" ? (
                    <span tw="p-1 px-2 bg-[#008E1F] text-white  rounded-full font-semibold mx-1">
                      {val.userscreated}
                    </span>
                  ) : val.userscreated == "In progress" ? (
                    <span tw="p-1 px-2 bg-[#7676FF] text-white  rounded-full font-semibold mx-1">
                      {val.userscreated}
                    </span>
                  ) : (
                    <span tw="p-1 px-2 bg-[#56E775]  rounded-full font-semibold mx-1">
                      {val.userscreated}
                    </span>
                  )}
                </td>
                <td tw="font-semibold pr-3">{val.tag}</td>
              </tr>
            );
          })}
        </table>
        {dashboardData.length>0?<></>:<><div tw="text-5xl py-3 mx-auto text-center text-blackLight">
          No Domains Available
        </div></>}
        
      </div>
      <ToastContainer/>
    </Container>
  );
};
