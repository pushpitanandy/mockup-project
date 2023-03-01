import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Favorited from './components/Favorited/Favorited';
import RecentlyAdded from './components/RecentlyAdded/RecentlyAdded';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Main></Main>, children: [
      { 
        path: '/', 
        loader: async () => {
          return fetch('https://agencyanalytics-api.vercel.app/images.json');
        },
        element: <RecentlyAdded></RecentlyAdded>
      },
      { path: '/favorited', element: <Favorited></Favorited>}
    ]}
    
  ])
  return (
    <div>
        
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
