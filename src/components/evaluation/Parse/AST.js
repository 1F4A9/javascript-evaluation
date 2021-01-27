import styled from 'styled-components';

const Container = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    text-align: center;
  }

  .container {
    box-sizing: border-box;
    border: 2px solid var(--color-scale-green-1);
    height: 80vh;
  }
`;

export default function AST() {
  return (
    <Container>
      <h3>AST</h3>
      <div className="container">

      </div>
    </Container>
  );
};
