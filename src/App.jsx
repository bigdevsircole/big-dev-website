import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/App.css';
import { Home, Expertise, Projects, Reachout } from '../src/pages';
import Homelayout from './pages/Homelayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/expertise",
        element: <Expertise />,
      },
      // {
      //   path: "/githubuser",
      //   element: <Githubuser />,
      // },
      {
        path: "/projects",
        element: <Projects />,
      },      
      {
        path: "/reachout",
        element: <Reachout />,
      },
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
