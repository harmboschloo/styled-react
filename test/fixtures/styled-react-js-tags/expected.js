import _tag from '../../../output/test/fixtures/styled-react-js-tags/given_tag.css';
import _tag2 from '../../../output/test/fixtures/styled-react-js-tags/given_tag2.css';
import _tag3 from '../../../output/test/fixtures/styled-react-js-tags/given_tag3.css';
import _tag4 from '../../../output/test/fixtures/styled-react-js-tags/given_tag4.css';
import _tag5 from '../../../output/test/fixtures/styled-react-js-tags/given_tag5.css';
import styled from 'styled-react/js';

styled.div(_tag);

styled(() => null)(_tag2);

styled.component(() => null)(_tag3);

styled.local(_tag4);

styled.global(_tag5);
