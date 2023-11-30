"use client";

import { useState, useEffect } from "react";


const RemedySearchResultCardList = ({ remedies }) => {

    return (
        <>

            <div className='mt-1 comment_layout'>
                {remedies.map((remedy, i) => (
                    <RemedySearchResultCard
                    key={remedy.remedyName}
                    remedy={remedy}
                    first={i === 0}
                    last={i === remedies.length - 1}
                    />
                ))}
            </div>
        </> 
    );
};

export default RemedySearchResultCardList;
