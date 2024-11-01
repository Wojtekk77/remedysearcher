"use client";

import React, { createContext, useCallback } from 'react';
import { useState, useEffect } from "react";
import { useSession } from 'next-auth/react';
import RepertoySymptomImage from './RepertoySymptomImage';
import { PaginatedItems } from '@components/Paginate';
import { generalCreateModel } from '@utils';
import ReactPaginate from 'react-paginate';


const RepertorySymptomsImages = ({ items }) => {


  if (!items) {
    return null;
  }


  return(
    items?.map(item => {
      return (
        <RepertoySymptomImage
          key={item.imagePath}
          repertorySymptoms={item.repertorySymptoms}
          imagePath={item.imagePath}
          property={item.property}
        />
      );
    })
  )
};

export const ParentChildrenContext = createContext(null);

const ImageAI = () => {
  
  
  const { data: session } = useSession();
  const [parent, setParent] = useState(null);
  const [children, setChildren] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state
  const [pageCount, setPageCount] = useState(0); // Total number of pages
  const [currentPage, setCurrentPage] = useState(0); // Current page (0-indexed)
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const isAdmin = session?.user?.isAdmin;
  const [data, setData] = useState();

  const addRepertorySymptom = useCallback(async({ values }) => {
    await generalCreateModel({ values, modelName: 'repertorySymptom' });
  }, []);

  const handleSetParent = useCallback(({ _id }) => {
    setParent(parent?.toString() === _id.toString() ? null : _id.toString())
    if (parent?.toString() === _id.toString()) {
      setChildren([]);
    }
  }, [parent, children]);

  const handleSetChildren = useCallback(({ _id }) => {
    if (children.includes(_id.toString())) {
      setChildren(children.filter(child => child !== _id.toString()))
    }
    else {
      const arr = [...children, _id.toString()];
      setChildren(arr)
    }
  }, [children]);

  // const fetchImages = async () => {
  //   const response = await fetch(`/api/imageAIRepSymptoms?_page=2&_limit=4`);
  //   const data = await response.json();
  //   setData(data);
  // };

  const handleSaveParency = useCallback(async ({ parent, children }) => {
    try {
      const response = await fetch(`/api/repertorySymptom`, {
        method: "PATCH",
        body: JSON.stringify({
          values: {
            parent,
            children,
          }
        }),
      });

    } catch (error) {
      console.log(error);
    }
  },[parent, children]);


  const handleCombineRepSymptoms = useCallback(async ({ parent, children }) => {
    try {
      const response = await fetch(`/api/repertorySymptom`, {
        method: "PATCH",
        body: JSON.stringify({
          values: {
            parent,
            children,
            cobineSymptoms: true,
          }
        }),
      });

    } catch (error) {
      console.log(error);
    }
  },[parent, children]);

  // Handle page click
  const handlePageClick = (data) => {
    console.log(data, 'data on page change')
    setCurrentPage(data.selected); // React-paginate passes selected page (0-indexed)
  };

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);

      try {
        // Fetch posts for the current page from the API using _page and _limit
        const response = await fetch(`/api/imageAIRepSymptoms?_page=${currentPage + 1}&_limit=${itemsPerPage}`);
        const data = await response.json();
        setData(data);
        // Get total number of posts from the "totalImages" header
        const imagesTotal = response.headers.get("imagesTotal");
        setPageCount(Math.ceil(imagesTotal / itemsPerPage)); // Set total number of pages

        setLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
        setLoading(false);
      }
    };

    if (session?.user?.isAdmin) fetchImages();
  }, [session?.user?.isAdmin, currentPage, itemsPerPage])

  if (!isAdmin) {
    return <>ADMIN! Musisz być zalogowany jako ADMIN aby zobaczyć tę stronę.</>
  }

  if (loading) {
    return <>Loading...</>
  }

  if (!data?.repertorySymptoms) {
    return <>No repertory symptoms</>
  }

    
  return (
    <ParentChildrenContext.Provider value={{ parent, handleSetParent, children, handleSetChildren, handleSaveParency, handleCombineRepSymptoms, addRepertorySymptom }}>
      
      <RepertorySymptomsImages items={data?.repertorySymptoms} />
      <ReactPaginate
          breakLabel="..."
          nextLabel="->"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<-"
          renderOnZeroPageCount={null}
          className="pagination"
          activeClassName="activePage"
          pageClassName="page"
          forcePage={currentPage}
      />
      <button className="addButton" onClick={() => setItemsPerPage(itemsPerPage + 1)}>
        +1 zdjęcie
      </button>
    </ParentChildrenContext.Provider>
  );
  
};

export default ImageAI;

