import React, { useState } from "react";
import axios from "axios";
import Activity from "./Activity";

function SearchingByParticipants() {
  const [data, setData] = useState([]);

  function findByParticipants() {
    const fetchData = async () => {
      const result = await axios(
        `http://www.boredapi.com/api/activity?participants=${getRandom(2, 5)}`,
      );

      setData(result.data);
    };

    fetchData();
  }

  function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  return (
    <div>
      <p>
        <span>Find an activity for the company</span>
        <button onClick={findByParticipants}>Search</button>
      </p>
      <Activity data={data}/>
    </div>
  )
}

export default SearchingByParticipants;