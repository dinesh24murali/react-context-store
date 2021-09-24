import logo from './logo.svg';
import './App.css';

import RootComponent from './components/RootComponent';
import AppProvider from './store/AppProvider';

function App() {
  return (
    <AppProvider>
      <RootComponent />
    </AppProvider>
  );
}

export default App;
