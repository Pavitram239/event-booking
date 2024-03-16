import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { Landing, Login, Register } from './pages';
import { loader as loginLoader } from './pages/Login';

const router = createBrowserRouter([
  { path: '/', element: <Landing /> },
  { path: '/login', element: <Login />, loader: loginLoader },
  { path: '/register', element: <Register /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
