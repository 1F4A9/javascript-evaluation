import styled from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';
import Normalize from './styles/Normalize';

import Evaluation from './components/evaluation/Evaluation';

const RootContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  return (
    <RootContainer>
      <Normalize />
      <GlobalStyle />
      <Evaluation />
    </RootContainer>
  );
};

export default App;
