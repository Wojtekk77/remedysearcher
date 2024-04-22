"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useSession } from 'next-auth/react';
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';


const Statistics = () => {
  
  const router = useRouter();
  const { data: session } = useSession();
  const isAdmin = session?.user?.isAdmin;
  const [submitting, setIsSubmitting] = useState(false);

  const [statistics, setStatistics] = useState([]);

  const handleScript = async (e) => {
    setIsSubmitting(true);
    e.preventDefault();
    try {
      let response = await fetch("/api/stats", {
        method: "POST",
        body: JSON.stringify({}),
      });
      const data = await response.json();
      setStatistics(data.statistics);

    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const XaxisData = statistics?.map(s => `${s._id.year}-${s._id.month}-${s._id.day}`) || [];
  const YaxisSeries = statistics?.map(s => `${s.count}`) || [];
  const YaxisSeriesQueries = statistics?.map(s => (
    <p key={`${s._id.year}-${s._id.month}-${s._id.day}`} style={{ borderBottom: 'solid 1px black'}}>
      {`${s._id.year}-${s._id.month}-${s._id.day} (${(s.count)}): ${s.queries?.join(', ')}` || ''}
    </p>)
  ) || [];
  const barChartsParams = {
    xAxis: [
      {
        data: XaxisData, // ['page A', 'page B', 'page C', 'page D', 'page E'],
        scaleType: 'band',
        label: 'Dzień',
      },
    ],
    series: [
      { data: YaxisSeries, stack: '1', label: 'Ilość zapytań' },
      // { data: YaxisSeriesQueries, stack: '1', label: 'Wyszukiwania' },
    ],
    yAxis: [
      {
        label: 'Ilość zapytań',
      },
    ],
    margin: { top: 10, right: 10 },
    height: 400,
    slotProps: {
      legend: {
        hidden: true,
      },
    },
  };
  return (
    <>
      { !YaxisSeries.length ? null : <BarChart {...barChartsParams} tooltip={{ trigger: 'axis' }} /> }
      <div style={{ display: 'block' }}>
        { !YaxisSeries.length ? null : YaxisSeriesQueries }
      </div>
      <button
        type='submit'
        disabled={submitting}
        onClick={handleScript}
        className='mt-5 px-7 py-2 text-sm bg-primary-orange rounded-full text-white'
      >
        {submitting ? `Czekanie...` : 'Zobacz statystyki'}
      </button> 
  </>
  )
};

export default Statistics;
