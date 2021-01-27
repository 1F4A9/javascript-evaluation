import styled from 'styled-components';
import { useState } from 'react';

import EvaluationSourceCode from './EvaluationSourceCode';
import EvaluationParse from './EvaluationParse';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
`;

export default function EvaluationMain() {
  const [decodedSourceCode, setDecodedSourceCode] = useState([]);

  return (
    <Container>
      <EvaluationSourceCode setDecodedSourceCode={setDecodedSourceCode} />
      <EvaluationParse decodedSourceCode={decodedSourceCode} />
    </Container>
  );
};
