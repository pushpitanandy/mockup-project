import React from 'react';
import './PhotoGallery.css';

const PhotoGallery = () => {
    return (
        <div className='photo-gallery'>
            {/* photos section */}
            <div className='photos-section'>
                <h1>Photos</h1>
                <nav className='navbar'>
                    <a href="/recent">Recently Added</a>
                    <a href="/favorited">Favorited</a>
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