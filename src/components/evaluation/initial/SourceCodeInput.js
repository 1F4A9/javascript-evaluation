import styled from 'styled-components';
import { useState } from 'react';

import { encodeUTF16 } from '../../../utils/encodeUTF16';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: center;
  margin-bottom: 1rem;

  form {
    border: 2px solid var(--color-scale-blue-1);
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  textarea {
    outline: none;
    flex: 1;
    color: var(--color-text-primary);
    background-color: var(--color-bg-secondary);
    padding: 6px;
  }
`;

export default function SourceCodeInput({ setEncodedSourceCode, setStartStream }) {
  const [userInput, setUserInput] = useState('');

  function onChange(e) {
    setUserInput(e.target.value);
  };

  function onSubmit(e) {
    e.preventDefault();

    setStartStream(true);

    const encodedSourceCode = encodeUTF16(userInput);
    setEncodedSourceCode(encodedSourceCode);
  };

  return (
    <Container>
      <h3>Source Code</h3>
      <form onSubmit={onSubmit}>
        <textarea onChange={onChange} rows="5" />
        <input type="submit" />
      </form>
    </Container>
  );
};
