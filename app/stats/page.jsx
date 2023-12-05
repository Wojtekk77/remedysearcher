"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from 'next-auth/react';
import * as React from 'react';
import { BarPlot } from '@mui/x-charts/BarChart';
import { LinePlot } from '@mui/x-charts/LineChart';
import { ChartContainer } from '@mui/x-charts/ChartContainer';

import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';


import Form from "@components/Form";
import { ClientOnly } from '@components/ClientOnly';

const series = [
  {
    type: 'bar',
    stack: '',
    yAxisKey: 'eco',
    data: [2, 5, 3, 4, 1],
  },
  // {
  //   type: 'bar',
  //   stack: '',
  //   yAxisKey: 'eco',
  //   data: [5, 6, 2, 8, 9],
  // },
  // {
  //   type: 'line',
  //   yAxisKey: 'pib',
  //   color: 'red',
  //   data: [1000, 1500, 3000, 5000, 10000],
  // },
];

const Statistics = () => {
  
  const router = useRouter();
  const { data: session } = useSession();
  const isAdmin = session?.user?.isAdmin;

  const [statistics, setStatistics] = useState([]);

  useEffect(() => {

    if (isAdmin) {
      const getStatistics = async () => {
        const response = await fetch('/api/stats');
        const data = await response.json();
  
        setStatistics(data.statistics);
      };
  
      getStatistics();
    }

  }, [isAdmin]);


  const XaxisData = statistics?.map(s => `${s._id.year}-${s._id.month}-${s._id.day}`) || [];
  const YaxisSeries = statistics?.map(s => `${s.count}`) || [];

  return (
    statistics?.length && (
      <ChartContainer
        series={[
          {
            type: 'bar',
            stack: '',
            yAxisKey: 'eco',
            data: YaxisSeries,
          }
        ]}
        width={500}
        height={400}
        xAxis={[
          {
            id: 'years',
            data: XaxisData,
            scaleType: 'band',
            valueFormatter: (value) => value.toString(),
          },
        ]}
        yAxis={[
          {
            id: 'eco',
            scaleType: 'linear',
          },
          // {
          //   id: 'pib',
          //   scaleType: 'log',
          // },
        ]}
      >
        <BarPlot />
        <LinePlot />
        <ChartsXAxis label="Dzień" position="bottom" axisId="years" />
        <ChartsYAxis label="Ilość zapytań" position="left" axisId="eco" />
        {/* <ChartsYAxis label="PIB" position="right" axisId="pib" /> */}
      </ChartContainer>
    ) || null
  );
};

export default Statistics;
