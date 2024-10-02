"use client";

import { useState, useEffect } from "react";
import { useSession } from 'next-auth/react';
import RepertoryImageJSON from './RepertoryImageJSON';
import { PaginatedItems } from '@components/Paginate';


const RepertoryImageJSONs = ({ items }) => {

  console.log(items, 'items');

  if (!items) {
    return null;
  }

  return(
    items?.map(repertoryImageJSON => {
      return (
        <RepertoryImageJSON
          key={repertoryImageJSON._id}
          repertoryImageJSON={repertoryImageJSON}
        />
      );
    })
  )
};

const RepertoryImageJSONAI = () => {
  
  const { data: session } = useSession();
  const isAdmin = session?.user?.isAdmin;
  const [data, setData] = useState();

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(`/api/repertoryImageJSON`);
      const data = await response.json();
      setData(data);
    };

    if (session?.user?.isAdmin) fetchImages();
  }, [session?.user?.isAdmin])

  if (!isAdmin) {
    return <>ADMIN! Musisz być zalogowany jako ADMIN aby zobaczyć tę stronę.</>
  }

  if (!data?.repertoryImageJSONs) {
    return <>No repertory image - json</>
  }
    
  return (
    <>
      <PaginatedItems items={data?.repertoryImageJSONs} itemsPerPage={5} ModelItem={RepertoryImageJSONs} />
    </>
  );
  
};

export default RepertoryImageJSONAI;

