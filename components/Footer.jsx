"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Footer = () => {


  return (
    <footer className="mt-4 bg-black text-center">
        <div className="w-full mx-auto max-w-screen-xl p-4 items-center">
          <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
           <b>Jeżeli chiałbyś/chciałabyś wesprzeć moją pracę proszę napisz maila na adres</b> remedysearcher@gmail.com
          </p>
          <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400 py-5">
              © 2023 <a href="https://remedysearcher.pl" className="hover:underline">RemedySearcher™</a>.
          </p>
        {/* <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
             <li>
                <a href="#" class="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
                <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li> 
                <a href="#" class="hover:underline me-4 md:me-6"></a>
            </li>
            <li>
                <a href="#" class="hover:underline">remedysearcher@gmail.com</a>
            </li>
          </ul> */}
        
        </div>
    </footer>
  );
};

export default Footer;
