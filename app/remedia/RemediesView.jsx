"use client";

import React, { useState } from "react";
import { useEffect } from 'react';
import Remedies from './Remedies';

const RemediesView = () => {

  const [remedies, setRemedies] = useState([]);
  

  useEffect(() => {

    const getAllRemedies = async () => {

      try {
        let response = await fetch(`/api/remedies`, {
          method: "GET",
        });

        response = await response.json();
        setRemedies(response.remedies);
      } catch (error) {
        console.log(error);
      }
    }
    
    

    getAllRemedies()

  }, []);


  return <Remedies remedies={remedies} />;
};

export default React.memo(RemediesView);
