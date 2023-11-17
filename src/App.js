// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from '../src/redux/store';
import TodoList from '../src/components/TodoList';
import { PersistGate } from 'redux-persist/integration/react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  border: 2px solid red;
  width: fit-content;
  margin: auto;
  padding: 25px 25px 50px;
  border-radius: 25px;
  margin-top: 20px;
  background-color: azure;
`

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StyledDiv>
          <TodoList />
        </StyledDiv>
      </PersistGate>
    </Provider>
  );
}

export default App;
