import styled from 'styled-react/js';

styled.div`
  display: none;
`;

styled.factory(() => null)`
  display: inline-block;
`;

styled.componentFactory(() => null)`
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
