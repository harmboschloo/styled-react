import styled from 'styled-react/js';

styled.div`
  display: none;
`;

styled.component(() => null)`
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
