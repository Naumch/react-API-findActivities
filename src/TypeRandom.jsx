import React, { useState } from "react";
import axios from "axios";

function TypeRandom() {
  //const [data, setData] = useState([]);
  const [value, setValue] = useState('');

  const select = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"];
  const options = select.map((text, index) => {
		return <option key={index} value={index}>{text}</option>;
	});

  function findByType() {
    const fetchData = async () => {
      const result = await axios(
        `http://www.boredapi.com/api/activity?participants=1&type=${value}`,
      );

      console.log(result.data);
    };

    fetchData();
  }
  
  return (
    <div>
      Найди занятие по виду: 
      <select value={value} onChange={event => setValue(event.target.value)}>
        {options}
      </select>
      <button onClick={findByType}>Найти</button>
    </div>
  )
}

export default TypeRandom;