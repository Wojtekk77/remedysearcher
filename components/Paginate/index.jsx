"use client";
import React, { useEffect } from 'react';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

export const PaginatedItems = ({ itemsPerPage = 10, items, ModelItem }) => {
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
  
    useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = event.selected * itemsPerPage % items.length;
      console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
      setItemOffset(newOffset);
    };
    
    console.log(currentItems, 'currentItems 1')
    return (
      <>
        <ModelItem items={currentItems} />
        <ReactPaginate
        //   nextLabel="next >"
        //   onPageChange={handlePageClick}
        //   pageRangeDisplayed={3}
        //   marginPagesDisplayed={2}
        //   pageCount={pageCount}
        //   previousLabel="< previous"
        //   pageClassName="page-item"
        //   pageLinkClassName="page-link"
        //   previousClassName="page-item"
        //   previousLinkClassName="page-link"
        //   nextClassName="page-item"
        //   nextLinkClassName="page-link"
        //   breakLabel="..."
        //   breakClassName="page-item"
        //   breakLinkClassName="page-link"
        //   containerClassName="pagination"
        //   activeClassName="active"
        //   renderOnZeroPageCount={null}
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
        />
      </>
    );
  }