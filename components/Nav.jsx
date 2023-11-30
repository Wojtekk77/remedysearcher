"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { GoogleLoginButton } from 'react-social-login-buttons';
import { isMobile } from 'react-device-detect';

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  if (!isMobile) {
    return (
      <nav className='flex-between w-full mb-16 pt-3'>
        <div className='flex relative'>
          <Link href='/' className='flex gap-2 flex-center'>
            {/* <Image
              src='/assets/images/logo.png'
              alt='logo'
              width={100}
              height={60}
              className='object-contain'
            /> */}
          </Link>
    
          {/* Desktop Navigation */}
          <div className='sm:flex'>
            {session?.user ? (
              <div className='flex gap-3 md:gap-5'>
                <Link href='/create-comment' className='black_btn'>
                  Stwórz komentarz
                </Link>
    
                <button type='button' onClick={signOut} className='outline_btn'>
                  Wyloguj
                </button>
    
                <Link href='/profile'>
                  <Image
                    src={session?.user.image}
                    width={37}
                    height={37}
                    className='rounded-full'
                    alt='profile'
                  />
                </Link>
              </div>
            ) : (
              <>
                {
                  Object.values(providers || [{ name: 'desktop' }]).map((provider) => (
                    <GoogleLoginButton 
                      key={provider.name}
                      disabled={!providers} // can also be written as disabled={true} for clarity
                      onClick={() => { signIn(provider.id) }}
                      size='30px'
                    />
                  ))
                }
              </>
            )}
          </div>
        </div>
      </nav>
    )
  }
  
  return (
    <nav className='flex-between w-full mb-16 pt-3 flex-row-reverse'>
      {/* Mobile Navigation */}
      <div className='flex relative'>
        {session?.user ? (
          <div className='flex'>
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
                <Link
                  href='/create-comment'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Stwórz komentarz
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
          <>
            {
              Object.values(providers || [{ name: 'mobile' }]).map((provider) => (
                <GoogleLoginButton 
                  key={provider.name}
                  disabled={!providers} // can also be written as disabled={true} for clarity
                  onClick={() => { signIn(provider.id) }}
                  size='30px'
                />
              ))
            }
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
