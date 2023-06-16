import './App.css';
import AppRoutes from './pages/routes'
import { createGlobalStyle } from 'styled-components';

function App() {
  return (
    <div>
      <GlobalStyle />
      <AppRoutes />
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    paddin:0
  }
`

export default App;
