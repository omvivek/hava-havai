import { defaultTheme, Provider } from '@adobe/react-spectrum';

import Home from './components/Home'

function App() {
  return (
    <Provider theme={defaultTheme}>
     <Home/>
    </Provider>
  );
}

export default App