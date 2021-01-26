import styled from 'styled-components';
import { useState } from 'react';

import EncodedSourceCode from './initial/EncodedSourceCode';
import SourceCodeInput from './initial/SourceCodeInput';
import Stream from './stream/Stream';
import TokenContainer from './tokens/TokenContainer';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 12px;

  .column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 0 0 35%;
    height: 90vh;
    min-width: 500px;
  }
`;

export default function Evaluation() {
  const [encodedSourceCode, setEncodedSourceCode] = useState([]);
  const [startStream, setStartStream] = useState(false);

  return (
    <Container>
      <div className="column">
        <SourceCodeInput
          setEncodedSourceCode={setEncodedSourceCode}
          setStartStream={setStartStream}
        />
        <EncodedSourceCode encodedSourceCode={encodedSourceCode} />
      </div>
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
