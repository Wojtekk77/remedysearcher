"use client";

import React, { useState } from "react";
import { useEffect } from 'react';
import Remedy from './Remedy';
import { usePathname, useRouter } from '@node_modules/next/navigation';
import { useSession } from '@node_modules/next-auth/react';

const RemedyView = () => {

  const pathname = usePathname().includes('remedium') ? usePathname().replace('remedium', 'remedy') : usePathname();

  const [remedy, setRemedy] = useState([]);
  const [loading, setLoading] = useState(false)
  console.log(pathname, 'pathname')

  useEffect(() => {
    const fetchRemedy = async () => {
      setLoading(true);

      try {
        const response = await fetch(`/api${pathname}`);  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRemedy(data.remedy);
      } catch (error) {
        console.error("Error fetching images:", error);
        setLoading(false);
      }
    };

    fetchRemedy();

  }, [])


  return <Remedy remedy={remedy} />;
};

export default React.memo(RemedyView);
