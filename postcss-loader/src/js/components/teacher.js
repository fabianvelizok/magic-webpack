import React, { Component } from 'react';
import '../../css/teacher.css'

function Teacher(props) {
  return (
    <li className="Teacher">
      <span>{props.name} - </span>
      <a href={`http://twitter.com/${props.twitter}`} target="_blank">@{props.twitter}</a>
    </li>
  )
}

export default Teacher;
