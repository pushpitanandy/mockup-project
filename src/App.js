import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Favorited from './components/Favorited/Favorited';
import ImageDetail from './components/ImageDetail/ImageDetail';
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
      { 
        path: '/recent', 
        loader: async () => {
          return fetch('https://agencyanalytics-api.vercel.app/images.json');
        },
        element: <RecentlyAdded></RecentlyAdded>
      },
      {
        path:'/recent/:imageId',
        loader: async({params}) =>{
          return fetch(`https://agencyanalytics-api.vercel.app/images.json/${params.imageId}`)
        },
        element: <ImageDetail></ImageDetail>
      },
      { path: '/favorited', element: <Favorited></Favorited>}
    ]}
    
  ]);
  return (
    <div>
        
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
