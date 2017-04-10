import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-react/js";

const { div } = React.DOM;

styled.global`
  div {
    font-size: 24px;
    color: #00f;
  }
`;

const works = styled.div`
  font-weight: bold;
  color: #0f0;
`;

ReactDOM.render(
  div({}, div({}, "Hello styled react js tags"), works({}, "Works!")),
  document.getElementById("root")
);
