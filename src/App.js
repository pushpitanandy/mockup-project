import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Favorited from './components/Favorited/Favorited';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';


function App() {
  const router = createBrowserRouter([
    
    { 
        path: '/', 
        loader: async () => {
          return fetch('https://agencyanalytics-api.vercel.app/images.json');
        },
        element: <PhotoGallery />
     },
     
    { path: '/favorited',
        loader: async () => {
            return fetch('https://agencyanalytics-api.vercel.app/images.json');
        },
       element: <Favorited />
      }   
  ]);
  return (
    <div>
        
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
