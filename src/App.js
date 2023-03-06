import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Favorited from './components/Favorited/Favorited';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';


function App() {
  const router = createBrowserRouter([
    // { path: '/', element: <PhotoGallery></PhotoGallery>},
    { 
        path: '/', 
        loader: async () => {
          return fetch('https://agencyanalytics-api.vercel.app/images.json');
        },
        element: <PhotoGallery></PhotoGallery>
     },
     
    { path: '/favorited',
        loader: async () => {
            return fetch('https://agencyanalytics-api.vercel.app/images.json');
        },
       element: <Favorited></Favorited>}
    
    
  ]);
  return (
    <div>
        
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
