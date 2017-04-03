import _tag from '../../../output/test/fixtures/styled-react-tags/given_tag.css';
import _tag2 from '../../../output/test/fixtures/styled-react-tags/given_tag2.css';
import _tag3 from '../../../output/test/fixtures/styled-react-tags/given_tag3.css';
import _tag4 from '../../../output/test/fixtures/styled-react-tags/given_tag4.css';
import styled from 'styled-react';

styled.div(_tag);

styled(() => null)(_tag2);

styled.local(_tag3);

styled.global(_tag4);
