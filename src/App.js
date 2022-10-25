import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { AuthContext } from './contexts/AuthProvider/AuthProvider';
import { routes } from './routes/routes';
import './Theme.css'

function App() {
  const { theme } = useContext(AuthContext)
  return (
    <div id={theme}>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
