import React, { useState ,useEffect } from "react";
import axios from "axios";
import Activity from "./Activity";

function Random() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://www.boredapi.com/api/activity?participants=1',
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <Activity data={data}/>
  )
}

export default Random;