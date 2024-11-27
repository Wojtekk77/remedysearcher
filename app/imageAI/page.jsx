"use client";

import React from 'react';
import { useState, useEffect } from "react";
import { useSession } from 'next-auth/react';
import RepertorySymptom from './RepertorySymptom';
import { PaginatedItems } from '@components/Paginate';


const RepertorySymptoms = ({ items }) => {

  console.log(items, 'items');

  if (!items) {
    return null;
  }

  return(
    items?.map(repertorySymptom => {
      return (
        <RepertorySymptom
          key={repertorySymptom._id}
          repertorySymptom={repertorySymptom}
        />
      );
    })
  )
};

const ImageAI = () => {
  
  const { data: session } = useSession();
  const isAdmin = session?.user?.isAdmin;
  const [data, setData] = useState();

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(`/api/imageAI`);
      const data = await response.json();
      setData(data);
    };

    if (session?.user?.isAdmin) fetchImages();
  }, [session?.user?.isAdmin])

  if (!isAdmin) {
    return <>ADMIN! Musisz być zalogowany jako ADMIN aby zobaczyć tę stronę.</>
  }

  // const RepertorySymptoms = data?.repertorySymptoms?.map(repertorySymptom => {
  //   return (
  //     <RepertorySymptom
  //       key={repertorySymptom._id}
  //       repertorySymptom={repertorySymptom}
  //     />
  //   );
  // });

  if (!data?.repertorySymptoms) {
    return <>No repertory symptoms</>
  }
    
  return (
    <>
      {/* {RepertorySymptoms} */}
      <PaginatedItems items={data?.repertorySymptoms} itemsPerPage={5} ModelItem={RepertorySymptoms} />
    </>
  );
  
};

export default ImageAI;

