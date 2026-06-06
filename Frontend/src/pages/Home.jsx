import React from 'react'
import { userDataContext } from '../context/UserContext'
import { useContext } from 'react';
import { IoArrowBackSharp } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home() {

//import the image 
const {userData,serverUrl,setUserData}= useContext(userDataContext);
const navigate =useNavigate();


//Log out funcaton
const handleLogOut=async()=>{
  try {
    const result =await axios.get(`${serverUrl}/api/auth/logout`,{withCredentials:true})
     setUserData(null)
       navigate("/signin")
    
  } catch (error) {
    setUserData(null)
    console.log(error)
  }
}


  return (   
    <div className='w-full min-h-screen bg-linear-to-t from-[black] to-[#010b38] flex 
                   justify-center items-center md:py-3 p-0 flex-col gap-4 ' >
       

     
        
        <button //Assiatant Setup
            className="
            absolute top-0 right-8
            group
            w-[90%]
            max-w-35
            h-9
            mt-7 
            rounded-full
            bg-linear-to-r from-blue-700 to-blue-1000
           text-white  text-sm 
            border-2 border-blue-900
            cursor-pointer
            shadow-lg shadow-cyan-500/30
            hover:shadow-cyan-500/50
            hover:scale-105
            transition-all duration-100
            flex
            gap-2
            justify-center
            items-center
            mx-auto"
            onClick={()=>navigate("/customize")}>
               Assistant Setup
              <IoArrowBackSharp className='rotate-180' />
        </button>
      
        <button //Log Out 
            className="
            absolute top-0 left-8
            group
            w-[90%]
            max-w-25
            h-8
            mt-7
            rounded-full
            bg-linear-to-r from-blue-700 to-blue-1000
           text-white  text-sm       
            border-2 border-blue-900
            cursor-pointer
            shadow-lg shadow-cyan-500/30
            hover:shadow-cyan-500/50
            hover:scale-105
            transition-all duration-100
            flex
            gap-2
            justify-center
            items-center
            mx-auto"
            onClick={handleLogOut}>
              <TbLogout2 />
               Log Out
              
        </button>
      
      <div className='md:w-70 w-60 md:h-90 h-90 flex justify-center overflow-hidden items-center rounded-4xl'>
         <img src={userData?.assistantImage} alt="Assistant" 
         className='w-full h-full object-cover shadow-lg ' />
      </div>
      
      <h1 className="text-white font-semibold text-[18px]">
        I am {userData?.assistantName || "your Assistant"}
      </h1>
        
    </div>

  )
}

export default Home
