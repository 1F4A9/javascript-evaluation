import styled from 'styled-components';
import { useState } from 'react';

import Stream from './stream/Stream';
import TokenContainer from './tokens/TokenContainer';
import Initial from './initial/Initial';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin: 0px 12px;
`;

export default function Evaluation() {
  const [encodedSourceCode, setEncodedSourceCode] = useState([]);
  const [startStream, setStartStream] = useState(false);

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
      />
    </Container>
  );
};
