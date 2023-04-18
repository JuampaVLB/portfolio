import React from "react";

function Certificate(props) {
  return (
    <li>
      <span>{props.title}</span>
      <p>{props.desc}</p>
      <a
        target="_blank"
        href={props.link}
      >
        Ver Mas
      </a>
    </li>
  );
}

export default Certificate;
