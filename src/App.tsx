import './App.css';
import { authContext, MyContextsHook } from './providers/ContextProviders';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
function App() {
  const {
    authValue,
  } = MyContextsHook();

  const { auth } = authValue;


  return (
    <authContext.Provider value={authValue}>
      {auth?.token ? <Home /> : <Login />}
    </authContext.Provider>
  );
}

export default App;
