import styled from 'styled-components';
import { useEffect } from 'react';

import { isEmptyObject } from '../../../utils/isEmptyObject';
import { createFunctionalContext, createGlobalContext } from '../../../utils/createContexts';

const walk = require('acorn-walk');

const Container = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    text-align: center;
  }

  .json-container {
    box-sizing: border-box;
    border: 2px solid var(--color-scale-green-1);
    height: 80vh;
    overflow-y: auto;
  }

  .pre {
    margin: 12px;
    white-space: pre;
  }
`;

export default function Parser({ parsedSourceCode }) {
  useEffect(() => {
    if (isEmptyObject(parsedSourceCode)) return;

    const initialScopes = [createGlobalContext()];

    walk.ancestor((parsedSourceCode), {
      FunctionDeclaration(node) {
        // returns obj with necessary context data
        const context = createFunctionalContext(node);

        initialScopes.push(context);

        console.log(initialScopes);
      }
    })
  }, [parsedSourceCode])

  return (
    <Container>
      <h3>Parser {'>'} AST</h3>
      <div className="border">
        <div className="json-container">
          <div className="pre">{JSON.stringify(parsedSourceCode.body, null, 2)}</div>
        </div>
      </div>
    </Container>
  );
};
