import React from 'react';
import styled from 'styled-components';
import {HomePage} from './app/containers/homePage';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

function App() {
  return (
    <div className="">
      <AppContainer >
        <HomePage />
      </AppContainer>
    </div>
  );
}

export default App;
