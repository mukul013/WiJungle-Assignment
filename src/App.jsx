import { useEffect, useState } from 'react'
import './App.css'
import * as d3 from 'd3' ;
import SourceIpChart from './components/SourceIpChart';
import { DestPortChart } from './components/DestPortChart';
import AlertCategoryChart from './components/AlertCategoryChart';
import AlertSeverityChart from './components/AlertSeverityChart';

function App() {
    
  const [data,setData] = useState() ;

  useEffect(() => {
    d3.json('eve_array.json')
        .then(rawData => {
            const processedData = processData(rawData);
            setData(processedData);
        });
}, []);


//pre-processing the demo data
const processData = (rawData) => {
  const srcIPCounts = d3.rollup(rawData, v => v.length, d => d?.src_ip);
  const srcIPData = Array.from(srcIPCounts, ([src_ip, count]) => ({ src_ip, count }))
      .sort((a, b) => d3.descending(a.count, b.count))
      .slice(0, 10);

  const destPortCounts = d3.rollup(rawData, v => v.length, d => d?.dest_port);
  const destPortData = Array.from(destPortCounts, ([dest_port, count]) => ({ dest_port, count }))
      .sort((a, b) => d3.descending(a.count, b.count))
      .slice(0, 10);

  const categoryCounts = d3.rollup(rawData, v => v.length, d => d?.alert?.category);
  const categoryData = Array.from(categoryCounts, ([category, count]) => ({ category, count }));

  const severityCounts = d3.rollup(rawData, v => v.length, d => d?.alert?.severity);
  const severityData = Array.from(severityCounts, ([severity, count]) => ({ severity, count }));
  [severityData[0], severityData[1]] = [severityData[1], severityData[0]];

  return {
      srcIPData,
      destPortData,
      categoryData,
      severityData,
  };
};


  return (

    <div className=''>
    <div className='text-white font-semibold text-3xl md:text-2xl text-center mb-3 font-serif'>USER DASHBOARD</div>
    {data ? (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2 h-96 bg-[#1E263B] shadow-md rounded-md pt-6">
              <SourceIpChart data={data.srcIPData} />
            </div>
            <div className="w-full md:w-1/2 h-96 bg-[#1E263B] shadow-md rounded-md pt-6">
              <DestPortChart data={data.destPortData} />
            </div>
          </div>
          <div className="h-72 bg-[#1E263B] shadow-md rounded-md p-4">
            <AlertSeverityChart data={data.severityData}/>
          </div>
        </div>
        <div className="h-full bg-[#1E263B] shadow-md rounded-md pt-8 md:pt-40 sm:mb-10">
          <AlertCategoryChart data={data.categoryData}/>
        </div>
        <div className="pt-2 md:pt-40"></div> 
      </div>
    ) : (
      <p>Loading data...</p>
    )}
  </div>
  
  )
}

export default App
