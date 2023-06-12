"use client";

import React, { useEffect, useState } from 'react'
import {BsFillMoonFill} from "react-icons/bs"
import {MdLightMode} from "react-icons/md"
import { useTheme } from 'next-themes'

export default function DarkModeSwitch() {
    const {theme, setTheme, systemTheme} = useTheme();
    const [mounted, setMounted] = useState(false);


    useEffect(() => setMounted(true), [])

    const currentTheme = theme === "system" ? systemTheme : theme;

  return (
     <>
       { mounted && currentTheme === "dark" ? (
        <MdLightMode className='text-xl cursor-pointer hover:text-amber-500' onClick={() => setTheme("light")} />
       ) : (
        <BsFillMoonFill className='text-xl cursor-pointer hover:text-amber-500' onClick={() => setTheme("dark")} />
       ) }

       
     
     </>
  )
}
