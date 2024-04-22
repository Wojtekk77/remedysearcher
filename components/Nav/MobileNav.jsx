"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { GoogleLoginButton } from 'react-social-login-buttons';
import { isMobile } from 'react-device-detect';

const MobileNav = ({ providers }) => {
  const { data: session } = useSession();
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <nav className='flex-between w-full mb-16 pt-3 flex-row-reverse'>
      {/* Mobile Navigation */}
      <div className='flex relative'>
        {session?.user ? (
          <div className='flex'>
            <Link
              href='/'
              className='orange_button mr-5 '
              onClick={() => setToggleDropdown(false)}
            >
             Wyszukiwarka
            </Link>

            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className='dropdown'>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Mój profil
                </Link>
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className='mt-5 w-full black_btn'
                >
                  Wyloguj
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>
            {
              Object.values(providers || {}).length ? (
                Object.values(providers).map((provider) => (
                  <GoogleLoginButton 
                    key={provider.name}
                    disabled={!providers} // can also be written as disabled={true} for clarity
                    onClick={() => { signIn(provider.id) }}
                    size='30px'
                  />
                ))
              ) : (
                <GoogleLoginButton 
                  key={'no providers'}
                  disabled={true} // can also be written as disabled={true} for clarity
                  onClick={() => {console.log('wait for providers')}}
                  size='30px'
                />
              )
            }
          </div>
        )}
      </div>
    </nav>
  );
};

export default MobileNav;
