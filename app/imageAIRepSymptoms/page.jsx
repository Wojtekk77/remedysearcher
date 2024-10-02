"use client";

import { useCallback } from 'react';
import { useState, useEffect } from "react";
import { useSession } from 'next-auth/react';
import RepertoySymptomImage from './RepertoySymptomImage';
import { PaginatedItems } from '@components/Paginate';
import { generalCreateModel } from '@utils';


const RepertorySymptomsImages = ({ items }) => {

  if (!items) {
    return null;
  }

  const addRepertorySymptom = useCallback(async({ values }) => {
      await generalCreateModel({ values, modelName: 'repertorySymptom' });
  }, []);

  return(
    items?.map(item => {
      return (
        <RepertoySymptomImage
          key={item.imagePath}
          repertorySymptoms={item.repertorySymptoms}
          imagePath={item.imagePath}
          property={item.property}
          addRepertorySymptom={addRepertorySymptom}
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
      const response = await fetch(`/api/imageAIRepSymptoms`);
      const data = await response.json();
      setData(data);
    };

    if (session?.user?.isAdmin) fetchImages();
  }, [session?.user?.isAdmin])

  if (!isAdmin) {
    return <>ADMIN! Musisz być zalogowany jako ADMIN aby zobaczyć tę stronę.</>
  }


  if (!data?.repertorySymptoms) {
    return <>No repertory symptoms</>
  }
    
  return (
    <>
      <PaginatedItems items={data?.repertorySymptoms} itemsPerPage={5} ModelItem={RepertorySymptomsImages} />
    </>
  );
  
};

export default ImageAI;

