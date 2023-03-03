import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import ImageDetail from '../ImageDetail/ImageDetail';
import './PhotoGallery.css';

const PhotoGallery = () => {
    return (
        <div className='photo-gallery'>
            {/* photos section */}
            <div className='photos-section'>
                <h1>Photos</h1>
                <nav className='navbar'>
                    <NavLink to='/recent' className={({isActive}) => isActive ? 'active' : 'pending'}>Recently Added</NavLink>
                    <NavLink to='/favorited' className={({isActive}) => isActive ? 'active' : 'pending'}>Favorited</NavLink>
                </nav>
                <Outlet></Outlet>
            </div>
           
            {/* photo detail section */}
            <div className='photo-details'>
                <h3>Detail section</h3>
                
            </div>

            
        </div>
    );
};

export default PhotoGallery;