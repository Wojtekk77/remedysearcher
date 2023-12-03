"use client";

import React from 'react';
import RemedySearchResultCard from './RemedySearchResultCard';

const RemedySearchResultCardList = ({ remedies }) => {

    return (
        <>
            <div className='comment_layout'>
                {remedies.map((remedy, i) => (
                    <RemedySearchResultCard
                        key={`${remedy.remedyName}_${i}`}
                        remedy={remedy}
                        first={i === 0}
                        last={i === remedies.length - 1}
                    />
                ))}
            </div>
        </> 
    );
};

export default React.memo(RemedySearchResultCardList);
