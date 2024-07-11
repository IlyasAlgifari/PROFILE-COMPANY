"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "../../public/assets/logo-bumi-kuring.png"

const Header = () => {

  const [isClick, setisClick] = useState(false);

  const toggleNavbar = (): void => {
    setisClick(!isClick)
  }

  return (
    <>
      <nav className="bg-gray-800 text-white p-1 sm:p-4 md:flex md:justify-between md:items-center">
        <div className="container mx-auto flex justify-between items-center">
          
          <a href="/" className="flex items-center text-xl font-bold">
          <Image className="mx-4" src={Logo} width={50} height={50} alt="Picture of the author" />
            AURORA RESIDENCE
          </a>

          <div className="hidden md:block">
            <div>

                <Link href="/" className="mx-6 hover:text-gray-300">
                  Home
                </Link>
              
                <Link href="/pages/about" className="mx-6 hover:text-gray-300">
                  About
                </Link>
              
                <Link href="/pages/product" className="mx-6 hover:text-gray-300">
                  Product
                </Link>
              
                <Link href="/pages/team" className="mx-6 hover:text-gray-300">
                  Teams
                </Link>
              </div>
          </div>

          <div className="md:hidden flex items-center">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-white
            hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" 
            onClick={toggleNavbar}>
              {isClick ? (
                <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                  <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                   />
                </svg>
              ) :(
                <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                  <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 6h16M4 12h16m-7 6h7"
                   />
                </svg>                
              )}
            </button>
          </div>

          </div>
          {isClick && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

              <Link href="/" className="mx-2 block hover:text-gray-300">
                  Home
                </Link>
              
                <Link href="/pages/about" className="mx-2 block hover:text-gray-300">
                  About
                </Link>
              
                <Link href="/pages/product" className="mx-2 block hover:text-gray-300">
                  Product
                </Link>
              
                <Link href="/pages/team" className="mx-2 block hover:text-gray-300">
                  Teams
                </Link>

              </div>
            </div>

          )}
      </nav>
    </>

  )
}

export default Header;