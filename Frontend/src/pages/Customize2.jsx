import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { useContext } from 'react';
import { userDataContext } from '../context/UserContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Customize2 = () => {
   
    const{userData}=useContext(userDataContext);
    const [assistantName ,setAssistantName]=useState(userData?.assistantName ||"" );

    return (
        <div className='w-full min-h-screen bg-linear-to-t from-[black] to-[#010b38] flex 
                   justify-center items-center md:py-3 p-0 flex-col ' >

            <h1 className=' text-center text-blue-400 text-[30px] font-semibold  mb-5  '>
                Enter Your <br className="block sm:hidden" />
                <span className='text-orange-300'>Assistant Name</span>
            </h1>

            <input
                type="text"
                placeholder="Example :  Jarvis"
                className="
                           w-[90%]
                           max-w-150
                           h-12
                           sm:h-14
                           md:h-15
                           mt-2
                           outline-none
                           border-2 border-white
                           bg-transparent
                         text-white
                         placeholder-gray-400
                           px-4 sm:px-5
                           rounded-full
                           text-base sm:text-lg"
                 required onChange={(e)=>setAssistantName(e.target.value)} 
                 value={assistantName} />
         {assistantName &&
          <button
            className="
            group
            w-[90%]
            max-w-[320px]
            h-12
            sm:h-13
            mt-7
          bg-orange-100
            rounded-full
          text-amber-800
            text-base
            sm:text-lg
            md:text-xl
            font-semibold
            cursor-pointer
          hover:bg-orange-300
            shadow-2xl
          shadow-amber-100
            flex
            gap-2
            justify-center
            items-center
            mx-auto
             "
            onClick={() => navigate('/customize2')}>
            Finally Create Your Assistant
           <FaArrowRightLong className="text-amber-800 transition-transform 
                                  duration-300 group-hover:translate-x-1" />
          </button>
         }       

        </div>
    )
}

export default Customize2
