import { BrowserRouter } from 'react-router-dom';
// import './App.css';

import Navigation from './Navigation/Navigation';
import '../src/css/sb-admin-2.min.css';

function App() {
  return (
    <BrowserRouter>

      <Navigation />

    </BrowserRouter>
  );
}

export default App;
