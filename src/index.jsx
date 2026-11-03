
import { createRoot } from 'react-dom/client'
import Header from './Components/Header.jsx'
import Main from './Components/Main.jsx'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <>
    <Header />
    <Main />
 </>
);