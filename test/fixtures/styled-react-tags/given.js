import styled from "styled-react";

styled.div`
  display: none;
`;

styled(() => null)`
  display: inline-block;
`;

styled.local`
  display: inline;
`;

styled.global`
  div {
    display: block;
  }
`;
