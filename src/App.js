import styled from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';
import Normalize from './styles/Normalize';

import Evaluation from './components/evaluation/Evaluation';
import AST from './components/evaluation/AST/AST';

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
`;

function App() {
  return (
    <RootContainer>
      <Normalize />
      <GlobalStyle />
      <Evaluation />
      <AST />
    </RootContainer>
  );
};

export default App;
