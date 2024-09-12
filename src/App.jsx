import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ContextProvider from './context/context';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/pages/Home';

function App() {
  return (
    <>
      <ContextProvider>
        <Header />
        <Home />
        <Footer />
        <ToastContainer
          style={{
            zIndex: '10000000000',
          }}
        />
      </ContextProvider>
    </>
  );
}

export default App;
