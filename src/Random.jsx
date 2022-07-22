import React, { useState ,useEffect } from "react";
import axios from "axios";

function Random() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://www.boredapi.com/api/activity?participants=1',
      );

      setData([result.data]);
    };

    fetchData();
  }, []);

  const result = data.map(res => {
    return (
      <div key={res.key}>
        <p>Новое задание: {res.activity}</p>
        <p>{res.link}</p>
      </div>
    )
  })

  return (
    result
  )
}

export default Random;