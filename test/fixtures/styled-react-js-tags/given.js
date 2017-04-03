import styled from 'styled-react/js';

styled.div`
  display: none;
`;

styled(() => null)`
  display: inline-block;
`;

styled.component(() => null)`
  display: inherit;
`;

styled.local`
  display: inline;
`;

styled.global`
  div {
    display: block;
  }
`;
