import styled from 'styled-components';
import { useEffect, useState } from 'react';

import { decodeUTF16 } from '../../../utils/decodeUTF16';
import Token from './Token';

const esprima = require('esprima');

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 60vh;
  min-width: 500px;
  margin-left: 60px;
  flex: 1;
  
  h3 {
    text-align: center;
  }
  
  .container {
    border: 2px solid var(--color-scale-blue-1);
    flex: 1;
    overflow-y: auto;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export default function TokenContainer({ encodedSourceCode, setDecodedSourceCode }) {
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    const sourceCode = decodeUTF16(encodedSourceCode);

    const ECMAScriptTokens = esprima.tokenize(sourceCode);

    setDecodedSourceCode(sourceCode);
    setTokens(ECMAScriptTokens);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [encodedSourceCode]);

  return (
    <Container>
      <h3>Tokens</h3>
      <div className="container">
        {tokens.map((token, i) => <Token token={token} key={i} />)}
      </div>
    </Container>
  );
};
