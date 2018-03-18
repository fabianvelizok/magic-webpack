import React, { Component } from 'react';

function Teacher(props) {
  return (
    <li className="Teacher">
      <span>{props.name} - </span>
      <a href={`http://twitter.com/${props.twitter}`} target="_blank">@{props.twitter}</a>
    </li>
  )
}

export default Teacher;
