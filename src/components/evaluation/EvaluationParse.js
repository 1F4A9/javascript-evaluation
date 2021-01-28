import styled from 'styled-components';
import { useState, useEffect } from 'react';

import Parser from './Parse/Parser';

const acorn = require('acorn');

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: calc(100vh - 24px);
  margin-top: 12px;
`;

export default function EvaluationParse({ decodedSourceCode }) {
  const [parsedSourceCode, setParsedSourceCode] = useState({});

  useEffect(() => {
    setParsedSourceCode(acorn.parse(decodedSourceCode));
  }, [decodedSourceCode, setParsedSourceCode])

  return (
    <Container>
      <Parser parsedSourceCode={parsedSourceCode} />
    </Container>
  );
};
