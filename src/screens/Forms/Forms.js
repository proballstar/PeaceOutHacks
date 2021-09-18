import React from "react";

export default function Forms({ change, value, title, type }) {
  return (
    <div>
      <label>{title}</label>
      <input onChange={(e) => change(e)} value={value} type={type} />
    </div>
  );
}
