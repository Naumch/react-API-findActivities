import React from "react";

function Activity({ data }) {

  return (
    <div key={data.key}>
      <p>{data.activity}</p>
      <a href={data.link}>{data.link}</a>
    </div>
  )
}

export default Activity;