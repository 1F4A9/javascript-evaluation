import styled from 'styled-components';
import { useState } from 'react';

import Stream from './stream/Stream';
import TokenContainer from './tokens/TokenContainer';
import Initial from './SourceCode/Initial';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  min-height: calc(100vh - 24px);
`;

export default function EvaluationSourceCode({ setDecodedSourceCode }) {
  const [startStream, setStartStream] = useState(false);
  const [encodedSourceCode, setEncodedSourceCode] = useState([]);

  return (
    <Container>
      <Initial
        encodedSourceCode={encodedSourceCode}
        setEncodedSourceCode={setEncodedSourceCode}
        setStartStream={setStartStream}
      />
      <Stream
        encodedSourceCode={encodedSourceCode}
        startStream={startStream}
        setStartStream={setStartStream}
      />
      <TokenContainer
        encodedSourceCode={encodedSourceCode}
        setDecodedSourceCode={setDecodedSourceCode}
      />
    </Container>
  );
};
