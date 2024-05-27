import React, { useEffect, useState } from 'react'

const Fakedata = () => {
  const [intensity , setIntensity] = useState([]) ;
const [likelihood , setLikelihood] = useState([])
const [relevance , setRelevance] = useState([])
const [year , setYear] = useState([])
const [country , setCountry] = useState([])
const [topics , setTopics] = useState([])
const [region , setRegion] = useState([])
const [city , setCity] = useState([])






   const lineChartData = {
  
    labels: [
      "Steps", "running", "shoots", "exercise"
    ],
    datasets: [
      {
        label: "minutes",
        data: [60,40,55,90],
        borderColor: "rgb(75, 19, 192)",
        backgroundColor: "rgba(75, 245, 192 , 1)",
        borderwidth: 1,
      },
    ],
  };
  // {
  //     "end_year": "",
  //     "intensity": 6, **
  //     "sector": "Energy",
  //     "topic": "gas",  **
  //     "insight": "Annual Energy Outlook",
  //     "url": "http://www.eia.gov/outlooks/aeo/pdf/0383(2017).pdf",
  //     "region": "Northern America",  **
  //     "start_year": "",
  //     "impact": "",
  //     "added": "January, 20 2017 03:51:25",
  //     "published": "January, 09 2017 00:00:00",
  //     "country": "United States of America",  **
  //     "relevance": 2,  **
  //     "pestle": "Industries",
  //     "source": "EIA",
  //     "title": "U.S. natural gas consumption is expected to increase during much of the projection period.",
  //     "likelihood": 3  **
  // },
  return (
    <div>
      
    </div>
  )
}

export default Fakedata
