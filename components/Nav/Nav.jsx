"use client";

import { useEffect, useState } from "react";
import { getProviders } from "next-auth/react";
import MobileNav from './MobileNav';
// import DesktopNav from './DesktopNav';
// import { ClientOnly } from '@components/ClientOnly';
// import { isMobile } from 'react-device-detect';

const Nav = () => {

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <>
      <MobileNav providers={providers} />
      {/* <ClientOnly>
        {
          isMobile ? <MobileNav providers={providers} /> : <DesktopNav providers={providers} />
        }
      </ClientOnly> */}
    </>
  )
};

export default Nav;
