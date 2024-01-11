import React from 'react';
import Navigator from './src/Navigator';
import { QuestionProvider } from './src/Constants/ApiContext';

const App = () => {

  return (
    <QuestionProvider>
      <Navigator />
    </QuestionProvider>
  );
}
export default App;