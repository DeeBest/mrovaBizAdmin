import { useEffect, createContext, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const successToast = (message) => {
  toast.success(message);
};

const errorToast = (message) => {
  toast.error(message);
};

export const Context = createContext(null);
const backendUrl = 'https://mrovabizbackend.onrender.com';

const ContextProvider = (props) => {
  const [businesses, setBusinesses] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');

  const fetchBusinesses = async () => {
    try {
      const response = await (
        await fetch(`${backendUrl}/api/businesses`)
      ).json();
      setBusinesses(response.businesses);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBusinesses();
  }, []);

  const contextValue = {
    successToast,
    errorToast,
    businesses,
    setBusinesses,
    fetchBusinesses,
    isLoggedIn,
    setIsLoggedIn,
    token,
    setToken,
    backendUrl,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
