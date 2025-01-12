"use client";

import React, { useEffect, useState } from "react";
import { getProviders } from "next-auth/react";
import MobileNav from './MobileNavLegacy';
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
    <div className="md:hidden">
      <MobileNav providers={providers} />
      {/* <ClientOnly>
        { // for now use mobile nav as it works fine on desktop and mobile
          isMobile ? <MobileNav providers={providers} /> : <DesktopNav providers={providers} />
        }
      </ClientOnly> */}
    </div>
  )
};

export default Nav;
