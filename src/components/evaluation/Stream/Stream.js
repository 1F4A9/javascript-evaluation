import styled, { keyframes } from 'styled-components';
import { useEffect } from 'react';

const stream = keyframes`
  from {
    transform: translateX(-101%);
  }

  to {
    transform: translateX(100%);
  }
`;

const Container = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: calc(30%);
  text-align: center;
  overflow-x: hidden;
  margin-left: 60px;
  min-width: 450px;

  .header {
    display: flex;
    justify-content: space-around;
  }

  .container {
    height: 70px;
    overflow: hidden;
    position: relative;
    border: 2px solid var(--color-scale-blue-1);
  }

  .active {
    position: absolute;
    transform: translateX(-101%);
    min-width: 100%;
    height: inherit;
    animation-name: ${stream};
    animation-duration: 10s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }

  .not-active {
    position: absolute;
    min-width: 100%;
    left: 0%;
    transform: translateX(-101%);
  }
`;

const StyledCode = styled.span`
  margin: 0px 6px;
  line-height: 70px;
`;

export default function Stream({ encodedSourceCode, startStream, setStartStream }) {
  useEffect(() => {
    if (!startStream) {
      return () => {
        setTimeout(() => {
          setStartStream(false);
        }, 10000)
      };
    };
  }, [startStream, setStartStream]);

  return (
    <Container>
      <h3>Stream</h3>
      <div className="container">
        <div className={startStream ? 'active' : 'not-active'}>
          {encodedSourceCode.map((codePoint, i) => (
            <StyledCode key={codePoint + i}>{codePoint}</StyledCode>
          ))}
        </div>
      </div>
    </Container>
  );
};
