import React from 'react';
import { Link } from 'react-router-dom';
import './PhotoGallery.css';

const PhotoGallery = () => {
    return (
        <div className='photo-gallery'>
            {/* photos section */}
            <div className='photos-section'>
                <h1>Photos</h1>
                <nav className='navbar'>
                    <Link to='/recent' className='nav-link'>Recently Added</Link>
                    <Link to='/favorited' className='nav-link'>Favorited</Link>
                </nav>
            </div>
           
            {/* photo detail section */}
            <div className='photo-details'>
                <h3>Detail section</h3>
            </div>
        </div>
    );
};

export default PhotoGallery;