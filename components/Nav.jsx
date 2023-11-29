"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import GoogleButton from 'react-google-button';

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

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
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
      <div className='sm:flex hidden'>
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
              Object.values(providers || [{ name: 'disabled' }]).map((provider) => (
                <GoogleButton
                  key={provider.name}
                  disabled={!providers} // can also be written as disabled={true} for clarity
                  onClick={() => { signIn(provider.id) }}
                  label='Zaloguj z Google'
                />
              ))
            }
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className='sm:hidden flex relative'>
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
              Object.values(providers || [{ name: 'disabled' }]).map((provider) => (
                <GoogleButton
                  key={provider.name}
                  disabled={!providers} // can also be written as disabled={true} for clarity
                  onClick={() => { signIn(provider.id) }}
                  label='Zaloguj z Google'
                  style={{ borderRadius: 4, height: '50px', width: '240px', }}
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
