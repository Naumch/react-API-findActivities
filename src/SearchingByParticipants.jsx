import React, { useState } from "react";
import axios from "axios";
import Activity from "./Activity";

function SearchingByParticipants() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState(0);

  const select = [2, 3];
  const options = select.map((text, index) => {
		return <option key={index} value={index}>{text}</option>;
	});

  function findByParticipants() {
    const fetchData = async () => {
      const result = await axios(
        `http://www.boredapi.com/api/activity?participants=${select[value]}`,
      );

      setData(result.data);
    };

    fetchData();
  }
  
  return (
    <div>
      Найди занятие для компании
      <select value={value} onChange={event => setValue(event.target.value)}>
        {options}
      </select>
      <button onClick={findByParticipants}>Найти</button>
      <Activity data={data}/>
    </div>
  )
}

export default SearchingByParticipants;