import styled from 'styled-components';

const Container = styled.div`
  border: 2px solid var(--color-scale-blue-1);
  border-radius: 4px;
  margin-bottom: 8px;
  padding: 0px 8px 8px 8px;
  margin: 6px;
  flex: 0 0 40%;

  .type, .value {
    text-align: center;
    color: var(--color-text-primary);
  }

  .type {
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
  }
`;

function trimLongTypeNames(tokenType) {
  if (tokenType.length < 14) return tokenType;

  return tokenType.substr(0, 14);
};

export default function SingleToken({ token }) {
  return (
    <Container>
      <div className="type">{trimLongTypeNames(token.type)}</div>
      <div className="value">{token.value}</div>
    </Container>
  );
};
