"use client"

import {ThemeToggle} from "./ThemeToggle"
import LogoMdc from "../../public/NFT.jpg"
import Image from "next/image"
import Link from "next/link"

const NavBar = () => {
  return (
    <nav className="max-w-[1200px] w-full mx-auto h-[80px] flex items-center justify-between p-5 border-b  border-gray-300">
      
      <div>
        <Link href='/Dash'>
         <Image width={30} height={30} src={LogoMdc} className=" w-12 h-12" alt="NFT" />
        </Link>
      </div>

       <div className="flex items-center gap-4">
        <ThemeToggle />
      </div> 
    </nav>
  )
}

export default NavBar
