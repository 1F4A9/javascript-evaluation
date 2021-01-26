import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  
  h3 {
    text-align: center;
  }
  
  .container {
    border: 2px solid var(--color-scale-blue-1);
    flex: 1;
    overflow-y: auto;
  }
`;

const StyledCode = styled.span`
  display: inline-block;
  min-width: 50px;
  margin: 6px 0px;
  text-align: center;
`;

export default function EncodedSourceCode({ encodedSourceCode }) {
  return (
    <Container>
      <h3>UTF-16 Encoded Source Code</h3>
      <div className="container">
        {encodedSourceCode.map((codePoint, i) => (
          <StyledCode key={codePoint + i}>{codePoint}</StyledCode>
        ))}
      </div>
    </Container>
  );
};
