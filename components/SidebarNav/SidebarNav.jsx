"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { GoogleLoginButton } from 'react-social-login-buttons';
import { FaAngleRight, FaChartBar, FaExternalLinkAlt, FaPersonBooth, FaRegComments, FaSearch, FaSignOutAlt } from 'react-icons/fa';


const SidebarNav = ({}) => {
  const { data: session } = useSession();
  const [toggled, setToggled] = useState(true);
  const [providers, setProviders] = useState(null);

  const currentPath = usePathname();

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <div className='sidebar flex flex-col'>
      <div className='logo'>
        <h1 className='head_text_sidebar'>
          <span className='orange_gradient text-center'>Remedy Searcher</span>
        </h1>
      </div>

      <div>
        <ul className='list-none'>
          {
            session?.user && (
              <>
                <li className="login_image">

                </li>
                <li className={currentPath == '/profile' ? 'active' : ''}>
                  <Link href='/profile' className='sidebar_button' >
                    <div className='pr-3'>
                      <Image
                        src={session?.user.image}
                        width={27}
                        height={27}
                        className='rounded-full'
                        alt='profile'
                      />
                    </div>
                    <div className="grow">Twój profil</div>
                    <div><FaAngleRight className='text-lg font-light' /></div>
                  </Link>
              </li>
              <li>
                <button
                    type='button'
                    onClick={signOut}
                    className='sidebar_button'
                  >
                    <div className='pr-3 pl-6'><FaSignOutAlt className='text-md font-light' /></div>
                    Wyloguj
                  </button>
                </li>
            </>
            )
          }
          { !session?.user && (
            <>
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
            </>
          )}
          <li className={currentPath == '/' ? 'active' : ''}>
            <Link href='/' className='sidebar_button' >
              <div className='pr-3'><FaSearch className='text-md font-light' /></div>
              <div className="grow">Szukaj klasycznie</div>
              <div><FaAngleRight className='text-lg font-light' /></div>
            </Link>
          </li>
          <li className={currentPath == '/wyszukiwarka-kliniczna' ? 'active' : ''}>
            <Link href='/wyszukiwarka-kliniczna' className='sidebar_button' >
              <div className='pr-3'><FaSearch className='text-md font-light' /></div>
              <div className="grow">Szukaj klinicznie</div>
              <div><FaAngleRight className='text-lg font-light' /></div>
            </Link>
          </li>
          {/* <li className={currentPath == '/create-comment' ? 'active' : ''}>
            <Link href='/create-comment' className='sidebar_button' >
              <div className='pr-3'><FaRegComments className='text-md font-light' /></div>
              <div className="grow">Komentarz</div>
              <div><FaAngleRight className='text-lg font-light' /></div>
            </Link>
          </li> */}
          { session?.user?.isAdmin && (
            <>
              <li className={currentPath == '/repertoryzacja' ? 'active' : ''}>
                <Link href='/repertoryzacja' className='sidebar_button' >
                  <div className='pr-3'><FaChartBar className='text-md font-light' /></div>
                  <div className="grow">Repertoryzacja</div>
                  <div><FaAngleRight className='text-lg font-light' /></div>
                </Link>
              </li>
              <li className={currentPath == '/stats' ? 'active' : ''}>
                <Link href='/stats' className='sidebar_button' >
                  <div className='pr-3'><FaChartBar className='text-md font-light' /></div>
                  <div className="grow">Statystyki</div>
                  <div><FaAngleRight className='text-lg font-light' /></div>
                </Link>
              </li>
              <li className={currentPath == '/imageAI' ? 'active' : ''}>
                <Link href='/imageAI' className='sidebar_button' >
                  <div className='pr-3'><FaChartBar className='text-md font-light' /></div>
                  <div className="grow">Images AI</div>
                  <div><FaAngleRight className='text-lg font-light' /></div>
                </Link>
              </li>
              <li className={currentPath == '/imageAIRepSymptoms' ? 'active' : ''}>
                <Link href='/imageAIRepSymptoms' className='sidebar_button' >
                  <div className='pr-3'><FaChartBar className='text-md font-light' /></div>
                  <div className="grow">Image AI Rep Symptoms</div>
                  <div><FaAngleRight className='text-lg font-light' /></div>
                </Link>
              </li>
              <li className={currentPath == '/repertoryImageJSONAI' ? 'active' : ''}>
                <Link href='/repertoryImageJSONAI' className='sidebar_button' >
                  <div className='pr-3'><FaChartBar className='text-md font-light' /></div>
                  <div className="grow">Repertory Image JSON AI</div>
                  <div><FaAngleRight className='text-lg font-light' /></div>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>

    </div>
  );
};

export default SidebarNav;
