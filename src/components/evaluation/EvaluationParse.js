import styled from 'styled-components';
import AST from './Parse/AST';

import Parser from './Parse/Parser';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: calc(100vh - 24px);
  margin-top: 12px;
`;

export default function EvaluationParse({ decodedSourceCode }) {
  return (
    <Container>
      <Parser decodedSourceCode={decodedSourceCode} />
      <AST />
    </Container>
  );
};
