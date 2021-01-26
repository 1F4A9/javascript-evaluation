import styled from 'styled-components';
import EncodedSourceCode from './EncodedSourceCode';
import SourceCodeInput from './SourceCodeInput';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0 0 35%;
  height: 90vh;
  min-width: 500px;
`;

export default function Initial(props) {
  const { encodedSourceCode, setEncodedSourceCode, setStartStream } = props;

  return (
    <Container>
      <SourceCodeInput
        setStartStream={setStartStream}
        setEncodedSourceCode={setEncodedSourceCode}
      />
      <EncodedSourceCode
        encodedSourceCode={encodedSourceCode}
      />
    </Container>
  );
};
