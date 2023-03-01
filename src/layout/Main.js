import React from 'react';
import { Outlet } from 'react-router-dom';
import PhotoGallery from '../components/PhotoGallery/PhotoGallery';

const Main = () => {
    return (
        <div>
            <PhotoGallery></PhotoGallery>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;