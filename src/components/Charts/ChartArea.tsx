import { theme } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2021-03-18T00:00:00.000Z',
      '2021-03-19T00:00:00.000Z',
      '2021-03-20T00:00:00.000Z',
      '2021-03-21T00:00:00.000Z',
      '2021-03-22T00:00:00.000Z',
      '2021-03-23T00:00:00.000Z',
      '2021-03-24T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
    colors: [theme.colors.purple[500]],
  },
  colors: [theme.colors.purple[500]],
};

const series = [
  {
    name: 'series1',
    data: [
      Math.floor(Math.random() * 10) + 1,
      Math.floor(Math.random() * 20) + 1,
      Math.floor(Math.random() * 15) + 1,
      Math.floor(Math.random() * 10) + 5,
      Math.floor(Math.random() * 20) + 5,
      Math.floor(Math.random() * 8) + 2,
      Math.floor(Math.random() * 15) + 2,
    ],
  },
];

export function ChartArea() {
  return <Chart options={options} series={series} type="area" height={160} />;
}
