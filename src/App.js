import styled from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';
import Normalize from './styles/Normalize';

import EvaluationMain from './components/evaluation/EvaluationMain';

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
      <EvaluationMain />
    </RootContainer>
  );
};

export default App;
