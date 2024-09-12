import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/context';

const SignIn = () => {
  const { setIsLoggedIn, successToast, errorToast, setToken, backendUrl } =
    useContext(Context);
  const [user, setUser] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch(`${backendUrl}/users/user-login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.status === 200) {
        const data = await response.json();
        setToken(data.accessToken);
        successToast('Successfully signed in');
        setIsLoggedIn(true);
        navigate('/businesses-list');
      } else {
        errorToast('Failed to sign in');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="login-form">
      <input
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        required
      />
      <button type="submit" onClick={handleLogin}>
        Log In
      </button>
    </form>
  );
};
export default SignIn;
