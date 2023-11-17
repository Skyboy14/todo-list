// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from '../src/redux/store';
import TodoList from '../src/components/TodoList';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <TodoList />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
