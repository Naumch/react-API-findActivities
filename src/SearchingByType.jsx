import React, { useState } from "react";
import axios from "axios";
import Activity from "./Activity";

function SearchingByType() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState(0);

  const select = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"];
  const options = select.map((text, index) => {
		return <option key={index} value={index}>{text}</option>;
	});

  function findByType() {
    const fetchData = async () => {
      const result = await axios(
        `http://www.boredapi.com/api/activity?participants=1&type=${select[value]}`,
      );

      setData(result.data);
    };

    fetchData();
  }
  
  return (
    <div>
      <p>
        <span>Find an activity by type</span><br />
        <select value={value} onChange={event => setValue(event.target.value)}>
          {options}
        </select>
        <button onClick={findByType}>Search</button>
      </p>
      <Activity data={data}/>
    </div>
  )
}

export default SearchingByType;