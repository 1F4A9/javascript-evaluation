import styled from 'styled-components';
import { useState } from 'react';

import Stream from './stream/Stream';
import TokenContainer from './tokens/TokenContainer';
import Initial from './initial/Initial';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  // -24px beacuse padding on parent, App.js (nicely centered)
  min-height: calc(100vh - 24px);
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
