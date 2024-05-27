import React, { useEffect, useState } from 'react';
import BarChart from './BarChart';
import { getYearFromDate } from './Helpers';

const App = () => {
  const [data, setData] = useState([]);
  const [intensity, setIntensity] = useState([]);
  const [likelihood, setLikelihood] = useState([]);
  const [relevance, setRelevance] = useState([]);
  const [year, setYear] = useState([]);
  const [country, setCountry] = useState([]);
  const [topics, setTopics] = useState([]);
  console.log("this is your topic " + topics)
  const [region, setRegion] = useState([]);
  const [city, setCity] = useState([]);
  const [sector, setSector] = useState([]);
  const [pest, setPest] = useState([]);
  const [source, setSource] = useState([]);
  const [swot, setSwot] = useState([]);

  const [startYearFilter, setStartYearFilter] = useState('');
  const [endYearFilter, setEndYearFilter] = useState('');
  const [topicsFilter, setTopicsFilter] = useState('');
  const [sectorFilter, setSectorFilter] = useState('');
  const [regionFilter, setRegionFilter] = useState('');
  const [pestFilter, setPestFilter] = useState('');
  const [sourceFilter, setSourceFilter] = useState('');
  const [swotFilter, setSwotFilter] = useState('');
  const [countryFilter, setCountryFilter] = useState('');
  const [cityFilter, setCityFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/v1/getData');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        const data = responseData.data;
        
        const years = data.map((item) => getYearFromDate(item.published));

        setData(data);
        setYear(years);
        setCountry(data.map((item) => item.country));
        setTopics(data.flatMap((item) => item.topic)); // Ensure topics are flattened
        setRegion(data.map((item) => item.region));
        setCity(data.map((item) => item.city));
        setSector(data.map((item) => item.sector));
        setPest(data.map((item) => item.pestle));
        setSource(data.map((item) => item.source));
        setSwot(data.map((item) => item.swot));
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const filterData = () => {
    let filteredData = data;
    if (startYearFilter) {
      filteredData = filteredData.filter((item) => getYearFromDate(item.published) >= parseInt(startYearFilter));
    }
    if (endYearFilter) {
      filteredData = filteredData.filter((item) => getYearFromDate(item.published) <= parseInt(endYearFilter));
    }
    if (topicsFilter) {
      filteredData = filteredData.filter((item) => item.topic === topicsFilter);
    }
    if (sectorFilter) {
      filteredData = filteredData.filter((item) => item.sector === sectorFilter);
    }
    if (regionFilter) {
      filteredData = filteredData.filter((item) => item.region === regionFilter);
    }
    if (pestFilter) {
      filteredData = filteredData.filter((item) => item.pestle === pestFilter);
    }
    if (sourceFilter) {
      filteredData = filteredData.filter((item) => item.source === sourceFilter);
    }
    if (swotFilter) {
      filteredData = filteredData.filter((item) => item.swot === swotFilter);
    }
    if (countryFilter) {
      filteredData = filteredData.filter((item) => item.country === countryFilter);
    }
    if (cityFilter) {
      filteredData = filteredData.filter((item) => item.city === cityFilter);
    }

    setIntensity(filteredData.map((item) => item.intensity));
    setLikelihood(filteredData.map((item) => item.likelihood));
    setRelevance(filteredData.map((item) => item.relevance));
    setYear(filteredData.map((item) => getYearFromDate(item.published)));
  };

  useEffect(() => {
    filterData();
  }, [startYearFilter, endYearFilter, topicsFilter, sectorFilter, regionFilter, pestFilter, sourceFilter, swotFilter, countryFilter, cityFilter]);

  const uniqueOptions = (array) => {
    return Array.from(new Set(array)).filter(Boolean);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Chart Dashboard</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-4">
        {/* Start Year Filter */}
        <select
          className="border rounded-md p-2 w-40"
          value={startYearFilter}
          onChange={(e) => setStartYearFilter(e.target.value)}
        >
          <option value="">Select Start Year</option>
          {uniqueOptions(year).map((yearOption) => (
            <option key={yearOption} value={yearOption}>
              {yearOption}
            </option>
          ))}
        </select>

        {/* End Year Filter */}
        <select
          className="border rounded-md p-2 w-40"
          value={endYearFilter}
          onChange={(e) => setEndYearFilter(e.target.value)}
        >
          <option value="">Select End Year</option>
          {uniqueOptions(year).map((yearOption) => (
            <option key={yearOption} value={yearOption}>
              {yearOption}
            </option>
          ))}
        </select>

        {/* Topics Filter */}
        <select
          className="border rounded-md p-2 w-40"
          value={topicsFilter}
          onChange={(e) => setTopicsFilter(e.target.value)}
        >
          <option value="">Select Topics</option>
          {uniqueOptions(topics).map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>

        {/* Sector Filter */}
        <select
          className="border rounded-md p-2 w-40"
          value={sectorFilter}
          onChange={(e) => setSectorFilter(e.target.value)}
        >
          <option value="">Select Sector</option>
          {uniqueOptions(sector).map((sectorOption) => (
            <option key={sectorOption} value={sectorOption}>
              {sectorOption}
            </option>
          ))}
        </select>

        {/* Region Filter */}
        <select
          className="border rounded-md p-2 w-40"
          value={regionFilter}
          onChange={(e) => setRegionFilter(e.target.value)}
        >
          <option value="">Select Region</option>
          {uniqueOptions(region).map((regionOption) => (
            <option key={regionOption} value={regionOption}>
              {regionOption}
            </option>
          ))}
        </select>

        {/* PEST Filter */}
        <select
          className="border rounded-md p-2 w-40"
          value={pestFilter}
          onChange={(e) => setPestFilter(e.target.value)}
        >
          <option value="">Select PEST</option>
          {uniqueOptions(pest).map((pestOption) => (
            <option key={pestOption} value={pestOption}>
              {pestOption}
            </option>
          ))}
        </select>

        {/* Source Filter */}
        <select
          className="border rounded-md p-2 w-40"
          value={sourceFilter}
          onChange={(e) => setSourceFilter(e.target.value)}
        >
          <option value="">Select Source</option>
          {uniqueOptions(source).map((sourceOption) => (
            <option key={sourceOption} value={sourceOption}>
              {sourceOption}
            </option>
          ))}
        </select>

        {/* SWOT Filter */}
        <select
          className="border rounded-md p-2 w-40"
          value={swotFilter}
          onChange={(e) => setSwotFilter(e.target.value)}
        >
          <option value="">Select SWOT</option>
          {uniqueOptions(swot).map((swotOption) => (
            <option key={swotOption} value={swotOption}>
              {swotOption}
            </option>
          ))}
        </select>

        {/* Country Filter */}
        <select
          className="border rounded-md p-2 w-40"
          value={countryFilter}
          onChange={(e) => setCountryFilter(e.target.value)}
        >
          <option value="">Select Country</option>
          {uniqueOptions(country).map((countryOption) => (
            <option key={countryOption} value={countryOption}>
              {countryOption}
            </option>
          ))}
        </select>

        {/* City Filter */}
        <select
          className="border rounded-md p-2 w-40"
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
        >
          <option value="">Select City</option>
          {uniqueOptions(city).map((cityOption) => (
            <option key={cityOption} value={cityOption}>
              {cityOption}
            </option>
          ))}
        </select>
      </div>

      {/* Charts */}
      <div className="flex flex-wrap gap-4">
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-semibold mb-2">Intensity Chart</h2>
          <BarChart labels={year} data={intensity} title="Intensity" />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-semibold mb-2">Likelihood Chart</h2>
          <BarChart labels={year} data={likelihood} title="Likelihood" />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-semibold mb-2">Relevance Chart</h2>
          <BarChart labels={year} data={relevance} title="Relevance" />
        </div>
        
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-semibold mb-2">Year Chart</h2>
          <BarChart labels={year} data={year} title="Year" />
        </div>
       
       
        
      </div>
    </div>
  );
};

export default App;
