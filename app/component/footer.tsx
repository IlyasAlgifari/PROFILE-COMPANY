"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "../../public/assets/logo-bumi-kuring.png"

const Footer = () => {
  return (
    <>
      <footer className=" bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">

          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center justify-center  text-teal-600 sm:justify-start">
                <Image className="mx-4" src={Logo} width={50} height={50} alt="Picture of the author" />
                <p className="font-bold">AURORA RESINDENCE</p>
            </div>

            <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
              Copyright &copy; 2022 by Mochamad Ilyas Al Gifari.
            </p>
          </div>
          
        </div>
      </footer>
    </>

  )
}

export default Footer;