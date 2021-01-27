import styled from 'styled-components';
import { useEffect } from 'react';

const acorn = require('acorn');

const Container = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    text-align: center;
  }

  .json-container {
    box-sizing: border-box;
    border: 2px solid var(--color-scale-green-1);
    height: 80vh;
    overflow-y: auto;
  }

  .pre {
    margin: 12px;
    white-space: pre;
  }
`;

export default function Parser({ decodedSourceCode, parsedSourceCode, setParsedSourceCode }) {
  useEffect(() => {
    setParsedSourceCode(acorn.parse(decodedSourceCode));
  }, [decodedSourceCode, setParsedSourceCode])

  return (
    <Container>
      <h3>Parser</h3>
      <div className="border">
        <div className="json-container">
          <div className="pre">{JSON.stringify(parsedSourceCode.body, null, 2)}</div>
        </div>
      </div>
    </Container>
  );
};
