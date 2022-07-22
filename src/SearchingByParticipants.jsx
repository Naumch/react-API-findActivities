import React, { useState } from "react";
import axios from "axios";
import Activity from "./Activity";

function SearchingByParticipants() {
  const [data, setData] = useState([]);
  //const [filter, setFilter] = useState(null);

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
      Найди занятие для компании
      <button onClick={findByParticipants}>Найти</button>
      <Activity data={data}/>
    </div>
  )
}

export default SearchingByParticipants;